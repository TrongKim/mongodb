import express from 'express';
import { createGroup, getGroup, getGroupById, getNameAndMember, getProfile, getSumNotification, getLimit, getByIdAndConversation } from './../controllers/groups.js';

const router = express.Router();

router.get('/', getGroup);
router.get('/getById/:_id', getGroupById);
router.get('/getName/:_id', getNameAndMember);
router.get('/getProfile/:_id', getProfile);
router.get('/getSumNotification/:_id', getSumNotification);
router.get('/getLimit/:_id/:limit', getLimit);
router.get('/getByIdAndConversation/:_id/:conversation', getByIdAndConversation);
router.post('/create', createGroup);


export default router;