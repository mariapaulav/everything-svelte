<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Overlay from './Overlay.svelte';
    import Portal from "./Portal.svelte";
    import Cancel from './icon/Cancel.svelte';
    export let isVisible: boolean = false;

    const dispatch = createEventDispatcher();

</script>

<svelte:window 
    on:keydown={(event)=> {
        if(event.key === 'Escape'){
            dispatch('close');
        }
    }}
/>

{#if isVisible}
<Portal>
    <Overlay/>
    <div class="fixed center inset-0 z-modal">
        <div class="relative min-h-[230px] w-full max-w-[450px] rounded-lg bg-white px-10 py-7">
            <button on:click={ ()=> dispatch('close')} class="absolute right-4 top-4 text-pastelPurple hover:text-daisyBush"> <Cancel /> </button>
            <slot></slot>
        </div>
    </div>
</Portal>
{/if}