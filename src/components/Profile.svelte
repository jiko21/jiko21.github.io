<script lang="ts">
import ContentBlock from "./ContentBlock.svelte";
export let title = ''
export let detail = '';
console.log(detail)
</script>
<ContentBlock title={title}>
    <div class='card text-image'>
        <p>{@html detail}</p>
        <img src='/me.jpg' alt='jiko21-header' height='100%'/>
    </div>
</ContentBlock>
<style lang="scss">

.text-image {
    display: flex;
    align-items: center;
    @media screen and (max-width: 1000px){
      align-items: center;
      justify-content: center;
      flex-wrap: wrap-reverse;
    }

    img {
      max-width: 200px;
      @media screen and (max-width: 1000px) {
        max-width: 150px;
      }
    }
    p {
        float: left;
        vertical-align: center;
    }
}
</style>