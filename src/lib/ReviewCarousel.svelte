<script lang="ts">
  // @ts-ignore
  import Carousel from "svelte-carousel";
  import ReviewCard from "./ReviewCard.svelte";
  import { onMount } from "svelte";

  const { VITE_GOOGLE_PLACES_ID } = import.meta.env;

  let isLoading = false;
  let hasError = false;
  let reviews: google.maps.places.PlaceReview[] = [];

  function initMapAndGetDetails() {
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

{#if isLoading}
  Loading...
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
