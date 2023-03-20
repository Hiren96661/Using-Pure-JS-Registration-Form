var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["pass"] = document.getElementById("pass").value;
    formData["rpass"] = document.getElementById("rpass").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pass;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.rpass;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("rpass").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("pass").value = selectedRow.cells[2].innerHTML;
    document.getElementById("rpass").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.pass;
    selectedRow.cells[3].innerHTML = formData.rpass;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailValidationError").classList.contains("hide"))
            document.getElementById("emailValidationError").classList.add("hide");
    }
    if (document.getElementById("pass").value == "") {
        isValid = false;
        document.getElementById("passValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("passValidationError").classList.contains("hide"))
            document.getElementById("passValidationError").classList.add("hide");
    }
    if (document.getElementById("rpass").value == "") {
        isValid = false;
        document.getElementById("rpassValidationError").classList.remove("hide");
    } else if (document.getElementById("pass").value != document.getElementById("rpass").value) {
        isValid = false;
        document.getElementById("rpassValidation2Error").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("rpassValidationError").classList.contains("hide"))
            document.getElementById("rpassValidationError").classList.add("hide");

        else if (!document.getElementById("rpassValidation2Error").classList.contains("hide"))
            document.getElementById("rpassValidation2Error").classList.add("hide");
    }
    return isValid;
}