<script>
    import innings, { teamA, teamB } from "../store";

    function recompute(name, flag, balls) {
        const obj = {
            name: name,
            teamFlag: flag,

            score: 0,
            wickets: 0,

            validBalls: 0,
            totalBalls: 0,
            wides: 0,
            noBalls: 0,
            deadBalls: 0,

            track: balls
        };

        for(let i = 0; i < obj.track.length; i++) {
            const item = obj.track[i];

            obj.totalBalls += 1;

            if(item == 0) {
                obj.validBalls += 1;
            }

            if(item == 1 || item == 2 || item == 3 || item == 4 || item == 6) {
                obj.validBalls += 1;
                obj.score += item;
            }

            if(item == 'WD') {
                obj.wides += 1;
                obj.score += 1;
            }
            
            if(item == 'NB') {
                obj.noBalls += 1;
            }

            if(item == 'DD') {
                obj.deadBalls += 1;
            }

            if(item == 'W') {
                obj.validBalls += 1;
                obj.wickets += 1;
            }
        }

        console.log(obj);

        return obj;
    }

    function addBall(ball) {
        if($innings.batting == 'a') {
            const balls = [...$teamA.track, ball];

            $teamA = recompute($teamA.name, $teamA.teamFlag, balls);
        } else {
            const balls = [...$teamB.track, ball];

            $teamB = recompute($teamB.name, $teamB.teamFlag, balls);
        }
    }

    function removeBall() {
        if($innings.batting == 'a') {
            const balls = [...$teamA.track];
            balls.pop();

            $teamA = recompute($teamA.name, $teamA.teamFlag, balls);
        } else {
            const balls = [...$teamB.track];
            balls.pop();

            $teamB = recompute($teamB.name, $teamB.teamFlag, balls);
        }
    }
</script>

<main class="mt-3 grid grid-cols-3 gap-2">
    <button on:click={ () => addBall(0) } class="rounded-full py-3 font-semibold border-white border-2 bg-gradient-to-b text-white from-gray-800 to-gray-900 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">0</button>
    <button on:click={ () => addBall(1) } class="rounded-full py-3 font-semibold border-white border-2 bg-gradient-to-b from-white to-gray-200 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">1</button>
    <button on:click={ () => addBall(2) } class="rounded-full py-3 font-semibold border-white border-2 bg-gradient-to-b from-white to-gray-200 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">2</button>
    <button on:click={ () => addBall(3) } class="rounded-full py-3 font-semibold border-white border-2 bg-gradient-to-b from-white to-gray-200 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">3</button>
    <button on:click={ () => addBall(4) } class="rounded-full py-3 font-semibold border-white border-2 bg-gradient-to-b text-white from-green-600 to-green-700 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">4</button>
    <button on:click={ () => addBall(6) } class="rounded-full py-3 font-semibold border-white border-2 bg-gradient-to-b text-white from-green-600 to-green-700 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">6</button>
    <button on:click={ () => addBall('WD') } class="rounded-full py-3 font-semibold border-white border-2 bg-gradient-to-b from-white to-gray-200 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">Wide</button>
    <button on:click={ () => addBall('NB') } class="rounded-full py-3 font-semibold border-white border-2 bg-gradient-to-b from-white to-gray-200 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">No-ball</button>
    <button on:click={ () => addBall('DD') } class="rounded-full py-3 font-semibold border-white border-2 bg-gradient-to-b from-white to-gray-200 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">Dead ball</button>
    <button on:click={ () => addBall('W') } class="rounded-full py-3 border-white border-2 bg-gradient-to-b font-semibold text-white from-red-500 to-red-600 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">Wicket</button>
    <button on:click={ () => removeBall() } class="rounded-full py-3 font-semibold bg-gradient-to-b from-white to-gray-200 active:from-indigo-800 active:to-indigo-900 active:text-white active:font-semibold">Undo</button>
</main>