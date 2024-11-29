import { Before, Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import "cypress-real-events/support";
import SidebarPage from "../../integration/pages/SidebarPage"
import SearchResultPage from "../../integration/pages/SearchResultPage"
import ProductionPlot from "../../integration/pages/ProductionPlotPage"
import SavedSearchPage from "../../integration/pages/SavedSearchPage";
import MapSettingsPage from "../../integration/pages/MapSettingsPage";
import LegendPage from "../../integration/pages/LegendPage";
import ZoomLevel from "../../integration/pages/ZoomLevel";
import GridTable from "../../integration/pages/GridTable";
import 'cypress-file-upload'

const sidebarpage = new SidebarPage()
const searchresultpage = new SearchResultPage()
const productionplot = new ProductionPlot()
const savedsearchpage = new SavedSearchPage()
const mapsettings = new MapSettingsPage()
const legendpage = new LegendPage()
const zoomlevel = new ZoomLevel()
const gridtable = new GridTable()

var chartXLabelBeforeFilter = [];
var chartYLabelBeforeFilter = [];
var chartXLabelAfterFilter = [];
var chartYLabelAfterFilter = [];
var MyInitialSavedSearch;

var SavedSearchName;
var AfterSavedSearch;
var originalSave;
var autoSavedSearchName;
var searchArrayBeforeDelete = [];
var searchArrayAfterDelete = [];
var UWIBeforeSave = []
var UWIAfterSave = [];
var startingZoomValue;
var nearSearchZoomValue;
var farSearchZoomValue;
var afterSearchZoomValue;
var numberFormattedCount
var stateDropdown = [];
var countyDropdown = [];
var fieldNameDropDown = [];
var producingFormationDropdown = [];
var basinDropdown = [];
var tgsOperatorDropdown = [];
var stateDropdownAfterPolygon = [];
var countyDropdownAfterPolygon = [];
var basinDropdownAfterPolygon = [];
var tgsOperatorDropdownAfterPolygon = [];
var fieldNameDropdownAfterPolygon = [];
var producingFormationDropdownAfterPolygon = [];
var showOrHideColumns = [];
var newFile;

Before(function () {
    const environment = Cypress.env('environment').toLowerCase()
    cy.log("environment: " + environment)
    if (environment.includes('test')) {
        this.url = Cypress.env('url_test')
        cy.log('application under test: ' + this.url)
    }
    else if (environment.includes('stage')) {
        this.url = Cypress.env('url_stage')
        cy.log('application under test: ' + this.url)
    }
    else if (environment.includes('dev')) {
        this.url = Cypress.env('url_dev')
        cy.log('application under test: ' + this.url)
    }
    else {
        cy.log('invalid test environment: ' + environment)
    }
})
beforeEach(function () {
    cy.clearDownloads();
})
Given('User opens the Saga Analytics application url and login', function () {
    cy.visit(this.url)
    cy.loginToOkta()
    cy.url().should('include', this.url)
});

When(`User clicks on search icon in side bar menu`, () => {
    sidebarpage.getSidebarSearchIcon().click({ force: true })
    //defaultMenu to not be active
    cy.get('div.sidebar-menu button:nth-child(1)').should('not.have.class', 'active-menu')
    //Search menu to be active
    cy.get('div.sidebar-menu button:nth-child(2)').should('have.class', 'active-menu')
});
Then(`User selects below attribute search criteria and clicks on {string} button in side panel`, (buttonLabel, table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('State')) {
            //sidebarpage.getStateFilterCombobox().type(row.State)
            sidebarpage.getStateFilterCombobox().click()
            sidebarpage.getComboboxOptions().each(($filterOption, index, $list) => {
                var currentOption = $filterOption.text()
                cy.log('State option: ', currentOption)
                if (currentOption === row.State) {
                    cy.wrap($filterOption).click({ force: true })
                }
            })
        }
        if (row.hasOwnProperty('County')) {
            sidebarpage.getCountyFilterCombobox().type(row.County)
            sidebarpage.getComboboxOptions().each(($filterOption, index, $list) => {
                var currentOption = $filterOption.text()
                cy.log('County option: ', currentOption)
                if (currentOption === row.County) {
                    cy.wrap($filterOption).click({ force: true })
                }
            })
        }

        if (row.hasOwnProperty('TGSOperator')) {
            sidebarpage.getTGSOperatorFilterCombobox().type(row.TGSOperator, { force: true })
            sidebarpage.getComboboxOptions().each(($filterOption, index, $list) => {
                var currentOption = $filterOption.text()
                cy.log('State option: ', currentOption)
                if (currentOption === row.TGSOperator) {
                    cy.wrap($filterOption).click({ force: true })
                }
            })
        }

        if (row.hasOwnProperty('AttributeName')) {
            sidebarpage.getFilterCombobox().last().click().type(row.AttributeName)
            sidebarpage.getComboboxOptions().each(($filterOption) => {
                var currentOption = $filterOption.text();
                cy.log("Current Option: " + currentOption)
                if (currentOption === row.AttributeName) {
                    cy.wrap($filterOption).click({ force: true })
                }
            })
        }
        if (row.hasOwnProperty('HasProduction')) {
            sidebarpage.getFilterCombobox().last().click().type(row.HasProduction)
            sidebarpage.getComboboxOptions().each(($filterOption) => {
                var currentOption = $filterOption.text();
                cy.log("Current Option: " + currentOption)
                if (currentOption === row.HasProduction) {
                    cy.wrap($filterOption).click({ force: true })
                }
            })
        }
    });

    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        cy.log(currentButtonLabel)
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true }).then(function () {
                //cy.get('.MuiLinearProgress-root').should('be.visible')
                cy.get('svg.MuiCircularProgress-svg').should('exist')
            })
        }
    }).then(function () {
        // cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
        // cy.wait('@SearchResultsLoad').its('response.statusCode').should('eq', 204)
        //cy.wait(5000)
        cy.get('svg.MuiCircularProgress-svg').should('not.exist')
    })
    // cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    // cy.wait('@SearchResultsLoad')
    // cy.wait(10000)
    //     .then(function () {
    //         cy.get('div.grid-container').should('be.visible')
    //     })
    cy.get('div.grid-container').should('be.visible')
});
Then(`User clicks the three-dot menu in the result grid header`, () => {
    cy.get('div[class*="floating-scrollbar-left custom-drawer search-panel"] svg[data-testid="ChevronLeftIcon"]').click({ force: true })
    searchresultpage.getThreeDotIcon().click({ force: true })
});
Then('User clicks on {string} option', function () {
    cy.task('downloads', Cypress.config("fileServerFolder") + "/cypress/downloads").then(before => {
        searchresultpage.getExportAsExcelOption().click().then(function () {
            cy.contains('div[role="alert"] div.MuiSnackbarContent-message', 'Excel is now exporting').should('be.visible');
        }).wait(500).then(function () {
            cy.task('downloads', Cypress.config("fileServerFolder") + "/cypress/downloads").then(after => {
                newFile = after.filter(file => !before.includes(file))[0]
            })
        })
    }).then(function () {
        cy.task('listFiles', Cypress.config("fileServerFolder") + "/cypress/downloads").then((files) => {
            // files.forEach((file) => {
            //     const regex = /^TGS_Grid_\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}.xlsx$/
            //     expect(file).to.match(regex)
            // })
        })
        cy.log(newFile)
    })
})
Then('User validate the downloaded excel file', function (table) {
    var availableRows;
    cy.get('div.count-group:nth-child(3) p:nth-child(2):visible').each(($filteredCountValue) => {
        availableRows = $filteredCountValue.text()
        availableRows = parseInt(availableRows.replace(",", ""))
    })
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('validateFile')) {
            const filePaths = Cypress.config("fileServerFolder") + "/cypress/downloads/" + newFile;
            var searchData = row.validateFile
            searchData = searchData.split(",")
            //cy.log(searchData.toString())
            cy.readExcelFile({ filePaths, searchData }).then(({ totalRows, foundData }) => {
                expect(totalRows - 1).equal(availableRows)
                //cy.log(totalRows - 1 + ' lines available in the excel sheet')
                Object.entries(foundData).forEach(([key, value]) => {
                    if (value) {
                        //cy.log(key + ' is available in the excel file')
                        expect(searchData).to.include(key)
                    }
                })
            })
        }
    })
})
Then('User clicks the three-dot menu in the Search menu header', () => {
    cy.get('div[class*="floating-scrollbar-left custom-drawer search-panel"] svg[data-testid="ChevronLeftIcon"]').click({ force: true })
    searchresultpage.getThreeDotIcon().click({ force: true })
});

Then('User click on {string} button', function () {
    cy.get('button[class*="tgsccl-button"] svg').click().then(function () {
        cy.get('div.qb-editor-container').should('be.visible')
    })
})
Then('User select below non default attribute', function (table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('NonDefaultAttribute')) {
            cy.get('div[class*="MuiPaper-root"] div[class*="qb-editor-content"] div div div[class="qb-editor-attrib-list"] div').each(($visibleText, index, $list) => {
                if ($visibleText.text().includes(row.NonDefaultAttribute)) {
                    cy.wrap($visibleText).click().then(function () {
                        cy.wrap($visibleText).find('svg').should('have.attr', 'data-testid', 'CancelIcon')
                        cy.get('div.selected').should('be.visible')
                    })
                }
            })
        }
    })
})

Then('User select below non default attribute and populate below value and click on {string} button', function (buttonLabel, table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('NonDefaultAttribute')) {
            cy.get('div[class*="MuiPaper-root"] div[class*="qb-editor-content"] div div div[class="qb-editor-attrib-list"] div').each(($visibleText, index, $list) => {
                if ($visibleText.text().includes(row.NonDefaultAttribute)) {
                    cy.wrap($visibleText).click();
                }
            })
        }
        if (row.hasOwnProperty('ItsValue')) {
            sidebarpage.getWellStatusCombobox().type(row.ItsValue);
            cy.intercept('**/api/wells/count/WellStatus**').as('WellStatusDropdownLoader')
            cy.wait('@WellStatusDropdownLoader').its('response.statusCode').should('eq', 200)
            sidebarpage.getComboboxOptions().each(($filterOption, index, $list) => {
                var currentOption = $filterOption.text()
                cy.log('WellStatus option: ', currentOption)
                if (currentOption.includes(row.ItsValue)) {
                    cy.wrap($filterOption).click({ force: true })
                }
            })
        }
    })
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        cy.log(currentButtonLabel)
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    cy.wait(10000)
    //cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    //cy.wait('@SearchResultsLoad')
})


Then('User verifies {string} option is {string} in menu', function (Option, visibility) {
    sidebarpage.getThreeDotVerticalIcon().click({ force: true })
    if (visibility.includes('enabled')) {
        //cy.get('[data-testid="FileDownloadIcon"]').should('be.enabled')
        sidebarpage.getExportEnabledLabel().each(($buttonElement, index, $list) => {
            var value = $buttonElement.text()
            cy.log(value)
            cy.wrap($buttonElement).should('be.visible')
        })
    }

    else {
        //cy.get('[data-testid="FileDownloadIcon"]').should('not.be.visible')
        sidebarpage.getExportDisabledLabel().each(($buttonElement, index, $list) => {
            var value = $buttonElement.text()
            cy.log(value)
            cy.wrap($buttonElement).should('be.disabled')
        })
    }
});

Then('User perform below UWI search and click on {string} option', function (buttonLabel, table) {
    sidebarpage.getUwiSearchTab().click();
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('UWI')) {
            cy.get('div[class*="MuiInputBase-root"] textarea[placeholder*="Comma Delimited"]').type(row.UWI);
        }
    })
    cy.wait(3000).then(function () {
        sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
            var currentButtonLabel = $buttonElement.text()
            cy.log(currentButtonLabel)
            if (currentButtonLabel.includes(buttonLabel)) {
                cy.wrap($buttonElement).click({ force: true })
            }
        })
    })
    // cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    // cy.wait('@SearchResultsLoad')
    cy.wait(10000)
        .then(function () {
            cy.get('div.grid-container').should('be.visible')
        })
})

Then('User click on the saved search icon in side bar menu and click the above original saved search', function () {
    sidebarpage.getSavedSearchIcon().click();

    cy.get('.saved-search-content ul div div div div li div div h5').each(($ele) => {

        if ($ele.text().includes(MyInitialSavedSearch)) {
            cy.wrap($ele).click({ force: true }).then(function () {
                cy.get('svg.MuiCircularProgress-svg').should('exist')
            });
        }
    }).then(function () {
        cy.get('svg.MuiCircularProgress-svg').should('not.exist')
    })
})
Then('User verifies if dashboard chart is visible', function () {
    cy.get('div.sidebar-menu button:nth-child(1)').should('have.class', 'active-menu')
    cy.get('div.dashboard-charts-container').should('be.visible')
    cy.get(':nth-child(2) > .chart-container > .plot-chart').should('be.visible')
    cy.get('div.dashboard-chart-main div p').contains('MONTHLY PRODUCTION BY VINTAGE').should('be.visible')
    cy.get('div.stacked-bar-chart').should('be.visible')
})
Then('User verifies the chart style', function () {
    cy.get('g.g-xtitle text[data-unformatted="Year"]').should('contain', 'Year')
    cy.get('g.g-ytitle text[data-unformatted="Monthly Production (BOE)"]').should('contain', 'Monthly Production (BOE)')
})
Then('User refresh the page', function () {
    cy.reload();
})
Then('User click on the saved search icon in side bar menu and click the above saved search', function () {

    sidebarpage.getSavedSearchIcon().click({ force: true });

    cy.get('.saved-search-content ul div div div div li div div h5').each(($ele) => {
        if ($ele.text().includes(SavedSearchName)) {
            cy.wrap($ele).click({ force: true }).then(function () {
                cy.get('svg.MuiCircularProgress-svg').should('exist')
            });
        }
    }).then(function () {
        cy.get('svg.MuiCircularProgress-svg').should('not.exist')
    })
})
Then('User click on the search icon and deletes the polygon and click on the {string} button', function (buttonLabel) {
    sidebarpage.getSidebarSearchIcon().click()

    cy.get('div[class="polygon-search"] div[class*="polygon-search-content"] svg[data-testid="CancelIcon"]').eq(0).click();

    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    cy.wait('@SearchResultsLoad')
})
Then('User click on the search icon in side bar menu and select attribute option', function () {
    sidebarpage.getSidebarSearchIcon().click();
    sidebarpage.getAttributeSearchTab().click({ force: true });
})
Then('User click on the search icon in side bar menu and select attribute option and click on state text field', function () {
    sidebarpage.getSidebarSearchIcon().click();
    sidebarpage.getAttributeSearchTab().click({ force: true });
    sidebarpage.getStateFilterCombobox().click();
})

Then('User click on Sorted by Alpha A-Z', function () {
    cy.intercept('**/api/wells/count/StateName**').as('StateDropdownLoader')
    cy.wait('@StateDropdownLoader').its('response.statusCode').should('eq', 200)
    cy.contains('Sorted by Alpha (A-Z)').click().then(function () {
        sidebarpage.getStateFilterCombobox().click({ force: true });
    })
})

Then('User click on Sorted by Well Count Largest - Smallest', function () {
    sidebarpage.getStateFilterCombobox().click({ force: true }).then(function () {
        cy.intercept('**/api/wells/count/StateName**').as('StateDropdownLoader')
        cy.wait('@StateDropdownLoader').its('response.statusCode').should('eq', 200)
        cy.contains('Sorted by Well Count (Largest - Smallest)').click()
        sidebarpage.getStateFilterCombobox().click({ force: true });
    })

})
Then('User click on Sorted by Alpha Z-A', function () {
    sidebarpage.getStateFilterCombobox().click({ force: true }).then(function () {
        cy.intercept('**/api/wells/count/StateName**').as('StateDropdownLoader')
        cy.wait('@StateDropdownLoader').its('response.statusCode').should('eq', 200)
        cy.contains('Sorted by Alpha (Z-A)').click();
        sidebarpage.getStateFilterCombobox().click({ force: true });
    });
})
Then('User click on Sorted by Well Count Smallest - Largest', function () {
    sidebarpage.getStateFilterCombobox().click({ force: true }).then(function () {
        cy.intercept('**/api/wells/count/StateName**').as('StateDropdownLoader')
        cy.wait('@StateDropdownLoader').its('response.statusCode').should('eq', 200)
        cy.contains('Sorted by Well Count (Smallest - Largest)').click();

    });
})

Then('user {string} the search and click on the saved search option', function (resetButton) {
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        if (currentButtonLabel.includes(resetButton)) {
            cy.wrap($buttonElement).click({ force: true })

        }
    })
    sidebarpage.getSavedSearchIcon().click().then(function () {
        //SavedSearch icon should be active
        cy.get('div.sidebar-menu button:nth-child(3)').should('have.class', 'active-menu')
    });
})
Then('User select the UWI tab', function () {
    sidebarpage.getUwiSearchTab().click();
})
Then('User upload a valid UWI file', function () {
    const fileName = 'UWI.txt';
    cy.get('div[class="uwi-upload-buttons-container"] input[type="file"]').attachFile(fileName)
})

Then('User wait for the UWI file upload to complete', function () {
    cy.intercept({ method: 'POST', url: '**api/file-upload**' }).as("UploadComplete");
    cy.wait('@UploadComplete')
})
Then('User verifies the file upload', function () {
    cy.get('div.uwi-chip-container div span.MuiChip-label').contains('UWI')
})

Then('User verifies the {string} and {string} options', function () {

    cy.get('div.saved-search-content.css-fsxuga ul div div div div li div div h5').each(($ele, index, $list) => {
        if ($ele.text() == SavedSearchName) {
            cy.get('.MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiListItem-root > .MuiListItemSecondaryAction-root').eq(index).click()
            cy.get('div.saved-search-confirm-container button[class*="MuiButtonBase-root"]:nth-child(1)').eq(index).click().then(function () {
                cy.get('button[aria-label="delete"] svg path').eq(index).should('exist')
                cy.get('div.saved-search-confirm-container button[class*="MuiButtonBase-root"]:nth-child(1)').eq(index).should('not.be.visible')
            })
            cy.get('.MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiListItem-root > .MuiListItemSecondaryAction-root').eq(index).click()
            cy.get('div.saved-search-confirm-container button[class*="MuiButtonBase-root"]:nth-child(3)').eq(index).click().then(function () {
                cy.get('svg.MuiCircularProgress-svg').should('exist')
                // cy.intercept({ method: 'DELETE', url: '**/api/searches/**' }).as("DeleteComplete");
                // cy.wait('@DeleteComplete')
            }).then(function () {
                cy.get('svg.MuiCircularProgress-svg').should('not.exist')
            })
        }
    })
})
Then('User click on saved search icon and verifies the previous saved search is deleted successfully', function () {
    cy.get('div.sidebar-menu svg[data-testid="SavedSearchRoundedIcon"]').click();
    cy.get('.saved-search-content ul div div div div li div div h5').each(($ele) => {
        expect($ele.text()).to.not.have.string(SavedSearchName)
    })
})

Then('User verifies the previous saved search is deleted successfully', function () {
    //cy.get('div.sidebar-menu svg[data-testid="SavedSearchRoundedIcon"]').click();
    //cy.wait(5000)
    cy.get('.saved-search-content ul div div div div li div div h5').each(($ele) => {
        //expect($ele.text()).to.not.have.string(SavedSearchName)
        expect($ele.text()).to.not.equal(SavedSearchName)
    })
})

When('User clicks on Saved search icon in side bar menu', function () {
    sidebarpage.getSavedSearchIcon().click();
    //DefaultMenu to not be active
    cy.get('div.sidebar-menu button:nth-child(1)').should('not.have.class', 'active-menu')
    //SavedSearch icon is active
    cy.get('div.sidebar-menu button:nth-child(3)').should('have.class', 'active-menu')
    cy.get('.saved-search-content ul div div div div li div div h5').each(($ele, index, $list) => {
        searchArrayBeforeDelete[index] = $ele.text()
    })
})
Then('User clicks on the default dashboard icon in side bar menu', function () {
    sidebarpage.getDefaultDashboardIcon().click();
    cy.get('div.sidebar-menu button:nth-child(1)').should('have.class', 'active-menu')
})

