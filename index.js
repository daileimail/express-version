module.exports = function () {
    var funcs = [].slice.call(arguments);
    return function (req, res, next) {
        var version = funcs.length;
        try {
            if (req.params.version) {
                version = parseInt(req.params.version.substring(1));
                if (version > funcs.length) {
                    version = funcs.length;
                }
            }
            funcs[version - 1](req, res, next)
        } catch (err) {
            funcs[version - 1](req, res, next)
        }
    }
}