---
layout: post
title:  "JavaScript 101 - Argument vs Parameter"
date:   2015-08-15
tags:   javascript 101
author: jp
---

I have been happily using the terms `parameter` and `argument` for the better part
of my programming life without ever asking myself what these words actually mean.
Until I got blindsided one morning while brushing my teeth when I realised
that these two actually mean something different.

__Parameter is the variable in the declaration of function.__

{% highlight javascript %}
function myFunction(myParameter){

}
{% endhighlight %}

__Argument is the actual value of this variable that gets passed to function__

{% highlight javascript %}
var myArgument = 'some argument';
myFunction(myArgument);
{% endhighlight %}

#### Mnemonic

How to memorize this?

__You `ca`ll a function with an `a`rgument.__
