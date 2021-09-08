const express = require('express')
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Settings
app.set('port', process.env.PORT || 5500);

// Middlewares (morgan: nos da info del tipo de peticiones)
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/api/photos', require('./routes/photos.routes'));

// Starting server (nodemon) y express
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});