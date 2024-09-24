import { MeiliSearchController } from './meilisearch.controller';
import express from 'express';
const router = express.Router();

router.get('/', MeiliSearchController.getItemsFromMeili);

export const MeilisearchRoutes = router;
