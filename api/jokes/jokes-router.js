// do not make changes to this file
const router = require('express').Router();
const jokes = require('./jokes-data');
const Auth = require('../auth/auth-model')

router.get('/', (req, res) => {
  res.status(200).json(jokes);
});
// router.get('/:id', (req, res, next) => {
//   Auth.getId(req.params.id)
//     .then(result => {
//       res.status(200).json(result)
//     })
//     .catch(next)
// })
// router.post('/', (req, res, next) => {
//   Auth.createAccount(req.body)
//     .then(result => {
//       res.status(201).json(result)
//     })
//     .catch(next)
// })
// router.delete('/:id', (req, res, next) =>{
//   Auth.deleteUser(req.params.id)
//     .then(result => {
//       res.json({message: 'The user has been deleted'})
//     })
//     .catch(next)
// })

module.exports = router;
