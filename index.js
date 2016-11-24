module.exports = function () {
    var funcs = [].slice.call(arguments);
    var funcsName = funcs.map(function (fun) {
        return fun.name;
    })
    return function (req, res, next) {
        var version = funcs.length;
        if (req.params.version) {
            var index = funcsName.indexOf(req.params.version)
            if (index !== -1) {
                funcs[index](req, res, next)
            }else {
                funcs[version-1](req, res, next)
            }
        }else {
            funcs[version-1](req, res, next)
        }
    }
}