Then('User selects below number of saved searches and confirm delete', function (table) {
    var TotalCount = 0;
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('NumberOfSavedSearchesToDelete')) {
            numberFormattedCount = Number(row.NumberOfSavedSearchesToDelete)
            cy.get('div.saved-search-content.css-fsxuga ul div div div div li div div h5').each(($ele, index, $list) => {
                TotalCount = TotalCount + 1;
            }).then(function () {
                if (numberFormattedCount > TotalCount) {
                    expect(TotalCount).to.be.greaterThan(numberFormattedCount);
                }
                else if (numberFormattedCount <= TotalCount) {
                    for (let iteration = 0; iteration < numberFormattedCount; iteration++) {
                        cy.get('div.saved-search-content.css-fsxuga ul div div div div li div div h5').eq(iteration).each(($elementText) => {
                            searchArrayAfterDelete[iteration] = $elementText.text();
                        }).then(function () {
                            cy.log(searchArrayAfterDelete.toString())
                        })
                        cy.get('.MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiListItem-root > .MuiListItemSecondaryAction-root').eq(iteration).click()
                    }
                }

            })

        }
    })
})
Then('User confirm to delete all the selected saved search', function () {
    for (let iteration = 0; iteration < numberFormattedCount; iteration++) {
        cy.get('div.saved-search-confirm-container button[class*="MuiButtonBase-root"]:nth-child(3)').eq(iteration).click().then(function () {
            cy.get('svg.MuiCircularProgress-svg').should('exist')
            // cy.intercept({ method: 'DELETE', url: '**/api/searches/**' }).as("DeleteComplete");
            // cy.wait('@DeleteComplete')
        }).then(function () {
            cy.get('svg.MuiCircularProgress-svg').should('not.exist')
        })
    }
})
Then('User captures the search UWI from the Grid', function () {
    cy.get('div[class*="MuiDataGrid-virtualScroller"] div[class*="MuiDataGrid-virtualScrollerContent"] div[class*="MuiDataGrid-virtualScrollerRenderZone"] div[role="row"] div[data-field="UWI"]').each(($visibleUWI, index, $list) => {
        UWIBeforeSave[index] = $visibleUWI.text()
    }).then(function () {
        cy.log(UWIBeforeSave.toString())
    })
})
Then('User extracts the grid UWIs after save', function () {
    cy.get('div[class*="MuiDataGrid-virtualScroller"] div[class*="MuiDataGrid-virtualScrollerContent"] div[class*="MuiDataGrid-virtualScrollerRenderZone"] div[role="row"] div[data-field="UWI"]').each(($visibleUWI, index, $list) => {
        UWIAfterSave[index] = $visibleUWI.text()
    }).then(function () {
        cy.log(UWIAfterSave.toString())
    })
})
Then('User verifies the results', function () {

    cy.wrap(UWIAfterSave.toString()).should('deep.equal', UWIBeforeSave.toString())
})

Then('User verifies the Saved Search Menu', function () {

    expect(searchArrayAfterDelete).to.not.have.same.members(searchArrayBeforeDelete);
})

Then('User modifies below attribute search criteria and clicks on {string} button in side panel', function (buttonLabel, table) {

    table.hashes().forEach(row => {
        if (row.hasOwnProperty('TGSOperator')) {
            sidebarpage.getTGSOperatorCombobox().type(row.TGSOperator)
            //cy.wait(5000);
            cy.intercept('**/api/wells/count/UltimateOwner**').as('OperatorDropdownLoader')
            cy.wait('@OperatorDropdownLoader').its('response.statusCode').should('eq', 200)
            sidebarpage.getComboboxOptions().each(($filterOption, index, $list) => {
                var currentOption = $filterOption.text()
                cy.log('TGSOperator option: ', currentOption)
                if (currentOption.includes(row.TGSOperator)) {
                    cy.wrap($filterOption).click({ force: true })
                }
            })
        }
    })
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        cy.log(currentButtonLabel)
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
            // cy.wait(3000)
        }
    })
})

Then('User click on the 3 dots at the right most edge of the search panel and select Export', function () {
    sidebarpage.getSidebarSearchIcon().click()
    cy.get('div[class="sub-header"] div button svg[data-testid="MoreVertIcon"]').click();
    cy.get('div[class*="MuiPaper-root"] button[class*="MuiButtonBase-root"] svg[data-testid="FileDownloadIcon"]').click()

    cy.intercept('**/api/searches**').as('Searchloader')
    cy.wait('@Searchloader').its('response.statusCode').should('eq', 200).then(function () {

        cy.get('div[class="sub-header"] h6').each(($visibleHeader) => {
            autoSavedSearchName = $visibleHeader.text();
            cy.log('AutoSavedSearchName: ' + autoSavedSearchName)
        })
    })
})
Then('User click on the saved Search icon and click on the recent auto saved search', function () {
    cy.get('div.sidebar-menu svg[data-testid="SavedSearchRoundedIcon"]').click();
    cy.get('.saved-search-content ul div div div div li div div h5').each(($visibleText, index, $list) => {
        var currentOption = $visibleText.text();
        if (currentOption === autoSavedSearchName) {
            cy.wrap($visibleText).click({ force: true })
        }
    })
    cy.intercept('**/api/searches**').as('Searchloader')
    cy.wait('@Searchloader').its('response.statusCode').should('eq', 200)
})
Then('User checks UWI checkbox and clicks on Analyze production plot', () => {
    gridtable.SelectAllrowsCheckbox().check().should('be.checked')
    productionplot.getAnalyzeIcon().click()
    productionplot.getProductionCurve().click({ multiple: true })

});

Then('User Navigate to Settings and Aggregate wells by attribute and Verify Production Plot Chart Data groups', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('GroupBy')) {
            //click on threedotsMenu in Production curve
            productionplot.getThreeDotMenuIcon().click()
            //click on settings
            productionplot.getSettingsIcon().click()
            //check radio button Groupwell by Attribute
            productionplot.getGroupwellbyAttributeBtn().check().should('be.checked')
            //click on Groupby Field
            productionplot.getGroupbyField().click()
            //Select Particular element in Groupby Field values
            productionplot.getGroupbyFieldvalues().each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.GroupBy)) {
                    cy.wrap($filterOption).click()
                }

            })
            //click on save button
            productionplot.getSaveIcon().click()
            //cy.pause()
            // cy.intercept('**/api/wells/productions**').as('loader')
            // cy.wait('@loader').its('response.statusCode').should('eq', 200)

            var count = 0;
            productionplot.getProductionChartGroups().each(($Legendtext, index, $list) => {
                cy.log($Legendtext.text())
                count = count + 1;
            }).then(function () {
                cy.log(count)
                if (count > 10) {
                    expect(count).to.be.greaterThan(10);
                    cy.log("Production Plot Chart Data has more than 10 groups")
                }
                else {
                    expect(count).to.be.lessThan(10);
                    cy.log("Production Plot Chart Data has less than 10 groups")
                }
            })
        }
    })
})

Then('mouse hover on chart line and validate Unit and Number Format', function () {
    productionplot.getProductionPlotChartMousehover().trigger('mouseover').click({ force: true })
})

Then('mouse hover on fullscreen chart line and validate Unit and Number Format', function () {
    cy.get('div[class="MuiDialogContent-root css-1ty026z"] div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]')
        .trigger('mouseover').click({ force: true })
})


Then('User click on the saved search icon in side bar menu and click the above UWI saved search', function () {
    sidebarpage.getSavedSearchIcon().click();

    cy.get('.saved-search-content ul div div div div li div div h5').each(($ele) => {
        if ($ele.text().includes(SavedSearchName)) {
            cy.wrap($ele).click().then(function () {
                cy.get('svg.MuiCircularProgress-svg').should('exist')
            });
        }
    }).then(function () {
        cy.get('svg.MuiCircularProgress-svg').should('not.exist')
    })

})
Then('User select the dropdown value and click on {string} button in the side panel', function (buttonLabel) {
    cy.get('ul[aria-labelledby="tags-outlined-label"] li:nth-child(1)').click().then(function () {
        sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
            var currentButtonLabel = $buttonElement.text()
            if (currentButtonLabel.includes(buttonLabel)) {
                cy.wrap($buttonElement).click({ force: true })
            }
        })
    });
    cy.wait(10000)
    //cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    //cy.wait('@SearchResultsLoad')
})
Then('User click on the State Text field', function () {
    sidebarpage.getStateFilterCombobox().click();
})

Then('User click on the below saved search', function (table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('MySavedSearch')) {
            originalSave = row.MySavedSearch
            cy.get('.saved-search-content ul div div div div li div div h5').each(($visibleText) => {
                var textVisible = $visibleText.text();
                if (textVisible === originalSave) {
                    cy.wrap($visibleText).click({ force: true });
                }
            })
        }

    })

    cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    cy.wait('@SearchResultsLoad')
})

Then('User click on the {string} button at the bottom of the search panel and click the {string} button', function (drawButton, polygonbutton) {
    sidebarpage.getShapesPanel().each(($element, index, $list) => {
        var currentButtonText = $element.text();
        if (currentButtonText.includes(drawButton)) {
            sidebarpage.getDrawButtonOption().click({ force: true });
        }
    }).then(function () {
        sidebarpage.getPolygonOption().click();
    })
})

Then('User draw the polygon and click on the {string} button in the side panel', function (buttonLabel) {
    cy.get('#map').then(($canvas) => {
        const canvasWidth = $canvas.width();
        cy.log(canvasWidth)
        const canvasHeight = $canvas.height()
        cy.log(canvasHeight)
        const canvasX = (canvasWidth / 2) + 140
        const canvasY = canvasHeight / 4
        cy.wrap($canvas).scrollIntoView().click(canvasX, canvasY)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 90, canvasY)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 50, canvasY + 70)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 30, canvasY + 90)
        cy.wrap($canvas).scrollIntoView().dblclick(canvasX, canvasY + 70)

    })
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    cy.wait('@SearchResultsLoad')
})
Then('User deletes the previous searched attribute', function () {
    cy.get('div.MuiAutocomplete-tag svg[data-testid="CancelIcon"]').last().click()
})
Then('User deletes the polygon and click on the {string} button', function (buttonLabel) {

    cy.get('div[class="polygon-search"] div[class*="polygon-search-content"] svg[data-testid="CancelIcon"]').eq(0).click();
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    }).then(function () {
        // cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
        // cy.wait('@SearchResultsLoad')
        cy.wait(10000)
    })
})

Then('User mouse over to the below label and click on the 3 dots,click on {string} option and verify if the option is disabled', function (sortOption, table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('mouseOverLabel')) {
            cy.get('div.MuiDataGrid-main div.MuiDataGrid-columnHeadersInner div[role="row"] div[role="columnheader"]').each(($resultgridHeaderLabel, index, $list) => {
                if ($resultgridHeaderLabel.text().includes(row.mouseOverLabel)) {
                    cy.get('div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').eq(index).realHover('mouse').then(function () {
                        cy.get('div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]:visible').click();
                    })
                    // cy.intercept('**/api/wells/search/**').as('Loader')
                    // cy.wait('@Loader').its('response.statusCode').should('eq', 200).then(function(){
                    cy.wait(3000).then(function () {
                        cy.contains(sortOption).click().then(function () {
                            // cy.intercept('**/api/wells/search/**').as('Loader')
                            // cy.wait('@Loader').its('response.statusCode').should('eq', 200)
                            cy.wait(3000)
                        })

                    })
                    cy.get('div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').eq(index).realHover('mouse').then(function () {
                        cy.get('div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]:visible').click().then(function () {
                            cy.get('div.css-14w4fnd li.MuiMenuItem-gutters').contains(sortOption).should('have.attr', 'aria-disabled', 'true').then(function () {
                                cy.get('div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]:visible').click().then(function () {
                                    //cy.get('body').click().then(function(){
                                    cy.get('div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').eq(index).trigger('mouseleave')
                                });
                            })
                        })
                    })
                }
            })
        }
    })
})

Then('User mouse over to the below label and click on the 3 dots,click on {string} checkbox and click on {string} button and verifies if filter is applied', function (checkbox, filter, table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('mouseOverLabel')) {
            var resultGridHeaderLabel = [];
            cy.get('div.MuiDataGrid-main div.MuiDataGrid-columnHeadersInner div[role="row"] div[role="columnheader"]').each(($resultgridHeaderLabel, index, $list) => {
                resultGridHeaderLabel[index] = $resultgridHeaderLabel.text();
                if ($resultgridHeaderLabel.text().includes(row.mouseOverLabel)) {
                    cy.get('div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').eq(index).realHover('mouse').then(function () {
                        cy.get('div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]:visible').click();
                    })
                    // cy.intercept('**/api/wells/count/**').as('Loader')
                    // cy.wait('@Loader').its('response.statusCode').should('eq', 200).then(function(){
                    cy.wait(3000).then(function () {
                        cy.get('div[class*="MuiListItemText-root"]').each(($visibleText, index, $list) => {
                            var visibleOption = $visibleText.text();
                            if (visibleOption.includes(checkbox)) {
                                cy.get('li[class*="MuiListItem-root"] div div span svg[data-testid="CheckBoxOutlineBlankIcon"]').eq(index).click({ force: true });
                            }
                        })

                        cy.get('div[class*="grid-filter-footer"] button span').click({ force: true });
                        // cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("Load");
                        // cy.wait('@Load').then(function(){
                        cy.wait(5000).then(function () {
                            cy.get('button.MuiIconButton-root svg[data-testid="FilterAltIcon"]').each(($filter, index, $list) => {
                                cy.wrap($filter).should('be.visible')
                            })
                        })

                    })
                }
            })
        }
    })
})

Then('User click the dropdown next to save button', function () {

    sidebarpage.getSidebarSearchIcon().click()
    cy.get('div[class*="action-button-container"] button:nth-child(2) span svg[data-testid="KeyboardArrowDownIcon"]').click()
})

Then('User click on the save option', function () {
    cy.get('div[id="save-menu"] li:nth-child(1)').click()
    cy.wait(5000)

})
Then('User click on the saved Search icon in the side bar menu', function () {
    sidebarpage.getSavedSearchIcon().click();
})
Then('click on {string} option and provide the below name and {string} the search', function (saveOption, save, table) {
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        cy.log(currentButtonLabel)
        if (currentButtonLabel.includes(saveOption)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('MySavedSearch')) {
            SavedSearchName = row.MySavedSearch + (new Date().toISOString().slice(11, -1))
            console.log(SavedSearchName);
            cy.get('div[role="dialog"] div[class*="MuiInputBase-root"] input[placeholder="My Saved Search"]').type(SavedSearchName);

        }
        if (row.hasOwnProperty('MyInitialSavedSearch')) {
            MyInitialSavedSearch = row.MyInitialSavedSearch + (new Date().toISOString().slice(11, -1))
            console.log(MyInitialSavedSearch);
            cy.get('div[role="dialog"] div[class*="MuiInputBase-root"] input[placeholder="My Saved Search"]').type(MyInitialSavedSearch);

        }
    })
    cy.get('div[role="dialog"] div[class*="MuiDialogActions-root"] button').each(($buttonElement) => {
        var buttonLabel = $buttonElement.text();
        cy.log(buttonLabel)
        if (buttonLabel.includes(save)) {
            cy.wrap($buttonElement).click();
        }
    })
    cy.contains('div[role="alert"] div.MuiSnackbarContent-message', 'Saved successfully').should('be.visible');
})

Then('User click the saved search icon in side bar menu and click the above afterSavedSearch', function () {
    sidebarpage.getSavedSearchIcon().click();

    cy.get('.saved-search-content ul div div div div li div div h5').each(($ele) => {
        if ($ele.text() === (AfterSavedSearch)) {
            cy.wrap($ele).click();
        }
    })
})

Then('User click on Save option and provide the below name and save the search', function (table) {

    sidebarpage.getSidebarSearchIcon().click()
    cy.get('.attributes > .search-panel-footer > .action-button-container > .MuiButton-white').click()
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('MySavedSearch')) {
            AfterSavedSearch = row.MySavedSearch
            cy.get('div[role="dialog"] div[class*="MuiInputBase-root"] input[placeholder="My Saved Search"]').type(AfterSavedSearch)
        }
        cy.get('div[role="dialog"] div[class*="MuiDialogActions-root"] button').each(($buttonElement) => {
            var buttonLabel = $buttonElement.text();
            cy.log(buttonLabel)
            if (buttonLabel.includes("SAVE")) {
                cy.wrap($buttonElement).click();

            }
        })
    })
})

Then('User click the saved search icon in side bar menu and click on the original saved search', function () {
    cy.get('.saved-search-content ul div div div div li div div h5').each(($ele) => {
        if ($ele.text() === (originalSave)) {
            cy.wrap($ele).click({ force: true });
        }
    })
})

Then('User click on the two downward arrows on the search result header at right most edge of the screen', function () {
    cy.get('div.grid-toolbar-control button[class*="MuiButtonBase-root"]:nth-child(4)').click();
})
Then('User zoom in to zoom lvl 12 and right click on one of the well spots on the map', function () {
    cy.get('div[class="map-action"] ul[class*="map-left-action"] div button p').click({ force: true });
    cy.get('div[class="map-action"] ul[class*="map-left-action"] button p').each(($visibleNumber, index, $list) => {
        var zoomNumber = $visibleNumber.text();
        if (zoomNumber === 12) {
            cy.wrap($visibleNumber).click({ force: true });
        }
    })
})

Then('User click on the two upward arrows on the search result header at right most edge of the screen', function () {
    cy.get('button[class*="MuiButtonBase-root"] svg[data-testid="KeyboardDoubleArrowUpIcon"]').click({ force: true });
})
Then('User click on the Square button on the search results header at the right most edge of the screen', function () {
    cy.get('div.grid-toolbar-control button[class*="MuiButtonBase-root"]:nth-child(3)').click().then(function () {
        cy.get('div.sidebar-menu').should('not.be.visible')
    });
})

Then('User hover over the Current Operator until the 3 dots will appear and click on the 3 dots', function () {

    cy.get('div[aria-label="Current Operator"] div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').realHover('mouse');
    cy.get('div[data-field="OperatorName"] div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]').click();
})

Then('User select sort Z-A from the Menu', function () {
    cy.contains('Sort Z to A').click();
    cy.wait(3000)
    //cy.intercept('**/api/wells/search**').as('SearchLoader')
    //cy.wait('@SearchLoader').its('response.statusCode').should('eq', 200)
})

Then('User hover over the Well Type header and click on the 3 dots', function () {
    cy.get('div[aria-label="Well Type"] div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').realHover('mouse');
    cy.get('div[data-field="WellType"] div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]').click();
    cy.intercept('**/api/wells/count/WellType**').as('WellTypeLoader')
    cy.wait('@WellTypeLoader').its('response.statusCode').should('eq', 200)
})

Then('User select the checkbox next to Oil in the menu and click on apply filter option', function () {
    cy.get('div[class*="MuiListItemText-root"]').each(($visibleText, index, $list) => {
        var visibleOption = $visibleText.text();
        if (visibleOption.includes('OIL')) {
            cy.get('li[class*="MuiListItem-root"] div div span svg[data-testid="CheckBoxOutlineBlankIcon"]').eq(index).click({ force: true });
        }
    })
    cy.get('div[class*="grid-filter-footer"] button span').click({ force: true });
    cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("Load");
    cy.wait('@Load')
})
Then('User verifies the expected well count', function () {
    var expectedWellCount;
    sidebarpage.getExpectedWellCount().each(($expectedCount) => {
        expectedWellCount = $expectedCount.text();
        if (expectedWellCount === '0') {
            expect(expectedWellCount).equal('0')
        }
        if (expectedWellCount != 0) {
            expect(expectedWellCount).not.equal('0')
        }
    })
})
Then('User draw the polygon that does not cover the searched state and click on the {string} button in the side panel', function (buttonLabel) {
    cy.get('#map').then(($canvas) => {
        const canvasWidth = $canvas.width();
        cy.log(canvasWidth)
        const canvasHeight = $canvas.height()
        cy.log(canvasHeight)
        const canvasX = (canvasWidth / 4)
        const canvasY = canvasHeight / 4
        cy.wrap($canvas).scrollIntoView().click(canvasX, canvasY)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 90, canvasY)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 50, canvasY + 70)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 30, canvasY + 90)
        cy.wrap($canvas).scrollIntoView().dblclick(canvasX, canvasY + 70)
    })
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement) => {
        var currentButtonLabel = $buttonElement.text()
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("ResultsLoad");
    cy.wait('@ResultsLoad')
})

Then('User verifies the expected well count matching with the result grid search result', function () {
    var wellCountExpected;
    var searchResult;
    sidebarpage.getExpectedWellCount().each(($expectedCount) => {
        wellCountExpected = $expectedCount.text();
        var initialVisibleWellCount = wellCountExpected.split(",")
        wellCountExpected = initialVisibleWellCount[0] + initialVisibleWellCount[1]
        wellCountExpected = parseInt(wellCountExpected)
    }).then(function () {
        cy.log(wellCountExpected)
        cy.get('div.grid-count-container div:nth-child(1) p:nth-child(2)').each(($result, index, $list) => {
            searchResult = $result.text();
            var visibleSearchResults = searchResult.split(",")
            searchResult = visibleSearchResults[0] + visibleSearchResults[1]
            searchResult = parseInt(searchResult)
        })
    }).then(function () {
        expect(wellCountExpected).equal(searchResult)
    })
})

Then('User click on minimize option', function () {
    cy.get('div.grid-toolbar-control button[class*="MuiButtonBase-root"]:nth-child(2)').click({ force: true })
})

