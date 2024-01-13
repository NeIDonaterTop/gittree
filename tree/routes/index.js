var express = require('express');
var router = express.Router();

router.get('/list', function(req, res, next) { res.send("<h1>Страница Листа</h1>")});
router.get('/koren', function(req, res, next) { res.send("<h1>Страница Корня</h1>")
});
router.get('/stvol', function(req, res, next) { res.send("<h1>Страница Ствола</h1>")
});
module.exports = router;
