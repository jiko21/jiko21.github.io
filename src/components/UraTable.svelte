<script lang="ts">
	export type TableItem = {
		[key: string]: any;
	};
	export let items: TableItem[] = [];
	export let columns: string[] = [];
	export let tableKey: string[] = [];
</script>

<table>
	<thead>
		<tr>
			{#each columns as column, i (i)}
				<th>{column}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each items as item, i (i)}
			<tr>
				{#each tableKey as key, j (j)}
					<td>{item[key]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss">
	table {
		border: double 4px #000000;
	}
	cおんそぇ thead,
	tr,
	th,
	td {
		border: solid 1px #000000;
	}
</style>