Then('User clicks on search icon in side bar menu and click on export button', function () {
    sidebarpage.getSidebarSearchIcon().click()
    cy.get('div[class="sub-header"] div button svg[data-testid="MoreVertIcon"]').click();
    cy.get('div[class*="MuiPaper-root"] button[class*="MuiButtonBase-root"] svg[data-testid="FileDownloadIcon"]').click();
    cy.intercept('**/api/searches**').as('Searchloader')
    cy.wait('@Searchloader').its('response.statusCode').should('eq', 200)
})

Then('User checks UWI checkbox', function () {
    cy.get('input[aria-label="Select all rows"]').check().should('be.checked')
})

Then('User clicks on Analyze button from result grid and verify if it is overlapping the parent pane', function () {
    cy.get('div[data-testid="grid-header-container"] div[class="analyze-button-container"] button span svg[data-testid="AddCircleOutlineRoundedIcon"]').click().then(function () {
        cy.get('div[class*="MuiDataGrid-virtualScroller"] div[class*="MuiDataGrid-virtualScrollerContent"] div[class*="MuiDataGrid-virtualScrollerRenderZone"] div[role="row"] div[data-field="UWI"]').should('be.hidden')
    });
})
Then('User close the sidePanel dashboard', function () {
    sidebarpage.getDashboardArrowButton().click();
})
Then('User verifies if grid content is visible', function () {
    cy.get('div.grid-plot-content').should('be.visible')
})
Then('User verifies the {string} and {string} font size at 150%', function () {
    cy.get('div.grid-count-container div.count-group p:nth-child(2)').each(($SearchResults, index, $list) => {
        cy.wrap($SearchResults).then($element => {
            const fontSizeAfterZoom = window.getComputedStyle($element[0]).fontSize
            expect(fontSizeAfterZoom).to.equal('20px')
        })
    })
})
Then('User verifies the {string} and {string} font size at 100%', function () {
    cy.get('div.grid-count-container div.count-group p:nth-child(2)').each(($SearchResults, index, $list) => {
        cy.wrap($SearchResults).then($element => {
            const fontSizeAfterZoom = window.getComputedStyle($element[0]).fontSize
            expect(fontSizeAfterZoom).to.equal('14px')
        })
    })
})

Then('User sets the browser zoom value to 150%', function () {
    cy.viewport(1920, 1080);
    cy.window().then(window => {
        const zoomLevel = window.devicePixelRatio;
        expect(zoomLevel).to.be.closeTo(1.5, 0.01);
    })
})
Then('User sets the browser zoom value to 100%', function () {
    cy.viewport(1280, 720);
    cy.window().then(window => {
        const zoomLevel = window.devicePixelRatio;
        expect(zoomLevel).to.be.closeTo(1.5, 0.01);
    })
})
Then('User verifies the search panel is displayed', function () {
    cy.get('div.drawer-container').should('be.visible')
})
Then('User verifies the search panel with left tab as attribute and selected as default and right tab as UWI', function () {
    cy.get('div[aria-label="sidebar-tabs"] button').each(($sidebarButtons, index, $list) => {
        if ($sidebarButtons.text().includes('Attributes')) {
            expect($sidebarButtons.first().text()).to.equal('Attributes')
            cy.wrap($sidebarButtons).first().should('have.attr', 'aria-selected', 'true')
        }
        if ($sidebarButtons.text().includes('UWI')) {
            expect($sidebarButtons.last().text()).to.equal('UWI')
        }
    })
})
Then('User check if below attribute available in the attribute list', function (table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('Attribute')) {
            cy.get('div[class*="MuiPaper-root"] div[class*="qb-editor-content"] div div div[class="qb-editor-attrib-list"] div').each(($visibleText, index, $list) => {
                if ($visibleText.text().includes(row.Attribute)) {
                    expect($visibleText.text()).to.equal(row.Attribute)
                }
            })
        }
    })
})

Then('User verfies sidepanel footer buttons', function () {
    sidebarpage.getSidePanelFooterButtons().each(($footerButtons, index, $list) => {
        if ($footerButtons.prop('disabled')) {
            cy.log($footerButtons.text())
            cy.wrap($footerButtons).should('be.disabled');
        }
        if (!$footerButtons.prop('disabled')) {
            cy.log($footerButtons.text())
            cy.wrap($footerButtons).should('be.enabled');
        }
    })
})
Then('User verifies the expected well count after drawing polygon', function () {
    var expectedCount;
    cy.wait(3000)
    sidebarpage.getExpectedWellCount().each(($expectedCount) => {
        expectedCount = $expectedCount.text();
        expectedCount = Number(expectedCount)
    }).then(function () {
        expect(expectedCount).to.be.lessThan(initialExpectedWellCount)
    })
})

When('User clicks on question mark icon in top right corner of app', () => {
    cy.get('div[class*="right-header"] svg[class*="MuiSvgIcon-root"]').click()
});

Then('User selects Release Notes for the current release', () => {
    cy.get('.css-jp7szo > .MuiPaper-root > :nth-child(2)').click()
});

Then('User clicks on Whats Next', () => {
    cy.get('.css-12vq3cr > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > [tabindex="-1"]').click()
});

Then('User click on the Load Shape button at the bottom of the search panel', () => {

    //Filename to be uploaded, should be in fixtures folder
    const fileName = 'SinglePolygon.zip'

    //Attach File
    cy.get('div[class="polygon-buttons-container"] input[id="upload-file"]').attachFile(fileName)

    cy.wait(5000)

})

Then('User click on the {string} button in the side panel', function (buttonLabel) {

    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    cy.wait('@SearchResultsLoad')
})

Then('User selects Help and verify Link', () => {
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
            win.location.href = 'https://saga-analytics-test.tgs.ai/static/help/Log_in_to_Well_Data_Analytics.htm';
        }).as("popup")
    })
    cy.get('.MuiPaper-root > :nth-child(3)').click()

    cy.get('@popup')
        .should("be.called")
    cy.url().should('include', '/help/Log_in_to_Well_Data_Analytics.htm')
    cy.title().should('include', 'Logging in to Well Data Analytics')
});

Then('User selects Data Dictionary and verify Link', () => {
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
            win.location.href = 'https://saga-analytics-test.tgs.ai/static/datadictionary/Well_System.htm';
        }).as("popup")
    })
    cy.get('.MuiPaper-root > :nth-child(4)').click()

    cy.get('@popup')
        .should("be.called")
    cy.url().should('include', '/datadictionary/Well_System.htm')
    cy.title().should('include', 'Well System')

});

When('User clicks on Saved search icon in side bar menu and clicks on existing Saved search', function (table) {

    table.hashes().forEach(row => {
        if (row.hasOwnProperty('MySavedSearch')) {
            savedsearchpage.getSavedSearchRoundedIcon().click();
            savedsearchpage.getSavedSearchValues().each(($ele) => {
                if ($ele.text().includes(row.MySavedSearch)) {
                    cy.wrap($ele).click({ force: true });
                }

            })
        }
    })
})
Then('Click 3dots at the right-most edge of the Search Panel then select Export', () => {
    sidebarpage.getThreeDotVerticalIcon().click({ force: true })
    sidebarpage.getExportEnabledLabel().each(($buttonElement, index, $list) => {
        var value = $buttonElement.text()
        cy.log(value)
        cy.wrap($buttonElement).should('be.visible').click({ force: true })
    })
});

Then('Click Saved Search icon located below the Search icon and view recent auto-saved search', (table) => {

    table.hashes().forEach(row => {
        if (row.hasOwnProperty('MySavedSearch')) {

            savedsearchpage.getSavedSearchRoundedIcon().click();
            savedsearchpage.getSavedSearchValues().each(($ele) => {
                if ($ele.text().includes(row.MySavedSearch)) {
                    cy.wrap($ele).click({ force: true })
                }
            })
        }
    })
    sidebarpage.getSidebarSearchIcon().click()
})

Then('User clicks on MapSettings and under Surface & Bottom section->Color By then select Attribute field', function (table) {


    table.hashes().forEach(row => {
        if (row.hasOwnProperty('AttributeField')) {
            mapsettings.MapSettingsIcon().click()
            mapsettings.ColorByFieldValue().click()
            mapsettings.AttributeValue().click()

            mapsettings.AttributeField().click().type(row.AttributeField)
            mapsettings.AttributeFieldDropDownValues().each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.AttributeField)) {
                    cy.wrap($filterOption).click()
                    // cy.wrap($buttonElement).click({ force: true })
                }
            })

        }
    })
    legendpage.LegendIcon().should('be.visible')
})

Then('select Zoom upto 12 or more', function () {
    zoomlevel.ZoomValue().click({ force: true });
    zoomlevel.ZoomLevels().each(($visibleNumber, index, $list) => {
        var zoomNumber = $visibleNumber.text();
        if (zoomNumber === '12') {
            cy.wrap($visibleNumber).click({ force: true });
        }
    })
})

Then('Enable Bottom hole Location layer only then Enable Surface and Bottom hole Location layers', function () {
    mapsettings.BottomHoleLocationCheckbox().check({ force: true }).should('be.checked')
    mapsettings.SurfaceHoleLocationCheckbox().should('be.checked')
})

Then('User clicks three-dot menu in the Search menu header', function () {
    gridtable.HorizontalIcon().click()
})

Then('click Show or Hide Columns option then add Slant column', (table) => {

    table.hashes().forEach(row => {
        if (row.hasOwnProperty('AttributeField')) {
            gridtable.ShoworHideColumnsOption().click()

            gridtable.ShoworHideColumnsSearchBox().type(row.AttributeField)
            gridtable.ShoworHideColumnsDropdownValues().each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.AttributeField)) {
                    gridtable.ToggleButton()
                    gridtable.HorizontalIcon().click({ force: true })
                }
            })
            gridtable.Slantrow().trigger('mouseover', { force: true })
            gridtable.SlantrowTripleDotsVerticalIcon().click({ force: true });

        }
    })
})

Then('click Show or Hide Columns option then add State Well ID column', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('AttributeField')) {
            gridtable.ShoworHideColumnsOption().click()

            gridtable.ShoworHideColumnsSearchBox().type(row.AttributeField)
            gridtable.ShoworHideColumnsDropdownValues().each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.AttributeField)) {
                    gridtable.ToggleButton().click({ force: true })
                    gridtable.HorizontalIcon().click({ force: true })
                }
            })
            cy.get('div.MuiDataGrid-virtualScroller').scrollTo('right');
            //cy.get('[aria-colindex="17"] > .MuiDataGrid-columnHeaderDraggableContainer > .MuiDataGrid-columnHeaderTitleContainer > .MuiDataGrid-columnHeaderTitleContainerContent > .MuiDataGrid-columnHeaderTitle').trigger('mouseover', { force: true })
            gridtable.StateWellIDrow().trigger('mouseover', { force: true })
            gridtable.StateWellIDTripleDotsVerticalIcon().click({ force: true })
        }
    })
})
Then('sort the column Z-A', function () {

    gridtable.ZtoASort().click();
})

Then('click on {string} option and provide the below name and save the search', function (saveOption, table) {

    sidebarpage.getSidebarSearchIcon().click({ force: true })
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        cy.log(currentButtonLabel)
        if (currentButtonLabel.includes(saveOption)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('MySavedSearch')) {
            SavedSearchName = row.MySavedSearch + (new Date().toISOString().slice(11, -1))
            console.log(SavedSearchName);
            sidebarpage.getSaveSearchField().type(SavedSearchName);

        }
    })
    sidebarpage.getSaveIcon().each(($buttonElement) => {
        var buttonLabel = $buttonElement.text();
        cy.log(buttonLabel)
        if (buttonLabel.includes("SAVE")) {
            cy.wrap($buttonElement).click();

        }
    })
})
Then('user clicks {string} in search and click on the saved search option', function (resetButton) {
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        if (currentButtonLabel.includes(resetButton)) {
            cy.wrap($buttonElement).click({ force: true })

        }
    })
    savedsearchpage.getSavedSearchRoundedIcon().click({ force: true });
})

Then('User clicks on MapSettings', function () {
    mapsettings.MapSettingsIcon().click()
})

Then('under WellStyle Section select SurfaceHoleLocation and deselect BottonHoleLocation & WellPath Option', function () {
    mapsettings.SurfaceHoleLocationCheckbox().should('be.checked')
    mapsettings.BottomHoleLocationCheckbox().should('not.be.checked')
    mapsettings.WellPathCheckbox().uncheck().should('not.be.checked')


})

Then('select Zoom level 3-19', function () {
    zoomlevel.ZoomValue().click({ force: true });
    zoomlevel.ZoomLevels().each(($visibleNumber, index, $list) => {
        var zoomNumber = $visibleNumber.text();
        if (zoomNumber === '7') {
            cy.wrap($visibleNumber).click({ force: true });
        }
    })
})

Then('Validate Well label option under Map Settings', function () {
    mapsettings.WellLabelCheckbox().should('be.enabled').should('be.checked')
})

Then('Hover to Surface Well Spots', function () {
    cy.wait(15000)
    //cy.intercept({ method: 'POST', url: '**/api/wells/search/**' }).as("WellsResultsLoad");
    //cy.wait('@WellsResultsLoad')
    sidebarpage.getCavasMap().then(($canvas) => {
        const canvasWidth = $canvas.width();
        cy.log(canvasWidth)
        const canvasHeight = $canvas.height()
        cy.log(canvasHeight)
        const canvasX = (canvasWidth / 2)
        const canvasY = (canvasHeight / 2)
        cy.wrap($canvas).trigger('mouseover').click(canvasX + 100, canvasY)

        cy.get('.well-label-uwi-status > :nth-child(1) > span').then(function ($Number) {
            var WellSpotValue = Number($Number.text())
            cy.log(WellSpotValue)
            expect(WellSpotValue).to.be.a('number')
        })

        cy.get('.well-label-well-name').then(function ($Name) {
            var WellSpotName = $Name.text()
            cy.log(WellSpotName)
            let WellNameNumber = WellSpotName.split(",")
            var WellName = WellNameNumber[0].trim()
            cy.log(WellName)
            expect(WellName).to.be.a('string')
            var WellNumber = WellNameNumber[1].trim()
            WellNumber = Number(WellNumber)
            cy.log(WellNumber)
            expect(WellNumber).to.be.a('number')

        })


    })
})

Then('Unselect Well label option in MAP SETTINGS then hover to Surface Well Spot', function () {

    mapsettings.WellLabelCheckbox().uncheck().should('not.be.checked')
    cy.get('#map').then(($canvas) => {
        const canvasWidth = $canvas.width();
        cy.log(canvasWidth)
        const canvasHeight = $canvas.height()
        cy.log(canvasHeight)
        const canvasX = (canvasWidth / 2)
        const canvasY = (canvasHeight / 2)
        cy.wrap($canvas).trigger('mouseover').click(canvasX + 100, canvasY)
    })
    cy.wait(2000)
})

Then('User checks UWI checkbox and clicks on Analyze Type Curve', () => {
    gridtable.SelectAllrowsCheckbox().check().should('be.checked')
    productionplot.getAnalyzeIcon().click()
    productionplot.getTypeCurve().click()
});


Then('User Navigate to Settings and enable Plot Daily Values for Production Plot and click on Save', () => {
    productionplot.getThreeDotMenuIcon().click()
    productionplot.getSettingsIcon().click()
    cy.get('span[class*="Mui-checked Mui-checked css-1nobdqi"] input[class*="MuiSwitch-input css-1m9pwf3"]').should('be.checked')
    cy.get('span[class*="MuiSwitch-switchBase MuiSwitch-colorPrimary css-1nobdqi"] input[class*="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]').click().should('be.checked')
    productionplot.getSaveIcon().click()
    // cy.intercept('**/api/wells/productions**').as('loader')
    // cy.wait('@loader').its('response.statusCode').should('eq', 200)
    productionplot.getProductionChartGroups().each(($Legendtext, index, $list) => {

        if (($Legendtext.text()).includes('Daily')) {
            cy.log($Legendtext.text())
        }
    })
    cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').trigger('mouseover').click().each(($Value) => {
        var Chartval = $Value.text()
        cy.log(Chartval)
    })
});

Then('User Navigate to Settings and enable Plot Daily Values for Type Curve and click on Save', () => {
    productionplot.getThreeDotMenuIcon().click()
    productionplot.getSettingsIcon().click()
    cy.get('div[class*="MuiGrid-item css-1wxaqej"] label[class*="MuiFormControlLabel-labelPlacementEnd css-kswqkt"]').each(($filterOption, index, $list) => {
        var currentOption = $filterOption.text()

        if (currentOption.includes("Plot Daily Values")) {
            cy.wrap($filterOption).click()
        }
    })
    productionplot.getSaveIcon().click()
    // cy.intercept('**/api/wells/productions**').as('loader')
    // cy.wait('@loader').its('response.statusCode').should('eq', 200)
    productionplot.getProductionChartGroups().each(($Legendtext, index, $list) => {

        if (($Legendtext.text()).includes('Daily')) {
            cy.log($Legendtext.text())
        }
    })
    cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').trigger('mouseover').click().each(($Value) => {
        var Chartval = $Value.text()
        cy.log(Chartval)
    })

});

Then('Check the Chart Y-Axis label', function () {
    productionplot.getChartYAxislabel().then(($Result) => {
        var YaxisValue = $Result.text()
        cy.log(YaxisValue)
        expect(YaxisValue).to.include('Daily')
    })

})

Then('User Navigate to Settings and Aggregate wells by Individual wells and Verify Production Plot Chart Data groups', () => {

    //click on threedotsMenu in Production curve
    cy.get('div[class="plot-chart-toolbar"] [data-testid="MoreHorizIcon"]').click()
    //productionplot.getThreeDotMenuIcon().click()
    //click on settings
    cy.get('[data-testid="SettingsIcon"]').click()
    //cy.wait(5000)
    //check radio button Groupwell by Individual Wells
    cy.get('label[class*="MuiFormControlLabel-root"] [value="NONE"]').check().should('be.checked')

    //click on save button
    cy.get('[data-testid="SaveIcon"]').click()

    //Hover on chart
    cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').trigger('mouseover').click({ multiple: true })

    //cy.wait(5000)
    //Click on fullscreen button
    cy.get('.plot-chart-toolbar > :nth-child(5)').click()

});

Then('User Navigate to Settings and Aggregate wells by All wells and Verify Production Plot Chart Data groups', () => {

    //Click on fullscreen button
    //cy.get('.plot-chart-toolbar > :nth-child(5)').click()

    //click on threedotsMenu in Production curve
    cy.get('.MuiDialogContent-root > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

    //click on settings
    cy.get('[data-testid="SettingsIcon"]').click()

    //check radio button Groupwell by All Wells
    cy.get('label[class*="MuiFormControlLabel-root"] [value="Default"]').check().should('be.checked')

    //click on save button
    cy.get('[data-testid="SaveIcon"]').click()

});

Then('User Verify Production plot chart in full screen and Aggregate wells by attribute and Verify Production Plot Chart Data groups', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('GroupBy')) {

            //click on threedotsMenu in Production curve
            //cy.get('div[class="plot-chart-toolbar"] [data-testid="MoreHorizIcon"]').click({ multiple: true })
            cy.get('.MuiDialogContent-root > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

            //click on settings
            cy.get('[data-testid="SettingsIcon"]').click()

            //cy.wait(5000)
            //check radio button Groupwell by Attribute
            cy.get('label[class*="MuiFormControlLabel-root"] [value="ATTRIBUTES"]').check().should('be.checked')

            //click on Groupby Field
            cy.get('[id="groupby-select"]').click()

            //Select Particular element in Groupby Field values

            cy.get('li[class*="MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1bo1rz0"]').each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.GroupBy)) {
                    cy.wrap($filterOption).click()
                    // cy.wrap($buttonElement).click({ force: true })
                }

            })
            //click on save button
            cy.get('[data-testid="SaveIcon"]').click()
            // cy.wait(5000)

        }
    });
});

When('User clicks on Analyze icon on right corner of page', () => {
    cy.get('.modules-menu-container > .analyze-button-container > .MuiButtonBase-root').click()
});


Then('User selects production plot chart static image', () => {
    cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > :nth-child(2) > img').click()
});

Then('User clicks on Analyze and selects type curve chart static image', () => {
    cy.get('[data-testid="AddCircleOutlineRoundedIcon"]').click()
    cy.get('.MuiList-root > :nth-child(3) > img').click()

});

Then('User clicks Analyze and selects Type Curve plot', () => {
    //click on analyze
    //cy.get('.grid-analysis-button > .analyze-button-container > .MuiButtonBase-root').click()
    cy.get('.analysis-menu-container > .analyze-button-container > .MuiButtonBase-root > .MuiTypography-root').click()
    //click on Type curve plot
    //cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({ multiple: true })
    cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Type Curve Selector"]:visible').click({ multiple: true })

});

