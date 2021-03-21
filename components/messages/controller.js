const store = require('./store')

function addMessage(user, message) {

  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[message controller] there is no user o message')
      reject('incorrect data')

      return false
    }

    const fullMessage = {
      user,
      message,
      date: new Date()
    }
    store.add(fullMessage)
    resolve(fullMessage)
  })

}

function getMessages() {
  return new Promise((response, reject) => {
    response(store.list())
  })
}

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (id && message) {
      try {
        const data = await store.updateText(id, message);
        resolve(data);
      } catch (error) {
        reject(new Error(error));
      }
    } else {
      reject(new Error('Missing params'));
    }
  });
};

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
}