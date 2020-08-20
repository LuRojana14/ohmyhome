const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const groupSchema = new Schema({
  groupName: { type: String, required: true },
  users: [{type : Schema.Types.ObjectId, ref: 'User'}],
  listItems: [String],
  tasks:[
  {
    task_id: {type : Schema.Types.ObjectId, ref: 'Task'},
    state: {type: String, enum:["pending", "complete"]},
    user_id: {type : Schema.Types.ObjectId, ref: 'User'}
  }
 ],
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});
const Group = mongoose.model('Group', groupSchema);
module.exports = Group;