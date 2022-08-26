<script>
    import innings, { teamA, teamB } from "../store";
    import RecentBalls from "./RecentBalls.svelte";

    $: battingTeam = $innings.batting == 'a' ? $teamA : $teamB;
    $: bowlingTeam = $innings.batting == 'b' ? $teamA : $teamB;

</script>

<main class="shadow-lg flex justify-between items-center bg-gradient-to-b from-white to-gray-200 rounded-full">
    <img width="50" src="{battingTeam.teamFlag}" alt="Playing Team">

    <div class="inner bg-indigo-900 rounded-full shadow-lg">
        <section id="topHalf" class="bg-indigo-800 h-3/6 flex">
            <div class="flex text-white text-lg font-semibold justify-between items-center rounded-full h-full w-5/6 bg-gradient-to-r from-transparent to-red-600 pl-6 pr-3">
                <span>
                    <span class="text-indigo-300 text-sm">{bowlingTeam.name} v</span> {battingTeam.name}
                </span>
                <span>{battingTeam.score} - {battingTeam.wickets}</span>
            </div>
            <div class="flex text-white text-lg font-semibold justify-end items-center rounded-full h-full w-2/6 pl-6 pr-6">
                <span>{Math.floor(battingTeam.validBalls / 6 )}.{battingTeam.validBalls % 6}</span>
            </div>
        </section>
        <section id="bottomHalf" class="h-3/6 text-center text-white text-sm font-semibold flex items-center justify-center">
            RPB • { battingTeam.score == 0 || battingTeam.validBalls == 0 ? '0.00' : (battingTeam.score / battingTeam.validBalls).toFixed(2) } - NRR • { battingTeam.score == 0 || battingTeam.validBalls == 0 ? '0.00' : (battingTeam.score / (battingTeam.validBalls / 6)).toFixed(2)}
        </section>
    </div>

    <img width="50" src="{bowlingTeam.teamFlag}" alt="Playing Team">
</main>

<RecentBalls track={battingTeam.track} />

<style>
    main {
        height: 75px;
        margin-top: 10px;
        padding: 0 25px;
    }

    main div.inner {
        height: 65px;
        min-width: 250px;
        width: 100%;
        margin: 0 20px;
    }

    #topHalf {
        border-radius: 50px 50px 0 0;
    }

    #bottomHalf {
        border-radius: 0px 0px 50px 50px;
    }
</style>