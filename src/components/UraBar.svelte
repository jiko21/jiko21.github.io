<script lang="ts">
    export let skill = 0;
</script>
<div class="bar">
    <div class="sub-bar" style="--skill: {skill}%"></div>
</div>
<style lang="scss">
    .bar {
      display: flex;
      align-items: center;
      width: 100%;
      height: 5px;
      border-radius: 2.5px;
      background-color: #a8a8a8;
    }
    .sub-bar {
      height: 4px;
      width: var(--skill);
      border-radius: 2px;
      background-color: yellow;
    }
</style>