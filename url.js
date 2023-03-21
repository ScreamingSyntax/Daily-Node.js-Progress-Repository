const myURl = new URL('https://example.org:8000');
myURl.pathname = '/a/b/c'
myURl.search = '?d=e';
myURl.hash = '#fgh';

console.log(myURl.href);