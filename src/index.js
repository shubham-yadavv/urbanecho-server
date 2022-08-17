
import express from 'express';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import connect from './database/connection.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

//const CONNECTION_URL = 'mongodb+srv://shubham:echo1234@echo.pbzqqbp.mongodb.net/?retryWrites=true&w=majority'
app.get('/', (req, res) => {
    res.send('app is running');
});

connect();

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
