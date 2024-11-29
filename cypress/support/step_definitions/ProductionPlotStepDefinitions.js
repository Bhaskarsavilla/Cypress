//  import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

//  import SidebarPage from "../../integration/pages/SidebarPage";
//  import SearchResultPage from "../../integration/pages/SearchResultPage";
//  import ProductionPlot from '../../integration/pages/ProductionPlotPage';


//  const sidebarpage = new SidebarPage()
//  const searchresultpage = new SearchResultPage()
//  const productionplot = new ProductionPlot()


//  /*Given(`User opens the Saga Analytics application url and login`, function () {
//      cy.visit(this.url)
//      cy.loginToOkta()
//      cy.title().should('include', 'Well Data Analytics')
//  });

//  When(`User clicks on search icon in side bar menu`, () => {
//      sidebarpage.getSidebarSearchIcon().click()
//  });*/

// //Then(`User selects below attribute search criteria and clicks on {string} button in side panel`, (buttonLabel, table) => {
// //     table.hashes().forEach(row => {
// //         if (row.hasOwnProperty('State')) {
// //            sidebarpage.getStateFilterCombobox().type(row.State)
// //            cy.wait(5000)
// //            //cy.intercept('**/wells/count/StateName**').as('StateDropdownLoader')
// //            //cy.wait('@StateDropdownLoader').its('response.statusCode').should('eq', 200)
// //
// //             sidebarpage.getComboboxOptions().each(($filterOption, index, $list) => {
// //                 var currentOption = $filterOption.text()
// //                cy.log('State option: ', currentOption)
// //                 if (currentOption === (row.State)) {
// //                     cy.wrap($filterOption).click()
// //                 }
// //             })
// //        }
// //         if (row.hasOwnProperty('County')) {
// //             sidebarpage.getCountyFilterCombobox().type(row.County)
// //             //cy.wait(5000)
// //             cy.intercept('**/api/wells/count/County**').as('CountyDropdownLoader')
// //             cy.wait('@CountyDropdownLoader').its('response.statusCode').should('eq', 200)
// //             sidebarpage.getComboboxOptions().each(($filterOption, index, $list) => {
// //                 var currentOption = $filterOption.text()
// //                 cy.log('County option: ', currentOption)
// //                 if (currentOption.includes(row.County)) {
// //                     cy.wrap($filterOption).click()
// //                }
// //             })
// //        }
// //    });

// //     sidebarpage.getSidePanelFooterButtons().each(($buttonElement, index, $list) => {
// //         var currentButtonLabel = $buttonElement.text()
// //         cy.log(currentButtonLabel)
// //         if (currentButtonLabel.includes(buttonLabel)) {
// //             cy.wrap($buttonElement).click({ force: true })
// //             // cy.wrap($buttonElement).click({ force: true })
// //         }
// //     })

// //     //cy.wait(10000)
// //     cy.intercept({ method: 'GET', url: '**/sa-carto-saga-analytics/query/**' }).as("SearchResultsLoad");
// //     cy.wait('@SearchResultsLoad')
// // });


//  Then(`User clicks the three-dot menu in the Search menu header`, () => {
//      cy.get('div[class*="floating-scrollbar-left custom-drawer search-panel"] svg[data-testid="ChevronLeftIcon"]').click({ force: true })
//      searchresultpage.getThreeDotIcon().click({ force: true })
//  });
//  /*
//  Then(`User verifies {string} option is {string} in menu`, (menuOption, visibility) => {
//      if (visibility.includes('enabled'))
//          searchresultpage.getExportAsExcelOption().should('be.visible')
//      else
//          searchresultpage.getExportAsExcelOption().should('not.be.visible')
//  });
//  */

// /*Then('User checks UWI checkbox and clicks on Analyze production plot', () => {
//     //Select all UWI Elements checkbox
//     cy.get('input[aria-label="Select all rows"]').check().should('be.checked')
//     //cy.get('svg[data-testid="AddCircleOutlineRoundedIcon"]:nth-child(1)').click()
//     cy.get('.modules-menu-container > .analyze-button-container > .MuiButtonBase-root').click()
    
