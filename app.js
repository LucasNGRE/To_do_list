let taskList = document.getElementById('taskList');

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();  // Supprime les espaces en début et en fin

    // Empêche l'ajout de tâches vides ou composées uniquement d'espaces
    if (taskText === "") {
        return;
    }

    // Vérifie si la saisie est valide (pas trop longue)
    if (!isInputValid(taskText)) {
        return; // Arrête l'exécution de la fonction si la limite est dépassée
    }

    let li = document.createElement('li');
    
    let taskTextDiv = document.createElement('div'); // Crée un élément div pour le texte de la tâche
    taskTextDiv.textContent = taskText; // Définit le texte de la tâche comme contenu de l'élément div
    li.appendChild(taskTextDiv); // Ajoute l'élément div au li

    let editButton = document.createElement('button');
    editButton.innerHTML = '<ion-icon name="pencil-outline" class="modify"></ion-icon>';
    editButton.onclick = function () {
        editTask(li);
    };

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Insère la tâche nouvellement créée au début de la liste des tâches
    if (taskList.firstChild) {
        taskList.insertBefore(li, taskList.firstChild);
    } else {
        taskList.appendChild(li);
    }
    taskInput.value = "";
    taskInput.focus(); // Re-focus sur le champ de saisie
}


function editTask(task){
    let taskTextElement = task.firstChild;
    let taskText = taskTextElement.textContent;

    let newTaskText = prompt('Modify the task:', taskText)

     // Empêche l'ajout de tâches vides ou composées uniquement d'espaces après modification
     if (newTaskText === null || newTaskText.trim() === "") {
        return;
    }

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

// Ajout de la tâche en appuyant sur "Enter"
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});