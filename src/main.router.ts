import express from 'express';
import Views from './views/router';
import Apis from './api/api.router';
const router = express.Router();

router.use('/admin', Views);

router.use('/api', Apis);

export default router;