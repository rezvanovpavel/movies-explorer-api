const router = require('express').Router(); // создали роутер
const { celebrate, Joi } = require('celebrate');

const {
  getCurrentUserInfo, updateInfo,
} = require('../controllers/users');

router.get('/me', getCurrentUserInfo);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
  }),
}), updateInfo);

module.exports = router; // экспортировали роутер
