<script>
  import CircledAmount from "$lib/components/CircledAmount.svelte";
  import Search from "$lib/components/Search.svelte";
  import {invoices, loadInvoices} from '$lib/stores/InvoiceStore'
  import { onMount } from "svelte";
    import InvoiceRow from "./InvoiceRow.svelte";
    import { centsToDollars, sumInvoices } from "$lib/utils/moneyHelpers";
    import BlankState from "./BlankState.svelte";
    import InvoiceRowHeader from "./InvoiceRowHeader.svelte";

  onMount(()=> {
    loadInvoices()
  })
</script>

<svelte:head>
  <title>Invoices | The Dollar Holler</title>
</svelte:head>

<div
  class="flex flex-col-reverse md:flex-row justify-between items-start md:items-center mb-7 md:mb-16 gap-y-6 md:gap-y-4"
>
  <!-- search field -->
  {#if $invoices.length > 0}
    <Search />
  {:else}
    <div/>   <!-- add an empty div here is because I don't want it to mess up our flex box   -->
  {/if}
  <!-- new invoice button -->
  <div>
    <button
      class="relative whitespace-nowrap rounded-lg bg-lavenderIndigo lg:px-10 lg:py-3 font-sanSerif lg:text-xl text-base px-5 py-2 font-black text-white shadow-colored hover:shadow-coloredHover translate-y-0 hover:-translate-y-2 transition-all"
      >+ Invoice</button
    >
  </div>
</div>

<!-- List of invoices -->
<div>
  <!-- header -->

  <!-- Invoices -->
{#if $invoices === null}
  Loading ...
    {:else if $invoices.length <= 0}
      <BlankState />
    {:else}
      <InvoiceRowHeader className='text-daisyBush' />
      <div class="flex  flex-col-reverse">
        {#each $invoices as invoice}
          <InvoiceRow {invoice} />
        {/each}
      </div>
      <CircledAmount label="Total" amount={`$${centsToDollars(sumInvoices($invoices))}`} />
{/if}

</div>