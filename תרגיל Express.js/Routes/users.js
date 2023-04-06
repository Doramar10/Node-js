const express = require('express');
const fs = require('fs');
const stores = JSON.parse(fs.readFileSync('./db/stroes.json'));

const app = express();

//1
app.get('/api/store', (req, res) => {
    res.status(200).json(stores);
  });

//2
  app.get('/api/store/:id', (req, res) => {
    const storeId = req.params.id;
    const store = stores.find(store => store.id === storeId);
  
    if (!store) {
      return res.status(404).send('Store not found');
    }
  
    res.status(200).json(store);
  });

//3
app.get('/api/store/:store/items/:item', (req, res) => {
    const storeId = req.params.store;
    const itemId = req.params.item;
    const store = stores.find(store => store.id === storeId);
  
    if (!store) {
      return res.status(404).send('Store not found');
    }
  
    const item = store.items.find(item => item.id === itemId);
  
    if (!item) {
      return res.status(404).send('Item not found');
    }
  
    res.status(200).json(item);
  });

  //4
  app.post('/api/store/add', (req, res) => {
    const newStore = req.body;
    stores.push(newStore);
    fs.writeFileSync('./db/stores.json', JSON.stringify(stores));
    res.status(201).send('Store added successfully');
  });

//5
app.post('/api/store/:store/items/add', (req, res) => {
    const storeId = req.params.store;
    const newItem = req.body;
    const store = stores.find(store => store.id === storeId);
  
    if (!store) {
      return res.status(404).send('Store not found');
    }
  
    store.items.push(newItem);
    fs.writeFileSync('./db/stores.json', JSON.stringify(stores));
    res.status(201).send('Item added successfully');
  });
  
  // Listening to port 3000
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

module.exports= app;


  