//     cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Production Plot Selector"]:visible').click({ multiple: true })
 
//     //Hover on chart
//     //cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').trigger('mouseover').click()
// });*/

// Then('User Navigate to Settings and Aggregate wells by Individual wells and Verify Production Plot Chart Data groups', () => {
     
//     //click on threedotsMenu in Production curve
//     cy.get('div[class="plot-chart-toolbar"] [data-testid="MoreHorizIcon"]').click()
//     //productionplot.getThreeDotMenuIcon().click()
//     //click on settings
//     cy.get('[data-testid="SettingsIcon"]').click()
//     //cy.wait(5000)
//     //check radio button Groupwell by Individual Wells
//     cy.get('label[class*="MuiFormControlLabel-root"] [value="NONE"]').check().should('be.checked')

//     //click on save button
//     cy.get('[data-testid="SaveIcon"]').click()

//     //Hover on chart
//     cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').trigger('mouseover').click({ multiple: true })

//     //cy.wait(5000)
//     //Click on fullscreen button
//     cy.get('.plot-chart-toolbar > :nth-child(5)').click()
   
// });

// Then('User Navigate to Settings and Aggregate wells by attribute and Verify Production Plot Chart Data groups', (table) => {
//      table.hashes().forEach(row => {
//          if (row.hasOwnProperty('GroupBy')) {
//              //cy.get('div[class="plot-chart-toolbar"] button[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall css-xfvph6"] [data-testid="MoreHorizIcon"]').click()
//              //click on threedotsMenu in Production curve
//              productionplot.getThreeDotMenuIcon().click()
//              //click on settings
//              productionplot.getSettingsIcon().click()
//              //cy.wait(5000)
//              //check radio button Groupwell by Attribute
//              productionplot.getGroupwellbyAttributeBtn().check().should('be.checked')
//              //click on Groupby Field
//              productionplot.getGroupbyField().click()
//              //Select Particular element in Groupby Field values
//              productionplot.getGroupbyFieldvalues().each(($filterOption, index, $list) => {
//                  var well = $filterOption.text()
//                  if (well.includes(row.GroupBy)) {
//                      cy.wrap($filterOption).click()
//                      // cy.wrap($buttonElement).click({ force: true })
//                  }

//              })
//              //click on save button
//              productionplot.getSaveIcon().click()
//              // cy.wait(5000)
//              cy.intercept('**/api/wells/productions**').as('loader')
//              cy.wait('@loader').its('response.statusCode').should('eq', 200)



//              var count = 0;

//              productionplot.getProductionChartGroups().each(($Legendtext, index, $list) => {
//                  cy.log($Legendtext.text())
//                  count = count + 1;
//              }).then(function () {
//                  cy.log(count)
//                  if (count > 10) {
//                      expect(count).to.be.greaterThan(10);
//                      cy.log("Production Plot Chart Data has more than 10 groups")
//                  }
//                  else {
//                      expect(count).to.be.lessThan(10);
//                      cy.log("Production Plot Chart Data has less than 10 groups")
//                  }
//              })

//          }
//      });
//  });

// Then('User verifies {string} option is {string} in menu', function (Option, visibility) {
//      sidebarpage.getThreeDotVerticalIcon().click({ force: true })
//      if (visibility.includes('enabled'))
//          //cy.get('[data-testid="FileDownloadIcon"]').should('be.enabled')
//          sidebarpage.getExportEnabledLabel().each(($buttonElement, index, $list) => {
//              var value = $buttonElement.text()
//              cy.log(value)
//              cy.wrap($buttonElement).should('be.visible')
//          })
//      else
//          //cy.get('[data-testid="FileDownloadIcon"]').should('not.be.visible')
//          sidebarpage.getExportDisabledLabel().each(($buttonElement, index, $list) => {
//              var value = $buttonElement.text()
//              cy.log(value)
//              cy.wrap($buttonElement).should('be.disabled')
//          })
//      //--cross browser
//      //cy.origin("https://export-test.datalake.tgs.com/",()=>{
//      // })
//      //cy.get(CSS Selector).invoke('removeAttr','target').click() --child window

