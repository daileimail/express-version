# express-version

#useage

service:
```
    var ev = require('express-version')

    var v1 = function(req,res,next){
        res.send('v1');
    }

    var v2 = function(req,res,next){
            res.send('v2');
        }
    module.export = ev(v1,v2);

```

router
```
var router = require('express').Router();

router.get('/:version',require('./service'));

```
