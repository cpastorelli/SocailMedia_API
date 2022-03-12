const router = require('express').Router();
const { removeFriend, getAllUsers, 
    makeNewUser, getOneUser, 
    updateUser, removeUser, 
    addFriend } = require('../../controller/users-controller');

router.route('/').get(getAllUsers).post(makeNewUser);
router.route('/:userId').get(getOneUser).put(updateUser).delete(removeUser);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;