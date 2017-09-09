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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
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

        it('URL should be defined and not empty', function() {
            empty = false;
            for (var i =0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url.length).not.toBe(0);
                expect(allFeeds[i].url).toBeDefined();
            }
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('Name should be defined and not empty', function() {
            empty = false;
            for (var i =0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name.length).not.toBe(0);
                expect(allFeeds[i].name).toBeDefined();
            }
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });

    describe('The Menu', function() {
    /* TODO: Write a new test suite named "The menu" */
        var isHidden = false;
        it("Menu should be hidden by default", function() {
            if ($('body').hasClass("menu-hidden")) {
                isHidden = true;
            }
            expect(isHidden).toBe(true);
        });
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it("Menu shows/hides on click", function() {
            $('.menu-icon-link').trigger( "click" );
            var changes; //Variable to keep track of if the click hides and unhides menu

            if ($('body').hasClass("menu-hidden")) {
                changes = false;

            }else{
                $('.menu-icon-link').trigger('click');

                if($('body').hasClass('menu-hidden')) {
                    changes = true;
                }   
            }
            expect(changes).toBe(true);
         });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    });

    describe ("Initial Entries", function() {

    /* TODO: Write a new test suite named "Initial Entries" */
        var beforeAsync,
            afterAsync;

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it ("Should have atleast one .entry element within the .feed container once loadFeed is finished", function(done) {
            expect($(".feed .entry").length).not.toBe(0);
            done();
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    });

    describe("New Feed Selection", function() {
    /* TODO: Write a new test suite named "New Feed Selection" */
        var firstAsync,
            secondAsync;
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstAsync = $('.feed').html();
                done();
            });
        });

        it("Should change entry after loading feed", function() {
            loadFeed(1, function() {
                secondAsync = $('.feed').html();
                done();
            });
            expect(firstAsync).not.toBe(secondAsync);
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    });
}());
