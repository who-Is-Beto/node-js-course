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

function getMessages(filterUser) {
  return new Promise((response, reject) => {
    response(store.list(filterUser))
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

const deleteMessage = (id) => {
  return new Promise((res, rej) => {
    if (!id) {
      rej('Inavlid params')
      return false
    }

    store.remove(id)
      .then(() => {
        res()
      })
      .catch((error) => {
        rej(error)
      })
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
}