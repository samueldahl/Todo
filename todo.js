var uniqueId = 0;

function clearCompleteTasks(){
    $(".dankMemes").parent().hide();
}

//For the list creator section
function addList(){
    uniqueId ++;
    var listName = document.getElementById("listName").value;
    console.log(listName);
    $("#listBoxBody").append(
        '<div id="" class="list ">\n' +
        '            <h3>' +listName+  '</h3>\n' +
        '            <button onclick="addTask('+ uniqueId +')">Add Task</button>\n' +
        '            <button id="ab'+ uniqueId +'" onclick="markListComplete('+uniqueId+')">Mark List Complete</button>\n' +
        '            <button onclick="deleteList(this)">Delete List</button>\n' +
        '            <div id="listBox'+uniqueId+'"></div>\n'+
        '</div>'
    );
}
function clearCompleteLists(){
    $(".normieMemes").parent().hide();
}

//For every actual list
function addTask(uniqueListId){
    uniqueId ++;
    var taskName = prompt("Name your task!");
    $("#listBox" + uniqueListId).append(
    '<div id="task" class="task">\n' +
    '                <input class="taskInput" value="' + taskName + '">\n' +
    '                <button id="ab'+ uniqueId +'" onclick="markTaskComplete('+uniqueId+')">Mark Task Complete</button>\n' +
    '                <button onclick="deleteTask(this)">Delete Task</button>\n' +
    '\n' +
    '            </div>'


)

}
function markListComplete(taskId){
    $("#ab"+taskId).addClass("normieMemes");
}
function deleteList(element){
    $(element).parent().hide();

}

//For every actual task
function markTaskComplete(taskId){
    $("#ab"+taskId).addClass("dankMemes");

}
function deleteTask(element){
    $(element).parent().hide();
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