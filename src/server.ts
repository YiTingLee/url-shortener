import * as express from 'express';
import * as crypto from 'crypto';
import { Db } from './db/db';

const app = express();

app.get('/url-shortener/', function (req, res) {
  const url = req.query.url;
  crypto.pbkdf2(url, 'salt', 100000, 4, 'md5', (err, derivedKey) => {
    if (err) res.status(400).send('Error');
    const shortUrl = derivedKey.toString('hex');
    if (!Db.select(url)) Db.insert(url, shortUrl);
    res.send({ url: `localhost:3000/${shortUrl}` });
  });
});

app.get('/:shortUrl', function (req, res) {
  const shortUrl = req.params.shortUrl;
  const url = Db.select(shortUrl);
  if (!url) res.status(404).send('Not Found');
  res.status(303).redirect(url);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