Then('User clicks Analyze and selects Scatter plot', () => {
    //click on analyze
    //cy.get('.grid-analysis-button > .analyze-button-container > .MuiButtonBase-root').click()
    cy.get('.analysis-menu-container > .analyze-button-container > .MuiButtonBase-root > .MuiTypography-root').click({ force: true })
    //click on Type curve plot
    //cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({ multiple: true })
    cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Scatter Plot Selector"]:visible').click({ multiple: true })

});

Then('User clicks on fullscreen view', () => {

    //Click on fullscreen button
    cy.get('.plot-chart-toolbar > :nth-child(5)').click()

});

Then('User clicks three dots and select settings', () => {

    //click on threedotsMenu in Production curve
    cy.get('.MuiDialogContent-root > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

    //click on settings
    cy.get('[data-testid="SettingsIcon"]').click()
});

Then('User clicks three dots from default view and select settings', () => {

    //click on threedotsMenu in Production curve
    cy.get('.plot-chart-toolbar > :nth-child(3)').click()

    //click on settings
    cy.get('[data-testid="SettingsIcon"]').click()
});

Then('User clears default title and modify title', function (table) {

    cy.get('[id="chart-title"]').click().clear()

    table.hashes().forEach(row => {
        if (row.hasOwnProperty('Title')) {
            cy.get('[id="chart-title"]').type(row.Title);
        }
    })

})

Then('User selects value for X Axis data field', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('DataField')) {

            //click on Data Field
            cy.get('div[class*="x-axis-data-picker-container"] div[class*="MuiFormControl-root"] div[class*="MuiInputBase-root"] ').click()
            //cy.get('.x-axis-data-picker-container > .MuiFormControl-root > .MuiInputBase-root')

            //Select Particular element in Data Field values
            cy.get('li[class*="MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1bo1rz0"]').each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.DataField)) {
                    cy.wrap($filterOption).click()
                    // cy.wrap($buttonElement).click({ force: true })
                }

            })
        }
    });
});

Then('User selects value for Y Axis data field', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('YDataField')) {
            // Find the label element containing the desired text
            cy.contains('tbody[class*="MuiTableBody-root"] tr[class*="MuiTableRow-root"]', row.YDataField)
                .find('input[type="checkbox"]') // Find the checkbox input
                .check({ force: true }) // Check the checkbox
                .should('be.checked'); // Assert that the checkbox is checked
        }
    });
});

Then('User clicks on save icon and verify chart', () => {

    cy.get('[data-testid="SaveIcon"]').click()
    cy.get('[class*="plot-chart-container"]').should('be.visible');
});

Then('User clicks on Analyze, hover and selects the Scatter Plot Chart', function () {


    //cy.get('div[class="plot-chart-container"] svg[class="main-svg"] g[class="draglayer cursor-crosshair"] [class="nsewdrag drag"]').trigger('mouseover').first().click()

    //click on analyze
    cy.get('.analysis-menu-container > .analyze-button-container > .MuiButtonBase-root > .MuiTypography-root').click({ force: true })

    // Hover on scatter plot
    cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Scatter Plot Selector"]:visible').trigger('mouseover').click({ force: true })

    //click on Type curve plot
    //cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Scatter Plot Selector"]:visible').click({ multiple: true })

})

Then('User clicks on resize for minimized chart', () => {
    cy.get('.MuiDialogContent-root > .plot-chart-header > .plot-chart-toolbar > :nth-child(4)').click()
});


When('User clicks on MapSettings Icon in the right corner lower of the page', function () {
    cy.get('button[aria-label="MAP SETTINGS"]').click()
})
Then('Click on the Surface & Bottom Color By dropdown and validate Attribute option', function () {
    cy.get('.well-color-container > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click()
    cy.get('li[data-value="attribute"]').should('not.be.enabled')
})
Then('Hover over the Attribute option under Color By dropdown and Validate display of tool tip {string}', function (TooltipText) {

    cy.get('li[data-value="attribute"] div[class="tooltip-info"]').realHover('mouse').then((Info) => {

        cy.get('div[data-tool-tip="Search required"]').invoke('attr', 'data-tool-tip').should('eq', TooltipText)

    })
})

Then('Check the Well Label should be changed to {string} label', (WellCard) => {
    cy.get('label[class*="mapsetting-label css-kswqkt"] span[class=""]').then((WellLabel) => {

        var WellLabelName = WellLabel.text()
        cy.log(WellLabelName)
        expect(WellLabelName).to.equal(WellCard)
    })

})

Then('Verify of the Bottom Hole Layer selected is enabled', function () {
    mapsettings.BottomHoleLocationCheckbox().should('be.enabled')
})
Then('Click on the Bottom Hole Layer', function () {
    mapsettings.BottomHoleLocationCheckbox().check({ force: true }).should('be.checked')
})

Then('Select Zoomlevel', function (table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('ZoomLevel')) {

            zoomlevel.ZoomValue().click({ force: true });
            zoomlevel.ZoomLevels().each(($visibleNumber, index, $list) => {
                var zoomNumber = $visibleNumber.text();
                if (zoomNumber === row.ZoomLevel) {
                    cy.wrap($visibleNumber).click({ force: true });
                }
            })
        }
    })

})

Then('Check the {string} title with checkbox in the Culture Layers in map settings', (Option, table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('CultureLayerOption')) {

            cy.contains(Option).scrollIntoView().should('not.be.enabled').then(function (Text) {
                var Title = Text.text()
                cy.log(Title)
                expect(Title).to.equal(Option)
            })
        }
    })
})

Then('Check the {string} option in the culture layers and verify applied to maps', (textOption, table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('CultureLayerOption')) {
            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mapsetting-label css-kswqkt"]', row.CultureLayerOption)
                .find('input[type="checkbox"]') // Find the checkbox input
                .check({ force: true }) // Check the checkbox
                .should('be.checked')
                .should('be.enabled');
        }
    })

})
Then('Uncheck the {string} option in the culture layers and verify not applied to maps', (textOption, table) => {

    table.hashes().forEach(row => {
        if (row.hasOwnProperty('CultureLayerOption')) {
            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mapsetting-label css-kswqkt"]', row.CultureLayerOption)
                .find('input[type="checkbox"]')
                .uncheck({ force: true })
                .should('not.be.checked')
                .should('be.enabled')
        }
    })
})

Then('confirm MapSettings popup model displayed', () => {
    //cy.get('div[class*="map-settings-card open css-7k19v5"]').should('be.visible')
    cy.get('.map-settings-card').should('be.visible')
})

Then('Again User clicks on MapSettings Icon and verify popup model closed', () => {
    cy.get('button[aria-label="MAP SETTINGS"]').click().should('not.be.selected')

})

Then('Click on Legend icon and confirm popup model displayed', () => {
    cy.get('button[aria-label="LEGEND"]').click({ force: true }).should('be.enabled')
    //cy.get('div[class*="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root legends-card analysis-closed-mapsettings-open open css-1fonj0q"]').should('be.visible')
    //cy.get('div[class*="MuiPaper-elevation1 MuiCard-root legends-card open css-1fonj0q"]').should('be.visible')
    //cy.get('div[class*="MuiCard-root legends-card analysis-closed-mapsettings-open open css-1fonj0q"]').should('be.visible')
})

Then('Again Click on Legend icon and confirm popup model closed', () => {
    cy.get('button[aria-label="LEGEND"]').click({ force: true }).should('not.be.selected')
})

Then('Verify MapSettings and Legend icons are closed using X icon', function () {

    //cy.get('div[class*="MuiCard-root map-settings-card open css-7k19v5"] div div[class*="MuiCardHeader-action css-1bh09gn"]').click().should('not.be.visible')
    cy.get('.map-settings-card > .MuiCardHeader-root > .MuiCardHeader-action > .MuiButtonBase-root').click().should('not.be.visible')
    //cy.get('div[class*="map-settings-card open css-7k19v5"] div div button[aria-label="close"]').click().should('not.be.visible')
    //cy.get('.legends-card > .MuiCardHeader-root > .MuiCardHeader-action > .MuiButtonBase-root').click().should('not.be.visible')
    cy.get('div[class*="MuiCard-root legends-card open css-1fonj0q"] div  div[class*="MuiCardHeader-action css-1bh09gn"]').click().should('not.be.visible')

})

Then('expand {string} Section', (MapSettingsSection) => {
    cy.contains(MapSettingsSection).click({ force: true }).should('be.extensible')
})


Then('Validate Anomaly layers options', () => {

    cy.get('p[aria-label*="Anomaly"]').each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        cy.log(currentButtonLabel)
    })
})

Then('Select all Anomaly layers options', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('CultureLayerOption')) {
            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mapsetting-label css-kswqkt"]', row.CultureLayerOption)
                .find('input[type="checkbox"]')
                .check({ force: true })
                .should('be.checked')
                .should('be.enabled')
        }
    })
})

Then('verify Anamoly layers are still applied', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('CultureLayerOption')) {
            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mapsetting-label css-kswqkt"]', row.CultureLayerOption)
                .find('input[type="checkbox"]')
                .should('be.checked')
                .should('be.enabled')

        }
    })
})

Then('User click on the saved search icon and click on the recent saved search', function () {
    cy.get('div.sidebar-menu svg[data-testid="SavedSearchRoundedIcon"]').click();
    cy.get('.saved-search-content ul div div div div li div div h5').each(($visibleText, index, $list) => {
        var currentOption = $visibleText.text();
        if (currentOption === SavedSearchName) {
            cy.wrap($visibleText).click({ force: true })
        }
    })
    cy.wait(3000)
    // cy.intercept('**/api/searches**').as('Searchloader')
    // cy.wait('@Searchloader').its('response.statusCode').should('eq', 200)  
})

Then('User unselects checkboxes for Y Axis data field and verify save button is disabled', () => {

    //cy.contains('tbody[class*="MuiTableBody-root"] tr[class*="MuiTableRow-root"]')          
    cy.get('span[class*="MuiCheckbox-indeterminate"] input[type="checkbox"]') // Find the checkbox input
        .check({ force: true }) // uncheck the checkbox

    cy.get('body > div:nth-child(11) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)').should('be.disabled'); // Assert that the checkbox is checked
})

Then('User draw the polygon with >100k expected wells count and click on the {string} button in the side panel', function (buttonLabel) {
    cy.get('#map').then(($canvas) => {
        const canvasWidth = $canvas.width();
        cy.log(canvasWidth)
        const canvasHeight = $canvas.height()
        cy.log(canvasHeight)
        const canvasX = (canvasWidth / 2) + 140
        const canvasY = canvasHeight / 4


        cy.wrap($canvas).scrollIntoView().click(canvasX, canvasY)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 90, canvasY)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 130, canvasY + 130)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 130, canvasY + 130)
        cy.wrap($canvas).scrollIntoView().dblclick(canvasX, canvasY + 130)

    })
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    cy.wait('@SearchResultsLoad')
})

Then('User clicks on CANCEL button', () => {

    cy.get('[data-testid="ArrowBackIcon"]').click()

});

Then('User extracts the starting zoom value', function () {
    cy.get('div[role="group"] button p').each(($zoomLevel) => {
        startingZoomValue = $zoomLevel.text()
        startingZoomValue = Number(startingZoomValue)
        expect(startingZoomValue).to.be.lte(5)
    })
})
Then('User extracts the search zoom value', function () {
    cy.wait(5000).then(function () {
        cy.get('div[role="group"] button p').each(($zoomLevel) => {
            afterSearchZoomValue = $zoomLevel.text()
            afterSearchZoomValue = Number(afterSearchZoomValue)
        }).then(function () {
            expect(afterSearchZoomValue).to.be.greaterThan(startingZoomValue)
        })
    })
})

Then('User extracts the near search zoom value', function () {
    // cy.intercept({ method: 'GET', url: '**/Canvas/World_Dark_Gray_Base/MapServer/tile**' }).as("MapResultsLoad");
    // cy.wait('@MapResultsLoad').then(function () {
    cy.wait(10000).then(function () {
        cy.get('div[role="group"] button p').each(($zoomLevel) => {
            nearSearchZoomValue = $zoomLevel.text()
            nearSearchZoomValue = Number(nearSearchZoomValue)
        }).then(function () {
            if (nearSearchZoomValue < afterSearchZoomValue) {
                expect(nearSearchZoomValue).to.be.lessThan(afterSearchZoomValue)
            }
            if (nearSearchZoomValue < afterSearchZoomValue && nearSearchZoomValue > farSearchZoomValue) {
                expect(nearSearchZoomValue).to.be.greaterThan(farSearchZoomValue)
            }
        })
    })
})

Then('User extracts the far search zoom value', function () {
    // cy.wait('@MapResultsLoad').then(function () {
    cy.wait(10000).then(function () {
        cy.get('div[role="group"] button p').each(($zoomLevel) => {
            farSearchZoomValue = $zoomLevel.text()
            farSearchZoomValue = Number(farSearchZoomValue)
        }).then(function () {
            expect(farSearchZoomValue).to.be.lessThan(nearSearchZoomValue)
        })
    })
})
// Then('User click on {string} option from the sidebar menu', (searchButton) => {
//     sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
//         var currentButtonLabel = $buttonElement.text()
//         cy.log(currentButtonLabel)
//         if (currentButtonLabel.includes(searchButton)) {
//             cy.wrap($buttonElement).click({ force: true })
//         }
//     }).then(function () {
//         cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
//         cy.wait('@SearchResultsLoad')
//     })
// })

Then('User click on {string} option from the sidebar menu', (buttonLabel) => {
    cy.wait(2000).then(function () {
        sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
            var currentButtonLabel = $buttonElement.text()
            cy.log(currentButtonLabel)
            if (currentButtonLabel.includes(buttonLabel)) {
                cy.wrap($buttonElement).click({ force: true }).then(function () {
                    //cy.get('.MuiLinearProgress-root').should('be.visible')
                    cy.get('svg.MuiCircularProgress-svg').should('exist')
                })
            }
        }).then(function () {
            cy.get('svg.MuiCircularProgress-svg').should('not.exist')
        })
        cy.get('div.grid-container').should('be.visible')
    })
})

Then('User captures sideways-bar in default dashboard panel', function () {
    cy.get('div.sidebar-menu button[type="button"]').first().should('have.attr', 'class', 'MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium menu-icon-box active-menu css-bgq9r');
    cy.get('div.dashboard-chart-main div.chart-header p').each(($headerText) => {
        if ($headerText.text().includes('TOP 5')) {
            expect($headerText.text()).to.have.string('TOP 5')
        }
    })
    cy.get('.horizontal-bar-chart .chart-container .plot-chart g.legend text.legendtext').each(($legendText) => {
        if ($legendText.text().includes('Gas')) {
            expect($legendText.text()).to.have.string('Cum Gas')
        }
        else if ($legendText.text().includes('Oil')) {
            expect($legendText.text()).to.have.string('Cum Oil')
        }
    })
})
Then('User hover on the red portion of the bar', function () {
    cy.get('.horizontal-bar-chart .chart-container .plot-chart g.gridlayer g.y path.ygrid').first().realHover('mouse').then(function () {
        cy.get('g.hovertext text').each(($hoverInfo) => {
            //cy.log($hoverInfo.text())
            if ($hoverInfo.text().includes('Gas')) {
                expect($hoverInfo.text()).contain('Cum Gas')
            }
            if ($hoverInfo.text().includes('mcf')) {
                expect($hoverInfo.text()).to.have.string('mcf')
            }
        })
    });
})
Then('User User hover on the green portion of the bar', function () {
    cy.get('.horizontal-bar-chart .chart-container .plot-chart g.gridlayer g.x path.xgrid').first().realHover('mouse').then(function () {
        cy.get('g.hovertext text').each(($hoverInfo) => {
            if ($hoverInfo.text().includes('Oil')) {
                expect($hoverInfo.text()).contain('Cum Oil')
            }
            if ($hoverInfo.text().includes('bbl')) {
                expect($hoverInfo.text()).to.have.string('bbl')
            }
        })
    })
})
Then('User verifies the chart before filter', function () {
    cy.get('.horizontal-bar-chart .chart-container .plot-chart g[class="g-xtitle"] text.xtitle').each(($el) => {
        expect($el.text()).to.have.string('BOE')
    })
    cy.get('.horizontal-bar-chart .chart-container .plot-chart g.xaxislayer-above g.xtick text').each(($xaxisUnits, index, $list) => {
        var unitsLabel = $xaxisUnits.text();
        chartXLabelBeforeFilter[index] = unitsLabel;
        var units = unitsLabel.split(" ");
        unitsLabel = units[1].trim();
        if (unitsLabel.includes('MM'))
            expect(unitsLabel).to.eq('MM')
        if (unitsLabel.includes('B')) {
            expect(unitsLabel).to.eq('B')
        }
    })
    cy.get('div.dashboard-chart-main p:nth-child(1)').should('contain', 'MONTHLY PRODUCTION BY VINTAGE')
    cy.get('.horizontal-bar-chart .chart-container .plot-chart g.yaxislayer-above g.ytick text').each(($yaxisLabel, index, $list) => {
        chartYLabelBeforeFilter[index] = $yaxisLabel.text();
    })
})
Then('User verifies the chart after filter', function () {
    cy.get('.horizontal-bar-chart .chart-container .plot-chart g.xaxislayer-above g.xtick text').each(($xaxisUnits, index, $list) => {
        var unitsLabel = $xaxisUnits.text();
        chartXLabelAfterFilter[index] = unitsLabel;
    })
    cy.get('.horizontal-bar-chart .chart-container .plot-chart g.yaxislayer-above g.ytick text').each(($yaxisLabel, index, $list) => {
        chartYLabelAfterFilter[index] = $yaxisLabel.text();
    }).then(function () {
        expect(chartXLabelAfterFilter).not.equal(chartXLabelBeforeFilter)
        expect(chartYLabelAfterFilter).not.equal(chartYLabelBeforeFilter)
    })
})
Then('User verifies if all the varchar attributes having options in sorted order A-Z', function () {
    var WellOptionsAtoZ = [];
    var WellCount = [];
    cy.get('div.autocomplete-textfield-root input').each(($textFields, index, $list) => {
        cy.wrap($textFields).click().then(function () {
            // cy.intercept('**/api/wells/count/**').as('DropdownLoader')
            // cy.wait('@DropdownLoader').its('response.statusCode').should('eq', 200)
        })
        cy.get('div.MuiAutocomplete-paper button').contains('Sorted').then(($option) => {
            if ($option.length > 0) {
                cy.get('div.MuiAutocomplete-paper ul li div span:nth-child(1)').each(($stateOption, index, $list) => {
                    WellOptionsAtoZ[index] = $stateOption.text();
                })
                cy.get('div.MuiAutocomplete-paper ul li div span:nth-child(2)').each(($stateOption, index, $list) => {
                    var wellcountInBrackets = $stateOption.text()
                    const startIndex = wellcountInBrackets.indexOf('(');
                    const endIndex = wellcountInBrackets.indexOf(')')
                    var countWithOutBrackets = wellcountInBrackets.substring(startIndex + 1, endIndex).trim();
                    WellCount[index] = Number(countWithOutBrackets);
                }).then(function () {
                    //cy.log('Wellcount: ' + WellCount.toString())
                    expect(WellOptionsAtoZ.sort()).to.deep.equal(WellOptionsAtoZ)
                })
            }
        })
        cy.wrap($textFields).next().click()
    })
})
Then('User click on Sorted by Alpha A-Z for all varchar attributes', function () {
    cy.get('div.autocomplete-textfield-root input').each(($textFields, index, $list) => {
        cy.wrap($textFields).click()
        cy.get('div.MuiAutocomplete-paper button').contains('Sorted').then(($option) => {
            if ($option.length > 0) {
                cy.contains('Sorted by Alpha (A-Z)').click().then(function () {
                    // cy.intercept('**/api/wells/count/StateName**').as('DropdownLoader')
                    // cy.wait('@DropdownLoader').its('response.statusCode').should('eq', 200)
                    //cy.wait(5000)
                })
                cy.get('button.toggle-sort-button').should('have.text', 'Sorted by Well Count (Largest - Smallest)')
            }
        })
        cy.wrap($textFields).next().click()
    })
})
Then('User verifies if all the varchar attributes having well count in sorted order from Largest to smallest', function () {
    var WellcountLargetoSmall = [];
    cy.get('div.autocomplete-textfield-root input').each(($textFields, index, $list) => {
        cy.wrap($textFields).click()
        cy.get('div.MuiAutocomplete-paper button').contains('Sorted').then(($option) => {
            if ($option.length > 0) {
                cy.get('div.MuiAutocomplete-paper ul li div span:nth-child(2)').each(($stateOption, iteration, $list) => {
                    var wellcountInBrackets = $stateOption.text()
                    const startIndex = wellcountInBrackets.indexOf('(');
                    const endIndex = wellcountInBrackets.indexOf(')')
                    var countWithOutBrackets = wellcountInBrackets.substring(startIndex + 1, endIndex).trim();
                    WellcountLargetoSmall[iteration] = Number(countWithOutBrackets);
                }).then(function () {
                    const sortedArray = WellcountLargetoSmall.sort();
                    expect(sortedArray.reverse()).to.deep.equal(WellcountLargetoSmall)
                }).then(function () {
                    WellcountLargetoSmall = [];
                })
            }
        })
        cy.wrap($textFields).next().click()
    })
})
Then('User click on Sorted by Well Count Largest - Smallest for all varchar attributes', function () {
    cy.get('div.autocomplete-textfield-root input').each(($textFields, index, $list) => {
        cy.wrap($textFields).click()
        cy.get('div.MuiAutocomplete-paper button').contains('Sorted').then(($option) => {
            if ($option.length > 0) {
                cy.contains('Sorted by Well Count (Largest - Smallest)').click().then(function () {
                    // cy.intercept('**/api/wells/count/StateName**').as('DropdownLoader')
                    // cy.wait('@DropdownLoader').its('response.statusCode').should('eq', 200)
                })
                cy.get('button.toggle-sort-button').should('have.text', 'Sorted by Alpha (Z-A)')
            }
        })
        cy.wrap($textFields).next().click()
    })
})
Then('User verifies if all the varchar attributes having options in sorted order Z-A', function () {
    var WellOptionsZtoA = [];
    cy.get('div.autocomplete-textfield-root input').each(($textFields, index, $list) => {
        cy.wrap($textFields).click().then(function () {
            //cy.intercept('**/api/wells/count/**').as('DropdownLoader')
            //cy.wait('@DropdownLoader').its('response.statusCode').should('eq', 200)
        })
        cy.get('div.MuiAutocomplete-paper button').contains('Sorted').then(($option) => {
            if ($option.length > 0) {
                cy.get('div.MuiAutocomplete-paper ul li div span:nth-child(1)').each(($stateOption, index, $list) => {
                    WellOptionsZtoA[index] = $stateOption.text();
                })
            }
        }).then(function () {
            const sortedArray = WellOptionsZtoA.sort()
            expect(sortedArray.reverse()).to.deep.equal(WellOptionsZtoA)
        }).then(function () {
            WellOptionsZtoA = [];
        })
        cy.wrap($textFields).next().click()
    })
})
Then('User click on Sorted by Alpha Z-A for all varchar attributes', function () {
    cy.get('div.autocomplete-textfield-root input').each(($textFields, index, $list) => {
        cy.wrap($textFields).click()
        cy.get('div.MuiAutocomplete-paper button').contains('Sorted').then(($option) => {
            if ($option.length > 0) {
                cy.contains('Sorted by Alpha (Z-A)').click().then(function () {
                    // cy.intercept('**/api/wells/count/StateName**').as('DropdownLoader')
                    // cy.wait('@DropdownLoader').its('response.statusCode').should('eq', 200)
                    //cy.wait(5000)
                })
                cy.get('button.toggle-sort-button').should('have.text', 'Sorted by Well Count (Smallest - Largest)')
            }
        })
        cy.wrap($textFields).next().click()
    })
})

