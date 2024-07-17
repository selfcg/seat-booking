# JS Seat Booking Application

## Overview:

After 2 years in the web-development industry, I have realized that by far my greatest weakness is a sound understanding of pure JavaScript.

My projects have mostly utilized React as the front-end framework, and as the complexity of applications has increased, the need for a deeper understanding of JavaScript has surfaced (via countless hours of not even knowing where to start debugging very basic problems).

I have been 'carried' through my projects through React, and am looking to further expand my front-end knowledge via implementing some (admittedly basic) vanilla JavaScript projects from scratch.

I hope to document my learning process through these projects, to both illustrate my abilities as a front-end developer, and also to remind myself where I started.

This is my first one.

## Plan

I found a fun example of a movie theatre seat-booking application that I believe will serve as a good test for the recent learning in classes and event handling.

The example can be found [here](https://seatbookingapp.netlify.app/)

## Learning Roadmap

I hope to attach commits to each sub-section here to show progress as it is made.

[Here](https://github.com/selfcg/seat-booking/tree/83219247fe311a9af300375e82b2fa295d4f0fa3) is the initial project commit.

---

### Folder Structure

Because this is the first vanilla JS project I've done from scratch, I am concerned with making things as easy and modular as possible. One of the areas I immediately had question marks about was how folders should be structured.

It should be noted that I am used to Node.js for package management, and will continue to use that throughout my projects.

I used [this guide](https://blog.logrocket.com/node-js-project-architecture-best-practices/) to help me organize my folder layout. Since we are serving static content only (i.e., no need for any server connections or setting up middleware), no `public` folder is needed. I can see a use for a `components` (i.e., to handle the Seat class) and `utils` folder (to help abstract some DOM methods), so those will be included.

I'm not sure if we will tackle unit testing yet here, but it is certainly worthy of consideration.

---

### Utility classes

In terms of implementation, my first consideration is that we can probably implement some helper classes to make interacting with the DOM easier. This could include things like rendering elements, assigning or changing classnames, or even setting up events.
