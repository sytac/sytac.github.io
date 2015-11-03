---
layout: post
title:  "MongoDb identifiers"
date:   2015-10-20
tags:   mongodb
author: davide
---

In MongoDb every added document requires an identifier "_id" that acts as Primary Key.

This identifier can be expressly defined during the insert operation and it can contain both scalar values and structured values.

{% highlight javascript %}
> db.foo.insert({'_id' : 1, 'a' : 2})
> db.foo.findOne()
{ "_id" : 1, "a" : 2 }
{% endhighlight %}

### An array as identifier
If you use an array or a object as identifier you need to pay attention to the permutations.

{% highlight javascript %}
> var id1 = {'a' : 1, 'b' : 2}
> var id2 = {'b' : 2, 'a' : 1}
> id1
> { "a" : 1, "b" : 2 }
> id2
{ "b" : 2, "a" : 1 }
> db.foo.insert({'_id' : id1, 'val' : 1})
> db.foo.insert({'_id' : id2, 'val' : 2})
> db.foo.find()
{ "_id" : { "a" : 1, "b" : 2 }, "val" : 1 }
{ "_id" : { "b" : 2, "a" : 1 }, "val" : 2 }
{% endhighlight %}

The identifiers will be treated like they are different, and it will be allowed to insert documents that have apparently the same **_id** field.

If you need to use as identifier an array or an object, just ensure an unique index to the collection on the identifier's fields.

{% highlight javascript %}
db.foo.ensureIndex({'_id.a' : 1, '_id.b' : 1}, { unique: true })
{% endhighlight %}

Now, if you try to add two documents with id with different permutations of the same array, the server will return an error message.

{% highlight javascript %}
> var id1 = {'a' : 1, 'b' : 2}
> var id2 = {'b' : 2, 'a' : 1}
> db.foo.ensureIndex({'_id.a' : 1, '_id.b' : 1}, { unique: true })
> db.foo.insert({'_id' : id1, 'val' : 1})
> db.foo.insert({'_id' : id2, 'val' : 2})
E11000 duplicate key error index: test.foo.$_id.a_1__id.b_1  dup key: { : 1.0, : 2.0 }
{% endhighlight %}

### ObjectId
If not expressly specified in the insert operation, MongoDb add an identifier of type ObjectId

{% highlight javascript %}
> db.foo.insert({'a' : 1})
> db.foo.findOne()
{ "_id" : ObjectId("514b58e3ad902f82ffd714d3"), "a" : 1 }
{% endhighlight %}

The ObjectId isn't casually generated but it contains specific information:

* 4-byte timestamp
* 3-byte machine identifier
* 2-byte process identifier
* 3-byte counter, starting with a random value

It is possible to obtain additional information about the document using the ObjectId, especially the timestamp of the insert operation.

By calling the method getTimestamp() you can obtain the time of creation of the document.

{% highlight javascript %}
> var myId = db.foo.findOne()._id
> myId
ObjectId("514b58e3ad902f82ffd714d3")
> myId.getTimestamp()
ISODate("2013-03-21T19:00:51Z")
{% endhighlight %}

The possibility of insert the timestamp directly in the ObjectId comes in handy during the upsert operation.

Take for example the following code, I want to save

{% highlight javascript %}
> db.foo.update(     {'sessionId' : 'somesession'},     {         'sessionId' : 'somesession',         ts : new Date(),         data : 'someData'     }     , {upsert: true} )
> db.foo.find()
{ "_id" : ObjectId("515c64aed72e2db433a77108"), "sessionId" : "somesession", "ts" : ISODate("2013-04-03T17:20:00.949Z"), "data" : "someData" }
> db.foo.update(     {'sessionId' : 'somesession'},     {         'sessionId' : 'somesession',         ts : new Date(),         data : 'someData'     }     , {upsert: true} )
> db.foo.find()
{ "_id" : ObjectId("515c64aed72e2db433a77108"), "sessionId" : "somesession", "ts" : ISODate("2013-04-03T17:20:13.989Z"), "data" : "someData" }
{% endhighlight %}

As can be seen, the timestamp was updated and we lost the original value of creation of the document.

Instead, using the ObjectId we can know the real time creation.

Some problems using ObjectId's timestamp arise when you have to do some query on the creation time.
MongoDb doesn't offer a query command that access to ObjectId parts. It will be necessary to look ahead the identifier for comparison.

The following code shows how to do a query in a data range, exploiting a generation of of MongoId objects. (MongoId is the PHP object who wrap de MongoDb ObjectId)

{% highlight javascript %}
$tsFrom = new MongoId(str_pad(dechex($timestampStart), 24, "0", STR_PAD_RIGHT));
$tsTo = new MongoId(str_pad(dechex($timestampStop + 1), 24, "0", STR_PAD_RIGHT));

$collection-&gt;find(
    array(
        array('_id' =&gt; array('$gt' =&gt; $tsFrom)),
        array('_id' =&gt; array('$lt' =&gt; $tsTo))
    )
);
{% endhighlight %}
