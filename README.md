# express-version

#useage

npm i express-router-version

service.js
```
    var ev = require('express-router-version')

    var v1 = function(req,res,next){
        res.send('v1');
    }

    var v2 = function(req,res,next){
            res.send('v2');
        }
    module.export = ev(v1,v2);

```

router.js
```
var router = require('express').Router();

router.get('/:version',require('./service'));

```
