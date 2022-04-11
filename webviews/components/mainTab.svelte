<!-- SECTION JS -->
<script lang="ts">
    import BodyTab from "./tabs/BodyTab.svelte";
    import QueryTab from "./tabs/QueryTab.svelte";
    import HeaderTab from "./tabs/HeaderTab.svelte";
    import AuthTab from "./tabs/AuthTab.svelte";
    import TestTab from "./tabs/TestTab.svelte";
    import Main from "./tabs/resSec/Main.svelte";

    let reqUrl: string;
    let data: any;
    let jsonBody: any;
    let statusCode: any;
    let isProcessing: any;

    let curTab = "body";
    class secDisplay {
        static bodyDisplay() {
            curTab = "body";
        }
        static queryDisplay() {
            curTab = "query";
        }
        static headerDisplay() {
            curTab = "header";
        }
        static authDisplay() {
            curTab = "auth";
        }
        static testDisplay() {
            curTab = "test";
        }
    }

    // Request Method handler
    let reqMethod = "METHOD";
    const selectHandler = (e: Event) => {
        let a = e.target! as HTMLInputElement;
        reqMethod = a.value;
        console.log(reqMethod);
    };

    //TODO parse error on Html Elements
    const errorRenderer = (type: string) => {
        const logRenderer = () => {
            console.log("!!!Invalid Method!!!");
        };

        switch (type) {
            case "log":
                logRenderer();
                break;
        }
    };

    // Handling Json Requests
    const jsonReqHandler = async () => {
        isProcessing = true;
        let resp = await fetch(reqUrl, {
            method: reqMethod,
            cache: "no-cache",
            body:
                reqMethod === "GET" || reqMethod === "HEAD"
                    ? null
                    : JSON.stringify(jsonBody),
        });
        data = await resp.json();
        isProcessing = false;
        statusCode = resp.status;
    };

    // Sending requests
    const sendReqHandler = (e: Event) => {
        if (reqMethod !== "METHOD") {
            jsonReqHandler();
        } else {
            errorRenderer("log");
        }
    };
</script>

<!-- !SECTION JS -->

<!-- SECTION Html -->
<div>
    <div class="reqSendDiv">
        <select
            name="req_method"
            on:change={selectHandler}
            id="method"
            class="req_method marginRight"
        >
            <option value="METHOD" default>Method</option>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
            <option value="HEAD">HEAD</option>
            <option value="OPTION">OPTION</option>
            <option value="PATCH">PATCH</option>
        </select>
        <input
            type="text"
            class="req_url marginRight"
            bind:value={reqUrl}
            placeholder="Enter request URL"
        />
        <button class="reqSendBtn" id="reqSendBtnId" on:click={sendReqHandler}>
            Send
        </button>
    </div>

    <div>
        <div>
            <ul class="req_features">
                <li on:click={() => secDisplay.bodyDisplay()}>Body</li>
                <li on:click={() => secDisplay.queryDisplay()}>Query</li>
                <li on:click={() => secDisplay.headerDisplay()}>Headers</li>
                <li on:click={() => secDisplay.authDisplay()}>Auth</li>
                <li on:click={() => secDisplay.testDisplay()}>Tests</li>
            </ul>
        </div>
        <div>
            <!--  -->
            {#if curTab === "body"}
                <BodyTab reqBody={jsonBody} />
            {:else if curTab === "query"}
                <QueryTab />
            {:else if curTab === "header"}
                <HeaderTab />
            {:else if curTab === "auth"}
                <AuthTab />
            {:else if curTab === "test"}
                <TestTab />
            {/if}
            <!--  -->
        </div>
    </div>
    <hr />
    <div class="respSec widHeight">
        <Main {isProcessing} {data} {statusCode} />
    </div>
</div>
<!-- !SECTION Html -->
