import {
    Router
} from 'express';
import axios from 'axios';

const router = Router();

// Route để lấy danh sách cocktail
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        const cocktails = response.data.drinks;
        res.render('index', {
            cocktails
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Route để tìm kiếm cocktail theo tên
router.get('/search', async (req, res) => {
    const {
        s
    } = req.query;
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${s}`);
        const cocktails = response.data.drinks;
        res.render('index', {
            cocktails
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Route để lấy thông tin một cocktail ngẫu nhiên
router.get('/random', async (req, res) => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const cocktail = response.data.drinks[0];
        res.render('detail', {
            cocktail
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Route để lấy danh sách cocktail theo chữ cái đầu tiên
router.get('/letter/:letter', async (req, res) => {
    const {
        letter
    } = req.params;
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
        const cocktails = response.data.drinks;
        res.render('index', {
            cocktails
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Route để lấy chi tiết của một cocktail
router.get('/:id', async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const cocktail = response.data.drinks[0];
        res.render('detail', {
            cocktail
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Route để lọc cocktail theo thành phần
router.get('/filter/ingredient/:ingredient', async (req, res) => {
    const {
        ingredient
    } = req.params;
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const cocktails = response.data.drinks;
        res.render('index', {
            cocktails
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Route để lọc cocktail theo danh mục
router.get('/filter/category/:category', async (req, res) => {
    const {
        category
    } = req.params;
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const cocktails = response.data.drinks;
        res.render('index', {
            cocktails
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Route để lọc cocktail theo loại thức uống
router.get('/filter/alcoholic/:alcoholic', async (req, res) => {
    const {
        alcoholic
    } = req.params;
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholic}`);
        const cocktails = response.data.drinks;
        res.render('index', {
            cocktails
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

// Route để lọc cocktail theo loại ly
router.get('/filter/glass/:glass', async (req, res) => {
    const {
        glass
    } = req.params;
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`);
        const cocktails = response.data.drinks;
        res.render('index', {
            cocktails
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

export default router;