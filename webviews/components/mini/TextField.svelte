<script lang="ts">
    export let val: string;
    export let title: string;
</script>

<div>
    <div id="jsonBox">
        <label class="req_inputLabel" for="req_inputField"
            >{title}</label
        >
        <textarea
            id="req_inputField"
            bind:value={val}
            class="getReqTxtarea"
            rows="9"
        />
    </div>
</div>