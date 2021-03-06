const User = require('../../models/user.model');

const deleteUser = (req, res) => {
  const userId = req.user.id;

  const sendResponse = result => {
    res.json({
      status: 'success',
      result
    });
  };

  const sendError = error => {
    const errMessage =
      error.message || 'must handle this error on registration';
    res.json({
      status: 'error',
      error: errMessage
    });
  };

  User.findByIdAndDelete(userId)
    .then(async () => {
      const removed = { user: true };
      try {
        // maybe you want delete some another document by this user in other collection, write here
        sendResponse(removed);
      } catch (err) {
        sendError(err);
      }
    })
    .catch(sendError);
};
module.exports = deleteUser;
