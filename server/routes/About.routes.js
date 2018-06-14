import { Router } from 'express';
import * as AboutController from '../controllers/About.controller';

const router = new Router();

//Get the About Content
router.route('/about').get(AboutController.getAbout);


export default router;
