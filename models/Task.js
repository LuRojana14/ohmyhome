const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  user_id: {type : Schema.Types.ObjectId, ref: 'User'},
  state: {type: String, enum:["pending", "complete"]}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;