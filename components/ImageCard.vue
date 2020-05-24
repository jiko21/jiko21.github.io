<template>
  <div class="card image-card">
    <div
      :style="`background-image: url(/${img})`"
      class="content div-img"
    ></div>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
      <a :href="link" target="_blank">リンク</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$radius-size: 10px;

.image-card {
  height: 400px;
  margin: 10%;
  h2 {
    margin: 0;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .content {
    border-radius: $radius-size $radius-size 0 0;
    background-size: cover;
    padding: 0 5%;
    h3 {
      text-align: center;
    }
  }
  .div-img {
    height: 50%;
  }
}
</style>
