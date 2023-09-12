<script lang="ts">
  export let review: google.maps.places.PlaceReview;

  const maxReviewCharacterLength = 250;
  let shouldShowEllipses = review.text.length > maxReviewCharacterLength;
</script>

<div class="review">
  <p class="text">
    "
    {review.text.slice(0, maxReviewCharacterLength)}
    {#if shouldShowEllipses}
      ...
    {/if}
    "
  </p>
  <div class="author-container">
    <img
      src={review.profile_photo_url}
      alt="review"
      referrerpolicy="no-referrer"
    />
    <div>
      <p class="author-name">{review.author_name}</p>
      <div class="rating">
        <div class="rating-active" />
      </div>
    </div>
  </div>
</div>

<style>
  img {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    box-shadow: 0 6px 12px rgba(0, 31, 77, 0.08);
    margin-right: 20px;
  }
  .review {
    font-family: Walsheim, sans-serif;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 450px;
    height: 300px;
    padding: 30px;
    margin: 20px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 8px 35px -4px rgba(0, 0, 0, 0.12);
  }
  .text {
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: #131314;
    margin-bottom: 24px;
  }

  .author-container {
    display: flex;
    align-items: center;
  }

  .author-name {
    font-family: Caveat, cursive;
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: -0.6px;
    color: #131314;
    margin: 0;
  }
  .rating {
    position: relative;
    width: 140px;
    height: 28px;
    background-image: url(https://cdn1.booqable.com/marketing-assets/icons/star-background-4c2e365fc3c0cf6342a8f9941a3d6b00ec685d23a738e7fbfd83abf3022cba11151f7f24b6d99a535bd65ae7756798f67eec687b031d3d81e84b5a94f36ba0e7.svg);
    background-size: contain;
    background-repeat: repeat-x;
    margin-right: 15px;
  }
  .rating-active {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 93%;
    background-image: url(https://cdn1.booqable.com/marketing-assets/icons/star-filled-ea3ec8d07ee0d5b305898012953151cea6abcd4bfcea40491fbad0889b4156820043cd78215cbe2d9ab176c0bd5a4398394b90a71aa843b2e9161ecc9321ad54.svg);
    background-size: contain;
    background-repeat: repeat-x;
  }
</style>
