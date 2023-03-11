const socket = io();

socket.emit('join', roomId);

document.addEventListener('keydown', event => {
  const speed = 0.1;
  switch (event.keyCode) {
    case 87: // W
      camera.position.x -= Math.sin(camera.rotation.y) * speed;
      camera.position.z -= Math.cos(camera.rotation.y) * speed;
      break;
    // ...
  }
  socket.emit('playerMove', camera.position, camera.rotation, roomId);
});
