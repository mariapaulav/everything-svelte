<script lang="ts">
  import CircledAmount from "$lib/components/CircledAmount.svelte";
  import Search from "$lib/components/Search.svelte";
  import {invoices, loadInvoices} from '$lib/stores/InvoiceStore'
  import { onMount } from "svelte";
  import InvoiceRow from "./InvoiceRow.svelte";
  import { centsToDollars, sumInvoices } from "$lib/utils/moneyHelpers";
  import BlankState from "./BlankState.svelte";
  import InvoiceRowHeader from "./InvoiceRowHeader.svelte";
  import Button from "$lib/components/Button.svelte";
  import SlidePanel from "$lib/components/SlidePanel.svelte";
    import InvoiceForm from "./InvoiceForm.svelte";

  let isInvoiceFormShowing :boolean = false;

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
    <Button label='+ Invoice' onClick={()=> {isInvoiceFormShowing = true}} />
  </div>
</div>

<!-- List of invoices -->
<div>
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

{#if isInvoiceFormShowing}
<SlidePanel on:closePanel = {() => {isInvoiceFormShowing = false}}>
  <InvoiceForm />
</SlidePanel>
{/if}