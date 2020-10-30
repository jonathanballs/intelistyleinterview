import express from 'express';
import { Garment } from './mongoose.js'

const router = express.Router();

/**
 * Return 20 garments
 */
router.get('/', async (req, res, next) => {
  try {
    res.json(await Garment.find().limit(20))
  } catch (e) {
    next(e);
  }
});

/**
 * Get single garment
 */
router.get('/search/', async (req, res, next) => {
  try {
    const query = req.query['q'];
    if (!query) return res.status(400);

    const result = await Garment.find({$text: {$search: query}}).limit(20);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

export default router;
