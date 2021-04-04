import express from 'express';
import HomeController from './controllers/HomeController';

// Instantiate Express router
const router = express.Router();

router.get('/', HomeController);

export default router;
