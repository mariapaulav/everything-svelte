<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import Overlay from "./Overlay.svelte";
    import Portal from "./Portal.svelte";
    import Arrow from "./icon/Arrow.svelte";

    const dispatch = createEventDispatcher();
</script>

<svelte:window 
    on:keydown={(event)=> {
        if(event.key === 'Escape'){
            dispatch('closePanel');
        }
    }}
/>

<Portal>
    <Overlay />
    <div class="bg-white fixed w-4/6 h-screen py-16 px-32 right-0 top-0 z-slidePanel shadow-slidePanel"> <!-- fixed to the page so it doesnt scroll -->
        <button class="absolute top-5 left-7 text-pastelPurple hover:text-daisyBush"
            on:click={() => {dispatch('closePanel')}}
        >
            <Arrow />
        </button>
        <slot></slot>
    </div>
</Portal>