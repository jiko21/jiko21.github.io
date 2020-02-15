<template>
  <a :href="link" target="_blank">
    <img :src="src" width="64" height="64" />
  </a>
</template>

<script>
export default {
  name: 'ImageLink',
  props: ['src', 'link']
}
</script>
