---
layout: post
title:  "JavaScript 101 - ES6 array spread operator"
date:   2016-02-02
tags:   javascript 101
author: jp
---

Getting your function arguments as a proper array in a clean way using the es6 array
spread operator.

First let's do it in a way that is common for es5:

{% highlight javascript %}
function foo() {
  var args = [].slice.call(arguments);
  console.log(args);
}
{% endhighlight %}

To make our life easier we can use the es6 array spread operator:

{% highlight javascript %}
function foo(...args) {
  console.log(args);
}
{% endhighlight %}
