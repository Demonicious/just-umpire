<script>
    import innings, { teamA, teamB } from "../store";

    $: battingTeam = $innings.batting == 'a' ? $teamA : $teamB;

    $: track = [...battingTeam.track].reverse()
</script>

<hr class="mt-3">

<main class="mt-3 bg-gradient-to-b from-white to-gray-200 rounded-md">
    {#each track as item, i (i)}
        {#if item == 0}
            <div class="p-2 flex justify-start items-center">
                <div class="flex justify-center items-center text-black font-semibold rounded-sm w-8 h-8 bg-gray-300">
                    0
                </div>

                <span class="ml-2">No Run.</span>
            </div>
        {:else if item == 1 || item == 2 || item == 3}
            <div class="p-2 flex justify-start items-center">
                <div class="flex justify-center items-center text-black font-semibold rounded-sm w-8 h-8 bg-green-200">
                    {item}
                </div>

                <span class="ml-2">Ran down the pitch for {item} run{item > 1 ? 's' : ''}.</span>
            </div>
        {:else if item == 4}
            <div class="p-2 flex justify-start items-center">
                <div class="flex justify-center items-center text-white font-semibold rounded-sm w-8 h-8 bg-green-600">
                    {item}
                </div>

                <span class="ml-2">Hammered down the ground for <strong>{item} runs</strong>.</span>
            </div>
        {:else if item == 6}
            <div class="p-2 flex justify-start items-center">
                <div class="flex justify-center items-center text-white font-semibold rounded-sm w-8 h-8 bg-violet-600">
                    {item}
                </div>

                <span class="ml-2">Lofted over the boundary for <strong>{item} runs</strong>.</span>
            </div>
        {:else if item == 'WD'}
            <div class="p-2 flex justify-start items-center">
                <div class="flex justify-center items-center text-black font-semibold rounded-sm w-8 h-8 bg-gray-300">
                    WD
                </div>

                <span class="ml-2">Wide ball.</span>
            </div>
        {:else if item == 'NB'}
            <div class="p-2 flex justify-start items-center">
                <div class="flex justify-center items-center text-black font-semibold rounded-sm w-8 h-8 bg-gray-300">
                    NB
                </div>

                <span class="ml-2">No-ball.</span>
            </div>
        {:else if item == 'DD'}
            <div class="p-2 flex justify-start items-center">
                <div class="flex justify-center items-center text-black font-semibold rounded-sm w-8 h-8 bg-gray-300">
                    NB
                </div>

                <span class="ml-2">Dead-ball.</span>
            </div>
        {:else if item == 'W'}
            <div class="p-2 flex justify-start items-center">
                <div class="flex justify-center items-center text-white font-semibold rounded-sm w-8 h-8 bg-red-600">
                    W
                </div>

                <span class="ml-2"><strong>OUT!</strong> A wicket falls.</span>
            </div>
        {/if}
    {/each}
</main>

<style>
    main {
        height: calc(100% - 472px);;
        overflow: auto;
    }
</style>