//const general = require ('./../data/selectors.json').general;

////MY VER
// describe('Complex Counter App', function () { //define suite title by passing a string
//
//     describe('Getting to the page', function () { //define sub-suite title by passing a string
//
//         it('TC-001 Page title is Complex Counter App', function () { //define test title by passing a string
//             browser.url(''); //open baseUrl
//             const title = browser.getTitle(); //get page title and assign it to the "title" variable
//            // browser.pause(2000); //just pause to visually see that something is happening on the page
//             expect(title).toEqual('Complex Counter App'); //compare {title} (actual) and "Complex Counter App" (expected)
//         })
//
//     });
//
//     describe('Elements exist', function () {
//
//         it('TC-002 Header', function () {
//             const header = $(general.header).isDisplayed();
//             expect(header).toEqual(true);
//         })
//
//         it('TC-003 Total Result', function () {
//             const totalResult = $(general.totalResult).isDisplayed();
//             expect(totalResult).toEqual(true);
//         })
//
//         it('TC-004 Counter Name', function () {
//             const counterName = $$('h3')[1].isDisplayed();
//             expect(counterName).toEqual(true);
//         })
// ////==========================================================================
//
//         it('TC-005 Verify that  "Limit Field 1" is displayed on the app page ', function () {
//            const lf1 = $('button[name="negative"]').isDisplayed();
//            expect(lf1).toEqual(true);
//         });
//
//         it('TC-006 Verify that  "Limit Field 2" is displayed on the app page ', function () {
//             const lf1 = $('button[name="positive"]').isDisplayed();
//             expect(lf1).toEqual(true);
//         });
//
//         it('TC-007 Verify that "DELETE" button is existing on the app page', () => {
//             const delBtn = $('[id="1"]').isDisplayed();
//             expect(delBtn).toEqual(true);
//         });
//
//         it('TC-008 Verify that "RESET" button is existing on the app page', () => {
//             const resetBtn = $('[class="btn-primary btn Ripple-parent reset"]').isDisplayed();
//             expect(resetBtn).toEqual(true);
//          });
//
//         it('TC-009 Verify that "Edit Counter Title" label is existing on the app page', () => {
//             const editCounterLbl = $('//label[contains(text(),"Enter")]').isDisplayed();
//             expect(editCounterLbl).toEqual(true);
//         });
//
//         it('TC-10 Verify that "Edit Counter Name Field" is existing on the page ', () => {
//             const editCountName = $('[name="edit"]').isDisplayed();
//             expect(editCountName).toEqual(true);
//         });
//
//
//
//
//     });

//});

////JULIA VER
const selectorGen = require ('../data/selectors.json').general;
const expectedGen = require ('./../data/expected.json').general;
const selectorCnt = require ('../data/selectors.json').counter;
const expectedCnt = require ('./../data/expected.json').counter;

describe('Complex Counter App', function () {

    describe('Getting to the page', function () {

        it('TC-001 Page title is Complex Counter App', function () {
            browser.url('');
            const title = browser.getTitle();
            expect(title).toEqual('Complex Counter App');
        })

    });

    describe('Elements exist', function () {

        it('TC-002 Header', function () {
            const actual = $(selectorGen.header).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-003 Total Result', function () {
            const actual = $(selectorGen.totalResult).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-004 Add Name Field', function () {
            const actual = $(selectorGen.addNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-005 Label for Add Name Field', function () {
            const actual = $$(selectorGen.addNameFieldLabel)[$$(selectorGen.addNameFieldLabel).length-2].isDisplayed();
            //$$('label')[$$('label').length-2]
            expect(actual).toEqual(true);
        })

        it('TC-006 Default Value Field', function () {
            const actual = $(selectorGen.defaultValueField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-007 Label for Default Value Field', function () {
            const actual = $$(selectorGen.defaultValueFieldLabel)[$$(selectorGen.defaultValueFieldLabel).length-1].isDisplayed();
            //$$('label')[$$('label').length-1]
            expect(actual).toEqual(true);
        })

        it('TC-008 Add Counter', function () {
            const actual = $(selectorGen.addCounterBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

    });

    describe('Elements value', function () {

        it('TC-009 Header = Counter', function () {
            const actual = $(selectorGen.header).getText();
            expect(actual).toEqual(expectedGen.header);
        })

        it('TC-010 Total Result = Total: 0', function () {
            const actual = $(selectorGen.totalResult).getText();
            expect(actual).toEqual(expectedGen.totalResult);
        })

        it('TC-011 Label for Add Name Field = Enter Counter Title:', function () {
            const actual = $$(selectorGen.addNameFieldLabel)[$$(selectorGen.addNameFieldLabel).length-2].getText();
            expect(actual).toEqual(expectedGen.addNameFieldLabel);
        })

        it('TC-012 Placeholder for Add Name Field = Counter Name', function () {
            const actual = $(selectorGen.addNameField).getValue();
            expect(actual).toEqual(expectedGen.addNameField);
        })

        it('TC-013 Label for Default Value Field = Enter Initial Count:', function () {
            const actual = $$(selectorGen.defaultValueFieldLabel)[$$(selectorGen.defaultValueFieldLabel).length-1].getText();
            expect(actual).toEqual(expectedGen.defaultValueFieldLabel);
        })

        it('TC-014 Placeholder for Default Value Field = 50', function () {
            const actual = $(selectorGen.defaultValueField).getValue();
            expect(actual).toEqual(expectedGen.defaultValueField);
        })

        it('TC-015 Add Counter = ADD COUNTER', function () {
            const actual = $(selectorGen.addCounterBtn).getText();
            expect(actual).toEqual(expectedGen.addCounterBtn);
        })
    });

    describe('Default Counter Elements exist', function () {

        it('TC-016 Counter Name', function () {
            const actual = $$(selectorCnt.counterName)[1].isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-017 Count Value', function () {
            const actual = $(selectorCnt.countValue).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-018 LLF', function () {
            const actual = $(selectorCnt.lowerLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-019 ULF', function () {
            const actual = $(selectorCnt.upperLimitField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-020, TC-021 Default Sub and Add Buttons', function () {
            const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length;
            expect(actual).toEqual(expectedCnt.defaultNumberBlackBtn);
        })

        it('TC-022 Delete button', function () {
            const actual = $(selectorCnt.deleteBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-023 Reset button', function () {
            const actual = $(selectorCnt.resetBtn).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-024 Edit Name Field', function () {
            const actual = $(selectorCnt.editNameField).isDisplayed();
            expect(actual).toEqual(true);
        })

        it('TC-025 Label for Edit Name Field', function () {
            const actual = $(selectorCnt.editNameFieldLabel).isDisplayed();
            expect(actual).toEqual(true);
        })
    });

    //Homework: TC 28-39
    describe('Default Counter Elements value', function () {


    });
});