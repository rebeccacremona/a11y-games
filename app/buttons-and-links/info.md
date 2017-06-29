---
layout: info
challenge: Buttons and Links
directory: buttons-and-links
---

Did you know that buttons and links (anchor tags) are intended for different purposes, and shouldn't be considered interchangeable?

  - Links are for navigating to content.
  - Buttons are for everything else. They are for triggering actions.


One of these things is not like the other...
---------------------------------------------

When navigating a web page by keyboard, people normally use the **spacebar** to press a button. They use **enter/return** to follow a link. Pressing spacebar on a link might accidentally scroll your browser window; pressing enter on a button might accidentally submit a form.

Following a link makes a new entry in your browser's history, changes the address in your URL bar, and navigates the browser to new content  (unless a developer does a lot of work to supress that behavior). Pressing a button doesn't (unless a developer does a lot of work to recreate all that behavior).

Assistive technology, just like search engines, often gives people a list of all the links on a page, so that they can more quickly navigate to the content they are interested in. Meaningless entries for button-triggered actions shouldn't clutter that list; links that are styled to look like buttons shouldn't be absent from that list.

(Plus, if assistive technology can't find your links, chances are search engines can't either. Honoring the button/link distinction improves both your accessibility and your SEO!)

Learn more about links and buttons from web accessibility expert [Marcy Sutton](https://marcysutton.com/links-vs-buttons-in-modern-web-applications/) and from [:last-child](http://www.last-child.com/keyboard-accessibility-with-the-space-bar/).


Strategy
--------

Whenever you can, simply use `<button type="button"></button>` if you require a button (or `<button type="submit">` etc.) and `<a href="..."></a>` if you require a link. They work, right out of the box.

But sometimes your hands are tied. You might not have complete control over your markup. Your design might call for a button that looks like a link, or a link that looks like a button, and you might not be sure how that can be accomplished (at least without a ton of work). You might be obligated by contract, court order, or black magic to restrict yourself to `<span>` elements.

If you have to get creative:

-  Make sure all anchor tags have non-empty href attributes.

-  Make sure any spans, divs, or other elements that don't normally receive keyboard focus are assigned a tabindex of 0, so they are entered into the tabbing flow in the natural order.

-  Make sure any non-button tags used as buttons have role="button", to increase the likelihood that assistive technology will behave appropriately. (Your mileage may vary, depending on your particular browser and your particular assistive technology.)

-  Use javascript to force the element to behave as expected. Do the expected keys trigger the desired action? Does any unexpected behavior take place? Is anything missing?
