<script lang="ts">
    import Trash from "$lib/components/icon/Trash.svelte";
</script>
<div class="invoice-line-item border-b-2 border-fog py2">
    <div>
        <input class="line-item" type="text" name="description">
    </div>
    <div>
        <input class="line-item text-right" type="number" name="unitPrice" step="0.01" min="0">
    </div>
    <div>
        <input class="line-item text-center" type="number" name="quantity" min="0">
    </div>
    <div>
        <input class="line-item text-right" type="number" name="amount" step="0.01" min="0">
    </div>
    <div class="center h10 w10 text-pastelPurple hover:text-lavenderIndigo">
        <button><Trash /></button>
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

</style>