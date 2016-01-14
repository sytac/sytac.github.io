---
layout: post
title:  "Capture the Flag solutions: executable"
description: "The second Sytac Capture the Flag competition walkthrough: of executable JARs and metadata"
date:   2016-01-14
tags:   ctf, jfall
author: carlo
---

After the [first episode](/engineering/2015/11/08/capture-the-flag-solution-dothash/),
here we are again to walk you through the solutions of the first [Capture the Flag](http://sytac.io/capture-the-flag.html)
competition made by Sytac.

The second problem in the list is called `executable`, and indeed when you unzip the
[quiz downloadable](http://sytac.io/assets/flag2.zip), you are left with an executable
JAR file, aptly named `executable-1.0.jar`.

So, what should we do with it? Well, the first thing is of course to try to run it,
but that won't take us much further:

{% highlight bash %}
$ java -jar executable-1.0.jar
Hello World!
{% endhighlight %}

Ok, time to see what's inside of this JAR now:

{% highlight bash %}
$ unzip -l executable-1.0.jar
Archive:  executable-1.0.jar
  Length     Date   Time    Name
 --------    ----   ----    ----
        0  10-13-15 11:44   META-INF/
      187  10-13-15 11:44   META-INF/MANIFEST.MF
        0  10-13-15 11:44   io/
        0  10-13-15 11:44   io/sytac/
        0  10-13-15 11:44   io/sytac/ctf/
      539  10-13-15 11:44   io/sytac/ctf/App.class
        0  10-13-15 11:44   META-INF/maven/
        0  10-13-15 11:44   META-INF/maven/io.sytac.ctf/
        0  10-13-15 11:44   META-INF/maven/io.sytac.ctf/executable/
     1234  10-13-15 11:44   META-INF/maven/io.sytac.ctf/executable/pom.xml
      106  10-13-15 11:44   META-INF/maven/io.sytac.ctf/executable/pom.properties
 --------                   -------
     2066                   11 files
{% endhighlight %}

Not much in there that catches the eye, just a regular JAR file that (you can see it from
the presence of the `pom.xml`) was created with [Apache Maven](https://maven.apache.org/).
Of all the files that are in the JAR, the first candidate to contain something interesting
is the `MANIFEST.MF`, right? Let's see its content:

{% highlight bash %}
$ unzip -j executable-1.0.jar META-INF/MANIFEST.MF
Archive:  executable-1.0.jar
  inflating: MANIFEST.MF

$  cat MANIFEST.MF
Manifest-Version: 1.0
Archiver-Version: Plexus Archiver
Built-By: skuro
Sytac-Flag: sy_manifested
Created-By: Apache Maven 3.3.3
Build-Jdk: 1.8.0_31
Main-Class: io.sytac.ctf.App
{% endhighlight %}

Ah-ha! There you have it, the solution of the quiz, just in front of you and in plain
text: `sy_manifested`.

That was waaaay too easy, as testified by every single participant solving this very quiz.
But up to now it was just to warm you up, the next ones start to be much harder, you might
want to have an head start and [try them yourself](http://sytac.io/capture-the-flag.html#tasks)
if you didn't yet.

See you at the next episode!
