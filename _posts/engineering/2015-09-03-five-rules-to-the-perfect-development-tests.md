---
layout: post
categories: engineering
title:  "Five rules to the perfect development test"
date:   2015-09-03
image:  barchart.jpg
author: carlo
---

<span class="dropcap">H</span>iring great developers is a tough job, as the market is [very competitive][0] and it's not trivial to assess the skills of a developer you only know by his or her LinkedIn profile or CV.

The process almost inevitably involves face to face technical interviews with your most senior engineers, relying on their judgement and gut feeling, since:

> *Intuition is compressed experience*<br />
>            *-- [Karl E. Weick][1]*

While such step proves to be very useful, it's of course not enough, and almost always you will also ask your candidates to complete tests and **development exercises** to gain a more practical and first hand overview of the candidate's skills.

But how do you design your development exercise to make the most out of it, i.e. to really gain the knowledge you seek from the submitted result? Here's a simple list to guide your hands while you're at the drawing board for your company's dev test.

Make it relevant
================

That's almost a no brainer, but it's worth stressing it out: you are looking for your next co-worker, so make sure that the solution involves problem solving skills that are **relevant to your business** or, if you're like [Sytac][-1], your customers' businesses.

For instance, if you are building web applications you should base your test on usages of your own public APIs. Making the test closer to day-to-day activities has several benefits, and it's not only about having the candidate exercise himself on a look-alike of a user story from your backlog, also the senior engineers reviewing the code will be able to wield their deep contextual knowledge in their assessment.

You also need to realise that next to the code itself, there are a number of other aspects to software development that are always relevant, and as such you should get some insights from your test submissions: for starters, it's good practice to **request the [git][2] / VCS history together with the solution**. It will enable you to detect whether [TDD][3] was applied, or if and how many design changes were applied.

Make it quick
=============

There's no point in requesting a full blown, production ready application with many moving parts, it would only slow down the hiring process and possibly frustrate both the candidate and the reviewers, who will consider the assessment activities a painful chore. **Keep the test small and to the point**, something that can be completed in half a day or four [pomodoros][4] is more than enough.

Also, you should enable the candidate to start quickly to produce the solution, so consider to attach things like a [maven archetype][5], a test suite or a supporting library to the test description.

Anything that can bootstrap the development immediately after receiving the test, or that sets guidelines which will be likely followed by all applicants, will potentially quicken the submissions and the reviews.

Make it measurable
==================

Yes, gut feeling is a perfectly legit tool to employ when assessing candidates. Still, you should try to consolidate what baseline is used for assessing each candidate.

Pretty much like [velocity][6] to a scrum team, scoring or grading a candidate is a process that involves many unknowns and very subjective judgement, which you should turn into a number to make it controllable, without necessarily having to give it an absolute value of truth.

As a suggestion, you can ask the reviewer to grade the exercise for different aspects of the submissions. You can then *create your scoring formula* which takes all the grades, apply *arbitrary* weights to them and sum everything together. Then you select tresholds, again *arbitrary*, to guide your decision wether to continue the hiring process or not.

If numbers don't work for you, you can go for color coding, whatever works for you. Just bear in mind, all this subjectivity requires **constant review and adjustments**.

By constantly reviewing your grading process, you will be able to adjust your tresholds, for instance by offetting results depending on which of your senior engineers reviewed the submission.

Just remember: your target should be a reliable, subjective-but-still-mesurable way of comparing candidates, and by nature this has to evolve with time, growing with your company and your team.

And please, avoid scoring a candidate on specific APIs he has or has not used: *you should strive to find people that totally outsmart your test*, and those people will most likely go beyond what you think it's the best solution!

Rely on gut feeling
===================

Measures are all nice and dandy, but you must realise that not only are they subjective, they are just an indication of your best asset in the company: **the judgement and experience of a senior engineer you trust**.

For instance, while I personally employ a numeric scale to grade candidates similar to what discussed in the previous paragraph, I made sure to allocate a sound *30%* of it to an overall subjective feeling.

Compressed experience, 'aight?

Make it interesting
===================

It's crucial to realise one thing: you're sending the development case very early to your candidates, and it can and will contribute to the first impressions they will get of your company. This is why the development exercise must be **fun**: if you stimulate the imagination and curiosity, if you are able to talk with that smart-ass, artist-like alpha-nerd that lives in all the best developers, you will eventually start a working relationship with the right foot.

Any developer wants to learn something new, be it a brand new piece of technology or just something they never had the chance to put their hands on. You should consider including something along those line in your test, something like "bonus points if you apply [DDD][9]".

Another effective strategy is to give the developer complete freedom of choice in some areas to gauge his attitude towards the aesthetics or wit, something like "the output can be as you find proper". If the output was on the command line and you see [ASCII art][7] and [colored headers][8], then you know who you're dealing with.

Conclusions
===========

Designing effective development exercises is an art in itself. The avode rules can be applied in many different ways, and you should only invest enough time to create the test.

Still, if think carefully of what your perfect hire should look like, at 360 degrees, and then tailor the test in a way that him / her whould be able to impress you, you will make the most out of this otherwise plain and standard step of the recruiting process.

Happy recruiting!

<br />

[-1]: http://www.sytac.nl
[0]:  http://www.indeed.com/jobtrends/information-technology-industry
[1]:  http://www.amazon.com/Sensemaking-Organizations-Foundations-Organizational-Science/dp/080397177X
[2]:  https://git-scm.com/
[3]:  http://agiledata.org/essays/tdd.html
[4]:  http://pomodorotechnique.com/
[5]:  https://maven.apache.org/guides/introduction/introduction-to-archetypes.html
[6]:  http://guide.agilealliance.org/guide/velocity.html
[7]:  http://www.chris.com/ascii/index.php?art=transportation/airplanes
[8]:  http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/x329.html
[9]:  http://martinfowler.com/tags/domain%20driven%20design.html
