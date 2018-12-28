import Home from './pages/home';

export default class Controller {
    constructor() {
        this.pages = {
            home : Home.getContent.bind(Home)
        };
    }
}