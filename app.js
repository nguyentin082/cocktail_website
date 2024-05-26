import express from 'express';
import cocktailRoutes from './routes/cocktail.js';


// CONSTANTS
const app = express();
const port = 3000;

// USING MIDDLEWARES
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/cocktails', cocktailRoutes);

// ROUTES
app.get('/', (req, res) => {
    res.redirect('/cocktails');
});

// LISTENING
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});