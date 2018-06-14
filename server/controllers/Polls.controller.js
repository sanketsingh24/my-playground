import Poll from '../models/Polls';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Polls
 * @param req
 * @param res
 * @returns void
 */
export function getPolls(req, res) {
  Poll.find().sort('-dateAdded').exec((err, Polls) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ Polls });
  });
}

/**
 * Save a Poll
 * @param req
 * @param res
 * @returns void
 */
export function addPoll(req, res) {
  if (!req.body.Poll.name || !req.body.Poll.title || !req.body.Poll.content) {
    res.status(403).end();
  }

  const newPoll = new Poll(req.body.Poll);

  // Let's sanitize inputs
  newPoll.title = sanitizeHtml(newPoll.title);
  newPoll.name = sanitizeHtml(newPoll.name);
  newPoll.content = sanitizeHtml(newPoll.content);

  newPoll.slug = slug(newPoll.title.toLowerCase(), { lowercase: true });
  newPoll.cuid = cuid();
  newPoll.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ Poll: saved });
  });
}

/**
 * Get a single Poll
 * @param req
 * @param res
 * @returns void
 */
export function getPoll(req, res) {
  Poll.findOne({ cuid: req.params.cuid }).exec((err, Poll) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ Poll });
  });
}

/**
 * Delete a Poll
 * @param req
 * @param res
 * @returns void
 */
export function deletePoll(req, res) {
  Poll.findOne({ cuid: req.params.cuid }).exec((err, Poll) => {
    if (err) {
      res.status(500).send(err);
    }

    Poll.remove(() => {
      res.status(200).end();
    });
  });
}
