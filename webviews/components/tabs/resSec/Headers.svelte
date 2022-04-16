<script lang="ts">
    /*
for (let [key, value] of respHeaders) {
    console.log(key, value);
    
}
*/
    let x: any = {};
    let y: any = [];
    export let respHeaders: any;
    console.log(respHeaders);
    for (let [key, value] of respHeaders) {
        x[key] = value;
    }
    y.push(x);

</script>

<div>
    <div class="respSec">
        <table class="headersTable">
            <thead>
                <tr class="tableHeadingRow">
                    <th class="rowDesign">Headers</th>
                    <th class="rowDesign bRight">Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="rowDesign" ></td>
                    <td class="rowDesign bRight"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- {respHeaders} -->
</div>
