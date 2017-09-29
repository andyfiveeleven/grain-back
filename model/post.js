'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Edible = require('../model/edible.js');
const superagent = require('superagent');
const debug = require('debug')('grain:post');

const User = require('../model/user.js');

const postSchema = Schema({
  postTitle: {type: String, required: true},
  postDate: {type: Date, default: Date.now},
  postBody: {type: String, required: true},
  // TODO: postPicture: {type: ?????? }
  postCategory: {type: String, required: true},
});

debug('postSchema');
module.exports = mongoose.model('post', postSchema);
