<script lang="ts">
    import JsonResp from "./JsonResp.svelte";
    import Headers from "./Headers.svelte";
    import Loading from "./Loading.svelte";

    export let data: any;
    export let statusCode: any = 0;
    export let respStatusOk: any;
    export let respHeaders: any;
    export let isProcessing: any = false;

    let curTab = "response";
    const disRes = () => {
        curTab = "response";
    };
    const disHead = () => {
        curTab = "headers";
    };

    const indicatorColor = () => {
        if (statusCode <= 299){
            return "align-end status-code status-color";
        } else {
            return "align-end status-code status-f-color";
        }
    }
</script>

<div>
    <div class="dflex-betweeen">
        <ul class="req_features">
            <li on:click={disRes}>Response</li>
            <li on:click={disHead}>Headers</li>
        </ul>

        {#if !isProcessing} <!--align-end status-code status-color-->
            <ul class="req_features">
                <li class="align-end status-code">Status Code:</li>
                <li
                    class={statusCode == 0
                        ? "align-end status-code status-color disNone"
                        : indicatorColor()}
                >
                    {statusCode}
                    {respStatusOk ? "Ok" : "Failed"}
                </li>
            </ul>
        {:else}
            <ul class="req_features">
                <li class="align-end status-code">Waiting for Response</li>
            </ul>
        {/if}
    </div>
    <div>
        {#if !isProcessing}
            <!--  -->
            {#if curTab === "response"}
                <JsonResp {statusCode} {data} />
            {:else if curTab === "headers"}
                <Headers {respHeaders} />
            {/if}
            <!--  -->
        {:else}
            <Loading />
        {/if}
    </div>
</div>
