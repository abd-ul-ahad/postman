<script lang="ts">
    import BasicAuth from "../mini/BasicAuth.svelte";
    import BearerAuth from "../mini/BearerAuth.svelte";

    let curTab = "basic";

    const showBasic = () => {
        curTab = "basic";
    };
    const showBearer = () => {
        curTab = "bearer";
    };
</script>

<div>
    <ul class="req_features">
        <li on:click={() => showBasic()}>Basic</li>
        <li on:click={() => showBearer()}>Bearer</li>
    </ul>
    <!--  -->
    {#if curTab === "basic"}
        <BasicAuth />
    {:else if curTab === "bearer"}
        <BearerAuth />
    {/if}
    <!--  -->
</div>
