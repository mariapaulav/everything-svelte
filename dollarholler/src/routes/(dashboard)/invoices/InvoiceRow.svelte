<script lang="ts">
    import Tag from "$lib/components/Tag.svelte";
    import ThreeDots from "$lib/components/icon/ThreeDots.svelte";
    import View from "$lib/components/icon/View.svelte";
    import { isLate } from "$lib/utils/dateHelpers";
    import { centsToDollars, sumLineItems } from "$lib/utils/moneyHelpers";
    export let invoice: Invoice;

  const getInvoiceLabel = (invoice:Invoice)  => {
      if (invoice.invoiceStatus === 'draft') {
        return 'draft';
      } else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
        return 'sent';
      } else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
        return 'late';
      } else if (invoice.invoiceStatus === 'paid') {
        return 'paid';
      }
    };

</script>

<div
  class="invoice-table invoice-row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow"
>
  <div class="status"><Tag label={getInvoiceLabel(invoice.invoiceStatus)} className="ml-auto lg:ml-0" /></div>
  <div class="text-sm lg:text-lg dueDate">{invoice.dueDate}</div>
  <div class="text-sm lg:text-lg invoiceNumber">{invoice.invoiceNumber}</div>
  <div class="text-base lg:text-lg font-bold clientName whitespace-nowrap truncate">{invoice.client.name}</div>
  <div class="text-sm lg:text-lg font-bold font-mono amount text-right">${centsToDollars(sumLineItems(invoice.lineItems))}</div>
  <div class="text-sm lg:text-lg center viewButton hidden lg:flex">
    <a href="#" class=" text-pastelPurple hover:text-daisyBush">
      <View />
    </a>
  </div>
  <div class="text-lg center moreButton hidden lg:flex">
    <button class=" text-pastelPurple hover:text-daisyBush">
      <ThreeDots />
    </button>
  </div>
</div>

<style>
    .invoice-row {
      grid-template-areas: 
        'invoiceNumber invoiceNumber'
        'clientName amount'
        'dueDate status';
    }

    @media (min-width: 1024px ){
      .invoice-row {
        grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
      }
    }

    .invoice-row .status {
      grid-area: status;
    }

    .invoice-row .dueDate {
      grid-area: dueDate;
    }

    .invoice-row .invoiceNumber {
      grid-area: invoiceNumber;
    }

    .invoice-row .clientName {
      grid-area: clientName;
    }

    .invoice-row .amount {
      grid-area: amount;
    }

    .invoice-row .viewButton {
      grid-area: viewButton;
    }

    .invoice-row .moreButton {
      grid-area: moreButton;
    }

</style>