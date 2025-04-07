const lblOnline  = document.getElementById('lblOnline');
const lblOffline = document.getElementById('lblOffline');
const txtMessage = document.getElementById('txtMessage');
const btnSend    = document.getElementById('btnSend');

const socket = io();

socket.on('connect', () => {
  lblOnline.style.display = 'block';
  lblOffline.style.display = 'none';
});

socket.on('disconnect', () => {
  lblOnline.style.display = 'none';
  lblOffline.style.display = 'block';
});

socket.on('message', (payload) => {
  console.log('In the client from the server:',payload);
});

btnSend.addEventListener('click', () => {
  const message = txtMessage.value;
  
  const payload = {
    msg: message,
    id: 'idExample123',
  }

  socket.emit('message', payload);
});