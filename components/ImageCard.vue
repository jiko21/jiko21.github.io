<template>
  <div class="image-card">
    <div class="content" :style="`background-image: url(/${img})`"></div>
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
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$radius-size: 10px;

.image-card {
  border-radius: $radius-size;
  border: 0.5px solid $text-black;
  height: 300px;
  margin: 10%;
  h2 {
    margin: 0;
  }
  img {
    height: 100%;
    width: 100%;
  }
  .content {
    height: 50%;
    border-radius: $radius-size $radius-size 0 0;
    background-size: cover;
    padding: 0 5%;
    h3 {
      text-align: center;
    }
  }
}
</style>
