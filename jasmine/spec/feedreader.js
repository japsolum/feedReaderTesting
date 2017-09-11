/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS feeds definitions, the allFeeds variable in our 
    application.*/
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Loops through each feed in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('URL should be defined and not empty', function() {
            empty = false;
            for (var i =0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url.length).not.toBe(0);
                expect(allFeeds[i].url).toBeDefined();
            }
        });

        /* Loops through each feed in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('Name should be defined and not empty', function() {
            empty = false;
            for (var i =0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name.length).not.toBe(0);
                expect(allFeeds[i].name).toBeDefined();
            }
        });
    });
    /* Tests that have to do with the slider menu and menu button */
    describe('The Menu', function() {
        it ("Menu should be hidden by default", function() { 
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });

        /* Tests that ensure the menu changes
          * visibility when the menu icon is clicked.
          */
        it("Menu shows on click", function() {
            $('.menu-icon-link').trigger( "click" ); 
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
        });

        it("Menu hides on second click", function() {
            $('.menu-icon-link').trigger( "click" ); 
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    /*Tests that have to do with the feeds initial entries*/

    describe ("Initial Entries", function() {
        var beforeAsync,
            afterAsync;

        /*Before the test is rane runs the feed and lets us know when async task is complete */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        it ("Should have atleast one .entry element within the .feed container once loadFeed is finished", function(done) {
            expect($(".feed .entry").length).not.toBe(0);
            done();
        });
    });

    /* Test suite that has to do with the feed selection */

    describe("New Feed Selection", function() {
        var firstAsync,
            secondAsync;

        /*Before test is ran it runs first feed, saves a variable for what the html shows,
        and then lets us know when async task is complete*/

        beforeEach(function(done) {
            loadFeed(0, function() {
                firstAsync = $('.feed').html();
                done();
            });
        });

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
//Wasn't quite sure what the notes meant? I added done to the parameter so the console error is gone
//but were they saying I dont need done() at all in the it()? Just in the beforeEach()?
        it("Should change entry after loading feed", function(done) { 
            loadFeed(1, function() {
                secondAsync = $('.feed').html();
                expect(firstAsync).not.toBe(secondAsync);
                done();
            });
            
        });
    });
}());
