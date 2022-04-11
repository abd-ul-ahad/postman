<script lang="ts">
</script>


<div>
    <h2 class="marginBottom">Tests</h2>
    <div class="reqSendDiv">
        <select
            name="test_method"
            id="method"
            class="req_method marginRight"
        >
            <option value="select" default>select</option>
            <option value="ResponseCode">ResponseCode</option>
            <option value="ResponseBody">ResponseBody</option>
            <option value="ResponseTime">ResponseTime</option>
            <option value="Content-Type">Content-Type</option>
            <option value="Content-Lenght"
                >Content-Lenght</option
            >
            <option value="Content-Encoding"
                >Content-Encoding</option
            >
            <option value="Headers">Headers</option>
            <option value="Json-Query">Json-Query</option>
            <option value="Set-Env-Variable"
                >Set-Env-Variable</option
            >
        </select>

        <select
            name="test_method"
            id="method"
            class="req_method marginRight"
        >
            <option value="Action" default>Action</option>
            <option value="Equal">Equal</option>
            <option value="NotEqual">NotEqual</option>
            <option value="Contain">Contain</option>
            <option value="Count">Count</option>
            <option value="isType">isType</option>
            <option value="isJson">isJson</option>
            <option value="Regex">Regex</option>
            <option value="Schemas">Schemas</option>
            <option value="<">&#60;</option>
            <option value="<=">&#8804;</option>
            <option value=">=">&#x2265;</option>
            <option value=">">&#62;</option>
        </select>
        <input
            type="text"
            class="req_url marginRight"
            placeholder="value"
        />
    </div>
</div>