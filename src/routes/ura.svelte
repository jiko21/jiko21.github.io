<script>
    import {uraItems} from "../contents";
    import UraTable from "../components/UraTable.svelte";
    import UraSkill from "../components/UraSkill.svelte";
    const {uraKeireki, uraSkill} = uraItems;
</script>

<svelte:head>
    <title>jiko21.me</title>
    <meta name="description" content="jiko21's homepage">
</svelte:head>
<div id="body">
    <h1>jiko21の裏サイト</h1>
    <section>
        <h2>経歴</h2>
        <UraTable columns={['', '', '主な出来事']}
                  tableKey={['date', 'age','content']}
                  items={uraKeireki} />
    </section>
    <section>
        <h2>スキルセット</h2>
        {#each uraSkill as skill, i (i)}
            <UraSkill lang={skill.lang} skill={skill.skill} />
        {/each}
    </section>
    <section>
        <h2>各種アカウント</h2>
        <ul>
            <li>GitHub: <a href="https://github.com/jiko21">jiko21</a></li>
            <li>Twitter: <a href="https://twitter.com/jiko_21">@jiko_21</a></li>
        </ul>
    </section>
</div>
<style lang='scss'>
  * {
    background-color: #6ba4ff;
    margin: 0;
  }

  #body {
    padding: 4px 20px;
  }

  section {
    margin: 40px 0;
  }

  h1 {
    margin: auto;
    text-align: center;
    animation: flash 0.2s linear infinite;
  }
  a {
    color: blue !important;
  }
  a:visited {
    color: #1e0063 !important;
  }
</style>
