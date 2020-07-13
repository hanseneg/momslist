const form = document.addItem 

//submit button 
//prevents page from refreshing when clicking submit and clears out input after submit is clicked
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const listItem = form.title.value
    form.title.value = ""
    // test console.log(listItem)

    //div > ul > li
    //inside each li: a div for actual li, edit button, delete button(x)
    //create new elements and append them to the dom, set their text content, style in js or use styles from css
    //new li
    var newLI = document.createElement("li");
    newLI.textContent = listItem
    document.getElementById("list").append(newLI);


    //centers list items and makes the button a normal size
    list.style.alignItems = "center"
    list.style.position = "relative"
    list.style.right = "20px"


    //edit button
    //allows the ability to edit
    var edit = document.createElement("button")
    edit.textContent = "Edit"
    document.getElementById("list").append(edit);
    edit.addEventListener("click", editButton);
    function editButton() {
        alert ("You want to edit this!");
    }


    //delete button
    //deletes li, edit button, and delete button
    var deleteX = document.createElement("button");
    deleteX.textContent = "X"
    //document.getElementById("list").classList.add("#list>li");
    document.getElementById("list").append(deleteX);
    deleteX.addEventListener("click", deleteButton);

    //function deleteButton() {
        //var newList = document.getElementById("list");
        //newList.removeChild(newList.childNodes[0]);  deleted one thing at a time including X and edit buttons
        //var deleteItem = document.getElementById(list.value);  deleted everything 
        //newList.remove(deleteItem)
        //delete document.getElementById("list")

        //var deleteItem = document.getElementById("list")
        //for (var i = 0; i < deleteItem.length; i ++) {
        //    deleteItem[i].addEventListener("click", deleteButton)
        //}

    function deleteButton() {
        //this.parentNode.removeChild(newLI);
        //this.parentNode.removeChild(edit);
        //this.parentNode.removeChild(deleteX);
        list.removeChild(newLI)
        list.removeChild(edit)
        list.removeChild(deleteX)
    }

//}
})