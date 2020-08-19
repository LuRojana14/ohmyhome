const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
  messageSender: {type : Schema.Types.ObjectId, ref: 'User'}
  messageReceiver: {type : Schema.Types.ObjectId, ref: 'User'}
  task_id: [{type : Schema.Types.ObjectId, ref: 'Task'}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const Message = mongoose.model('Message', messageSchema);
module.exports = Message;