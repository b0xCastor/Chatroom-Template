// Simuler des données de salons
const rooms = ["Salon 1", "Salon 2", "Salon 3"];

// Sélectionner des éléments DOM
const roomList = document.getElementById("room-list");
const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Charger la liste des salons
function loadRooms() {
    rooms.forEach(room => {
        const li = document.createElement("li");
        li.textContent = room;
        li.addEventListener("click", () => {
            // Charger les messages du salon sélectionné
            loadMessages(room);
        });
        roomList.appendChild(li);
    });
}

// Charger les messages d'un salon
function loadMessages(room) {
    // Ici, vous devrez charger les messages du salon à partir d'une source de données (par exemple, une base de données).

    // En attendant, nous simulons simplement l'affichage de messages factices.
    chatMessages.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        const message = document.createElement("div");
        message.textContent = `Message ${i} dans ${room}`;
        chatMessages.appendChild(message);
    }
}

// Écouter le clic sur le bouton "Envoyer"
sendButton.addEventListener("click", () => {
    const message = messageInput.value;
    // Ici, vous pouvez envoyer le message au salon actif.

    // En attendant, nous simulons simplement l'ajout du message à la liste des messages.
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    messageInput.value = "";
});

// Charger les salons au chargement de la page
loadRooms();
