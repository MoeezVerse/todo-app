let todolist = [];
displayItems();

function addtodo(){
    let todoitem = document.querySelector("#input-item").value;
    let tododate = document.querySelector("#todo-date").value;
    if (todoitem && tododate) {
        todolist.push({item: todoitem, date: tododate});
    }
    document.querySelector("#input-item").value = '';
    document.querySelector("#todo-date").value = '';
    displayItems();
}

function displayItems(){
    let display = document.querySelector(".display-items");
    let Newtext = '';
    for ( let i = 0; i < todolist.length; i++){
        let {item, date} = todolist[i];
        Newtext += `
        <div>
            <span>${item}</span> &nbsp;
            <span>${date}</span> &nbsp;
            <button id="del-btn" onclick="deleteItem(${i})">Delete</button>
        </div>`;
    }
    display.innerHTML = Newtext;
}

function deleteItem(index) {
    todolist.splice(index, 1);
    displayItems();
}