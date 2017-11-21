# Inclusive Web Design Checklist

Aims to be the **biggest** checklist of inclusive design considerations for the web _ever_. Includes items for accessibility, performance, device support, interoperability, and language. Pull requests welcome!

## Performance
- [ ] [Minify CSS and JS, and remove unused/redundant code](https://developers.google.com/speed/docs/insights/MinifyResources)
- [ ] [Compress raster images](https://www.html5rocks.com/en/tutorials/speed/img-compression/)
- [ ] [Optimize SVG path data](https://web-design-weekly.com/2014/10/22/optimizing-svg-web/)
- [ ] [Make sure styles and scripts are not render blocking](https://csabapalfi.github.io/eliminate-render-blocking/)
- [ ] Lazy load large image assets
- [ ] [Install a service worker and cache all applicable assets](https://css-tricks.com/serviceworker-for-offline/)


## Accessibility
- [ ] Maintain terse, semantic HTML, without over-reliance on `<div>` scaffolding
- [ ] [Use screen reader and keyboard accessible HTML](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [ ] [Make sure heading levels describe a logical section/subsection structure](https://webaim.org/techniques/semanticstructure/)
- [ ] Make sure controls do not elicit unexpected or jarring behavior
- [ ] Apply `alt=""` or `aria-hidden="true"` to decorative images
- [ ] Provide `<title>`s that name the site and the specific page
- [ ] Make scrollable elements focusable for keyboard users
- [ ] Use the same design patterns to solve the same problems
- [ ] Ensure keyboard focus order is logical regarding visual layout
- [ ] Do not hijack standard scrolling behavior
- [ ] Move focus between dialogs and the controls that invoked them
- [ ] Give all form elements permanently visible labels
- [ ] Give grouped form elements group labels
- [ ] Place labels above form elements
- [ ] Provide status and error messages as WAI-ARIA live regions
- [ ] Ensure states (pressed, expanded, invalid, etc) are communicated to assistive software
- [ ] Match semantics to behavior for assistive technology users
- [ ] Provide a default language and use `lang="[ISO code]"` for subsections in different languages
- [ ] Make controls look like controls; give them strong perceived affordance
- [ ] Make sure all content belongs to a landmark element (`<header>`, `<footer>`, `<nav>`, `<main>`, etc)
- [ ] Mark invalid fields clearly and provide associated error messages
- [ ] Avoid time constraints where possible; provide a clear warning and option to extend where not possible 
- [ ] Label and describe the same things with the same terminology
- [ ] Ensure disabled controls are not focusable
- [ ] Do not instate 'infinite scroll' by default; provide buttons to load more items
- [ ] [Ensure PDF content is accessible (include tags)](https://webaim.org/techniques/acrobat/)
- [ ] [Provide a skip link if necessary](https://webaim.org/techniques/skipnav/) 
- [ ] Warn users of links that have unusual behaviors, like linking off-site, or loading a new tab
- [ ] Instead of obstructing users with CAPTCHAs, use [honeypots](https://en.wikipedia.org/wiki/Honeypot_(computing))
- [ ] Break up long and complex forms into discrete sections and/or screens 
- [ ] Make forms as short as possible; offer shortcuts like autocompleting the address using the postcode
- [ ] Inform the user when there are important changes to the application state


## Accessible Design
- [ ] Make sure text and background colors contrast sufficiently
- [ ] Support Windows high contrast mode (use images, not background images)
- [ ] Honor requests to remove animation via the `prefers-reduced-motion` media query
- [ ] Include only clear, meaningful animations
- [ ] Use relative units (`em`, `rem`, and `ch`), especially for font metrics
- [ ] [Make sure main body (paragraph) text is no smaller than the default (user agent) size](https://www.smashingmagazine.com/2011/10/16-pixels-body-copy-anything-less-costly-mistake/)
- [ ] Provide large touch 'targets' for interactive elements
- [ ] Use data tables (`<table>`) for data only, not visual layout purposes
- [ ] Do not rely on color for differentiation of visual elements
- [ ] Provide clear, unambiguous focus styles
- [ ] Employ well-balanced, highly legible fonts (not too complex or elaborate)
- [ ] [Do not use very thin font faces](http://www.telegraph.co.uk/science/2016/10/23/internet-is-becoming-unreadable-because-of-a-trend-towards-light/)
- [ ] Avoid pure white or pure black shades
- [ ] Underline links — at least in body copy
- [ ] Ensure content is not obscured through zooming (no fixed widths)
- [ ] Use textual labels to make voice activation cues obvious
- [ ] Provide a print stylesheet (single column, with interactive content hidden)
- [ ] Subset fonts to just the characters needed
- [ ] Don't make users perform actions to reveal content unless completely necessary
- [ ] If content is meant to be hidden, ensure it is properly hidden to all users
- [ ] Make sure controls within hidden content are not focusable
- [ ] Do not auto focus form fields, on page load
- [ ] Make sure the purpose of a link is clearly described. "read more" vs. "read more about accessibility".


## Accessible Content
- [ ] Provide alternatives and/or descriptions for complex visualizations
- [ ] Give video content captions and transcripts
- [ ] Provide transcripts for audio content
- [ ] Provide alternative text for salient images
- [ ] Translate / spell out acronyms the first time you use them
- [ ] [Avoid justified body text](https://www.w3.org/TR/WCAG20-TECHS/F88.html)
- [ ] [Provide enough spacing between lines of text (`line-height`)](https://www.w3.org/TR/WCAG20-TECHS/C21.html)
- [ ] Provide descriptive captions for figures


## Content
- [ ] Only include heading elements where they introduce sections of content
- [ ] [Remove potentially insensitive or uninclusive language (use 'singular they')](http://alexjs.com/)
- [ ] Make sure data tables wider than their container can be scrolled horizontally
- [ ] [Avoid all-caps text](https://github.com/humanmade/hm-pattern-library/issues/75)
- [ ] [Ensure that content is written as clearly and simply as possible](https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-supplements.html)
- [ ] [Make content easier to find and improve search results with structured data](https://developers.google.com/search/docs/guides/prototype)
- [ ] Do not mark up subheadings/straplines with separate heading elements
- [ ] Ensure primary calls to action are easy to recognize and reach
- [ ] Avoid images of text — text that cannot be translated, selected, or understood by assistive tech
- [ ] Use well-established, therefore recognizable, icons and symbols
- [ ] Begin long, multi-section documents with a table of contents


## Mobile
- [ ] [Use content-based, not device-specific, media queries](http://bradfrost.com/blog/post/7-habits-of-highly-effective-media-queries/#content)
- [ ] Support 'pinch zoom' (remove `user-scalable=no` if present)
- [ ] [Provide a `manifest.json` file for identifiable homescreen entries](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [ ] Indicate swipe gesture support clearly, and provide simple tap-based alternatives
- [ ] Use `srcset` to tailor images to devices and reduce bandwidth costs
- [ ] Ensure the same content is available across different devices and platforms


## Privacy
- [ ] Do not include third parties that compromise user privacy
- [ ] [Honour DNT (Do Not Track) header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT)

## Misc
- [ ] Do not recreate supported and expected browser behaviors with bespoke scripts
