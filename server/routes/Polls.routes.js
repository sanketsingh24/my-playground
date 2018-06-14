import { Router } from 'express';
import * as PollController from '../controllers/Poll.controller';
const router = new Router();

// Get all Polls
router.route('/Polls').get(PollController.getPolls);

// Get one Poll by cuid
router.route('/Polls/:cuid').get(PollController.getPoll);

// Add a new Poll
router.route('/Polls').Poll(PollController.addPoll);

// Delete a Poll by cuid
router.route('/Polls/:cuid').delete(PollController.deletePoll);

export default router;
