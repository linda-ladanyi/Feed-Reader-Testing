# Project Overview

The index.html is a web-based application that reads RSS feeds from four different sources. Testing is done using [Jasmine](http://jasmine.github.io/).

## What to do

Open the index.html in your browser. On the bottom of the page, you will see a [Jasmine] block with the testing results.

## Testsing

1. RSS Feeds TESTS: the test loops through each feed in the `allFeeds` object and ensures it has a `URL` and a `name` defined as well as that the `URL` and the `name` is not empty.
2. The menu TESTS: it ensures that the `menu` element is hidden by default by the `menu-hidden` class. It also tests that the `menu` changes visibility when the `menu icon` is clicked.
3. Initial Entries TEST: ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
4. New Feed Selection TEST: ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
