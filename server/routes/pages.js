import express from 'express';
import Controller from '../controllers';

const router = express.Router();
const controller = new Controller();

router.get('/index', controller.pages.home);

export default router;