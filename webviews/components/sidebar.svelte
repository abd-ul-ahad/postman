<script lang="ts">
    function TrnPanel(this: HTMLElement) {
        console.log("Clicked!");
    }
</script>

<div>
    <button id="openPanel" on:click={TrnPanel}>New Request</button>
</div>
