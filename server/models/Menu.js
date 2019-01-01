import MenuScheme from '../schemes/Menu';

export default {
    async getAllElements() {
        return await MenuScheme.findAll({ raw: true })
            .then(elements => elements)
    }
};
