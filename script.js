// Archivo: script.js
document.getElementById('btnAgregar').addEventListener('click', function() {
    const inputTarea = document.getElementById('inputTarea');
    const listaTareas = document.getElementById('listaTareas');

    if (inputTarea.value.trim() !== "") {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = inputTarea.value;

        // Añadir la nueva tarea a la lista
        listaTareas.appendChild(nuevaTarea);

        // Limpiar el campo de texto después de agregar la tarea
        inputTarea.value = '';

        // Añadir funcionalidad para eliminar la tarea al hacer doble clic
        nuevaTarea.addEventListener('dblclick', function() {
            listaTareas.removeChild(nuevaTarea);
        });
    } else {
        alert("Por favor, escribe una tarea antes de agregarla.");
    }
});
