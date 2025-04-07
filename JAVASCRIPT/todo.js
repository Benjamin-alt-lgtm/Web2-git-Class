//Todo List App

// Goal: Simple to-do app with in-memory task storage.
// Each task should have an: id, title, completed

// Features:

// Add task
// Mark task as done/undone
// Filter task according to:  completed | pending tasks
// Delete task


let todo = [
    {
        title: "Go to church",
        id: 1,
        completed: true,
    },

    {
        tile: "watch match", 
        id: 2,
        completed: false
    },
    {
        tilte: "pratice Js",
        id: 3,
        completed: false
    },
    {
        tile: "cook",
        id: 4,
        completed: true
    }
]

function addTask(title){
    let isCompleted = false
    let newId = todo.length+1
    let task ={
        title: title,
        id: newId,
        completed: isCompleted 
    } 
    todo.push(task)
    // console.log (todo)
}
addTask('Do assignment')
// console.log('update after adding a new task')

function markTask(mark){
for(let item of todo){
    if(item.id === mark){
        item.completed = true
        console.log(item)
    }
}
}
markTask (2)
console.log (todo)

function deleteTask(){
    return todo.filter(todo => todo.id !==4) 
}
console.log(deleteTask(todo))

let done = []
let undone = []
function alloTask(todolist){
    for(let item in todolist){
        if(todolist[item].completed === true){
            done.push(todolist[item])
        } 
        else if(todolist[item].pending === false){
        undone.push(todolist[item])
     } 
    }
    // console.log ('completed task', completed)
    // console.log ('pending task', pending)
}