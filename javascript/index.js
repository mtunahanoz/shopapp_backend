const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

// import usersRouter from './routes/users.js';


const app = express();
app.use(bodyParser.json())


const PORT = process.env.PORT || 4000;


// app.use('/users', usersRouter);

// MONGO BAĞLANTI
// mongoose.connect('mongodb://localhost:27017/todo-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const getRoutes = require('./routers/getRoutes')

app.use("/get", getRoutes)

app.listen(PORT, () => {
    
    console.log(`Server is running : http://localhost:${PORT}`);
})