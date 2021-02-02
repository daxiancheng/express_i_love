const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chengzi_test');

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('成功连接')
  const chengziSchema = new mongoose.Schema({
    name: String,
    age: Number,
    ha:String
  });
  const chengziModel = mongoose.model('user', chengziSchema);
  (async ()=> {
      let cc = await chengziModel.updateOne({age:25},{name:'chengzi2',ha:'shabi'})
      console.log(cc)
  })()
});
module.exports = db;