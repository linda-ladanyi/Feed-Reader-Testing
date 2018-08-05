/* A spec file for Jasmine to read and contains all of the tests that will be run. */
$(function() {
    /* a test suite witch contains a set of tests. */
    describe('RSS Feeds', function() {
        /* a test to make sure that the allFeeds variable has been defined and that it is not empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* a test to make sure that all feeds have a URL defined and it is not empty. */
        it('has a URL defined and is not empty',function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy();
            });
        });

        /* a test to make sure that all feeds have a name defined and it is not empty. */
        it('has a name defined and is not empty',function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy(); 
            });
        });
    });


    /* The menu */
    describe('The menu', function() {
        /* a test to make sure that the menu element is hidden by default. */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        /* a test to make sure that the menu changes visibility when the menu icon is clicked. */
        it('has the menu visible when clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /* Initial Entries */
    describe ('Initial Entries', function() {
        /* a test to make sure that there is at leasta single .entry element within the .feed container. */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('the loadFeed function is called and completes', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* New Feed Selection */
    describe ('New Feed Selection', function() {

        /* a test to make sure that the content actually changes. */
        beforeEach(function(done) {
            /* loads the first feed */
            loadFeed(0, function(){
                oldFeed = $('.entry-link')[0].innerText;

                /* loads a new feed */
                loadFeed(1, function() {
                    newFeed = $('.entry-link')[0].innerText;
                    /* callback */
                    done();
                });
            });
        });

        /* a fuction to check wether the new and the old feed is the same */
        it('a new feed is loaded and the content changes', function() {
            expect(oldFeed !== newFeed).toBe(true);
        });
    });

}());
