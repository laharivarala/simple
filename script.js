function addStudent() {
    var name = document.getElementById("n").value;
    var rollNo = document.getElementById("r").value;
    var list = document.getElementById("list");
    var msg = document.getElementById("msg");

    if (name && rollNo) {
        var li = document.createElement("li");
        li.textContent = "Name: " + name + ", Roll No: " + rollNo;
        list.appendChild(li);
        msg.textContent = "Student added successfully!";
        document.getElementById("n").value = "";
        document.getElementById("r").value = "";
    } else {
        msg.textContent = "Please enter both name and roll no.";
    }
}