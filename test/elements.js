import { assert } from 'chai';


describe('Complex Counter App', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Page title is Complex Counter App', function () { //define test title by passing a string
            browser.url('https://likejean.github.io/homework-5/'); //open baseUrl
            const title = browser.getTitle(); //get page title and assign it to the "title" variable
           // browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
        })

    });

    describe('Elements exist', function () {

        it.skip('TC-002 Header', function () {
            const header = $('h1').isDisplayed();
            expect(header).toEqual(true);
        })

        it.skip('TC-003 Total Result', function () {
            const header = $('h3.total-count').isDisplayed();
            expect(header).toEqual(true);
        })

        it.skip('TC-004 Counter Name', function () {
            const header = $$('h3')[1].isDisplayed();
            expect(header).toEqual(true);
        })
////==========================================================================

        it('TC-005 Verify that  "Limit Field 1" is displayed on the app page ', function () {
           const lf1 = $('button[name="negative"]').isDisplayed();
           expect(lf1).toEqual(true);
        });

        it('TC-006 Verify that  "Limit Field 2" is displayed on the app page ', function () {
            const lf1 = $('button[name="positive"]').isDisplayed();
            expect(lf1).toEqual(true);
        });

        it('TC-007 Verify that "DELETE" button is existing on the app page', () => {
            const delBtn = $('[id="1"]').isDisplayed();
            expect(delBtn).toEqual(true);
        });

        it('TC-008 Verify that "RESET" button is existing on the app page', () => {
            const resetBtn = $('[class="btn-primary btn Ripple-parent reset"]').isDisplayed();
            expect(resetBtn).toEqual(true);
         });

        it('TC-009 Verify that "Edit Counter Title" label is existing on the app page', () => {
            const editCounterLbl = $('//label[contains(text(),"Enter")]').isDisplayed();
            expect(editCounterLbl).toEqual(true);
        });




    });

});
