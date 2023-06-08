<script>
    import Button from "$lib/components/Button.svelte";

</script>
<h2>Add an invoice</h2>

<form>
    <!-- client -->
    <div>
        <label for="client">Client</label>
        <select name="client" id="client">
            <option value="zeal">ZEAL</option>
        </select>
    </div>
    <div>
        <div>or</div>
        <Button label='+ Client' onClick={() => []} />
    </div>
    <!--  Invoice id-->
    <div>
        <label for="id">Invoice ID</label>
        <input type="number" name="id"/>
    </div>
    <!--  due date-->
    <div>
        <label for="dueDate">Due Date</label>
        <input type="date" name="dueDate"/>
    </div>
    <!-- issue date -->
    <div>
        <label for="issueDate">Issue Date</label>
        <input type="date" name="issueDate"/>
    </div>
    <!-- subject -->
    <div>
        <label for="subject">Subject</label>
        <input type="text" name="subject"/>
    </div>
    <!-- line items -->

    <!-- note -->
    <div>
        <label for="notes">Notes <span>(optional, displayed on invoice)</span></label>
        <textarea name="notes" id="notes"/>
    </div>
    <!-- terms -->
    <div>
        <label for="terms">Terms</label>
        <textarea name="terms" id="terms"/>
    </div>
    <!-- buttons -->
    <div>
        <!-- Only be visible if editing -->
        <button>Delete</button>
    </div>
    <div>
        <button>Cancel</button>
        <button>Save</button>
    </div>
</form>