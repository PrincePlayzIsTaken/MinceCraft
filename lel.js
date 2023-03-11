const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('A player has connected!');
  socket.on('join', (roomId) => {
    console.log('Player joined room:', roomId);
    socket.join(roomId);
    socket.to(roomId).emit('playerJoined', socket.id);
  });

  socket.on('playerMove', (position, rotation, roomId) => {
    socket.to(roomId).emit('playerMoved', socket.id, position, rotation);
  });
});
