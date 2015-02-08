# express-app-set-nested
Provides your express application a version of app.set that handles dot-nested notation 

## Usage

```js
var express = require('express');
require('express-app-set-nested');
app.set('my.nested.config.param', true);
app.get('my');
// { nested: { config: { param: true } } }
app.get('my.nested.config.param');
// true
```
