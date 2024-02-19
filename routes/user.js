const router = require('express').Router(); // создали роутер
const { celebrate, Joi } = require('celebrate');

const {
  getCurrentUserInfo, updateInfo,
} = require('../controllers/users');

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

router.get('/me', getCurrentUserInfo);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().pattern(URL_REGEX),
    name: Joi.string().min(2).max(30),
  }),
}), updateInfo);

module.exports = router; // экспортировали роутер
