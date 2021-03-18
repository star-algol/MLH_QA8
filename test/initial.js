describe('My Little Hero', function () { //define suite title by passing a string
    before('open app', function(){
        browser.url('https://qa-apps.netlify.app/hero');//open baseUrl
    });

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Title is correct ', function () { //define test title by passing a string
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

    describe('Elements exist', function () { //define sub-suite title by passing a string

        it('TC-002 Header is present', function () { //define test title by passing a string
            let header = $('h3').isExisting(); //get page title and assign it to the "title" variable
            expect(header).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

        it('TC-003 Instruction is present', function () { //define test title by passing a string
            let instruction = $('p').isExisting(); //get page title and assign it to the "title" variable
            expect(instruction).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

        it('TC-004 Name Field label is present', function () { //define test title by passing a string
            let nflabel = $('.ant-form-item-required').isExisting(); //get page title and assign it to the "title" variable
            expect(nflabel).toEqual(true); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

});