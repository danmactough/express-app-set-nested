# express-app-set-nested

[![Greenkeeper badge](https://badges.greenkeeper.io/danmactough/express-app-set-nested.svg)](https://greenkeeper.io/)
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
