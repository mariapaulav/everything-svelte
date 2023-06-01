<script>
    import BlankRow from "$lib/components/BlankRow.svelte";
    import InvoiceRowHeader from "./InvoiceRowHeader.svelte";
</script>
<div>
    <h2 class="-mt-8 lg:-mt-14 bg-arrowLefttUp font-handwriting md:bg-arrowRightUp bg-no-repeat md:bg-right bg-left md:text-4xl text-xl font-bold text-caribbeanGreen pt-16 pl-28 md:pl-0 md:pr-28 md:text-right text-left mb-10"
    >
    Add your invoice
    </h2>
    <!-- invoice header -->
    <InvoiceRowHeader className='text-fog' />
    <!-- blank rows -->
    <BlankRow />
    <BlankRow />
    <BlankRow />
</div>