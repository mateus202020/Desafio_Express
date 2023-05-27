const express = require('express');
const app = express();

// Rota padrão
app.get('/', (req, res) => {
  const endpoint = '/';
  const method = 'GET';
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}`);
});

// Rota /clientes
app.get('/cliente', (req, res) => {
  const endpoint = '/clientes';
  const method = 'GET';
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}`);
});
app.post('/cliente', (req, res) => {
  const endpoint = '/clientes';
  const method = 'POST';
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}`);
});
app.put('/cliente', (req, res) => {
  const endpoint = '/clientes';
  const method = 'PUT';
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}`);
});
app.delete('/cliente', (req, res) => {
  const endpoint = '/clientes';
  const method = 'DELETE';
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}`);
});

// Rota /produtos
app.get('/servico', (req, res) => {
  const endpoint = '/clientes';
  const method = 'GET';
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}`);
});
app.post('/servico', (req, res) => {
  const endpoint = '/clientes';
  const method = 'POST';
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}`);
});
app.put('/servico', (req, res) => {
  const endpoint = '/clientes';
  const method = 'PUT';
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}`);
});
app.delete('/servico', (req, res) => {
  const endpoint = '/clientes';
  const method = 'DELETE';
  res.send(`Endpoint: ${endpoint}\nMethod: ${method}`);
});

app.listen(8000, () => {
  console.log('App ouvindo na porta 8000!');
});
