import { writable } from "svelte/store";

const match = writable({
    batting: 'a',
});

const teamA = writable({
    name: 'A',
    teamFlag: 'teamA.png',

    score: 0,
    wickets: 0,

    validBalls: 0,
    totalBalls: 0,
    wides: 0,
    noBalls: 0,
    deadBalls: 0,

    track: []
});

const teamB = writable({
    name: 'B',
    teamFlag: 'teamB.png',

    score: 0,
    wickets: 0,

    validBalls: 0,
    totalBalls: 0,
    wides: 0,
    noBalls: 0,
    deadBalls: 0,

    track: [

    ]
});

export default match;
export {
    teamA,
    teamB
}