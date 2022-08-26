<script>
    export let ball;
</script>

{#if ball == 0}
    <span class="dot border-indigo-900 rounded-full"></span>
{:else if [1,2,3].includes(ball)}
    <span class="run single text-indigo-900 border-indigo-900 rounded-full">{ball}</span>
{:else if ball == 4 || ball == 6}
    <span class="run bg-indigo-900 rounded-full">{ball}</span>
{:else if ball.includes('WD') || ball.includes('NB') || ball.includes('DD')}
    <span class="run wide bg-indigo-900 rounded-full">{ball}</span>
{:else if ball.includes('W')}
    <span class="run bg-red-600 rounded-full">{ball}</span>
{/if}

<style>
    .dot {
        display: inline-block;
        height: 25px;
        width: 25px;
        border-width: 2px;
        border-style: solid;
        margin-left: 10px;
    }

    .run {
        display: inline-block;
        height: 25px;
        width: 25px;
        margin-left: 10px;
        color: white;
        font-weight: 500;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .run.single {
        font-weight: 600;
        color: unset;
        border-style: solid;
        border-width: 2px;
    }

    .run.wide {
        font-size: 0.8rem;
    }

    .dot::after {
        content: '';
        display: inline-block;
        height: 15px;
        width: 15px;
        background-color: rgb(49, 46, 129);
        border-radius: 50%;
        position: relative;
        bottom: 0px;
        left: 3px;
    }
</style>