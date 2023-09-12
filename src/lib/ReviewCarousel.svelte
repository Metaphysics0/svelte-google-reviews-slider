<script lang="ts">
  // @ts-ignore
  import Carousel from "svelte-carousel";
  import ReviewCard from "./ReviewCard.svelte";
  import { onMount } from "svelte";
  import SkeletonLoader from "./SkeletonLoader.svelte";

  const { VITE_GOOGLE_PLACES_ID } = import.meta.env;

  let isLoading = false;
  let hasError = false;
  let reviews: google.maps.places.PlaceReview[] = [];

  const maxRetries = 5;
  const retryIntervalInMs = 1000; // 1 second

  function initMapAndGetDetails(retryCount = 0) {
    if (typeof google === "undefined" && retryCount < maxRetries) {
      // Google Maps is not loaded, and we haven't reached the maximum retry count
      console.log("retrying to init map", retryCount);

      setTimeout(() => {
        initMapAndGetDetails(retryCount + 1); // Retry with an incremented retry count
      }, retryIntervalInMs);
      return;
    }

    if (typeof google === "undefined") {
      console.error("Google Maps could not be loaded after maximum retries.");
      return;
    }

    isLoading = true;
    const map = document.createElement("div");
    let service = new google.maps.places.PlacesService(map);
    service.getDetails(
      {
        placeId: VITE_GOOGLE_PLACES_ID,
        fields: ["reviews"],
      },
      callback
    );
  }

  function callback(
    result: google.maps.places.PlaceResult | null,
    status: any
  ) {
    if (
      status !== google.maps.places.PlacesServiceStatus.OK ||
      result === null
    ) {
      hasError = true;
      isLoading = false;
      console.error("error:", result, status);
      return;
    }

    isLoading = false;

    if (result.reviews) {
      reviews = result.reviews;
    }
  }

  onMount(() => {
    initMapAndGetDetails();
  });
</script>

{#if isLoading || reviews.length === 0}
  <div class="loader-flow">
    <SkeletonLoader />
    <SkeletonLoader />
    <SkeletonLoader />
  </div>
{:else}
  <Carousel
    particlesToShow={3}
    particlesToScroll={2}
    autoplayDuration={0}
    duration={10000}
    timingFunction="linear"
    autoplay
    dots={false}
    arrows={false}
    swiping={false}
  >
    {#each reviews as review}
      <ReviewCard {review} />
    {/each}
  </Carousel>
{/if}

<style>
  .loader-flow {
    display: flex;
  }
</style>
