const todosNode = document.querySelector('.js-todos')
const inputNode = document.querySelector('.js-input')
const btnNode = document.querySelector('.js-btn')
const todosDoneNode = document.querySelector('.js-todosDone')

let todos = []
let todosDone = []

function addTodo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`
    }

    todos.push(todo)
}

function deleteTodo(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true
        }
    })
}

function render() {
    let todosHtml = ''
    let todosDoneHtml = ''

    todos.forEach(todo => {
        if (todo.done) {
            todosDoneHtml += `
            <div>${todo.text}</div>
            `
        } else {

        todosHtml += `
            <div>${todo.text}
            <button data-id='${todo.id}'>Зроблено</button>
            </div>
        `
    }
    })

    todosNode.innerHTML = todosHtml
    todosDoneNode.innerHTML = todosDoneHtml

    console.log(todos)
    console.log(todosDone)

}

btnNode.addEventListener('click', () => {
    const text = inputNode.value

    addTodo(text)

    render()
})

todosNode.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return
    }

    const id = event.target.dataset.id

    deleteTodo(id)

    render()
})

render()