import express from 'express';
import MenuModel from '../../models/Menu';

const router = express.Router();
const menu = new MenuModel();

/**
 * Получение всех элементов меню
 */
router.get('/menu', (req, res) => {
    menu
        .getAllElements()
            .then((elements) => res.send(200, elements))
            .catch((error) => res.send('500', error));
});

export default router;