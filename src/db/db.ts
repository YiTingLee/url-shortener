const urlMapping = new Map();

function select (url: string): string {
  return urlMapping.get(url);
}

function insert (url: string, shortUrl: string): void {
  urlMapping.set(shortUrl, url);
}

const Db = { select, insert };
export { Db};
