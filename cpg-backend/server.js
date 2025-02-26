const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');

// Cấu hình CORS
app.use(cors());

// Middleware để xử lý các yêu cầu JSON
app.use(express.json());

// API đơn giản
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