Then('User verifies if all the varchar attributes having well count in sorted order from smallest  to Largest', function () {
    var WellcountSmalltoLarge = [];
    cy.get('div.autocomplete-textfield-root input').each(($textFields, index, $list) => {
        cy.wrap($textFields).click()
        cy.get('div.MuiAutocomplete-paper button').contains('Sorted').then(($option) => {
            if ($option.length > 0) {
                cy.get('div.MuiAutocomplete-paper ul li div span:nth-child(2)').each(($stateOption, iteration, $list) => {
                    var wellcountInBrackets = $stateOption.text()
                    const startIndex = wellcountInBrackets.indexOf('(');
                    const endIndex = wellcountInBrackets.indexOf(')')
                    var countWithOutBrackets = wellcountInBrackets.substring(startIndex + 1, endIndex).trim();
                    WellcountSmalltoLarge[iteration] = Number(countWithOutBrackets);
                }).then(function () {
                    const sortedArray = WellcountSmalltoLarge.sort();
                    expect(sortedArray.reverse()).to.deep.equal(WellcountSmalltoLarge)

                }).then(function () {
                    WellcountSmalltoLarge = [];
                })
            }
        })
        cy.wrap($textFields).next().click()
    })
})
Then('User click on Sorted by Well Count Smallest - Largest for all varchar attributes', function () {
    cy.get('div.autocomplete-textfield-root input').each(($textFields, index, $list) => {
        cy.wrap($textFields).click()
        cy.get('div.MuiAutocomplete-paper button').contains('Sorted').then(($option) => {
            if ($option.length > 0) {
                cy.contains('Sorted by Well Count (Smallest - Largest)').click().then(function () {
                    // cy.intercept('**/api/wells/count/StateName**').as('DropdownLoader')
                    // cy.wait('@DropdownLoader').its('response.statusCode').should('eq', 200)
                })
                cy.get('button.toggle-sort-button').should('have.text', 'Sorted by Alpha (A-Z)')
            }
        })
        cy.wrap($textFields).next().click()
    })
})


Then('User remove the below attribute from the default list and click on {string} button in side panel', function (buttonLabel, table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('Attribute')) {
            cy.get('div[class*="MuiPaper-root"] div[class*="qb-editor-content"] div div div[class="qb-editor-attrib-list"] div').each(($visibleText, index, $list) => {
                if ($visibleText.text().includes(row.Attribute)) {
                    cy.wrap($visibleText).click().then(function () {
                        cy.wrap($visibleText).find('svg').should('have.attr', 'data-testid', 'AddCircleIcon')
                    })
                }
            })
        }
    })
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        cy.log(currentButtonLabel)
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    cy.wait('@SearchResultsLoad')
        .then(function () {
            cy.get('div.grid-container').should('be.visible')
        })
})

Then('Verify TGS Trends and TGS Major Basins are applied for all the base maps', (table) => {


    table.hashes().forEach(row => {
        if (row.hasOwnProperty('BaseMapOptions')) {

            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-kswqkt"]', row.BaseMapOptions)
                .find('input[type="radio"]')
                .check({ force: true })
                .should('be.checked')
                .should('be.enabled')

        }
    })
})


Then('click on {string}', (textOption) => {
    cy.contains(textOption).scrollIntoView().click({ force: true }).should('be.extensible')
})

Then('Check {string} Layer and verify applied to maps', (Options, table) => {


    table.hashes().forEach(row => {
        if (row.hasOwnProperty('IsopachMapOptions')) {

            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-kswqkt"]', row.IsopachMapOptions)
                .scrollIntoView()
                .find('input[type="checkbox"]')
                .check({ force: true })
                .should('be.checked')
                .should('be.enabled')

        }
    })
})

Then('Verify {string} Layer is applied for all the base maps', (Options, table) => {


    table.hashes().forEach(row => {
        if (row.hasOwnProperty('BaseMapOptions')) {

            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-kswqkt"]', row.BaseMapOptions)
                .find('input[type="radio"]')
                .check({ force: true })
                .should('be.checked')
                .should('be.enabled')

        }
    })
})


Then('Check {string} Layer and verify not applied to maps', (text, table) => {

    table.hashes().forEach(row => {
        if (row.hasOwnProperty('IsopachMapOptions')) {

            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-kswqkt"]', row.IsopachMapOptions)
                .scrollIntoView()
                .find('input[type="checkbox"]')
                .should('not.be.checked')
                .should('be.enabled')

        }
    })
})


Then('User checks Some rows of UWI checkbox', function () {
    cy.get('input[aria-label="Select row"]').each(($buttonElement, index, $list) => {
        if (index < 7) {
            cy.wrap($buttonElement).check().should('be.checked')
        }
    })

})

Then('Verify SurfaceHoleLocation Option is applied to selected rows', function () {

    mapsettings.SurfaceHoleLocationCheckbox().should('be.checked')
    cy.log('Data with Surface WellSpots layer in the map is highlighted in magenta border')
})


Then('Locate and verify Paths and Sticks section should be ON by default and Enabled', function (table) {

    table.hashes().forEach(row => {
        if (row.hasOwnProperty('MapSettingsOptions')) {

            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mapsetting-label css-kswqkt"]', row.MapSettingsOptions)
                .find('input[type="checkbox"]')
                //.check({ force: true })
                .should('be.checked')
                .should('be.enabled')

        }
    })

})

Then('Verify Paths and Sticks section should still shown but Disabled', (table) => {


    table.hashes().forEach(row => {
        if (row.hasOwnProperty('MapSettingsOptions')) {

            cy.contains('label[class="MuiFormControlLabel-root Mui-disabled MuiFormControlLabel-labelPlacementEnd mapsetting-label css-kswqkt"]', row.MapSettingsOptions)
                .find('input[type="checkbox"]')
                //.check({ force: true })
                .should('be.checked')
                .should('be.disabled')

        }
    })
})

Then('Click on the Cancel Icon', () => {
    cy.get('svg[data-testid="CancelIcon"]').last().click()
})


Then('User clicks on MapSettings under Surface & Bottom section->Color By then select Attribute field', function (table) {


    table.hashes().forEach(row => {
        if (row.hasOwnProperty('AttributeField')) {
            mapsettings.ColorByFieldValue().scrollIntoView().click({ force: true })
            mapsettings.AttributeValue().click({ force: true })

            mapsettings.AttributeField().click({ force: true }).type(row.AttributeField)
            mapsettings.AttributeFieldDropDownValues().each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.AttributeField)) {
                    cy.wrap($filterOption).click()
                    // cy.wrap($buttonElement).click({ force: true })
                }
            })

        }
    })
    legendpage.LegendIcon().should('be.visible')
})


Then('User clicks on {string} button in side panel', (buttonLabel) => {
    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        cy.log(currentButtonLabel)
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })

})


Then('User upload a valid UWI csv file', function () {
    const fileName = 'UWI_55K.csv';
    cy.get('div[class="uwi-upload-buttons-container"] input[type="file"]').attachFile(fileName)
})

Then('User upload a valid UWI text file', function () {
    const fileName = 'UWIsLessthan60k.txt';
    cy.get('div[class="uwi-upload-buttons-container"] input[type="file"]').attachFile(fileName)
})

Then('Check the {string} option in the Structure Map layer and verify applied to maps', (textOption, table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('StructureMapLayer')) {
            cy.contains('div[class="MuiFormGroup-root css-1h7anqn"] label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-kswqkt"]', row.CultureLayerOption)
                .find('input[type="checkbox"]') // Find the checkbox input
                .check({ force: true }) // Check the checkbox
                .should('be.checked')
                .should('be.enabled');
        }
    })

})

Then('User perform below UWI search', function (table) {
    sidebarpage.getUwiSearchTab().click();
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('UWI')) {
            cy.get('div[class*="MuiInputBase-root"] textarea[placeholder="Comma Delimited UWI14s or UWI16s"]').type(row.UWI);
        }
    })
    cy.wait(3000)

})

Then('User click on the {string} button', function (buttonLabel) {

    sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
        var currentButtonLabel = $buttonElement.text()
        if (currentButtonLabel.includes(buttonLabel)) {
            cy.wrap($buttonElement).click({ force: true })
        }
    })
    //cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
    //cy.wait('@SearchResultsLoad')
})
Then('User Navigate to Settings and Aggregate wells by All wells and enable Plot Daily Values', () => {

    //click on threedotsMenu in Production curve
    cy.get('.plot-chart-toolbar > :nth-child(3)').click()

    //click on settings
    cy.get('[data-testid="SettingsIcon"]').click()

    //check radio button Groupwell by All Wells
    cy.get('label[class*="MuiFormControlLabel-root"] [value="Default"]').check().should('be.checked')

    cy.get('span[class*="Mui-checked Mui-checked css-1nobdqi"] input[class*="MuiSwitch-input css-1m9pwf3"]').should('be.checked')
    cy.get('span[class*="MuiSwitch-switchBase MuiSwitch-colorPrimary css-1nobdqi"] input[class*="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]').click().should('be.checked')

});
Then('User Navigate to Settings and Export the file', () => {

    //click on threedotsMenu in Production curve
    cy.get('.plot-chart-toolbar > :nth-child(3)').click()

    //click on settings
    cy.get('[data-testid="DownloadIcon"]').click()

    //check radio button Groupwell by All Wells
    cy.get('label[class*="MuiFormControlLabel-root"] [value="Default"]').check().should('be.checked')

    cy.get('span[class*="Mui-checked Mui-checked css-1nobdqi"] input[class*="MuiSwitch-input css-1m9pwf3"]').should('be.checked')
    cy.get('span[class*="MuiSwitch-switchBase MuiSwitch-colorPrimary css-1nobdqi"] input[class*="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]').click().should('be.checked')

});

Then('User click on the Export button and click the Export to Excel button', () => {

    cy.get('.plot-chart-toolbar > :nth-child(3)').click()

    cy.get('[tabindex="0"] > .MuiButtonBase-root > .export-menu-dialog-labels').click()

    cy.get(':nth-child(3) > .export-select-item-labels').click()
})

Then('User click on the Export button and click the Export Image button', () => {

    cy.get('.plot-chart-toolbar > :nth-child(3)').click()

    cy.get('[tabindex="0"] > .MuiButtonBase-root > .export-menu-dialog-labels').click()

    cy.get(':nth-child(1) > .export-select-item-labels').click()
})

Then('User clicks on Analyze Type Curve', () => {

    productionplot.getAnalyzeIcon().click()
    productionplot.getTypeCurve().click()
});

Then('User click on load shape button and select the {string} file', function (filename) {
    const fileName = filename + '.zip'
    if (fileName.includes('SinglePolygon')) {
        cy.get('div.polygon-buttons-container input[type="file"]').attachFile(fileName).then(function () {
            cy.intercept({ method: 'POST', url: '**api/shape-file**' }).as("ShapeFileUploadComplete");
            cy.wait('@ShapeFileUploadComplete').its('response.statusCode').should('eq', 200)
            var fileNameArray = fileName.split(".");
            var fileNameWithoutExtension = fileNameArray[0]
            cy.get('div.polygon-search-content li div span').each(($fileId) => {
                if ($fileId.text().includes(fileNameWithoutExtension)) {
                    expect($fileId.text()).to.be.equal(fileNameWithoutExtension)
                }
            })
        })
    }
    if (fileName.includes('Multi_Polygon')) {
        cy.get('div.polygon-buttons-container input[type="file"]').attachFile(fileName).then(function () {
            //     cy.get('div[role="alert"] div.MuiSnackbarContent-message').each(($toastContent)=>{
            //         cy.log($toastContent.text())
            //     })
            cy.contains('div[role="alert"] div.MuiSnackbarContent-message', 'Maximum number of polygons to import (1) exceeded.').should('be.visible');
        })
    }
    if (fileName.includes('InvalidPolygon')) {
        cy.get('div.polygon-buttons-container input[type="file"]').attachFile(fileName).then(function () {
            // cy.wait(1000)
            // cy.get('div[role="alert"] div.MuiSnackbarContent-message').each(($toastContent) => {
            //     cy.log($toastContent.text())
            // })
            cy.contains('div[role="alert"] div.MuiSnackbarContent-message', "File can't be imported. Error occurred.").should('be.visible');
        })
    }
    if (fileName.includes('SinglePolygon_OtherPolygon')) {
        cy.get('div.polygon-buttons-container input[type="file"]').attachFile(fileName).then(function () {
            cy.intercept({ method: 'POST', url: '**api/shape-file**' }).as("ShapeFileUploadComplete");
            cy.wait('@ShapeFileUploadComplete').its('response.statusCode').should('eq', 200)
            var fileNameArray = fileName.split(".");
            var fileNameWithoutExtension = fileNameArray[0]
            cy.get('div.polygon-search-content li div span').each(($fileId) => {
                if ($fileId.text().includes(fileNameWithoutExtension)) {
                    expect($fileId.text()).to.be.equal(fileNameWithoutExtension)
                }
            })
        })
    }
})

Then('User draw the polygon', function () {
    cy.get('#map').then(($canvas) => {
        const canvasWidth = $canvas.width();
        cy.log(canvasWidth)
        const canvasHeight = $canvas.height()
        cy.log(canvasHeight)
        const canvasX = (canvasWidth / 2) + 140
        //const canvasX = (canvasWidth / 2)
        const canvasY = canvasHeight / 4
        cy.wrap($canvas).scrollIntoView().click(canvasX, canvasY)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 90, canvasY)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 50, canvasY + 70)
        cy.wrap($canvas).scrollIntoView().click(canvasX + 30, canvasY + 90)
        cy.wrap($canvas).scrollIntoView().dblclick(canvasX, canvasY + 70)
    })
})

Then('User verifies if the polygon search id is generated under shapes section', function () {
    cy.get('div.polygon-search-content li').last().should('be.visible')
})

Then('User click on Save As option and provide the below name and {string} the search', function (save, table) {
    cy.get('div[id="save-menu"] li:nth-child(2)').click();
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('MySavedSearch')) {
            SavedSearchName = row.MySavedSearch + (new Date().toISOString().slice(11, -1))
            console.log(SavedSearchName);
            cy.get('div[role="dialog"] div[class*="MuiInputBase-root"] input[placeholder="My Saved Search"]').type(SavedSearchName);

        }
        if (row.hasOwnProperty('MyInitialSavedSearch')) {
            SavedSearchName = row.MySavedSearch + (new Date().toISOString().slice(11, -1))
            console.log('MyInitialSavedSearch: ' + MyInitialSavedSearch);
            cy.get('div[role="dialog"] div[class*="MuiInputBase-root"] input[placeholder="My Saved Search"]').type(SavedSearchName);
        }
    })
    cy.get('div[role="dialog"] div[class*="MuiDialogActions-root"] button').each(($buttonElement) => {
        var buttonLabel = $buttonElement.text();
        cy.log(buttonLabel)
        if (buttonLabel.includes(save)) {
            cy.wrap($buttonElement).click();
        }
    })
    cy.contains('div[role="alert"] div.MuiSnackbarContent-message', 'Saved successfully').should('be.visible');
    //cy.get('div[role="alert"]').contains('Saved successfully')
})

Then('User click on the {string} field and extracts the dropdown option labels', function (optionLabel) {

    if (optionLabel === 'State/Province') {
        sidebarpage.getStateFilterCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                stateDropdown[index] = $optionLabel.text()
            })
        }).then(function () {
            sidebarpage.getStateFilterCombobox().click({ force: true })
        })
    }
    if (optionLabel === 'County') {
        sidebarpage.getCountyFilterCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                countyDropdown[index] = $optionLabel.text()
            })
        }).then(function () {
            sidebarpage.getCountyFilterCombobox().click({ force: true })
        })
    }
    if (optionLabel === 'Basin') {
        sidebarpage.getBasinCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                basinDropdown[index] = $optionLabel.text()
            })
        }).then(function () {
            sidebarpage.getBasinCombobox().click({ force: true })
        })
    }
    if (optionLabel === 'TGS Operator') {
        sidebarpage.getBasinCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                tgsOperatorDropdown[index] = $optionLabel.text()
            })
        }).then(function () {
            sidebarpage.getBasinCombobox().click({ force: true })
        })
    }
    if (optionLabel === 'Field Name') {
        sidebarpage.getFieldNameCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                fieldNameDropDown[index] = $optionLabel.text()
            })
        }).then(function () {
            sidebarpage.getFieldNameCombobox().click({ force: true })
        })
    }
    if (optionLabel === 'Producing Formation') {
        sidebarpage.getProducingFormationCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                producingFormationDropdown[index] = $optionLabel.text()
            })
        }).then(function () {
            sidebarpage.getProducingFormationCombobox().click({ force: true })
        })
    }

})

