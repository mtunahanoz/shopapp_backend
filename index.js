const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.yaml');
// import usersRouter from './routes/users.js';


const app = express();
app.use(bodyParser.json())


const PORT = process.env.PORT || 4000;

const options = {
    swagger: '2.0',
    info: {
      title: 'Todo API',
      description: 'Todo API',
      version: '1.0.0',
    },
    host: 'localhost:4000',
    basePath: '/api-docs',
    schemes: ['http'],
    paths: {
      '/get/{data_name}/{doc_id}': {
        get: {
          summary: 'Get data by ID',
          description: 'Get data by ID',
          parameters: [
            {
              name: 'data_name',
              in: 'path',
              description: 'The name of the data',
              required: true,
              type: 'string',
            },
            {
              name: 'doc_id',
              in: 'path',
              description: 'The ID of the document',
              required: true,
              type: 'string',
            },
          ],
          responses: {
            '200': {
              description: 'OK',
              schema: {},
            },
          },
        },
      },
    },
  };

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(options));

// app.use('/users', usersRouter);

// MONGO BAĞLANTI
// mongoose.connect('mongodb://localhost:27017/todo-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const getRoutes = require('./routers/getRoutes')
const postRoutes = require('./routers/postRoutes')

app.use("/get", getRoutes)
app.use("/post", postRoutes)

app.listen(PORT, () => {
    
    console.log(`Server is running : http://localhost:${PORT}`);
})