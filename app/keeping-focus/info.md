---
layout: info
challenge: Keeping (Keyboard) Focus
---

## &lt;a href="#the-important-part"&gt;

To make a link to a particular element on a web page, you give the element an id, and then append that id to the url, following a `#` character. `<a href="#the-important-part">skip to the important part</a>` looks for an element with `id="the-important-part"` on the current page, but you can similarly append a "hash" to any url.

But there's a problem. In some browsers, following a link with a hash scrolls the browser viewport, so the linked-to content appears right at the top of the screen... but keyboard focus doesn't come along for the ride.

This is a big deal.

a) Do you have a long list of Frequently Asked Questions, and want your users to be able to jump straight to the question that interests them?

b) Have you made a "[skip link](http://webaim.org/techniques/skipnav/)", to free people navigating with their keyboards or assistive technology (especially those with motor disabilities!) from having to tab through "the long list of navigation links, sub-lists of links, corporate icons, site searches, and other elements" that invariably precede the main content of your page... and to free them from having to repeat that exercise every single time a page on your site loads, refreshes, or runs javascript executed without accessibility in mind (more on that later...)?

c) Or perhaps you have something else in mind. Links straight to the right spot are excellent for UX.

If the browser scrolls the viewport, but doesn't set keyboard focus as well, all those people are out of luck.

Until recently, this was a problem in most every browser. In recent months and years, there have been some improvements! But unfortunately, as of 6/29/17, it sounds like there are still problems with some browsers (IE, Safari on iOS, possibly others...) For some of the sordid history, see
  - [https://bugs.webkit.org/show_bug.cgi?id=112181](https://bugs.webkit.org/show_bug.cgi?id=112181)
  - [https://bugs.webkit.org/show_bug.cgi?id=17450](https://bugs.webkit.org/show_bug.cgi?id=17450)
  - [https://bugs.webkit.org/show_bug.cgi?id=116046](https://bugs.webkit.org/show_bug.cgi?id=116046)
  - [https://bugs.webkit.org/show_bug.cgi?id=163719](https://bugs.webkit.org/show_bug.cgi?id=163719)

The good news: it's almost trivial to write javascript that fixes the problem.

The bad news: it's very difficult to stay up-to-date on which browsers need fixing and which don't.

More good news: you don't necessarily have to. The devs at [Automattic](https://automattic.com/diversity-and-inclusion/) include a focus-fixing script in every one of their Wordpress themes: [https://github.com/Automattic/_s/blob/master/js/skip-link-focus-fix.js](https://github.com/Automattic/_s/blob/master/js/skip-link-focus-fix.js). If you find it doesn't work in a particular browser, you can file an issue, or better yet, submit a pull request! Including an up-to-date `skip-link-focus-fix.js` in every web project is an excellent start.





