

const socketController = (socket) => {

  console.log('User connected', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected', socket.id);
  });

  socket.on('message', (payload, callback) => {

    const id = 123456789;

    callback(id);

    socket.broadcast.emit('message', payload);

  });

};

module.exports = socketController;