const express = require('express');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use(`/api/users`,require('./Routes/users'));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

//1
app.get('/api/store',(req,res) => {
    res.json(stores);
})

app.listen(PORT, () => {
    console.log('Server is listening on port 3000');
});


//2
app.get('/api/store/:id', (req, res) => {
    const storeId = req.params.id;
    const store = stores.find(store => store.id === storeId);
  
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }
  
    return res.json(store.items);
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });


//3
  app.get('/api/stores/:store/:item', (req, res) => {
    const { store, item } = req.params;
    const storeObj = stores.find(s => s.id === store);
    if (!storeObj) {
      return res.status(404).json({ error: 'Store not found' });
    }
    const itemObj = storeObj.items.find(i => i.id === item);
    if (!itemObj) {
      return res.status(404).json({ error: 'Item not found in store' });
    }
    return res.json(itemObj);
  });


//4
app.post('/api/store/add', (req, res) => {
    const { id, name, city, items } = req.body;
    const newStore = { id, name, city, items };
    stores.push(newStore);
    fs.writeFile('./db/stores.json', JSON.stringify(stores), err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to write to file' });
      }
      return res.json(newStore);
    });
  });


//5
app.post('/api/store/:store/items/add', (req, res) => {
    const storeId = req.params.store;
    const { id, name, price, salePrice } = req.body;
    const newItem = { id, name, price, salePrice };
    
    const storeIndex = stores.findIndex(store => store.id === storeId);
    if (storeIndex === -1) {
      return res.status(404).json({ error: 'Store not found' });
    }
    
    stores[storeIndex].items.push(newItem);
    fs.writeFile('./db/stores.json', JSON.stringify(stores), err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to write to file' });
      }
      return res.json(newItem);
    });
  });



