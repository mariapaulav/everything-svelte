<script lang="ts">

    import Trash from "$lib/components/icon/Trash.svelte";
    import { dollarsToCents, twoDecimals } from "$lib/utils/moneyHelpers";
    import { createEventDispatcher } from "svelte";
    let dispatch = createEventDispatcher();
    export let lineItem : LineItem;
    export let canDelete: boolean = false;
    let unitPrice : string = twoDecimals(lineItem.amount / lineItem.quantity);
    let amount = twoDecimals(lineItem.amount)

    $: {
        amount = twoDecimals(lineItem.quantity * Number(unitPrice))
        lineItem.amount = dollarsToCents(Number(amount))
    }
</script>

<div class="invoice-line-item border-b-2 border-fog py2">
  <div>
    <input class="line-item" type="text" name="description" bind:value={lineItem.description} />
  </div>
  <div>
    <input
      class="line-item text-right"
      type="number"
      name="unitPrice"
      step="0.01"
      min="0"
      bind:value={unitPrice}
      on:blur={() =>  {
        unitPrice = twoDecimals(Number(unitPrice))
        dispatch('updateLineItem')
      }}
    />
  </div>
  <div>
    <input
      class="line-item text-center"
      type="number"
      name="quantity"
      min="0"
      bind:value={lineItem.quantity}
      on:blur={() =>  {
        dispatch('updateLineItem')
      }}
    />
  </div>
  <div>
    <input
      class="line-item text-right"
      type="number"
      name="amount"
      step="0.01"
      min="0"
      bind:value={amount}
      disabled
    />
  </div>
  <div class="center h10 w10 text-pastelPurple hover:text-lavenderIndigo">
    {#if canDelete}
      <button on:click|preventDefault={()=> (dispatch('removeLineItem', lineItem.id))}
        ><Trash /></button
      >
    {/if}
  </div>
</div>

<style lang="postcss">
    input[type='text'],
    input[type='number']{
        @apply h-10 w-full border-b-2 border-dashed border-stone-300 mb-1;
    }

    input[type='text']{
        @aaply font-sanSerif text-xl font-bold;
    }

    input[type='number']{
        @aaply font-mono text-base;
    }
    input[type='text']:focus,
    input[type='number']:focus{
        @apply border-solid border-lavenderIndigo outline-none;
    }

    input[type='number']:disabled,
    input[type='text']:disabled {
        @apply border-b-0 bg-transparent px-0;
    }

</style>
