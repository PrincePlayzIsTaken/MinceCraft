document.addEventListener('mousemove', event => {
  const sensitivity = 0.1;
  camera.rotation.y -= event.movementX * sensitivity;
  camera.rotation.x -= event.movementY * sensitivity;
});

document.addEventListener('keydown', event => {
  const speed = 0.1;
  switch (event.keyCode) {
    case 87: // W
      camera.position.x -= Math.sin(camera.rotation.y) * speed;
      camera.position.z -= Math.cos(camera.rotation.y) * speed;
      break;
    case 83: // S
      camera.position.x += Math.sin(camera.rotation.y) * speed;
      camera.position.z += Math.cos(camera.rotation.y) * speed;
      break;
    case 65: // A
      camera.position.x -= Math.sin(camera.rotation.y - Math.PI / 2) * speed;
      camera.position.z -= Math.cos(camera.rotation.y - Math.PI / 2) * speed;
      break;
    case 68: // D
      camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * speed;
      camera.position.z += Math.cos(camera.rotation.y - Math.PI / 2) * speed;
      break;
  }
});
