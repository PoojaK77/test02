var _cb = require('./_cb.js');
var _isArrayLike = require('./_isArrayLike.js');
var keys = require('./keys.js');

// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = _cb(iteratee, context);
  var _keys = !_isArrayLike(obj) && keys(obj),
      length = (_keys || obj).length,
      results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}

module.exports = map;
