<script lang="ts">
  import AdditionalOptions from "$lib/components/AdditionalOptions.svelte";
  import Button from "$lib/components/Button.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Tag from "$lib/components/Tag.svelte";
  import Edit from "$lib/components/icon/Edit.svelte";
  import Send from "$lib/components/icon/Send.svelte";
  import ThreeDots from "$lib/components/icon/ThreeDots.svelte";
  import Trash from "$lib/components/icon/Trash.svelte";
  import View from "$lib/components/icon/View.svelte";
    import { deleteInvoice } from "$lib/stores/InvoiceStore";
  import { isLate } from "$lib/utils/dateHelpers";
  import { centsToDollars, sumLineItems } from "$lib/utils/moneyHelpers";

  export let invoice: Invoice;

  let isAdditionalMenuShowing = false;
  let isOptionsDisabled = false;
  let isModalShowing: boolean = false;

  const handleDelete = () => {
    isModalShowing = true;
    isAdditionalMenuShowing = false;
  };
  const handleEdit = () => {console.log('Editing')};
  const handleSendInvoice = () => {console.log('Sending')};

  const getInvoiceLabel = ()  => {
    if (invoice.invoiceStatus === 'draft') {
      return 'draft';
    } else if (invoice.invoiceStatus === 'sent' && !isLate(invoice.dueDate)) {
      isOptionsDisabled = true;
      return 'sent';
    } else if (invoice.invoiceStatus === 'sent' && isLate(invoice.dueDate)) {
      isOptionsDisabled = true;
      return 'late';
    } else if (invoice.invoiceStatus === 'paid') {
      isOptionsDisabled = true;
      return 'paid';
    }
  };

</script>

<div
  class="invoice-table invoice-row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow"
>
  <div class="status"><Tag label={getInvoiceLabel()} className="ml-auto lg:ml-0" /></div>
  <div class="text-sm lg:text-lg dueDate">{invoice.dueDate}</div>
  <div class="text-sm lg:text-lg invoiceNumber">{invoice.invoiceNumber}</div>
  <div class="text-base lg:text-lg font-bold clientName whitespace-nowrap truncate">{invoice.client.name}</div>
  <div class="text-sm lg:text-lg font-bold font-mono amount text-right">${centsToDollars(sumLineItems(invoice.lineItems))}</div>
  <div class="text-sm lg:text-lg center viewButton hidden lg:flex">
    <a href="#" class=" text-pastelPurple hover:text-daisyBush">
      <View />
    </a>
  </div>
  <div class="text-lg center moreButton hidden lg:flex relative">
    <button class=" text-pastelPurple hover:text-daisyBush" on:click={() =>  {isAdditionalMenuShowing = !isAdditionalMenuShowing}}>
      <ThreeDots />
    </button>
    {#if isAdditionalMenuShowing}
      <AdditionalOptions 
        options={[
        {label:'Edit', icon: Edit, onClick: handleEdit, disabled: isOptionsDisabled},
        {label:'Delete', icon: Trash, onClick: handleDelete, disabled: false},
        {label:'Send', icon: Send, onClick: handleSendInvoice, disabled: isOptionsDisabled}
        ]}
      />
    {/if}
  </div>
</div>

<Modal isVisible={isModalShowing} on:close = {() => isModalShowing = false}>
<div class="flex flex-col justify-between items-center gap-6 h-full min-h-[175px]">
  <div class="text-center text-xl font-bold text-daisyBush">
      Are you sure you want to delete this invoice to
      <span class="text-scarlet">{invoice.client.name}</span> for
      <span class="text-scarlet">${centsToDollars(sumLineItems(invoice.lineItems))}</span>?
  </div>
    <div class="flex gap-4">
    <Button isAnimated={false} label='Cancel' onClick={()=> {isModalShowing= false}} style="secondary" /> 
    <Button isAnimated={false} label='Yes, delete it' onClick={()=> {deleteInvoice(invoice); isModalShowing= false}} style="destructive" />
    </div>
</div>
</Modal>
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
