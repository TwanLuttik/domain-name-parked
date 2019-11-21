import pulse from 'pulse-framework';

export default new pulse({
  data: {
    test: false
  },
  request: {
    baseURL: 'https://35.232.166.109:3001'
  },
  routes: {
    sendEmail: (request, body) => request.post('send_email', body)
  },
  actions: {
    sendEmail({ base }, email, name, domain) {
      return new Promise((resolve, reject) => {
        var body = {
          email: email,
          name: name,
          domain: domain
        }
        base.routes.sendEmail(body)
        .then((e) => {
          return resolve(e);
        })
        .catch((r) => {
          return reject(r);
        })
        
      })
    }
  }
})