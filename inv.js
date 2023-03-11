const inventory = {
  wood: 0,
  stone: 0,
  // ...
};

localforage.setItem('inventory', inventory).then(() => {
  console.log('Inventory saved!');
});

localforage.getItem('inventory').then(inventory => {
  console.log('Inventory loaded:', inventory);
});
