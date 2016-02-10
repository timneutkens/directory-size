# Directory Size

Get the number of items inside a directory.

Tested using:

` node -v v5.5.0 `

##Usage
`npm install --save directory-size`

###Example
```javascript
const directorySize = require('directory-size');
directorySize('/tmp').then(function(count) {
    console.log(count);
});
```

##License
MIT