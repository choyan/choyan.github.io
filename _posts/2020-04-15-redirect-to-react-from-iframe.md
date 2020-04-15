---
layout: post
title:  "Redirect to React from the inside of a Iframe "
date:   2020-04-15 12:18:02 +0300
tags: [Tech, React]
---

For one of our react project we were bound to use a third-party JS library which is totally incompatible with our React eco-system. So we were bound to use separate applications inside our React application via iframe. 

We know Iframe seems nasty and shouldn't be there anyway, but sometimes you are bound to implement hacks when there is no other way. We were in that kind of situation. 

The problem arose when the user started to make a change to that application and after that, we had to redirect him to our React system. `windows.location` was of no use, which redirected us to the system, but redirecting us from the inside of the frame.

I didn't know there is a very simple solution for this kind of nasty problem which is provided by `window` API.

`window.top.location.href = https://your-desired-link.com`

The above snippet came to the rescue. It will pull you out of the frame and push the URL to the URL. 

I hope it will help you in a similar kind of situations. 
