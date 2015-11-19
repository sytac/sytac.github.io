---
layout: post
title:  "JavaScript 101 - Export by reference in ES6"
date:   2015-09-13
tags:   javascript 101
author: davide
---

At first glance, you'd think that the ES6 syntax to import/export
modules, is simply something more elegant of the old CommonJs syntax
and that the following relation is *true*:

{% highlight javascript %}
module.exports = export

require = import
{% endhighlight %}

Take for example the following code:

{% highlight javascript %}
// counter.js
var current = 0;

function add() {
  current++;
}

function log() {
  console.log('Log: ', current);
}

module.exports = {
  current: current,
  add: add,
  log : log
};

// index.js
var counter = require('./counter');

console.log('Start: ', counter.current);
counter.add();
counter.add();
console.log('End: ', counter.current);
counter.log();

// output
Start:  0
End:  0
Log:  2
{% endhighlight %}


The result obtained is the same expected.
The `add` method increment the value of the internal `counter` module variable `current`,
 but this doesn't change the value exported, which it is precisely a `value`.

Rewrite the same example, as similar as possible, with the ES6 import/export syntax.

{% highlight javascript %}
// counter.js
var current = 0;
export function add() {
  current++;
}

export var current = current;

//index.js
import {current, add} from './counter';

console.log('Start: ', current);
add();
add();
console.log('End: ', current);

// output
Start:  0
End:  2
{% endhighlight %}


The result is completely unexpected.
The changes done internally to the module are reflected outside.
The reason is that the `export` return a kind of pointer
to the internal variable `current` instead of the value!
