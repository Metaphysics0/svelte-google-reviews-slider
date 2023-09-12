<div class="box">
  <div class="skeleton">
    <div class="skeleton-top">
      <div class="line h8 w50" />
      <div class="line w75" />
      <div class="line w75" />
      <div class="line w75" />
    </div>
    <div class="skeleton-bottom">
      <div class="square circle" />
      <div class="lines">
        <div class="line w75" />
        <div class="line w25" />
      </div>
    </div>
  </div>
</div>

<style>
  .lines {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .skeleton-top {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .skeleton-bottom {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
  .box {
    margin: 0 30px;
    max-width: 300px;
    width: 100%;
    padding: 0 15px;
  }
  .skeleton {
    padding: 15px;
    /* max-width: 300px; */
    width: 325px;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
      0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
  }
  .skeleton .square {
    height: 10px;
    border-radius: 5px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(8%, rgba(130, 130, 130, 0.2)),
      color-stop(18%, rgba(130, 130, 130, 0.3)),
      color-stop(33%, rgba(130, 130, 130, 0.2))
    );
    background: linear-gradient(
      to right,
      rgba(130, 130, 130, 0.2) 8%,
      rgba(130, 130, 130, 0.3) 18%,
      rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 800px 100px;
    animation: wave-squares 2s infinite ease-out;
  }
  .skeleton .line {
    height: 12px;
    margin-bottom: 6px;
    border-radius: 2px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(8%, rgba(130, 130, 130, 0.2)),
      color-stop(18%, rgba(130, 130, 130, 0.3)),
      color-stop(33%, rgba(130, 130, 130, 0.2))
    );
    background: linear-gradient(
      to right,
      rgba(130, 130, 130, 0.2) 8%,
      rgba(130, 130, 130, 0.3) 18%,
      rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 800px 100px;
    animation: wave-lines 2s infinite ease-out;
  }
  .skeleton .line:last-child {
    margin-bottom: 0;
  }
  .h8 {
    height: 8px !important;
  }
  .w50 {
    width: 50% !important;
  }
  .w75 {
    width: 75% !important;
  }
  .circle {
    border-radius: 50% !important;
    margin-right: 15px;
    height: 60px !important;
    width: 60px;
  }
  @keyframes wave-lines {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
  @keyframes wave-squares {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
</style>