Then('User click on the {string} field and verify only selected values in the dropdown is available', function (optionLabel) {


    // var stateGridResults = [];
    // var countyGridResults = [];
    // var fieldNameGridresults = [];
    // var basinGridResults = [];
    // var tgsOperatorGridResults = [];
    // var producingFormationGridResults = [];

    if (optionLabel === 'State/Province') {
        // cy.get('div.MuiDataGrid-virtualScroller div.MuiDataGrid-virtualScrollerContent div.MuiDataGrid-virtualScrollerRenderZone div[role="row"] div[data-field="StateName"] div.MuiDataGrid-cellContent').each(($visibleText, index, list) => {
        //     stateGridResults[index] = $visibleText.text();
        // })
        // .then(function () {
        sidebarpage.getStateFilterCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                stateDropdownAfterPolygon[index] = $optionLabel.text()
            })
            //  })
        }).then(function () {
            // const uniqueStateGridResultsArray = Array.from(new Set(stateGridResults.filter(element => element.trim() !== '')))
            // cy.log('uniqueStateGridResultsArray: '+uniqueStateGridResultsArray.toString())
            // cy.log('stateDropdownArray: '+stateDropdown.toString())
            // expect(uniqueStateGridResultsArray.slice().sort()).to.deep.equal(stateDropdown.slice().sort())
            //expect(stateDropdownAfterPolygon.length).to.be.lessThan(stateDropdown.length)
            expect(stateDropdownAfterPolygon).to.not.equal(stateDropdown)
        }).then(function () {
            sidebarpage.getStateFilterCombobox().click({ force: true })
        })
    }

    if (optionLabel === 'County') {
        // cy.get('div.MuiDataGrid-virtualScroller div.MuiDataGrid-virtualScrollerContent div.MuiDataGrid-virtualScrollerRenderZone div[role="row"] div[data-field="County"] div.MuiDataGrid-cellContent').each(($visibleText, index, list) => {
        //     countyGridResults[index] = $visibleText.text();
        // })
        // .then(function () {
        sidebarpage.getCountyFilterCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                countyDropdownAfterPolygon[index] = $optionLabel.text();
            })
            //})
        }).then(function () {
            // const uniqueCountyGridResultsArray = Array.from(new Set(countyGridResults.filter(element => element.trim() !== '')))
            // cy.log('uniqueCountyGridResultsArray: '+uniqueCountyGridResultsArray.toString())
            // cy.log('countyDropdownArray: '+countyDropdown.toString())
            // expect(uniqueCountyGridResultsArray.slice().sort()).to.deep.equal(countyDropdown.slice().sort())
            //expect(countyDropdownAfterPolygon.length).to.be.lte(countyDropdown.length)
            expect(countyDropdownAfterPolygon).to.not.equal(countyDropdown)
        }).then(function () {
            sidebarpage.getCountyFilterCombobox().click({ force: true })
        })
    }
    if (optionLabel === 'Basin') {
        // cy.get('div.MuiDataGrid-virtualScroller div.MuiDataGrid-virtualScrollerContent div.MuiDataGrid-virtualScrollerRenderZone div[role="row"] div[data-field="BasinName"] div.MuiDataGrid-cellContent').each(($visibleText, index, list) => {
        //     basinGridResults[index] = $visibleText.text();
        // }).then(function () {
        sidebarpage.getBasinCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                basinDropdownAfterPolygon[index] = $optionLabel.text();
                // })
            }).then(function () {
                //     const uniqueBasinGridResultsArray = Array.from(new Set(basinGridResults.filter(element => element.trim() !== '')))
                //     cy.log('uniqueBasinGridResultsArray: '+uniqueBasinGridResultsArray.toString())
                // cy.log('basinDropdownArray: '+basinDropdown.toString())
                //     expect(uniqueBasinGridResultsArray.slice().sort()).to.deep.equal(basinDropdown.slice().sort()) 
                //expect(basinDropdownAfterPolygon.length).to.be.lte(basinDropdown.length) 
                expect(basinDropdownAfterPolygon).to.not.equal(basinDropdown)
            })
        }).then(function () {
            sidebarpage.getBasinCombobox().click({ force: true })
        })
    }
    if (optionLabel === 'TGS Operator') {
        // cy.get('div.MuiDataGrid-virtualScroller div.MuiDataGrid-virtualScrollerContent div.MuiDataGrid-virtualScrollerRenderZone div[role="row"] div[data-field="UltimateOwner"] div.MuiDataGrid-cellContent').each(($visibleText, index, list) => {
        //     tgsOperatorGridResults[index] = $visibleText.text();
        // }).then(function () {
        sidebarpage.getTGSOperatorCombobox().click({ filter: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                tgsOperatorDropdownAfterPolygon[index] = $optionLabel.text();
            })
            //})
        }).then(function () {
            // const uniqueTgsOperatorGridResultsArray = Array.from(new Set(tgsOperatorGridResults.filter(element => element.trim() !== '')))
            // cy.log('uniqueTgsOperatorGridResultsArray: '+uniqueTgsOperatorGridResultsArray.toString())
            // cy.log('tgsOperatorDropdownArray: '+tgsOperatorDropdown.toString())
            // expect(uniqueTgsOperatorGridResultsArray.slice().sort()).to.deep.equal(tgsOperatorDropdown.slice().sort()) 
            //expect(tgsOperatorDropdownAfterPolygon.length).to.be.lte(tgsOperatorDropdown.length)
            expect(tgsOperatorDropdownAfterPolygon).to.not.equal(tgsOperatorDropdown)

        }).then(function () {
            sidebarpage.getTGSOperatorCombobox().click({ filter: true })
        })
    }
    if (optionLabel === 'Field Name') {
        // cy.get('div.MuiDataGrid-virtualScroller div.MuiDataGrid-virtualScrollerContent div.MuiDataGrid-virtualScrollerRenderZone div[role="row"] div[data-field="FieldName"] div.MuiDataGrid-cellContent').each(($visibleText, index, list) => {
        //     fieldNameGridresults[index] = $visibleText.text();
        // }).then(function () {
        sidebarpage.getFieldNameCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                fieldNameDropdownAfterPolygon[index] = $optionLabel.text();
                //})
            })
        }).then(function () {
            // const uniqueFieldNameGridResultsArray = Array.from(new Set(fieldNameGridresults.filter(element => element.trim() !== '')))
            // cy.log('uniqueFieldNameGridResultsArray: '+uniqueFieldNameGridResultsArray.toString())
            // cy.log('fieldNameDropdownArray: '+fieldNameDropdown.toString())
            // expect(uniqueFieldNameGridResultsArray.slice().sort()).to.deep.equal(fieldNameDropdown.slice().sort())
            //expect(fieldNameDropdownAfterPolygon.length).to.be.lte(fieldNameDropDown.length)
            expect(fieldNameDropdownAfterPolygon).to.not.equal(fieldNameDropDown)
        }).then(function () {
            sidebarpage.getFieldNameCombobox().click({ force: true })
        })
    }

    if (optionLabel === 'Producing Formation') {
        // cy.get('div.MuiDataGrid-virtualScroller div.MuiDataGrid-virtualScrollerContent div.MuiDataGrid-virtualScrollerRenderZone div[role="row"] div[data-field="ProducingFormation"] div.MuiDataGrid-cellContent').each(($visibleText, index, list) => {
        //     producingFormationGridResults[index] = $visibleText.text();
        // }).then(function () {
        // cy.log('ProducingFormationGridResults: '+producingFormationGridResults.toString())
        sidebarpage.getProducingFormationCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                producingFormationDropdownAfterPolygon[index] = $optionLabel.text();
                //  })
            })
        }).then(function () {
            // const uniqueProducingFormationGridResultsArray = Array.from(new Set(producingFormationGridResults.filter(element => element.trim() !== '')))
            // cy.log('uniqueProducingFormationGridResultsArray: '+uniqueProducingFormationGridResultsArray.toString())
            // cy.log('producingFormationDropdownArray: '+producingFormationDropdown.toString())
            // expect(uniqueProducingFormationGridResultsArray.slice().sort()).to.deep.equal(producingFormationDropdown.slice().sort())
            //expect(producingFormationDropdownAfterPolygon.length).to.be.lte(producingFormationDropdown.length)
            expect(producingFormationDropdownAfterPolygon).to.not.equal(producingFormationDropdown)
        }).then(function () {
            sidebarpage.getProducingFormationCombobox().click({ force: true })
        })
    }
})

Then('User click on the {string} field and verify if new set of values in the dropdown is available', function (optionLabel) {
    var stateDropdownAfterSecondPolygon = [];
    var countyDropdownAfterSecondPolygon = [];
    var basinDropdownAfterSecondPolygon = [];
    var fieldNameDropdownAfterSecondPolygon = [];
    var tgsOperatorDropDwonAfterSecondPolygon = [];
    var producingFormationDropdownAfterSecondPolygon = [];

    if (optionLabel === 'State/Province') {
        sidebarpage.getStateFilterCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                stateDropdownAfterSecondPolygon[index] = $optionLabel.text()
            })
        }).then(function () {
            expect(stateDropdownAfterSecondPolygon).to.not.equal(stateDropdownAfterPolygon)
        }).then(function () {
            sidebarpage.getStateFilterCombobox().click({ force: true })
        })
    }

    if (optionLabel === 'County') {

        sidebarpage.getCountyFilterCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                countyDropdownAfterSecondPolygon[index] = $optionLabel.text();
            })
        }).then(function () {
            expect(countyDropdownAfterSecondPolygon).to.not.equal(countyDropdownAfterPolygon)
        }).then(function () {
            sidebarpage.getCountyFilterCombobox().click({ force: true })
        })
    }
    if (optionLabel === 'Basin') {
        sidebarpage.getBasinCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                basinDropdownAfterSecondPolygon[index] = $optionLabel.text();
            }).then(function () {
                expect(basinDropdownAfterSecondPolygon).to.not.equal(basinDropdownAfterPolygon)
            })
        }).then(function () {
            sidebarpage.getBasinCombobox().click({ force: true })
        })
    }
    if (optionLabel === 'TGS Operator') {
        sidebarpage.getTGSOperatorCombobox().click({ filter: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                tgsOperatorDropDwonAfterSecondPolygon[index] = $optionLabel.text();
            })
        }).then(function () {
            expect(tgsOperatorDropDwonAfterSecondPolygon).to.not.equal(tgsOperatorDropdownAfterPolygon)
        }).then(function () {
            sidebarpage.getTGSOperatorCombobox().click({ filter: true })
        })
    }
    if (optionLabel === 'Field Name') {

        sidebarpage.getFieldNameCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                fieldNameDropdownAfterSecondPolygon[index] = $optionLabel.text();
            })
        }).then(function () {
            expect(fieldNameDropdownAfterSecondPolygon).to.not.equal(fieldNameDropdownAfterPolygon)
        }).then(function () {
            sidebarpage.getFieldNameCombobox().click({ force: true })
        })
    }

    if (optionLabel === 'Producing Formation') {
        sidebarpage.getProducingFormationCombobox().click({ force: true }).then(function () {
            sidebarpage.getOptionLabelNames().each(($optionLabel, index, $list) => {
                producingFormationDropdownAfterSecondPolygon[index] = $optionLabel.text();
            })
        }).then(function () {
            expect(producingFormationDropdownAfterSecondPolygon).to.not.equal(producingFormationDropdownAfterPolygon)
        }).then(function () {
            sidebarpage.getProducingFormationCombobox().click({ force: true })
        })
    }
})
Then('User click on the search icon and deletes the polygon', function () {
    var lastPolygonId;
    sidebarpage.getSidebarSearchIcon().click()
    cy.get('div.polygon-search-content li div span').last().each(($polygonID) => {
        lastPolygonId = $polygonID.text()
    })
    cy.get('div[class="polygon-search"] div[class*="polygon-search-content"] svg[data-testid="CancelIcon"]').last().click().then(function () {
        // lastPolygonId.should('not.exist')
        //expect($polygonID.text()).to.not.be.visible;
        cy.get('div.polygon-search-content li div span').each(($id) => {
            expect($id.text()).to.not.contain(lastPolygonId)
        })
    });
})

Then('User zoom in to zoom lvl 12', function () {
    cy.get('div[class="map-action"] ul[class*="map-left-action"] div button p').click({ force: true }).then(function () {
        cy.get('div[class="map-action"] ul[class*="map-left-action"] button p').each(($visibleNumber, index, $list) => {
            var zoomNumber = $visibleNumber.text();
            if (zoomNumber === '12') {
                cy.wrap($visibleNumber).click({ force: true }).then(function () {
                    //Wait for the zoom value to change                   
                    cy.wait(5000)
                })
            }
        })
    }).then(function () {
        cy.get('div[class="map-action"] ul[class*="map-left-action"] div button p').each(($zoomText) => {
            expect($zoomText.text()).to.equal('12')
        })
    })
})

Then('User verifies the count of the polygons under the shape section to be equal to {string}', function (countValue) {
    var count = 0;
    cy.get('div.polygon-search-content li div span').each(($polygonId, index, $list) => {
        count = count + 1
    }).then(function () {
        countValue = Number(countValue)
        expect(count).to.equal(countValue)
    })
})


Then('User remove the last UWI from text field', function () {
    cy.get('div[class*="MuiInputBase-root"] textarea[placeholder="Comma Delimited UWI14s or UWI16s"]').type('{backspace}'.repeat(15)).trigger('blur').then(function () {
        cy.wait(2000)
    })

})

Then('User from the result grid verify if below UWI is visible', function (table) {
    var resultGridUWI = [];
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('UWI')) {
            cy.get('div[class*="MuiDataGrid-virtualScroller"] div[class*="MuiDataGrid-virtualScrollerContent"] div[class*="MuiDataGrid-virtualScrollerRenderZone"] div[role="row"] div[data-field="UWI"]').each(($visibleUWI, index, $list) => {
                resultGridUWI[index] = $visibleUWI.text();
                // if ($visibleUWI.text() === row.UWI)
                //     expect($visibleUWI.text()).to.be.equal(row.UWI)
                // if($visibleUWI.text() !== row.UWI)
                // expect($visibleUWI.text()).to.not.equal(row.UWI)
            })
                .then(function () {
                    cy.log(resultGridUWI.toString())
                    if (resultGridUWI.includes(row.UWI)) {
                        expect(resultGridUWI).to.include(row.UWI)
                    }
                    else {
                        expect(resultGridUWI).to.not.include(row.UWI)
                    }
                })
            //if(resultGridUWI.includes(row.UWI))
            //expect(resultGridUWI).to.include(row.UWI)

        }
    })
})

Then('User mouse over to the below label and click on the 3 dots', function (table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('mouseOverLabel')) {
            var resultGridHeaderLabel = [];
            cy.get('div.MuiDataGrid-main div.MuiDataGrid-columnHeadersInner div[role="row"] div[role="columnheader"]').each(($resultgridHeaderLabel, index, $list) => {
                resultGridHeaderLabel[index] = $resultgridHeaderLabel.text();
                if ($resultgridHeaderLabel.text().includes(row.mouseOverLabel)) {
                    cy.get('div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').eq(index).realHover('mouse').then(function () {
                        cy.get('div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]:visible').click();
                        // cy.intercept('**/api/wells/count/**').as('Loader')
                        // cy.wait('@Loader').its('response.statusCode').should('eq', 200)
                    })
                }
            })
        }
    })
})

Then('User click on {string} checkbox and click on {string} button and verifies if the filter is applied successfully', function (checkbox, filter) {
    var beforeFilterValue;
    var afterFilterValue;
    cy.get('div.grid-count-container div.count-group p.count-value').each(($filteredValue) => {
        beforeFilterValue = $filteredValue.text()
    })
    cy.get('div[class*="MuiListItemText-root"] span').each(($visibleText, index, $list) => {
        var visibleOption = $visibleText.text();
        if (visibleOption === checkbox) {
            cy.get('li[class*="MuiListItem-root"] div div span svg[data-testid="CheckBoxOutlineBlankIcon"]').eq(index).click({ force: true })
        }
    })
    cy.get('div[class*="grid-filter-footer"] button').each(($buttonLabel) => {
        if ($buttonLabel.text().includes(filter)) {
            cy.wrap($buttonLabel).click({ force: true }).then(function () {
                cy.get('span.MuiLinearProgress-bar2Indeterminate').should('exist')
                // cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
                // cy.wait('@SearchResultsLoad')
                //cy.wait(3000)
            })
        }
    }).then(function () {
        cy.get('span.MuiLinearProgress-bar2Indeterminate').should('not.exist')
        cy.get('button.MuiIconButton-root svg[data-testid="FilterAltIcon"]').each(($filterIcon, index, $list) => {
            cy.wrap($filterIcon).eq(index).should('exist')
        })
        cy.get('div.MuiDataGrid-virtualScrollerRenderZone div.MuiDataGrid-cell div.MuiDataGrid-cellContent').each(($filteredLabel, index, $list) => {
            if ($filteredLabel.text() === checkbox) {
                expect($filteredLabel.text()).equal(checkbox)
            }
        })
        // cy.get('div[class*="MuiDataGrid-virtualScroller"] div[class*="MuiDataGrid-virtualScrollerContent"] div[class*="MuiDataGrid-virtualScrollerRenderZone"] div[role="row"] div[data-field=resultGridHeader] div.MuiDataGrid-cellContent').each(($resultgridContent, index, $list) => {
        //     expect($resultgridContent.text()).equal(checkbox)
        // })
    }).then(function () {
        cy.get('div.grid-count-container div.count-group p.count-value').each(($filteredValue) => {
            afterFilterValue = $filteredValue.text()
        }).then(function () {
            expect(afterFilterValue).to.not.equal(beforeFilterValue)
        })
    })
})

Then('User verifies if below fields available in the {string} option', function (menuoption, table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('ShowOrHideColumnsVerifyList')) {
            cy.get('fieldset.grid-toggle-columns-form div.MuiFormGroup-root span.MuiFormControlLabel-label').each(($label, index, $list) => {
                if ($label.text() === row.ShowOrHideColumnsVerifyList) {
                    expect($label.text()).to.equal(row.ShowOrHideColumnsVerifyList)
                }
            })
        }
    })
})

Then('User verifies if the below fields are Non default fields', function (table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('ShowOrHideNonDefaultFieldsVerify')) {
            cy.get('div.column-list-container label.column-list span.MuiFormControlLabel-label').each(($label, index, $list) => {
                if ($label.text() === row.ShowOrHideNonDefaultFieldsVerify) {
                    cy.get('div.column-list-container label.column-list span span.PrivateSwitchBase-root').eq(index).should('not.have.attr', 'class', 'MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked Mui-checked css-1nobdqi')
                }
            })
        }
    })
})

Then('User add below NonDefault fields to Default list', function (table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('ShowOrHideNonDefaultFields')) {
            cy.get('fieldset.grid-toggle-columns-form div.MuiFormGroup-root span.MuiFormControlLabel-label').each(($label, index, $list) => {
                if ($label.text() === row.ShowOrHideNonDefaultFields) {
                    cy.get('div.column-list-container span.MuiSwitch-switchBase').eq(index).click().then(function () {
                        cy.get('div.column-list-container span.Mui-checked').should('be.visible')
                        cy.get('div.MuiDataGrid-columnHeader div.MuiDataGrid-columnHeaderTitle').each(($headerLabel, index, $list) => {
                            if ($headerLabel.text().includes(row.ShowOrHideNonDefaultFields))
                                expect($headerLabel.text()).to.include(row.ShowOrHideNonDefaultFields)
                        })
                    });
                }
            })
        }

    })
})

Then('User verifies if the below field is in to default list', function (table) {
    var defaultFields = [];
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('ShowOrHideDefaultVerifyList')) {
            cy.get('fieldset.grid-toggle-columns-form div.column-list-container span.MuiSwitch-switchBase input').each(($checkbox, index, $list) => {
                if ($checkbox.prop('checked')) {
                    cy.get('fieldset.grid-toggle-columns-form div.MuiFormGroup-root span.MuiFormControlLabel-label').eq(index).each(($visibleText) => {
                        defaultFields[index] = $visibleText.text();
                    })
                }
            }).then(function () {
                expect(defaultFields).to.include(row.ShowOrHideDefaultVerifyList)
            })
        }
    })
})

Then('User changes below default value to non default', function (table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('ShowOrHideDefaultconversionList')) {
            cy.get('fieldset.grid-toggle-columns-form div.MuiFormGroup-root span.MuiFormControlLabel-label').each(($label, index, $list) => {
                if ($label.text() === row.ShowOrHideDefaultconversionList) {
                    cy.get('div.column-list-container span.MuiSwitch-switchBase').eq(index).click().then(function () {
                        cy.get('div.column-list-container label.column-list span span.PrivateSwitchBase-root').eq(index).should('not.have.attr', 'class', 'MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked Mui-checked css-1nobdqi')
                        cy.get('div.MuiDataGrid-columnHeader div.MuiDataGrid-columnHeaderTitle').each(($headerLabel, index, $list) => {
                            expect($headerLabel.text()).to.not.equal(row.ShowOrHideDefaultconversionList)
                        })
                    });
                }
            })
        }
    })
})

Then('User click on the body of the application', function () {
    cy.get('body').click();
})


Then('User click on {string} option', function (sortOption) {
    var rowLabel = [];
    cy.contains(sortOption).click({ force: true }).then(function () {
        cy.get('span.MuiLinearProgress-bar2Indeterminate').should('not.exist').then(function () {
            cy.get('div.MuiDataGrid-virtualScroller div.MuiDataGrid-virtualScrollerContent div.MuiDataGrid-virtualScrollerRenderZone div[role="row"] div[data-field="WellName"] div.MuiDataGrid-cellContent').each(($rowLabel, index) => {
                rowLabel[index] = $rowLabel.text();
            })
        })
    }).then(function () {
        const sortedArray = rowLabel.sort();
        if (sortOption === 'Sort A to Z') {
            expect(sortedArray).equal(rowLabel)
        }
        else if (sortOption === 'Sort Z to A') {
            expect(sortedArray.reverse()).to.deep.equal(rowLabel)
        }
    })
})

Then('User verifies if {string} option is disabled', function () {
    cy.get('li[data-value="asc"]').should('have.attr', 'aria-disabled', 'true')
})

