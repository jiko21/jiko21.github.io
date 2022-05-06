<script lang="ts">
import UraBar from "./UraBar.svelte";
export let lang="";
export let skill=0;
</script>
<div class="container">
    <div class="lang">{lang}</div>
    <UraBar skill={skill} />
    <div class="skill">{skill}%</div>
</div>
<style lang="scss">
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
    }
    .lang {
      display: flex;
      justify-content: flex-end;
      padding-right: 8px;
      width: 140px;
    }
    .skill {
      display: flex;
      justify-content: flex-end;
      padding-left: 8px;
      width: 60px;
    }
</style>
