localforage.setItem('playerPosition', camera.position).then(() => {
  console.log('Player position saved!');
});

localforage.getItem('playerPosition').then(position => {
  console.log('Player position loaded:', position);
  camera.position.copy(position);
});