Then('User selects {string} option', function (menuOption) {
    searchresultpage.getShowOrHideColumnsOption().click()
    cy.get('fieldset.grid-toggle-columns-form div.MuiFormGroup-root span.MuiFormControlLabel-label').each(($labelText, index, $list) => {
        showOrHideColumns[index] = $labelText.text();
    })
})

Then('User scroll the result grid to right', function () {
    cy.get('div.MuiDataGrid-virtualScroller').scrollTo('right');
})

Then('User verifies if {string} menu is available', function (filterMenu) {
    cy.get('div.expression-filter-list').each(($menuText) => {
        if ($menuText.text().includes(filterMenu)) {
            expect($menuText.text()).to.equal(filterMenu)
        }
    }).then(function () {
        if (filterMenu === 'Date Filter') {
            cy.get('svg[data-testid="ArrowForwardIosIcon"]').click().then(function () {
                cy.get('input[placeholder="MM/DD/YYYY"]').should('be.visible')
            })
        }
        if (filterMenu === 'Number Filter') {
            cy.get('svg[data-testid="ArrowForwardIosIcon"]').click().then(function () {
                cy.get('input[type="number"]').should('be.visible')
            })
        }
    })
})

Then('User click on the two downward arrows on the search result header at right most edge of the result grid', function () {
    cy.get('svg[data-testid="KeyboardDoubleArrowDownIcon"]').click().then(function () {
        cy.get('div.MuiDataGrid-main').should('not.be.visible')
    });
})

Then('User click on the two upward arrows on the search result header at right most edge of the result grid', function () {
    cy.get('button[class*="MuiButtonBase-root"] svg[data-testid="KeyboardDoubleArrowUpIcon"]').click({ force: true }).then(function () {
        cy.get('div.MuiDataGrid-main').should('be.visible')
    });
})

Then('User click on {string} button and verifies if the filter is removed successfully', function (clear) {
    var beforeFilterRemove;
    var afterFilterRemove;
    cy.get('div.grid-count-container div.count-group p.count-value').each(($filteredValue) => {
        beforeFilterRemove = $filteredValue.text()
    })
    cy.get('div[class*="grid-filter-footer"] button').each(($buttonLabel) => {
        if ($buttonLabel.text().includes(clear)) {
            cy.wrap($buttonLabel).click().then(function () {
                // cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
                // cy.wait('@SearchResultsLoad')
                //cy.wait(3000)
                cy.get('span.MuiLinearProgress-bar2Indeterminate').should('exist')

            })
        }
    }).then(function () {
        cy.get('span.MuiLinearProgress-bar2Indeterminate').should('not.exist')
        cy.get('div.grid-count-container div.count-group p.count-value').each(($filteredValue) => {
            afterFilterRemove = $filteredValue.text()
        }).then(function () {
            cy.log("CountBeforeFileterRemove: " + beforeFilterRemove);
            cy.log("CountAfterFileterRemove: " + afterFilterRemove)
            expect(afterFilterRemove).to.not.equal(beforeFilterRemove)
        })
    })
})

Then('User unsort back to the UWI ASC order', function () {
    cy.get('div[role="row"] div[data-field="UWI"] div.MuiDataGrid-columnHeaderDraggableContainer').click().then(function () {
        cy.get('span.MuiLinearProgress-bar2Indeterminate').should('exist')
    }).then(function () {
        cy.get('span.MuiLinearProgress-bar2Indeterminate').should('not.exist')
        cy.get('div[aria-sort="ascending"]').should('be.visible')
    })
})

Then('User changes already default values to non default', function () {
    cy.get('div.column-list-container span.Mui-checked').each(($defaultOptions) => {
        cy.wrap($defaultOptions).click();
    })
})

Then('User mouse over to the below label and click on the 3 dots and from number filter select {string} option value to {string} and click on {string} option', function (equalOption, optionValue, filterOption, table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('mouseOverLabel')) {
            cy.get('div.MuiDataGrid-main div.MuiDataGrid-columnHeadersInner div[role="row"] div[role="columnheader"]').each(($resultgridHeaderLabel, index, $list) => {
                if ($resultgridHeaderLabel.text().includes(row.mouseOverLabel)) {
                    cy.get('div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').eq(index).realHover('mouse').then(function () {
                        cy.get('div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]:visible').click();
                    })
                    cy.get('div.arrow-icon-container').click().then(function () {
                        //cy.get('div.grid-filter-number-panel-container svg[data-testid="ArrowDropDownIcon"]').click();
                        cy.get('#filter-operator-input-field').click();
                        cy.get('ul[role="listbox"] li').contains(equalOption).click();
                        cy.get('div.MuiInputBase-formControl input[type="number"]').clear().type(optionValue)
                    })
                    cy.get('div.grid-filter-footer button.MuiButton-outlined').last().click().then(function () {
                        cy.get('svg.MuiCircularProgress-svg').should('exist')
                    })
                        // cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("Load");
                        // cy.wait('@Load').then(function(){
                        .then(function () {
                            cy.get('svg.MuiCircularProgress-svg').should('not.exist')
                            cy.get('button.MuiIconButton-root svg[data-testid="FilterAltIcon"]').each(($filter, index, $list) => {
                                cy.wrap($filter).should('be.visible')
                            })
                        })
                }
                // }).then(function () {
                //     cy.get('div.MuiDataGrid-main div.MuiDataGrid-columnHeadersInner div[role="row"] div[role="columnheader"]').each(($resultgridHeaderLabel, index, $list) => {
                //         if ($resultgridHeaderLabel.text().includes(row.mouseOverLabel)) {
                //             cy.get('div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').eq(index).realHover('mouse').then(function () {
                //                 cy.get('div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]:visible').click();
                //             })
                //             cy.get('div[class*="grid-filter-footer"] button').each(($buttonLabel) => {
                //                 if ($buttonLabel.text().includes("Clear")) {
                //                     cy.wrap($buttonLabel).click().then(function () {
                //                         cy.get('svg.MuiCircularProgress-svg').should('exist')
                //                     })
                //                 }
                //             }).then(function () {
                //                 cy.get('svg.MuiCircularProgress-svg').should('not.exist')
                //             })
                //         }
                //     })
            })
        }

    })
})

Then('User mouse over to the below label and click on the 3 dots and from number filter select {string} option value from {string} to {string} and click on {string} option', function (Option, optionFrom, optionTo, filterOption, table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('mouseOverLabel')) {
            cy.get('div.MuiDataGrid-main div.MuiDataGrid-columnHeadersInner div[role="row"] div[role="columnheader"]').each(($resultgridHeaderLabel, index, $list) => {
                if ($resultgridHeaderLabel.text().includes(row.mouseOverLabel)) {
                    cy.get('div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').eq(index).realHover('mouse').then(function () {
                        cy.get('div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]:visible').click();
                    })
                    cy.get('div.arrow-icon-container').click().then(function () {
                        cy.get('#filter-operator-input-field').click();
                        cy.get('ul[role="listbox"] li').contains(Option).click();
                        cy.get('div.grid-filter-number-panel-container div.MuiTextField-root').contains('Start').click({ force: true }).type(optionFrom)
                        cy.get('div.grid-filter-number-panel-container div.MuiTextField-root').contains('End').click({ force: true }).type(optionTo)
                    })
                    cy.get('div.grid-filter-footer button.MuiButton-outlined').last().click().then(function () {
                        cy.get('svg.MuiCircularProgress-svg').should('exist')
                    }).then(function () {
                        cy.get('svg.MuiCircularProgress-svg').should('not.exist')
                        cy.get('button.MuiIconButton-root svg[data-testid="FilterAltIcon"]').each(($filter, index, $list) => {
                            cy.wrap($filter).should('be.visible')
                        })
                    })
                }
            }).then(function () {
                cy.get('div.MuiDataGrid-main div.MuiDataGrid-columnHeadersInner div[role="row"] div[role="columnheader"]').each(($resultgridHeaderLabel, index, $list) => {
                    if ($resultgridHeaderLabel.text().includes(row.mouseOverLabel)) {
                        cy.get('div[class="MuiDataGrid-columnHeaderTitleContainerContent"]').eq(index).realHover('mouse').then(function () {
                            cy.get('div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]:visible').click();
                        })
                        cy.get('div[class*="grid-filter-footer"] button').each(($buttonLabel) => {
                            if ($buttonLabel.text().includes("Clear")) {
                                cy.wrap($buttonLabel).click().then(function () {
                                    cy.get('svg.MuiCircularProgress-svg').should('exist')
                                })
                            }
                        }).then(function () {
                            cy.get('svg.MuiCircularProgress-svg').should('not.exist')
                        })
                    }
                })
            })
        }
    })
})
Then('User Verifies Wells drawn through polygon are displayed in Grid result', () => {
    cy.get('p[class="MuiTypography-root MuiTypography-body1 count-value undefined css-9l3uo3"]').each(($filterOption, index, $list) => {
        var well = $filterOption.text()
        var num1 = parseFloat(well.replace(',', ''));
        // cy.log(well)
        cy.log(num1)
        expect(num1).lessThan(50000)

    })
})

Then('Verify Legend is selected and  Legend should display the list by CumBOE in descending order', () => {
    legendpage.LegendIcon().should('be.visible')
    cy.intercept('**/api/wells/well-spot-attributes**').as('wellspotattributes')
    cy.wait('@wellspotattributes').its('response.statusCode').should('eq', 200)
    cy.wait(5000)
    var arr = []
    cy.get('div[class="well-color-item legend-item"] p[class="MuiTypography-root MuiTypography-body1 css-9l3uo3"]').each(($filterOption, index, $list) => {
        //var well = $filterOption.text()
        var well = $filterOption.text()
        var num1 = parseInt(well.replaceAll(',', ''));
        //var num1 =parseInt(well.replace(',', ''))
        //arr[index]=well
        arr[index] = num1
        //var num1 = parseInt(well.replaceAll(',',''));
        //cy.log(num1)

    })
        .then(function () {
            cy.log(arr.toString())
            var onlyNumbers = arr.filter(
                element => {
                    var pattern = /^\d+\.?\d*$/;
                    if (pattern.test(element)) {
                        return element;
                    }
                }
            );
            cy.log(onlyNumbers);

            function isAscending(arr) {
                return arr.every(function (x, i) {
                    return i === 0 || x <= arr[i - 1];
                });
            }
            cy.log(isAscending(onlyNumbers))


            //   let descOrderarr= onlyNumbers.sort(function(a,b){return b-a})
            //  cy.log(descOrderarr)

        })
})


Then('Check {string} Layer and verify applied for retrieved saved search', (Options, table) => {


    table.hashes().forEach(row => {
        if (row.hasOwnProperty('BaseMapOptions')) {

            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-kswqkt"]', row.BaseMapOptions)
                .find('input[type="radio"]')
                .should('be.checked')
                .should('be.enabled')

        }
    })
})


Then('Enable SurfaceHoleLocation and BottonHoleLocation Option', function () {
    mapsettings.SurfaceHoleLocationCheckbox().should('be.checked')
    mapsettings.BottomHoleLocationCheckbox().click().should('be.checked')

})

Then('Validate {string} option in the MAP SETTING', (textOption, table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('CultureLayerOption')) {
            cy.contains('.MuiPaper-root.Mui-expanded > :nth-child(2) > :nth-child(1) > :nth-child(1) > .MuiAccordion-region > .MuiAccordionDetails-root > :nth-child(1)', row.CultureLayerOption)
                .find('input[type="checkbox"]') // Find the checkbox input
                //.check({ force: true }) // Check the checkbox
                .should('be.checked')
                .should('not.be.enabled');
        }
    })
})

Then('Unselect {string} option in the MAP SETTING', (textOption, table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('CultureLayerOption')) {
            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mapsetting-label css-kswqkt"]', row.CultureLayerOption)
                .find('input[type="checkbox"]') // Find the checkbox input
                .uncheck({ force: true }) // Check the checkbox
                .should('not.be.checked')
                .should('be.enabled');
        }
    })
})

Then('Select {string} option in the MAP SETTING', (textOption, table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('CultureLayerOption')) {
            cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd mapsetting-label css-kswqkt"]', row.CultureLayerOption)
                .find('input[type="checkbox"]') // Find the checkbox input
                .check({ force: true }) // Check the checkbox
                .should('be.checked')
                .should('be.enabled');
        }
    })
})

Then('User uncheck UWI checkbox', function () {
    cy.get('input[aria-label="Unselect all rows"]').uncheck().should('not.be.checked')
})

Then('User Navigate to Type curve Settings and Aggregate wells by All wells and enable Plot Daily Values', () => {

    //click on threedotsMenu in Production curve
    cy.get('[style="transform: translate(10px, 10px); width: 447px; height: 310px; position: absolute;"] > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

    //click on settings
    cy.get('[data-testid="SettingsIcon"]').click()

    //check radio button Groupwell by All Wells
    cy.get('label[class*="MuiFormControlLabel-root"] [value="Default"]').check().should('be.checked')

    cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root >.PrivateSwitchBase-input').click().should('be.checked')

});
Then('User click on the Export button and click the Export to Excel button for Type Curve Chat', () => {

    cy.get('[style="transform: translate(10px, 10px); width: 447px; height: 310px; position: absolute;"] > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

    cy.get('[tabindex="0"] > .MuiButtonBase-root > .export-menu-dialog-labels').click()

    cy.get(':nth-child(3) > .export-select-item-labels').click()
})

Then('User click on the Export button and click the Export Image button for Type Curve Chat', () => {

    cy.get('[style="transform: translate(10px, 10px); width: 447px; height: 310px; position: absolute;"] > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

    cy.get('[tabindex="0"] > .MuiButtonBase-root > .export-menu-dialog-labels').click()

    cy.get(':nth-child(1) > .export-select-item-labels').click()
})

Then('User Navigate to Settings and Aggregate wells by Individual wells and enable Plot Daily Values', () => {

    //click on threedotsMenu in Production curve
    cy.get('.plot-chart-toolbar > :nth-child(3)').click()

    //click on settings
    cy.get('[data-testid="SettingsIcon"]').click()

    //check radio button Groupwell by All Wells
    cy.get('label[class*="MuiFormControlLabel-root"] [value="NONE"]').check().should('be.checked')

    cy.get('span[class*="Mui-checked Mui-checked css-1nobdqi"] input[class*="MuiSwitch-input css-1m9pwf3"]').should('be.checked')
    cy.get('span[class*="MuiSwitch-switchBase MuiSwitch-colorPrimary css-1nobdqi"] input[class*="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]').click().should('be.checked')

});

Then('User Navigate to Type curve Settings and Aggregate wells by Individual wells and enable Plot Daily Values', () => {

    //click on threedotsMenu in Production curve
    cy.get('[style="transform: translate(10px, 10px); width: 447px; height: 310px; position: absolute;"] > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

    //click on settings
    cy.get('[data-testid="SettingsIcon"]').click()

    //check radio button Groupwell by All Wells
    cy.get('label[class*="MuiFormControlLabel-root"] [value="NONE"]').check().should('be.checked')

    cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root >.PrivateSwitchBase-input').click().should('be.checked')
});

Then('User selects value for Y Axis data field  with radio button', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('YDataField')) {
            // Find the label element containing the desired text
            cy.contains('tbody[class*="MuiTableBody-root"] tr[class*="MuiTableRow-root"]', row.YDataField)
                .find('input[class="PrivateSwitchBase-input css-1m9pwf3"]') // Find the checkbox input
                .click({ force: true }) // Check the checkbox
                .should('be.checked'); // Assert that the checkbox is checked
        }
    });
});

Then('mouse hover on chart line and validate Unit and Number Format for {string}', function (curveName) {
    cy.wait(3000).then(function () {
        cy.get('div.react-grid-item div.plot-chart-header p.MuiTypography-body1:nth-child(1)').each(($visibleText, index, $list) => {
            if ($visibleText.text().includes(curveName)) {
                cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').eq(index)
                    .trigger('mouseover').click({ force: true })
                cy.get('body').click()
            }
        })
    })

})

Then('User Navigate to Settings and Aggregate Group wells by Attribute and enable Plot Daily Values', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('GroupBy')) {

            //click on threedotsMenu in Production curve
            cy.get('.plot-chart-toolbar > :nth-child(3)').click()

            //click on settings
            cy.get('[data-testid="SettingsIcon"]').click()

            //cy.wait(5000)
            //check radio button Groupwell by Attribute
            cy.get('label[class*="MuiFormControlLabel-root"] [value="ATTRIBUTES"]').check().should('be.checked')

            //click on Groupby Field
            cy.get('[id="groupby-select"]').click()

            //Select Particular element in Groupby Field values

            cy.get('li[class*="MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1bo1rz0"]').each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.GroupBy)) {
                    cy.wrap($filterOption).click()
                    // cy.wrap($buttonElement).click({ force: true })
                }
            })
        }
    });

    cy.get('span[class*="MuiSwitch-switchBase MuiSwitch-colorPrimary css-1nobdqi"] input[class*="PrivateSwitchBase-input MuiSwitch-input css-1m9pwf3"]')
        .click().should('be.checked')
});

Then('User Navigate to Settings and Aggregate Group wells by Attribute and enable Plot Daily Values for Type Curve', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('GroupBy')) {

            //click on threedotsMenu in Production curve
            cy.get('[style="transform: translate(10px, 10px); width: 447px; height: 310px; position: absolute;"] > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

            //click on settings
            cy.get('[data-testid="SettingsIcon"]').click()

            //cy.wait(5000)
            //check radio button Groupwell by Attribute
            cy.get('label[class*="MuiFormControlLabel-root"] [value="ATTRIBUTES"]').check().should('be.checked')

            //click on Groupby Field
            cy.get('[id="groupby-select"]').click()

            //Select Particular element in Groupby Field values

            cy.get('li[class*="MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1bo1rz0"]').each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.GroupBy)) {
                    cy.wrap($filterOption).click()
                    // cy.wrap($buttonElement).click({ force: true })
                }
            })
        }
    });

    cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root >.PrivateSwitchBase-input').click().should('be.checked')
});

Then('User clicks on close icon for Map Settings', () => {

    cy.get('div[class*="map-settings-card"] [data-testid="CloseIcon"]').click()
    //cy.get('[class*="plot-chart-container"]').should('be.visible');
});

Then('User Navigate to Settings and disable Include Forecast for Production Plot and click on Save', () => {
    productionplot.getThreeDotMenuIcon().click()
    productionplot.getSettingsIcon().click()
    //cy.get('span[class*="Mui-checked Mui-checked css-1nobdqi"] input[class*="MuiSwitch-input css-1m9pwf3"]').click().should('be.unchecked')
    cy.get("span[class='MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked Mui-checked css-1nobdqi'] input[type='checkbox']").uncheck({ force: true })
    productionplot.getSaveIcon().click()
    //cy.intercept('**/api/wells/productions**').as('loader')
    //cy.wait('@loader').its('response.statusCode').should('eq', 200)
    productionplot.getProductionChartGroups().each(($Legendtext, index, $list) => {
        if (($Legendtext.text()).includes('Daily')) {
            cy.log($Legendtext.text())
        }
    })
    cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').trigger('mouseover').click().each(($Value) => {
        var Chartval = $Value.text()
        cy.log(Chartval)
    })
});


Then('User Navigate to Settings and enable Include Forecast for Production Plot and click on Save', () => {
    productionplot.getThreeDotMenuIcon().click()
    productionplot.getSettingsIcon().click()
    cy.get('.forecast-wrapper > :nth-child(1) > .MuiFormControlLabel-root').click()
    //cy.get("span[class='MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked Mui-checked css-1nobdqi'] input[type='checkbox']").check({force : true})
    productionplot.getSaveIcon().click()
    // cy.intercept('**/api/wells/productions**').as('loader')
    // cy.wait('@loader').its('response.statusCode').should('eq', 200)
    productionplot.getProductionChartGroups().each(($Legendtext, index, $list) => {
        if (($Legendtext.text()).includes('Daily')) {
            cy.log($Legendtext.text())
        }
    })
    cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').trigger('mouseover').click().each(($Value) => {
        var Chartval = $Value.text()
        cy.log(Chartval)
    })
});

Then('User unselects checkboxes for Y Axis data field for Production Plot', () => {
    //cy.contains('tbody[class*="MuiTableBody-root"] tr[class*="MuiTableRow-root"]')          
    cy.get("th[class='MuiTableCell-root MuiTableCell-head MuiTableCell-paddingCheckbox MuiTableCell-sizeMedium css-353fdb'] input[type='checkbox']") // Find the checkbox input
        .dblclick() // uncheck the checkbox
    cy.get('body > div:nth-child(11) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > button:nth-child(2)').should('be.disabled'); // Assert that the checkbox is checked
})

