<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    export let label: string;
    export let onClick: () => void;
    export let style: 'primary' | 'secondary' | 'destructive' | 'outline' | 'textOnly' | 'textOnlyDestructive' = 'primary';
    export let isAnimated = true;
    export let iconLeft: (new (...args: any[]) => SvelteComponent) | null = null;
    export let iconRight: (new (...args: any[]) => SvelteComponent) | null = null;
</script>

<button
  on:click|preventDefault={() => onClick()}
  class="flex items-center relative whitespace-nowrap rounded-lg px-5 py-2 font-sansSerif text-base font-black lg:px-10 lg:py-3 lg:text-xl"
  class:primary={style === 'primary'}
  class:secondary={style === 'secondary'}
  class:destructive={style === 'destructive'}
  class:outline={style === 'outline'}
  class:textOnly={style === 'textOnly'}
  class:textOnlyDestructive={style === 'textOnlyDestructive'}
  class:isAnimated>
  {#if iconLeft}
      <svelte:component this={iconLeft} class="mr-2" />
  {/if}
    {label}
  {#if iconRight}
      <svelte:component this={iconRight} class="ml-2" />
  {/if}
</button>

<style lang="postcss">
  .isAnimated {
    @apply translate-y-0 shadow-colored transition-all;
  }

  .isAnimated:hover {
    @apply -translate-y-2 shadow-coloredHover;
    }

  .primary {
    @apply bg-lavenderIndigo text-white;
  }

  .secondary {
    @apply bg-gallery text-daisyBush;
  }

  .destructive {
    @apply bg-scarlet text-goldenFizz;
  }
  .textOnly {
    @apply bg-transparent px-0 text-lavenderIndigo no-underline;
  }
  .textOnly:hover {
    @apply underline;
  }

  .textOnlyDestructive {
    @apply bg-transparent px-0 text-scarlet underline;
  }
  .textOnlyDestructive:hover {
    @apply no-underline;
  }
  .outline {
    @apply border-daisyBush text-daisyBush;
  }
  .outline:hover {
    @apply bg-daisyBush text-white;
  }
</style>