<script lang="ts">
    import JsonResp from "./JsonResp.svelte";
    import Headers from "./Headers.svelte";
    import Loading from "./Loading.svelte";

    export let data: any;
    export let statusCode: any = 0;
    export let isProcessing: any = false;

    let curTab = "response";
    const disRes = () => {
        curTab = "response";
    };
    const disHead = () => {
        curTab = "headers";
    };
</script>

<div>
    <div class="dflex-betweeen">
        <ul class="req_features">
            <li on:click={disRes}>Response</li>
            <li on:click={disHead}>Headers</li>
        </ul>

        <ul class="req_features">
            <li class="align-end status-code">Status Code:</li>
            <li
                class={statusCode == 0
                    ? "align-end status-code status-color disNone"
                    : "align-end status-code status-color"}
            >
                {statusCode}
            </li>
        </ul>
    </div>
    <div>
        {#if isProcessing}
            <Loading />
        {:else}
            <!--  -->
            {#if curTab === "response"}
                <JsonResp {data} />
            {:else if curTab === "headers"}
                <Headers />
            {/if}
            <!--  -->
        {/if}
    </div>
</div>
