<template>
  <div class="head-img">
    <img src="/me_head.jpg" />
    <div>
      <p>
        @jiko21 (a.k.a Daiki Kojima)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadImage'
}
</script>
<style lang="scss" scoped>
.head-img {
  position: relative;
  &:before {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  div {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    margin: 0;
    padding: 0;
  }
}

img {
  height: 100vh;
  object-fit: cover;
  object-position: 100% 50%;
  width: 100vw;
}

p {
  color: white;
  font-size: 5vw;
  font-weight: bold;
  white-space: nowrap;
  vertical-align: middle;
}
</style>
