---
layout: post
title:  "Extend MongoDb shell"
date:   2015/10/10
tags:   mongodb
author: davide
---

The MongoDb shell is very functional, but sometimes writing simple query is annoying.

During the debug process you need to recover specifics documents too many times.

{% highlight javascript %}
db.foo.findOne({'_id' : 42})
{% endhighlight %}

In the long run writing  query with braces and underscores becomes boring.

Fortunately the shell of MongoDb is a javascript interpreter and extend it is very easy.
We can directly add a method to the class DBCollection and use it like a native method.


{% highlight javascript %}
/**
 *
 * Return the document with '_id' = id
 *
 * @param id The identifier value
 * @param projection The projection on the document
 * @returns {*}
 */
DBCollection.prototype.findById = function (id, projection) {
    if(projection == null) {
        projection = {};
    }
    return this.findOne({'_id' : id}, projection);
}
{% endhighlight %}


Writing this code directly in the shell will add a method ***findById*** to the class ***DBCollection***.

{% highlight javascript %} 
db.foo.findById(42)
{% endhighlight %}

To avoid having to re-enter every time this method, and others that will be useful in our daily administration of MongoDb you can use the -shell parameters when you start the mongo client

{% highlight bash %} 
mongo --shell /usr/local/mongodb_ext/collectionExt.js
{% endhighlight %}

or directly enter the directive in your mongorc.js located in the user's home, and that is automatically imported every time.

{% highlight javascript %} 
load('/usr/local/mongodb_ext/collectionExt.js');
{% endhighlight %}

