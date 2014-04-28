'use strict';

var exports = module.exports = cons

function* cons(x, xs) {
  yield x;
  for (let a of xs)
    yield a;
}

exports.flip = function* consFlip(xs, x) {
  yield* cons(x, xs);
}
