<script lang="ts">
    export let titleF: string;
    export let titleS: string;
</script>

<div class="reqSendDiv">
    <div id="jsonBox" class="width50">
        <label class="req_inputLabel" for="req_inputField">{titleF}</label>
        <textarea id="req_inputField" class="getReqTxtarea" rows="9" />
    </div>
    <div id="jsonBox" class="width50">
        <label class="req_inputLabel" for="req_inputField">{titleS}</label>
        <textarea id="req_inputField" class="getReqTxtarea" rows="9" />
    </div>
</div>
