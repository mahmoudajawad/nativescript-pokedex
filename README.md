# nativescript-pokedex

This project is a PoC for ultimate code sharing across web and mobile using Nativescript with Angular.

Read more about this project motivations at: [https://dev.to/mahmoudajawad/my-endeavor-for-ultimate-code-sharing-in-nativescript-angular-2m73](https://dev.to/mahmoudajawad/my-endeavor-for-ultimate-code-sharing-in-nativescript-angular-2m73).

## Demo
The results of this project are available as Github-Pages-hosted app at: [https://mahmoudajawad.github.io/nativescript-pokedex/dist/nativescript-pokedex/](https://mahmoudajawad.github.io/nativescript-pokedex/dist/nativescript-pokedex/).

# How Much
At pages (or, screens) level, I had total of 321 lines of code spanning across templates and code. Out of which, 17 lines, or 5.2%, are web-specific, and 12 lines, or 3.7%, are mobile-specific! That's up-to 96.3% code-sharing across pages of the app. This was done by creating [set of components and directives](https://github.com/mahmoudajawad/nativescript-pokedex/tree/master/src/app/utils/xaml) that are used by [web application](https://github.com/mahmoudajawad/nativescript-pokedex/blob/master/src/app/app.module.ts) to replicate the behaviour of XAML components used in template for mobile application.

Other elements of the app, such as services and utilities are mostly platform-specific, but to me that's totally fine, as in most cases these services and utilities would be abstracted and re-used again in other projects as well, or as packages.

# How To
As explained earlier, I created [`XAMLModule`](https://github.com/mahmoudajawad/nativescript-pokedex/tree/master/src/app/utils/xaml) which is set of components and directives that I continued to build and improve along the path to build this PoC. At current state, the module lacks a lot of basic functionalities available by default by Nativescript XAML template components, however, for a PoC it's already perfect as it allowed me to build a working proof that sharing the template, which otherwise contributes highly to making the code shared across platforms very low percentage. These components are:

## XAMLPage
A component for `Page` XAML element. It uses Bootstrap container to wrap the content passed in `div.container-fluid > div.row > div.col-12`. I introduced additional selector to it, which is `Container` in order to use it in places where using `Page` would crash iOS, allowing me to avoid a classic I coe to face sometimes with Android and iOS template sharing.

## XAMLPageRouterOutlet
A component for `page-router-outlet` Nativescript component, which translates into Angular `router-outlet`. `page-router-outlet` is used in Nativescript instead of `router-outlet` due to some technical specifications.

## XAMLActionBar
A component for `ActionBar` XAML element, which translates into Bootstrap `Navbar` component. It uses `ng-template` with reference `#web` to pass Bootstrap `Navbar` items.

## XAMLActionItem
A placeholder component for `ActionItem` XAML element.

## XAMLLabel
A component for `Label` XAML element that prints out the text passed as attribute `text` directly without any wrapping HTML element.

## XAMLButton
A component for `Button` XAML element. It re-purposes `button` HTML element for its use.

## XAMLImage
A component for `Image` XAML element. It wraps `img` HTML element and processes `src` attribute to handle data reference from project `assets`. It also processes `loadMode` attribute to set `async` attribute accordingly.

## XAMLScrollView
A component for `ScrollView` XAML element. Its unique feature is having an output for `scroll` that is attached to `window:scroll` Angular event to simulate `scroll` event of XAML element.

## XAMLStackLayout
A component for `StackLayout` XAML element. It wraps content in Bootstrap `div.container-fluid > div.row.stack-layout-row` to force all items with full width, replicating the behaviour of XAML element.

## XAMLGridLayout
A component for `GridLayout` XAML element. It uses an algorithm to produce CSS grid values from `rows`, and `columns` attributes of XAML element. In conjunction with directives `[row]`, `[rowSpan]`, `col`, and `[colSpan]` it produces dynamic grid out of XAML structure of the same. It also provides access to XAML `layoutChanged` event by attaching to `window:resize` Angular event, allowing me to dynamically update the grid if the page is resized, replicating the behaviour of XAML event.

## NSRouterLinkDirective
A directive with selector `[nsRouterLink]` to translate Nativescript route navigation directive to `router.navigate` call.

# Next
With the success I'm scoring with such a primitive implementation of this idea, I'm planning to work on expanding this project into a standalone package where I can implement it with wider-range PoC that allows me to understand the implications of such an approach and its cons and pros and whether it's viable or not.

# What Say You?
You have feedback? An idea? A better implementation? I'm open to any feedback on this. You can open an issue and freely let me know what you think about this project.
