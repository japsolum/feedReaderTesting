# Feed Reader Testing
An app that uses APIs to get feeds from various sources and posts links to those articles on the screen depending on what menu item you've clicked. Main purpose was to create a jasmine test that will test to make sure all aspects are running as expected.
### Running File
Clone or download repo, once downloaded all you should have to do is run the index.html file. On page you will see the jasmine test. Which, if running correctly, should have a list of tests in green. If not They will appear as red and produce errors. 
### Tests Include:
- Rss feeds are defined
- The URL should be defined and should not be blank
- The name should be defined and not blank
- The nenu should be hidden by default
- The menu should be shown/hidden on click of menu button
- The `.feed`element should have atleast one `.entry` child
- After loading feed `.entry` should change
### Test it!
Once you have page loaded, try changing the names, urls, and feeds to watch the tests fail! 