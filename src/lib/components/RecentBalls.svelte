<script>
    import Ball from "./Ball.svelte";

    export let track;

    $: balls = track.slice(Math.max(track.length - 12, 0))
</script>

<main class="shadow-lg flex justify-start items-center bg-gradient-to-b from-white to-gray-200 rounded-full">
    {#each balls as ball}
        <Ball {ball} />
    {/each}
</main>

<style>
    main {
        margin-top: 10px;
        height: 40px;
    }
</style>