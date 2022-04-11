<script lang="ts">
    
    export let data: any = 0;
</script>

<div>
    <div class="respSec">
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
    </div>
</div>
