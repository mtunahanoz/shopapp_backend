const express = require('express');
const bodyParser = require('body-parser');
import cors from 'cors';
// import usersRouter from './routes/users.js';


const app = express();
app.use(bodyParser.json())
app.use(cors());

const PORT = process.env.PORT || 4000;


// app.use('/users', usersRouter);

// MONGO BAĞLANTI
// mongoose.connect('mongodb://localhost:27017/todo-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });



app.listen(PORT, () => {
    
    console.log(`Server is running : http://localhost:${PORT}`);
})