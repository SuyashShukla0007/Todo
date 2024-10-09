import express from 'express';
import cors from 'cors';
import { getTodos, createTodo, deleteTodo ,updateTodo} from './controllers/todo';
import createUser from './controllers/user';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: 'https://todo-zs4f.vercel.app',  // Replace with the actual URL of your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Specify allowed headers if necessary
}));

app.use(express.json());

app.get('/todo/:UserId', getTodos);
app.patch('/todo/:id', updateTodo);
app.delete('/todo/:id', deleteTodo);
app.post('/todo/:UserId', createTodo);
app.post('/user/create', createUser);

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
