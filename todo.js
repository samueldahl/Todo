
//For the list creator section
function addList(){
    var listName = document.getElementById("listName").value;
    console.log(listName);
    $("#listBox").append(
        '<div id="listBox1" class="list">\n' +
        '            <h3>' +listName+  '</h3>\n' +
        '            <button onclick="addTask()">Add Task</button>\n' +
        '            <button onclick="markListComplete()">Mark List Complete</button>\n' +
        '            <button onclick="deleteList(this)">Delete List</button>\n' +
        '        </div>'
    );
}
function clearCompleteLists(){

}

//For every actual list
function addTask(){
    var taskName = prompt("Name your task!");
    $("#listBox").append(
    '<div id="taskA1" class="task">\n' +
    '                <h4>\n' +
    '                    '+taskName+'\n' +
    '                </h4>\n' +
    '                <button onclick="editTask()">Edit Task</button>\n' +
    '                <button onclick="markTaskComplete()">Mark Task Complete</button>\n' +
    '                <button onclick="deleteTask()">Delete Task</button>\n' +
    '\n' +
    '            </div>'


)

}
function markListComplete(){

}
function deleteList(element){
    $(element).parent().hide();

}

//For every actual task
function editTask(){

}
function markTaskComplete(){

}
function deleteTask(){

}




//I'm not sure what these lines of code do, you can think of this as a reference dump.

// function addList() {
//     var btn = document.createElement("button");
//     document.body.appendChild(btn);
// }
// function addTask(){
//
// }
// var p = document.createElement('p');
// p.innerHTML = 'Hello world!';
// listBox.appendChild(p);



//These lines were written by JD Flamm in an attempt to help my poor soul understand document.append().

// var template = '<button onclick="' + index + '">dank memes</button>';
// document.append();

//html can be added as a string.