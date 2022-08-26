<script>
    import ScoreCard from "./lib/components/ScoreCard.svelte";
    import Selector from "./lib/components/Selector.svelte";
    import Progressors from "./lib/components/Progressors.svelte";
    import Commentary from "./lib/components/Commentary.svelte";
</script>

<main class="bg-indigo-600">
    <div>
        <ScoreCard />
        <Selector />
        <Progressors />
    </div>
    <Commentary />
</main>

<style>
    main {
        height: 100vh;
        padding: 10px;
    }
</style>