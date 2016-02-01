---
layout: post
title:  "JavaScript 101 - Execute shell command"
date:   2016-02-01
tags:   javascript 101
author: jp
---

Execute a shell command - the quick and dirty way.

{% highlight javascript %}
console.log(require('child_process').execSync('ls -la').toString());
{% endhighlight %}

How about async?

{% highlight javascript %}
var exec = require('child_process').exec;

exec('ls -la', function(err, stdout, stderr){
   console.log(stdout);
});
{% endhighlight %}
