<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
</script>

<div class="grid grid-cols-12 gap-x-16 bg-whisper min-h-screen">
    <NavBar />
    <main class="col-span-8 pt-10">
        <slot />
    </main>
</div>
