<script lang="ts">
    
    export let data: any = 0;
    export let statusCode: any;
</script>

<div>
    <div class="respSec">
        {#if statusCode != 404}
            {#if data == 0}
                <div class="loadingDiv widHeight dflex-around">
                    <span class="marginRight dflex-around"></span>
                    <span class="dflex-around">Response will appear here</span>
                </div>
            {:else}
                <pre id="respPre"><code class="codeStyle"
                        >{JSON.stringify(data, null, 2)}</code
                    ></pre>
            {/if}
        {:else}
                <div>No Response</div>
        {/if}
    </div>
</div>
