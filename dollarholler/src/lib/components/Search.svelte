<script>
    import Search from "$lib/components/icon/Search.svelte";

</script>
    
    
<div class="relative flex w-full place-items-baseline">
    <div class="mr-2 text-pastelPurple mt-auto">
        <Search />
    </div>
    <input type="text" name="search" placeholder="Search by keyword" class="w-72 border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sanSerif text-xl text-black outline-none focus:border-b-lavenderIndigo focus:border-solid">
    <button class="text-xl font-sanSerif font-black text-pastelPurple ">Search</button>
</div>