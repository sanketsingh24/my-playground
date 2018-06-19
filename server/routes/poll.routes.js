import { Router } from 'express';
import * as PollController from '../controllers/Polls.controller';
const router = new Router();

// Get all Polls
router.route('/polls').get(PollController.getPolls);

// Get one Poll by cuid
router.route('/polls/:cuid').get(PollController.getPoll);

// Add a new Poll
router.route('/polls').post(PollController.addPoll);

// Delete a Poll by cuid
router.route('/polls/:cuid').delete(PollController.deletePoll);

export default router;
