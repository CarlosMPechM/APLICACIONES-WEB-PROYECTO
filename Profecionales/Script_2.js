// Manejo del modal
function openModal(action) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const editForm = document.getElementById('editForm');

    if (action === 'edit') {
        modalTitle.innerText = 'Editar Cita';
        // Lógica para cargar datos en el formulario para edición
    } else {
        modalTitle.innerText = 'Añadir Nueva Cita';
        // Lógica para preparar el formulario para creación
        editForm.reset(); // Resetear el formulario
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function deleteAppointment() {
    // Lógica para eliminar la cita
    alert('Cita eliminada.');
}

let appointments = [];
let editingIndex = -1;

function openModal(action, index = -1) {
    const modal = document.getElementById('myModal');
    const modalTitle = document.getElementById('modalTitle');
    const editForm = document.getElementById('editForm');

    if (action === 'edit') {
        modalTitle.innerText = 'Editar Cita';
        loadAppointmentData(index);
        editingIndex = index;
    } else {
        modalTitle.innerText = 'Añadir Nueva Cita';
        editForm.reset();
        editingIndex = -1;
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function loadAppointmentData(index) {
    const appointment = appointments[index];
    document.getElementById('appointmentId').value = index;
    document.getElementById('name').value = appointment.name;
    document.getElementById('date').value = appointment.date;
    document.getElementById('status').value = appointment.status;
    document.getElementById('subject').value = appointment.subject;
    document.getElementById('reason').value = appointment.reason;
    document.getElementById('requestStatus').value = appointment.requestStatus;
}

function saveAppointment(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;
    const subject = document.getElementById('subject').value;
    const reason = document.getElementById('reason').value;
    const requestStatus = document.getElementById('requestStatus').value;

    const appointment = {
        name,
        date,
        status,
        subject,
        reason,
        requestStatus
    };

    if (editingIndex === -1) {
        appointments.push(appointment);
    } else {
        appointments[editingIndex] = appointment;
    }

    renderAppointments();
    closeModal();
}

function renderAppointments() {
    const appointmentsContainer = document.getElementById('appointments');
    appointmentsContainer.innerHTML = '';

    appointments.forEach((appointment, index) => {
        const appointmentCard = document.createElement('div');
        appointmentCard.className = 'appointment-card';
        appointmentCard.innerHTML = `
            <h3><b>${appointment.name}</b></h3>
            <p><b>Fecha:</b> ${appointment.date}</p>
            <p><b>Estado:</b> ${appointment.status}</p>
            <p><b>Asunto:</b> ${appointment.subject}</p>
            <p><b>Motivo:</b> ${appointment.reason}</p>
            <p><b>Estado de la solicitud:</b> ${appointment.requestStatus}</p>
            <button onclick="openModal('edit', ${index})">Editar</button>
            <button onclick="deleteAppointment(${index})">Eliminar</button>
        `;
        appointmentsContainer.appendChild(appointmentCard);
    });
}

function deleteAppointment(index) {
    appointments.splice(index, 1);
    renderAppointments();
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
