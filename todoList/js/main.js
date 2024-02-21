const input = document.getElementById('addtask')
const listContainer = document.getElementById('list-container')
showData()
function addtask() {
    if (input.value === '') {
        alert('U must enter a task')
    } else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
        saveData()
        input.value = ''
    }
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem('taskData',listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('taskData')
}