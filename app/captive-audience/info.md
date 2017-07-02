---
layout: info
challenge: Captive Audience
directory: captive-audience
---

## Keyboard Traps: intentional and unintentional

Sometimes, you need to restrict a user's attention (and thus, their keyboard cursor) to a particular section of a web page. For example, [modal windows](https://webdesign.tutsplus.com/articles/modal-and-modeless-boxes-in-web-design--webdesign-2282) (pop-ups that take over the window until dismissed, obscuring the content behind them), need to keep keyboard focus within their bounds while open, then return focus to the element that opened them, when the user hits the close button or submits the embedded form, etc.

(Otherwise, people can tab around and press invisible or dimmed elements underneath the modal while it's open: totally confusing and weird. And of course, as we experimented with in the [keeping-focus challenge](/keeping-focus/), whenever you hide/remove an element that had keyboard focus, as we do when we close the modal, focus gets dropped unless reset manually.)

Sometimes, developers trap a user's cursor by accident, making the page (and possibly the entire browser or browser tab) unusable. Search for "keyboard traps" to learn more. A couple links to get you started:
- [http://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/focus/keyboard-trap](http://www.bbc.co.uk/guidelines/futuremedia/accessibility/mobile/focus/keyboard-trap)
- [https://www.nomensa.com/blog/2011/keyboard-traps](https://www.nomensa.com/blog/2011/keyboard-traps)
- [http://www.interactiveaccessibility.com/education/training/ex7.1.html](http://www.interactiveaccessibility.com/education/training/ex7.1.html)


## Write Considerate Javascript, part 2

Whenever you alter the DOM with javascript, consider what effect it ought to have on keyboard focus (in addition to considering whether it may have an effect already incidentally, like [dropping the focus](/keeping-focus/))

Since modal windows, mentioned above, are particularly difficult to get right, we'll play with them. (But of course, the ideas will be the same with any fancy js widget you can dream up).

Smashing Magazine's Scott O'Hara has an [excellent article on accessibility and modal windows](https://www.smashingmagazine.com/2014/09/making-modal-windows-better-for-everyone/). Grab a cup of coffee and head over there to learn why modal windows are hard. (Really. We'll wait.)

Great, you're back? What did you think? A little overwhelming, maybe? Yeah. "[Even though they seem pretty innocuous, modals are actually the boss battle at the end of web accessibility](http://robdodson.me/building-better-accessibility-primitives/)".

You'll probably want to use a library, rathering than rolling your own modal windows, or other fancy js widgets.

But unfortunately, you can't assume libraries are going to be accessible out of the box. You might need to find or write patches. For instance, PayPal published an [accessibility plugin for Twitter's Bootstrap 3](https://github.com/paypal/bootstrap-accessibility-plugin), along with a web page where you can [explore how Bootstrap 3 components, such as modals, behave with and without the accessiblity plugin](http://paypal.github.io/bootstrap-accessibility-plugin/demo.html).

So you actually do need to know what to look for, what to test, and what javascript to add if your particular js library or framework comes up short.

We'll be playing with some of the basics here:
-  setting the keyboard focus inside the modal on pop up
-  returning the keyboard focus to the button that triggered the modal, when the modal is dismissed
-  dismissing the modal when `escape` is pressed
-  preventing users from tabbing to elements outside the modal, while it's open
- ensuring users can still tab to the browser elements, like the location bar, while the modal is open
- ensuring the 'close' button is [clearly labeled](/invisible-ink/) and can be [activated with the keyboard](/buttons-and-links/)
