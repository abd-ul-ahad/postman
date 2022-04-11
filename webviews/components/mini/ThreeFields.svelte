<script lang="ts">
    // export let valF: string;
    // export let valS: string;
    // export let valC: string;
    export let tickName: string;
    export let title: string;
    export let showCheck = true;
</script>

<div>
    <div class="dflex-betweeen marginBottom">
        <h2>{title}</h2>
        {#if showCheck}
            <div>
                <input class="blue_dark_check" id="rawField" type="checkbox" />
                <label class="req_inputLabel" for="rawField">{tickName}</label>
            </div>
        {/if}
    </div>
    <div class="dflex-betweeen marginBottom">
        <input class="blue_dark_check" type="checkbox" />
        <input
            type="text"
            class="req_url marginRight"
            placeholder="Field Name"
        />
        <input type="text" class="req_url marginRight" placeholder="Value" />
    </div>
</div>
