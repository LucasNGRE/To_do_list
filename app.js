let taskList = document.getElementById('taskList');

function addTask(){
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;

    if(taskText === ""){
        return;
    }

    if (!isInputValid(taskText)) {
        return; // Arrêtez l'exécution de la fonction si la limite est dépassée
    }

    let li = document.createElement('li');

    li.innerHTML = taskText;

    let editButton = document.createElement('button');

    editButton.innerHTML = '<ion-icon name="pencil-outline" class="modify"></ion-icon>';

    editButton.onclick = function(){
        editTask(li);
    }

    let deleteButton = document.createElement('button');

    deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';

    deleteButton.onclick = function(){
        deleteTask(li);
    }

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(task){
    let taskTextElement = task.firstChild;
    let taskText = taskTextElement.textContent;

    let newTaskText = prompt('Modify the task:', taskText)

    if(newTaskText === null || newTaskText === ""){
        return;
    }

    taskTextElement.textContent = newTaskText;
}

function deleteTask(task){
    taskList.removeChild(task)
}

function isInputValid(inputText) {
    const maxLength = 50;
    if (inputText.length > maxLength) {
        alert("You have exceeded the maximum number of allowed characters.");
        return false;
    }
    return true; // Retourne true si la saisie est valide
}

// Ajout d'un écouteur d'événement pour surveiller la saisie de l'utilisateur
let taskInput = document.getElementById('taskInput');
taskInput.addEventListener('input', function() {
    // Vérifier la longueur de la valeur saisie dans le champ de texte
    isInputValid(taskInput.value);
});