# ultra-console
> A console that expands the console of chrome.

# Usage
```javascript
require('ultra-console');

console.styleText({
  text: 'hello ultra',
  style: 'font-size: 20px'
})

```

# Api

## console.styleText(option)

- option <object>
  - text <string>
  - style <string>  
  

For example:

```javascript
console.styleText({
  text: 'hello ultra',
  style: 'font-size: 20px'
})
```  

---  

## console.styleSupport

For example:

To show the style that `console.log` support:

```javascript
console.styleSupport()
```

---  

## console.img(option)

- option <object>
  - url <string>
  - width <number>
  - height <number>
  - exStyle <string>

For example, a simple sample:

```javascript
// initial value: width=100, height=100, exStyle=''
console.img({
  url: 'http://img.jpg',
});
```

a multiple sample:

```javascript
console.img({
  url: 'http://img.jpg',
  width: 200,
  height: 200,
  exStyle: 'background-size: cover'
});
```