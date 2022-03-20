const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  name: {
    type: String
  },
  comment: {
    type: String
  }
},{
  collection: 'posts'
});

module.exports = mongoose.model('Post', Post);