//  });

// Then('mouse hover on chart line and validate Unit and Number Format', function () {
    
//     cy.get('div[class="MuiDialogContent-root css-1ty026z"] div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]').trigger('mouseover').click({force: true})
//     //cy.get('div[class="plot-chart-container"] svg[class="main-svg"] g[class="draglayer cursor-crosshair"] [class="nsewdrag drag"]').trigger('mouseover').first().click()
     
// })


// Then('User Navigate to Settings and Aggregate wells by All wells and Verify Production Plot Chart Data groups', () => {
     
//     //Click on fullscreen button
//     //cy.get('.plot-chart-toolbar > :nth-child(5)').click()

//     //click on threedotsMenu in Production curve
//     cy.get('.MuiDialogContent-root > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

//     //click on settings
//     cy.get('[data-testid="SettingsIcon"]').click()

//     //check radio button Groupwell by All Wells
//     cy.get('label[class*="MuiFormControlLabel-root"] [value="Default"]').check().should('be.checked')

//     //click on save button
//     cy.get('[data-testid="SaveIcon"]').click()

// });

// Then('User Verify Production plot chart in full screen and Aggregate wells by attribute and Verify Production Plot Chart Data groups', (table) => {
//     table.hashes().forEach(row => {
//         if (row.hasOwnProperty('GroupBy')) {
            
//             //click on threedotsMenu in Production curve
//             //cy.get('div[class="plot-chart-toolbar"] [data-testid="MoreHorizIcon"]').click({ multiple: true })
//             cy.get('.MuiDialogContent-root > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

//             //click on settings
//             cy.get('[data-testid="SettingsIcon"]').click()

//             //cy.wait(5000)
//             //check radio button Groupwell by Attribute
//             cy.get('label[class*="MuiFormControlLabel-root"] [value="ATTRIBUTES"]').check().should('be.checked')

//             //click on Groupby Field
//             cy.get('[id="groupby-select"]').click()
            
//             //Select Particular element in Groupby Field values
            
//             cy.get('li[class*="MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1bo1rz0"]').each(($filterOption, index, $list) => {
//                 var well = $filterOption.text()
//                 if (well.includes(row.GroupBy)) {
//                     cy.wrap($filterOption).click()
//                     // cy.wrap($buttonElement).click({ force: true })
//                 }
 
//             })
//             //click on save button
//             cy.get('[data-testid="SaveIcon"]').click()
//             // cy.wait(5000)
            
// }
// });
// });

// When(`User clicks on Analyze icon on right corner of page`, () => {
//     cy.get('.modules-menu-container > .analyze-button-container > .MuiButtonBase-root').click()
// });

// Then(`User selects production plot chart static image`, () => {
//     cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > :nth-child(2) > img').click()
// });

// Then(`User clicks on Analyze and selects type curve chart static image`, () => {
//     cy.get('[data-testid="AddCircleOutlineRoundedIcon"]').click()
//     cy.get('.MuiList-root > :nth-child(3) > img').click()

// });

// Then('User clicks Analyze and selects Type Curve plot', () => {
//     //click on analyze
//     //cy.get('.grid-analysis-button > .analyze-button-container > .MuiButtonBase-root').click()
//     cy.get('.analysis-menu-container > .analyze-button-container > .MuiButtonBase-root > .MuiTypography-root').click()
//     //click on Type curve plot
//     //cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({ multiple: true })
//     cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Type Curve Selector"]:visible').click({ multiple: true })
    
// }); 

// Then('User clicks Analyze and selects Scatter plot', () => {
//     //click on analyze
//     //cy.get('.grid-analysis-button > .analyze-button-container > .MuiButtonBase-root').click()
//     cy.get('.analysis-menu-container > .analyze-button-container > .MuiButtonBase-root > .MuiTypography-root').click({force: true})
//     //click on Type curve plot
//     //cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > :nth-child(2)').click({ multiple: true })
//     cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Scatter Plot Selector"]:visible').click({ multiple: true })
    
