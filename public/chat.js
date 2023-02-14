const socket = io.connect('https://recepyolcu.github.io/chat/public/');

const sender = document.getElementById('sender');
const user2PP = document.getElementById('profile-photo');

const output = document.getElementById('output');

const feedback = document.getElementById('feedback');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

// uygulamadan önce sender ı al


submitBtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value
    });

    if (message.value == '') {

    }
    else {
        message.value = '';
    }
});

message.addEventListener('keypress', () => {
    socket.emit('typing');
});

let userBox;
socket.on('divCreated', (data) => {
    feedback.innerHTML = '';

    userBox = data;
    output.innerHTML += userBox;
});

socket.on('typing', () => {
    feedback.innerHTML = 'typing...';
});
