const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Небольшой "секрет", который мы будем менять, чтобы видеть обновления
const message = "Hello from Node.js App! Version 3.0 - AUTOMATED!";

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h1>${message}</h1>
        <p>Deployed with GitHub Actions + Watchtower!</p>
        <p>Current time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});