Then('User Navigate to Settings and enable Include Forecast, Aggregate wells by Individual wells for Production Plot and click on Save', () => {
    productionplot.getThreeDotMenuIcon().click()
    productionplot.getSettingsIcon().click()
    cy.get('.forecast-wrapper > :nth-child(1) > .MuiFormControlLabel-root').click()
    //cy.get("span[class='MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked Mui-checked css-1nobdqi'] input[type='checkbox']").check({force : true})
    cy.get('label[class*="MuiFormControlLabel-root"] [value="NONE"]').check().should('be.checked')
    productionplot.getSaveIcon().click()
    cy.intercept('**/api/wells/productions**').as('loader')
    cy.wait('@loader').its('response.statusCode').should('eq', 200)
    productionplot.getProductionChartGroups().each(($Legendtext, index, $list) => {
        if (($Legendtext.text()).includes('Daily')) {
            cy.log($Legendtext.text())
        }
    })
    cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').trigger('mouseover').click().each(($Value) => {
        var Chartval = $Value.text()
        cy.log(Chartval)
    })
});

Then('User Navigate to Settings and Aggregate Group wells by Attribute and enable Include Forecast', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('GroupBy')) {
            //click on threedotsMenu in Production curve
            cy.get('.plot-chart-toolbar > :nth-child(3)').click()
            //click on settings
            cy.get('[data-testid="SettingsIcon"]').click()
            //cy.wait(5000)
            //check radio button Groupwell by Attribute
            cy.get('label[class*="MuiFormControlLabel-root"] [value="ATTRIBUTES"]').check().should('be.checked')
            //click on Groupby Field
            cy.get('[id="groupby-select"]').click()
            //Select Particular element in Groupby Field values
            cy.get('li[class*="MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1bo1rz0"]').each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.GroupBy)) {
                    cy.wrap($filterOption).click()
                    // cy.wrap($buttonElement).click({ force: true })
                }

            })
        }
    });
    cy.get('.forecast-wrapper > :nth-child(1) > .MuiFormControlLabel-root').click()
});

Then('User unselects checkboxes for Y Axis data field when chart is maximized and verify save button is disabled', () => {

    //cy.contains('tbody[class*="MuiTableBody-root"] tr[class*="MuiTableRow-root"]')          
    cy.get('span[class*="MuiCheckbox-indeterminate"] input[type="checkbox"]') // Find the checkbox input
        .check({ force: true }) // uncheck the checkbox

    cy.get('div[class*="MuiDialogActions-root"] button:nth-child(2)').should('be.disabled'); // Assert that the checkbox is checked
})
Then('User type {string} in the text field and checks if the options are displaying', function (content) {
    cy.get('input[placeholder*="Lease"]').clear().type(content).each(($el, index, $list) => {
        if (content.length === 1) {
            expect($el).to.have.attr('aria-expanded', 'false')
        }
        if (content.length > 1) {
            cy.get('svg.MuiCircularProgress-svg').should('exist').then(function () {
                cy.get('svg.MuiCircularProgress-svg').should('not.exist').then(function () {
                    cy.get('div.autocomplete-list').should('exist')
                    expect($el).to.have.attr('aria-expanded', 'true')
                })

            })
        }
    })
})

Then('User selects {string} options from the dropdown', function (option) {
    if (option === 1) {
        cy.get('div.autocomplete-list').first().click().then(function () {
            cy.get('div.autocomplete-list').should('not.exist')
            cy.get('div.MuiChip-filledDefault span.MuiChip-labelMedium').should('be.visible')
        })
    }

    if (option != 1) {
        for (let iteration = 1; iteration <= option; iteration++) {
            cy.get('input[placeholder*="Lease"]').click()
            cy.get('div.autocomplete-list').eq(iteration).click().then(function () {
                cy.get('div.MuiChip-filledDefault span.MuiChip-labelMedium').should('be.visible')
            })
        }
    }
})
Then('User verifies the lease name and Id', function () {
    cy.get('div.drawer-container div.MuiChip-filled span.MuiChip-label').each(($leaseId) => {
        cy.log($leaseId.text())
    })
})

Then('User selects the well spot and click on more info', function () {
    cy.wait(15000)
    //cy.intercept({ method: 'POST', url: '**/api/wells/search/**' }).as("WellsResultsLoad");
    //cy.wait('@WellsResultsLoad')
    cy.get('#map').then(($canvas) => {
        const canvasWidth = $canvas.width();
        cy.log(canvasWidth)
        const canvasHeight = $canvas.height()
        cy.log(canvasHeight)
        const canvasX = (canvasWidth / 2)
        const canvasY = (canvasHeight / 2)
        cy.wrap($canvas).trigger('mouseover').click(canvasX + 100, canvasY)
        cy.contains('MORE INFO').click();
    })
})

Then('User selects the charts option', function () {
    cy.get('div.MuiTabs-flexContainer button:visible').last().click()
})

Then('User validate the production plot chart', function () {
    cy.get('g.g-ytitle text:visible').each(($yAxisTitle) => {
        expect($yAxisTitle.text()).to.equal('Daily Production Rate / Volume')
    })
    cy.get('g.g-xtitle text:visible').each(($xAxisTitle) => {
        expect($xAxisTitle.text()).to.equal('Date')
    })
    cy.get('g.groups g.traces text:visible').each(($legend) => {
        cy.log($legend.text())
        expect($legend.text()).includes('Daily')
    })
})
Then('User click on Analyse button', function () {
    productionplot.getAnalyzeIcon().click()
    productionplot.getProductionCurve().click({ multiple: true })
})

Then('User closes the surface well card', function () {
    cy.get('button.well-panel-close-button').click();
})

Then('User selects the UWI tab', function () {
    sidebarpage.getUwiSearchTab().click();
})
Then('notepad content is copied to clipboard for morethan 60k', function () {
    //cy.exec('node C:/Users/2333937/Downloads/ConsolidationFolders/WDA_Regression_Suite_M/WDA_Regression_Suite_M/cypress/support/notepad-scriptMoreThan60k.mjs')
    cy.exec('node notepad-scriptMoreThan60k.mjs')
})
Then('Notepad content is copied to clipboard for 40k', function () {
    cy.exec('node notepad-script40k.mjs')
})
Then('User paste the UWIs', function () {
    cy.window().then((win) => {
        return win.navigator.clipboard.readText().then((clipboardText) => {
            cy.get('textarea[placeholder*="Comma Delimited"]').then(($input) => {
                const inputElement = $input[0];
                inputElement.value = clipboardText;
                const inputEvent = new Event('input', { bubbles: true })
                const changeEvent = new Event('change', { bubbles: true })
                inputElement.dispatchEvent(inputEvent)
                inputElement.dispatchEvent(changeEvent)
                cy.wait(5000)
            })
        })
    })
})

Then('User paste the UWIs morethan 60k', function () {
    cy.window().then((win) => {
        return win.navigator.clipboard.readText().then((clipboardText) => {
            cy.get('textarea[placeholder*="Comma Delimited"]').then(($input) => {
                const inputElement = $input[0];
                inputElement.value = clipboardText;
                const inputEvent = new Event('input', { bubbles: true })
                const changeEvent = new Event('change', { bubbles: true })
                inputElement.dispatchEvent(inputEvent)
                inputElement.dispatchEvent(changeEvent)
                cy.wait(5000)
                cy.get('p.MuiFormHelperText-root').each(($helperText) => {
                    expect($helperText).to.have.text('Only accepts up to 60,000 UWIs. For bigger UWI searches, use the file upload.')
                })
            })
        })
    })
})
Then('Notepad content is copied to clipboard for 20k', function () {
    cy.exec('node notepad-script20k.mjs')
})
Then('User paste UWI set of 20k', function () {
    cy.window().then((win) => {
        return win.navigator.clipboard.readText().then((clipboardText) => {
            cy.get('textarea[placeholder*="Comma Delimited"]').then(($input) => {
                const inputElement = $input[0];
                inputElement.value = clipboardText;
                const inputEvent = new Event('input', { bubbles: true })
                const changeEvent = new Event('change', { bubbles: true })
                inputElement.dispatchEvent(inputEvent)
                inputElement.dispatchEvent(changeEvent)

            })
        })
    }).then(function () {
        cy.wait(10000)
    })
})
Then('User paste UWI set of 40k', function () {
    cy.window().then((win) => {
        return win.navigator.clipboard.readText().then((clipboardText) => {
            cy.get('textarea[placeholder*="Comma Delimited"]').then(($input) => {
                const inputElement = $input[0];
                inputElement.value = clipboardText;
                const inputEvent = new Event('input', { bubbles: true })
                const changeEvent = new Event('change', { bubbles: true })
                inputElement.dispatchEvent(inputEvent)
                inputElement.dispatchEvent(changeEvent)

            })
        })
    }).then(function () {
        cy.wait(10000)
    })
})

Then('User clears all the UWIs', function () {
    cy.get('textarea[placeholder*="Comma Delimited"]').type('{backspace}').clear()
})
Then('User click on reset option from the sidebar menu', function () {
    cy.get('.uwi > .search-panel-footer > .action-button-container > .css-6txy7e').click()
})
Then('User verifies the footer panel buttons', function () {
    cy.get('div.action-button-container button:visible').each(($footerButton) => {
        expect($footerButton).to.be.disabled
    })
})

Then('User clicks Analyze and selects Production plot', () => {

    //cy.get('.grid-analysis-button > .analyze-button-container > .MuiButtonBase-root').click()
    cy.get('.analysis-menu-container > .analyze-button-container > .MuiButtonBase-root > .MuiTypography-root').click()
    //click on Type curve plot
    //cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({ multiple: true })
    cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Production Plot Selector"]:visible').click({ multiple: true })

});

Then('User clicks Analyze from grid table and selects Type Curve plot', () => {
    //click on analyze
    //cy.get('.grid-analysis-button > .analyze-button-container > .MuiButtonBase-root').click()
    cy.get('.grid-analysis-button > .analyze-button-container > .MuiButtonBase-root > .MuiTypography-root').click()
    //click on Type curve plot
    //cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({ multiple: true })
    cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Type Curve Selector"]:visible').click({ multiple: true })

});

Then('User resets the data', () => {

    cy.get('[data-testid="RestartAltIcon"]').click({ force: true })
})

Then('User resets the data in fullscreen mode', () => {

    cy.get('div[class="MuiDialogContent-root css-1ty026z"] [data-testid="RestartAltIcon"]').click({ force: true })
})

Then('User close the chart', () => {

    cy.get('[data-testid="CloseOutlinedIcon"]').click()
})

Then('User deselects random data in the legend in fullscreen mode', () => {

    cy.get('div[class="MuiDialogContent-root css-1ty026z"] div[class="plot-chart-container"] svg[class="main-svg"] g[class="legend cursor-move"]').then($elements => {
        const randomIndex = Math.floor(Math.random() * $elements.length)
        cy.wrap($elements[randomIndex]).click().should('not.be.selected')
    })

})
Then('User deselects random data in the legend', () => {

    cy.get('g[class="legend cursor-move"]').then($elements => {
        const randomIndex = Math.floor(Math.random() * $elements.length)
        cy.wrap($elements[randomIndex]).click().should('not.be.selected')
    })

})

Then('User Aggregate wells by attribute and Verify Production Plot Chart Data groups', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('GroupBy')) {
            //click on threedotsMenu in Production curve
            //productionplot.getThreeDotMenuIcon().click()
            //click on settings
            //productionplot.getSettingsIcon().click()
            //check radio button Groupwell by Attribute
            productionplot.getGroupwellbyAttributeBtn().check().should('be.checked')
            //click on Groupby Field
            productionplot.getGroupbyField().click()
            //Select Particular element in Groupby Field values
            productionplot.getGroupbyFieldvalues().each(($filterOption, index, $list) => {
                var well = $filterOption.text()
                if (well.includes(row.GroupBy)) {
                    cy.wrap($filterOption).click()
                }

            })
            //click on save button
            productionplot.getSaveIcon().click()
            //cy.pause()
            // cy.intercept('**/api/wells/productions**').as('loader')
            // cy.wait('@loader').its('response.statusCode').should('eq', 200)

            var count = 0;
            productionplot.getProductionChartGroups().each(($Legendtext, index, $list) => {
                cy.log($Legendtext.text())
                count = count + 1;
            }).then(function () {
                cy.log(count)
                if (count > 10) {
                    expect(count).to.be.greaterThan(10);
                    cy.log("Production Plot Chart Data has more than 10 groups")
                }
                else {
                    expect(count).to.be.lessThan(10);
                    cy.log("Production Plot Chart Data has less than 10 groups")
                }
            })
        }
    })
})

Then('User selects the settings for {string}', function (curveName) {
    cy.wait(3000).then(function () {
        cy.get('div.react-grid-item div.plot-chart-header p.MuiTypography-body1:nth-child(3)').each(($visibleText, index, $list) => {
            console.log(`Checking element ${index}: ${$visibleText.text()}`)
            if ($visibleText.text().includes(curveName)) {
                console.log(`Found curve name ${curveName}`)
                cy.get(`div[class = "plot-chart-toolbar"] svg[data-testid = "MoreHorizIcon"]`).eq(index).click();
                cy.get('[data-testid="SettingsIcon"]').click();
            } else {
                console.log(`Did not find curve name ${curveName}`)
            }
        });
    });
});

Then('User validate the downloaded excel file data', function (table) {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('validateFile')) {
            const filePaths = Cypress.config("fileServerFolder") + "/cypress/downloads/" + newFile;
            var searchData = row.validateFile
            searchData = searchData.split(",")
            //cy.log(searchData.toString())
            cy.readExcelFile({ filePaths, searchData }).then(({ totalRows, foundData }) => {
                cy.log(totalRows - 1 + ' lines available in the excel sheet')
                Object.entries(foundData).forEach(([key, value]) => {
                    if (value) {
                        //cy.log(key + ' is available in the excel file')
                        expect(searchData).to.include(key)
                    }
                })
            })
        }
    })
})

Then('User Aggregate wells by Individual wells,clicks CANCEL and Verify Production Plot Chart Data groups', () => {

    //click on threedotsMenu in Production curve
    //cy.get('div[class="plot-chart-toolbar"] [data-testid="MoreHorizIcon"]').click()
    //productionplot.getThreeDotMenuIcon().click()
    //click on settings
    //cy.get('[data-testid="SettingsIcon"]').click()
    //cy.wait(5000)
    //check radio button Groupwell by Individual Wells
    cy.get('label[class*="MuiFormControlLabel-root"] [value="NONE"]').check().should('be.checked')

    cy.get('input[value="1"]').should('be.checked')

    //click on cancel button
    cy.get('[data-testid="ArrowBackIcon"]').click()

    //Hover on chart
    cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').last().trigger('mouseover').click({ multiple: true })


});

Then('User clicks on {string} option value', function () {
    cy.get('.plot-chart-toolbar > :nth-child(3)').click()

    cy.get('[tabindex="0"] > .MuiButtonBase-root > .export-menu-dialog-labels').click()

    cy.task('downloads', 'C://Users/914598/OneDrive - Cognizant/Documents/TGS Automation/WDA_Regression_Suite_M 2 (1)/WDA_Regression_Suite_M/cypress/downloads').then(before => {
        cy.get(':nth-child(3) > .export-select-item-labels').click().then(function () {
            cy.contains('div[role="alert"] div.MuiSnackbarContent-message', 'Excel is now exporting').should('be.visible');
        }).wait(500).then(function () {
            cy.task('downloads', 'C://Users/914598/OneDrive - Cognizant/Documents/TGS Automation/WDA_Regression_Suite_M 2 (1)/WDA_Regression_Suite_M/cypress/downloads').then(after => {
                newFile = after.filter(file => !before.includes(file))[0]
            })
        })
    }).then(function () {
        cy.task('listFiles', Cypress.config("fileServerFolder") + "/cypress/downloads").then((files) => {
            files.forEach((file) => {
                const regex = /^Production Plot_.*_.*_\d{4}\d{2}\d{2}\d{2}\d{2}.xlsx$/
                expect(file).to.match(regex)
            })
        })
        cy.log(newFile)
    })
})

Then('under WellStyle Section deselect BottomHoleLocation & select SurfaceHoleLocation & WellPath Option', function () {
    mapsettings.SurfaceHoleLocationCheckbox().check().should('be.checked')
    //mapsettings.BottomHoleLocationCheckbox().check().should('be.checked')

    var test = 'Bottom Hole Location'
    cy.contains('label[class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-kswqkt"]', test)
        .find('input[type="checkbox"]') // Find the checkbox input
        //.check({ force: true }) // Check the checkbox
        .should('not.be.checked')
    //.should('be.enabled');

    mapsettings.WellPathCheckbox().check().should('be.checked')

})


Then('Click the 3 dots on top of the grid and click R360', () => {

    cy.get('svg[data-testid="MoreHorizIcon"]').click()
    var test = 'R360';
    cy.contains('li[role="menuitem"] span[class="MuiTypography-root MuiTypography-body1 css-9l3uo3"]', test)
        .click();

})

Then('User Validates error page once after clicking on OPEN IN NEW WINDOW popup', () => {
    /*
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
            win.location.href = 'https://test.tgsr360.com/searchExternal';
        }).as("popup")
    })
    var popupwindow ='OPEN IN NEW WINDOW'
    cy.contains('button[class="tgsccl-button primary enabled"]', popupwindow).click();
*/


    cy.window().then(win => {
        cy.stub(win, 'open', url => {
            win.location.href = url;
            return win;
        }).as('windowOpen')
        // cy.get('svg[data-testid="MoreVertIcon"]').click()
        var popupwindow = 'OPEN IN NEW WINDOW'
        cy.get('button[class="tgsccl-button primary enabled"]:visible').contains(popupwindow).click();

        //cy.get('@popup')
        //  .should("be.called")
        //cy.url().should('include', '/searchExternal')
        //cy.title().should('include', 'This site can’t be reached')
    });

})


Then('User verifies Export option is enabled in menu', () => {

    cy.get('div[class="sidebar-menu"] button[type="button"] svg[Width="27"]').should('be.visible')
})


Then('verify  Added NonDefaultAttribute is not selected in saved search', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('NonDefaultAttribute')) {
            cy.contains('span[class="MuiChip-label MuiChip-labelSmall css-1pjtbja"]', row.NonDefaultAttribute).should('not.be.selected')
        }
    })
})

Then('User clicks on export option in menu', () => {

    cy.get('div[class="sidebar-menu"] button[type="button"] svg[Width="27"]').click();

    sidebarpage.getSidebarSearchIcon().click()


    cy.get('div[class="sub-header"] h6').each(($visibleHeader) => {
        autoSavedSearchName = $visibleHeader.text();
        cy.log('AutoSavedSearchName: ' + autoSavedSearchName)

    })

    //cy.get('div[class="sidebar-menu"] button[type="button"] svg[Width="27"]').should('be.enabled')
    //cy.url().should('include', 'https://export-dev.datalake.tgs.com/')
    //cy.intercept({ method: 'GET', url: '**/well-data-analytics-test.api.tgs.ai/api/searches/**' }).as("SearchResultsLoad");
    //cy.wait('@SearchResultsLoad')

    /*
        cy.window().then(win => {
            cy.stub(win, 'open', url => {
                win.location.href = url;
                return win;
            }).as('windowOpen')
            // cy.get('svg[data-testid="MoreVertIcon"]').click()
            cy.get('div[class="sidebar-menu"] button[type="button"] svg[Width="27"]').click();
    
    */
    /*
                cy.window().then((win) => {
                    cy.stub(win, 'open', url => {
                        win.location.href = 'https://saga-analytics-test.tgs.ai/static/help/Log_in_to_Well_Data_Analytics.htm';
                    }).as("popup")
                })
                cy.get('.MuiPaper-root > :nth-child(3)').click()
            
                cy.get('@popup')
                    .should("be.called")
                cy.url().should('include', '/help/Log_in_to_Well_Data_Analytics.htm')
                cy.title().should('include', 'Logging in to Well Data Analytics')
    
      */
    //cy.go('back')
});

Then('verify  Added NonDefaultAttribute is selected in saved search', (table) => {
    table.hashes().forEach(row => {
        if (row.hasOwnProperty('NonDefaultAttribute')) {
            cy.contains('div[class*="qb-editor-attribute css-ady1qu"]', row.NonDefaultAttribute).should('be.visible')
        }
    })
})




Then('User select Export Icon', function () {

    cy.get('div[class="sidebar-menu"] button[type="button"] svg[Width="27"]').click();

    cy.intercept('**/api/searches**').as('Searchloader')
    cy.wait('@Searchloader').its('response.statusCode').should('eq', 200).then(function () {

        cy.get('div[class="sub-header"] h6').each(($visibleHeader) => {
            autoSavedSearchName = $visibleHeader.text();
            cy.log('AutoSavedSearchName: ' + autoSavedSearchName)
        })
        /* 
         cy.get('.search-panel > .MuiPaper-elevation16 > .drawer-container > .sub-header > .MuiTypography-root').each(($filterOption, index, $list) => { 
             var element=$filterOption.text()
             cy.log(element)
         })
         */
    })
})