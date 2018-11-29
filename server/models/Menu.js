import MenuScheme from '../schemes/Menu';

class MenuModel {
    async getAllElements() {
        return await MenuScheme.findAll({ raw: true })
            .then(elements => elements)
    }
}

export default MenuModel;
