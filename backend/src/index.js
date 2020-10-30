import express from 'express';
import router from './routes.js';
import bodyParser from 'body-parser';
import proxy from 'express-http-proxy';

/**
 * Create express.js application setup body parsers etc.
 */
const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/garments', router);
app.use('/', proxy(`http://frontend/`))

// Error hanlding middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ 'error': err.message })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port", port);
})
