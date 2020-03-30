# url-shortener

## How to use
```
$ git clone https://github.com/YiTingLee/url-shortener.git
$ cd url-shortener
$ npm install
$ npm run
```

Open your browser on http://localhost:3000/url-shortener/?url=https://www.google.com/
You will get the short url

## Use Docker
```
$ git clone https://github.com/YiTingLee/url-shortener.git
$ cd url-shortener
$ docker build . -t url-shortener
$ docker run -it -p 3000:3000 url-shortener
```
