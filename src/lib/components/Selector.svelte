<script>
    import innings, { teamA, teamB } from "../store";
</script>

<hr class="mt-3" />

<main class="bg-white cursor-pointer flex justify-center items-center rounded-full mt-3">
    <div on:click={ () => $innings.batting = 'a' } class="bg-gradient-to-b w-3/6 text-center py-2 rounded-l-full h-full {$innings.batting == 'a' ? 'from-indigo-800 to-indigo-900 text-white font-semibold' : 'from-white to-gray-200'}">
        {$teamA.name}
    </div>
    <div on:click={ () => $innings.batting = 'b' } class="bg-gradient-to-b w-3/6 text-center py-2 rounded-r-full h-full {$innings.batting == 'b' ? 'from-indigo-800 to-indigo-900 text-white font-semibold' : 'from-white to-gray-200'}">
        {$teamB.name}
    </div>
</main>

<style>
    main {
        padding: 2px;
    }
</style>