// });

// /*Then('User checks UWI checkbox', () => {
   
//     //Select all UWI Elements checkbox
//     cy.get('input[aria-label="Select all rows"]').check().should('be.checked')

// });*/


// Then('User clicks on fullscreen view', () => {

//     //Click on fullscreen button
//     cy.get('.plot-chart-toolbar > :nth-child(5)').click()
   
// });

// Then('User clicks three dots and select settings', () => {
   
//     //click on threedotsMenu in Production curve
//     cy.get('.MuiDialogContent-root > .plot-chart-header > .plot-chart-toolbar > :nth-child(3)').click()

//     //click on settings
//     cy.get('[data-testid="SettingsIcon"]').click()
// });

// Then('User clicks three dots from default view and select settings', () => {
   
//     //click on threedotsMenu in Production curve
//     cy.get('.plot-chart-toolbar > :nth-child(3)').click()

//     //click on settings
//     cy.get('[data-testid="SettingsIcon"]').click()
// });


// Then('User clears default title and modify title', function (table) {
 
//     cy.get('[id="chart-title"]').click().clear()

//     table.hashes().forEach(row => {
//         if (row.hasOwnProperty('Title')) {
//             cy.get('[id="chart-title"]').type(row.Title);
//         }
//     })
    
// })

// Then('User selects value for X Axis data field', (table) => {
//     table.hashes().forEach(row => {
//         if (row.hasOwnProperty('DataField')) {

//             //click on Data Field
//             cy.get('div[class*="x-axis-data-picker-container"] div[class*="MuiFormControl-root"] div[class*="MuiInputBase-root"] ').click()
//             //cy.get('.x-axis-data-picker-container > .MuiFormControl-root > .MuiInputBase-root')
            
//             //Select Particular element in Data Field values
//             cy.get('li[class*="MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1bo1rz0"]').each(($filterOption, index, $list) => {
//                 var well = $filterOption.text()
//                 if (well.includes(row.DataField)) {
//                     cy.wrap($filterOption).click()
//                     // cy.wrap($buttonElement).click({ force: true })
//                 }
 
//             })                    
// }
// });
// });

// Then('User selects value for Y Axis data field', (table) => {
//     table.hashes().forEach(row => {
//       if (row.hasOwnProperty('YDataField')) {
//         // Find the label element containing the desired text
//         cy.contains('tbody[class*="MuiTableBody-root"] tr[class*="MuiTableRow-root"]', row.YDataField)          
//           .find('input[type="checkbox"]') // Find the checkbox input
//           .check({ force: true }) // Check the checkbox
//           .should('be.checked'); // Assert that the checkbox is checked
//       }
//     });
//   });

//   Then('User clicks on save icon and verify chart', () => {
   
//     cy.get('[data-testid="SaveIcon"]').click()
//     cy.get('[class*="plot-chart-container"]').should('be.visible');
// });

// Then('User clicks on Analyze, hover and selects the Scatter Plot Chart', function () {
    
    
//     //cy.get('div[class="plot-chart-container"] svg[class="main-svg"] g[class="draglayer cursor-crosshair"] [class="nsewdrag drag"]').trigger('mouseover').first().click()
    
//     //click on analyze
//     cy.get('.analysis-menu-container > .analyze-button-container > .MuiButtonBase-root > .MuiTypography-root').click({force: true})
    
//     // Hover on scatter plot
//     cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Scatter Plot Selector"]:visible').trigger('mouseover').click({force: true})

//     //click on Type curve plot
//     //cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Scatter Plot Selector"]:visible').click({ multiple: true })
    
// })

// Then('User clicks on resize for minimized chart', () => {
   
//     cy.get('.MuiDialogContent-root > .plot-chart-header > .plot-chart-toolbar > :nth-child(4)').click()
// });