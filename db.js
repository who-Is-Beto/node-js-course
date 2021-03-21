const db = require('mongoose')

db.Promise = global.Promise;

//mongodb://db_user:ZH62c9WhfCfkr5v@cluster0-shard-00-00.1ys2v.mongodb.net:27017,cluster0-shard-00-01.1ys2v.mongodb.net:27017,cluster0-shard-00-02.1ys2v.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-123kjs-shard-0&authSource=admin&retryWrites=true&w=majority'

async function connect(url) {
  await db.connect(url,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('[db] conected!'))
    .catch(err => console.error('[db] error', err));
}

module.exports = connect