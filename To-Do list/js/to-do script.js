var itemList = document.getElementById("to-do_list"); // <ul>
var addButton = document.getElementById("add_button"); // add button
var filter = document.getElementById("filter"); // search bar

//Add new task to the list
addButton.addEventListener("click", addTaskToTheList);
// Delete task from the list
itemList.addEventListener("click", removeTask);
// Filter tasks
filter.addEventListener("keyup", filterItems);



function addTaskToTheList(event) {
    event.preventDefault();
    
    // Get input value
    let newTask = document.getElementById("task_input_field").value;

    // Create new <li>
    let newListItem = document.createElement("li");

    // Add class to the new list item
    newListItem.className = "task-group-item";

    // Add text node with input value into the <li>
        // Adds text into the <li>
        newListItem.appendChild(document.createTextNode(newTask));

            // Create delete button
            var deleteButton = document.createElement("button");

            // Add class to delete button
            deleteButton.className = "delete_button";

            // Add thext node to the delete button
            deleteButton.appendChild(document.createTextNode("X"));

            // Add delete button to <li>
            newListItem.appendChild(deleteButton);

        // Adds <li> with text and delete button into the <ul>
        itemList.appendChild(newListItem);

    console.log(newListItem);
}

function removeTask(event) {
    if (event.target.classList.contains('delete_button')) { //makes removeTask() activate only when clicking a delete button, not whole <li> element
        if (confirm("Are You Sure?")) { // confirm() shows confimation winows, if true, task will be deleted
            let li = event.target.parentElement; // li is the parent of (clicked) delete button, we assign it to li variable
            itemList.removeChild(li);
        }
    }
    
}

function filterItems(event) {
    // convert text (in searchbar/filter) to lowercase
    var text = event.target.value.toLowerCase();
    // Get all li elements
    var items = itemList.getElementsByTagName("li");
    // Convert (HTMLCollection) to an array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "flex"; // display type; flex here; display: "box" made the button appear next to the text after searching
        }
        else {
            item.style.display = "none";
        }
    });
}
