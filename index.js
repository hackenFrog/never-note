const todosNode = document.querySelector('.js-todos')
const inputNode = document.querySelector('.js-input')
const btnNode = document.querySelector('.js-btn')

let todos = []

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
    console.log(todos)
    let html = ''

    todos.forEach(todo => {
        if (todo.done) {
            return
        }

        html += `
            <div>${todo.text}
            <button data-id='${todo.id}'>Зроблено</button>
            </div>
        `

    })

    todosNode.innerHTML = html
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