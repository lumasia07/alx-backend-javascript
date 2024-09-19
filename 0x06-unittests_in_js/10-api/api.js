const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).send('Bad Request');
  }
  res.send(`Welcome ${userName}`);
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.use((req, res, next) => {
  res.status(404).send('Not found');
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
