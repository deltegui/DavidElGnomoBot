const https = require('https');

function makeRedditRequest() {
  return new Promise((resolve, reject) => {
    https.get('https://www.reddit.com/r/traps/top/.json?sort=top', resp => {
      let data = '';
      resp.on('data', chunk => {
        data += chunk;
      });
      resp.on('end', () => {
        resolve(JSON.parse(data));
      })
    }).on('error', reject);
  });
}

function randomNumber(from) {
  return Math.floor(Math.random()*from);
}

module.exports = () => makeRedditRequest()
  .then(result => {
    const number = randomNumber(result.data.dist);
    return result.data.children[number].data.url;
  });