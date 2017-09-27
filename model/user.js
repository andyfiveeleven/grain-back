'use strict';

const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const debug = require('debug')('grain:user');

const userSchema = Schema({
  username: { type: String, required: true, unique:true},
  email: { type: String, required:true, unique: true},
  password: { type: String, required: true},
  findHash: {type: String, unique: true},
});
