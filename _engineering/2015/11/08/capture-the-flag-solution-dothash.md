---
layout: post
title:  "Capture the Flag solutions: dothash"
date:   2015-11-08
tags:   ctf, jfall
author: carlo
---

As some of you know, this year we launched a [Capture the Flag][1] competition, `#ctf` for friends and family, as a side activity to our presence at the 2015 edition of the [JFall][2]. The competition saw quite an active participation of many users, and while the prize is now [secured][3] a few people asked for the solutions of the `#ctf` puzzles. Here you are!

# Walkthrough: `dothash`

This is the first of the quizzes you find on the `#ctf` page, and it's possibly the easiest one to solve. Once you download and unpack the [zip][4], you are given a text file that contains a series of dots and hash signs:

```
..####...##..##..........#####...##.......####... [and so on]
```

So, how are you supposed to find a sting that matches the pattern of our flags (`sy_[a-zA-A]+`)? The trick here is that the flag was actually spelled out in text, using an [ASCII art][5] spanning across many lines. The newlines characters were then removed, but you can still retrieve the original message by e.g. opening up the file in your favorite text editor and adjust the visible columns to 97.

Here it is on my local shell:

![/assets/flag1_solution.png](/assets/flag1_solution.png "Solution for dothash")

So, the first flag was `sy_plaintext`. Too easy? Well, if there's one thing that drug dealership and marketing have taught the world is that giving the first one for free opens up the door to addiction, and we totally wanted you to keep playing ;-)


[1]: http://sytac.io/capture-the-flag.html
[2]: http://www.nljug.org/jfall/2015/
[3]: https://twitter.com/Sytac/status/662307272916340736
[4]: http://sytac.io/assets/flag1.zip
[5]: https://en.wikipedia.org/wiki/ASCII_art
