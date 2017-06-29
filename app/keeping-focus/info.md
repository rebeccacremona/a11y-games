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

### Strategy

The good news: it's almost trivial to write javascript that fixes the problem.

The bad news: it's very difficult to stay up-to-date on which browsers need fixing and which don't.

More good news: you don't necessarily have to. The devs at [Automattic](https://automattic.com/diversity-and-inclusion/) include a focus-fixing script in every one of their Wordpress themes: [https://github.com/Automattic/_s/blob/master/js/skip-link-focus-fix.js](https://github.com/Automattic/_s/blob/master/js/skip-link-focus-fix.js). If you find it doesn't work in a particular browser, you can file an issue, or better yet, submit a pull request! Including an up-to-date `skip-link-focus-fix.js` in every web project is an excellent start.


## Write Considerate Javascript

Whenever you alter the DOM with javascript, consider what its effect will be on keyboard focus.

If you remove or replace the element the user was focused on, keyboard focus will reset to the `body` tag... and the user will have to start navigating again from the top of the page. This can be extremely disorienting, not to mention time-consuming and frustrating. (It's even worse than not including a [skip link](http://webaim.org/techniques/skipnav/) at the top of your page when necessary.)

And unfortunately you can't rely on the javascript libraries you include in your project to be considerate. Every interactive widget, chart, map, player, etc. might be dropping the keyboard focus, after any triggered action.

Imagine a table that can be sorted by clicking a button in the sortable column's header. Many libraries completely redraw the table when that occurs, and many don't then reset the focus. Best: set the focus back to the button the user clicked.

Imagine a table that displays data in pages, so that only 10 rows are shown at a time. Probably, the page navigation buttons are beneath the table. So, the user navigates through all the data in the first 10 rows, and then clicks the button to advance to the second set. Many libraries will drop the keyboard focus then, requiring the user to start fresh from the top of the webpage. (And that will happen repeatedly, every time they want to advance to the next set of rows.) Other libraries reset the focus back to the button that was pressed (which, recall, was desireable when we were talking about sorting columns), leaving the user at the bottom of the table, past all the information that was changed. Best: deliver the user somewhere useful, for instance at a caption above the data, and ensure the caption reports which set of rows is being viewed.

### Strategy

Tab to and trigger/toggle/press every interactive element on every page. (It doesn't take as long as it sounds.)

#### CSS

First, make sure you can tell which element has keyboard focus at all times. This should be visually evident. If it's difficult to tell, you probaby need to tweak your css (or that of a library you are using).

Some developers/designers find `:focus` styles unattractive and [zero out the :focus styles](http://a11yproject.com/posts/never-remove-css-outlines/) provided by default by browsers. If you do, make sure you replace them with something equally visually apparent, or more so.

If you ever find yourself writing a `:hover` style, make sure you add `:focus` as well. For instance, `a:hover, a:focus {text-decoration: underline; color: red}`

Be extra careful if you are writing fancy styles, such as styles that make links look like buttons, or buttons look like links. It won't always be possible to make them look exactly the same on focus. But the important thing is simply to make sure users navigating by keyboard can visually locate the element that has keyboard focus; minor infelicities in style will certainly be forgiven!

#### JS

If you can't figure out where focus is, you can run a little javascript in your browser's dev tools to find out: `document.activeElement`. This can be especially helpful when investigating the behavior of a JS library you are including (...and when writing up "steps to reproduce" in bug reports lol).

If you discover keyboard focus is being dropped at any point, you can fix it with a little more javascript: `document.getElementById('my-element').focus()`. This will work for any element in the document's tab order: buttons, form inputs, anchor tags, and anything that's had it's tabindex set to 0.

You can also set the focus to elements that don't appear in the normal tab order of a document by setting that element's tabindex to -1. That makes the element programmatically focusable, but unreachable during the normal flow.

### Examples

To see working examples (and to get a more concrete idea of when`tabindex="-1"` comes in handy), check out the source code for the [buttons-and-links challenge](/buttons-and-links/challenge/). Whenever elements disappear, keyboard focus is manually set, delivering the user where they need to be next.
