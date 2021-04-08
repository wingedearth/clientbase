import express from 'express';
import HomeController from './controllers/HomeController';
import VersionController from './controllers/VersionController';

// Instantiate Express router
const router = express.Router();

router.get('/version', VersionController);
router.get('/', HomeController);

export default router;
