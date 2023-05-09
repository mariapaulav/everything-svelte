<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
</script>

<div class="grid grid-cols-12 md:gap-x-16 bg-whisper min-h-screen">
    <NavBar />
    <main class="md:col-span-8 md:pt-10 col-span-12">
        <slot />
    </main>
</div>
