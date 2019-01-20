import dataCatalogPreview from '../../../data/catalogpreview.json';
import dataMenu from '../../../data/menu.json';
import dataSocial from '../../../data/social.json';
// import Menu from '../../models/Menu';

const status = {
    success: 200,
    error  : 500
};

export default {
    /**
     * Метод возвращает объект с данными для главной страницы
     * @param {object} req - объект запроса
     * @param {object} res - объект ответа
     */
    async getContent(req, res) {
        const data = {
            menu          : await this._getMenu(req, res),
            social        : await this._getSocial(),
            catalogPreview: await this._getCatalogPreview()
        };

        res.send(data, status.success);
    },

    /**
     * Метод возвращает все элементы меню.
     * @param {object} req - объект запроса
     * @param {object} res - объект ответа
     * @returns {object} elements - возвращает данные из БД, или объект с ошибкой.
     */
    _getMenu() {
        return dataMenu;
        // return Menu.getAllElements()
        //     .then((elements) => {
        //         return elements
        //         ; })
        //                 .catch((error) => {
        //         return res.send(error, 500)
        //         ; });
    },

    /**
     * Метод возвращает все элементы социалки.
     * @returns {object} elements - возвращает данные из БД, или объект с ошибкой.
     */
    _getSocial() {
        return dataSocial;
    },

    _getCatalogPreview() {
        return dataCatalogPreview;
    }
};
