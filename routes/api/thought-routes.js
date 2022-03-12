const router = require('express').Router();
const { removeReaction, getAllThoughts, 
    makeNewThought, getOneThought, 
    updateThought, forgetThought, 
    newReaction } = require('../../controller/thoughts-controller');

router.route('/').get(getAllThoughts).post(makeNewThought);
router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(forgetThought);
router.route('/:thoughtId/reactions').post(newReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;