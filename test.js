'use strict';

let expect = require('expect.js')
let cons = require('./');
let flip = cons.flip;

function* nil() { }

describe('cons-iterator', function(){
  it('works', function(){
    let list = cons(1, cons(2, cons(3, nil())));

    expect(list.next().value).to.be(1);
    expect(list.next().value).to.be(2);
    expect(list.next().value).to.be(3);
    expect(list.next().done).to.be(true);
  });

  it('flip works', function(){
    let list = flip(flip(nil(), 2), 1);

    expect(list.next().value).to.be(1);
    expect(list.next().value).to.be(2);
    expect(list.next().done).to.be(true);
  });
});
