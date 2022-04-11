<script lang="ts">
    import TextField from "../mini/TextField.svelte";
    import ThreeFields from "../mini/ThreeFields.svelte";
    import TwoTexts from "../mini/TwoTexts.svelte";

    let curTab = "json";
    export let reqBody: any;

    const showJson = () => {
        curTab = "json";
    };
    const showXml = () => {
        curTab = "xml";
    };
    const showText = () => {
        curTab = "text";
    };
    const showForm = () => {
        curTab = "formField";
    };
    const showFormEnc = () => {
        curTab = "formEnc";
    };
    const showGql = () => {
        curTab = "gql";
    };
</script>

<div>
    <ul class="req_features">
        <li on:click={() => showJson()}>Json</li>
        <li on:click={() => showXml()}>Xml</li>
        <li on:click={() => showText()}>Text</li>
        <li on:click={() => showForm()}>Form</li>
        <li on:click={() => showFormEnc()}>Form-encoded</li>
        <li on:click={() => showGql()}>Graphql</li>
    </ul>
    <!--  -->
    {#if curTab === "json"}
        <TextField val={reqBody} title="Json Content" />
    {:else if curTab === "xml"}
        <TextField val={reqBody} title="Xml Content" />
    {:else if curTab === "text"}
        <TextField val={reqBody} title="Text Content" />
    {:else if curTab === "formField"}
        <ThreeFields title="Form Fields" tickName="Files" />
    {:else if curTab === "formEnc"}
        <ThreeFields title="Form Encoded" tickName="Files" showCheck={false} />
    {:else if curTab === "gql"}
        <TwoTexts titleF="Query" titleS="Variables" />
    {/if}
    <!--  -->
</div>
