Feature: Validation of Grid table Results

    Background: Login to Saga Analytics application through okta
        Given User opens the Saga Analytics application url and login

    @15175 @regression @grid_table
    Scenario:15111 - Verify "Expected Wells Count" after MATCHING attributes with polygon search
        When User clicks on search icon in side bar menu
        Then User verifies the search panel with left tab as attribute and selected as default and right tab as UWI
        Then User verfies sidepanel footer buttons
        Then User verifies the expected well count
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State     |
            | ALABAMA   |
            | TENNESSEE |
        Then User clicks on search icon in side bar menu
        Then User verfies sidepanel footer buttons
        Then User verifies the expected well count
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon and click on the 'Search' button in the side panel
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count
        Then User deletes the previous searched attribute
        Then User deletes the polygon and click on the 'Search' button
        Then User mouse over to the below label and click on the 3 dots,click on 'Oil (OIL)' checkbox and click on 'Apply Filter' button and verifies if filter is applied
            | mouseOverLabel |
            | Well Type      |
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count matching with the result grid search result
        Then User deletes the previous searched attribute
        Then User verifies the expected well count

    @15175 @regression @grid_table
    Scenario:15111 - Verify "Expected Wells Count" after MATCHING attributes with polygon search
        When User clicks on search icon in side bar menu
        Then User verifies the search panel with left tab as attribute and selected as default and right tab as UWI
        Then User verfies sidepanel footer buttons
        Then User verifies the expected well count
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State     |
            | ALABAMA   |
            | TENNESSEE |
        Then User clicks on search icon in side bar menu
        Then User verfies sidepanel footer buttons
        Then User verifies the expected well count
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon and click on the 'Search' button in the side panel
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count
        Then User deletes the previous searched attribute
        Then User deletes the polygon and click on the 'Search' button
        Then User mouse over to the below label and click on the 3 dots,click on 'Oil (OIL)' checkbox and click on 'Apply Filter' button and verifies if filter is applied
            | mouseOverLabel |
            | Well Type      |
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count matching with the result grid search result
        Then User deletes the previous searched attribute
        Then User verifies the expected well count


    @15340 @regression @grid_table
    Scenario: 15111 - Verify "Expected Wells Count" after UNMATCHING attributes with polygon search
        When User clicks on search icon in side bar menu
        Then User verifies the search panel with left tab as attribute and selected as default and right tab as UWI
        Then User verfies sidepanel footer buttons
        Then User verifies the expected well count
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State     |
            | ALABAMA   |
            | TENNESSEE |
        Then User clicks on search icon in side bar menu
        Then User verfies sidepanel footer buttons
        Then User verifies the expected well count
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon that does not cover the searched state and click on the 'Search' button in the side panel
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count
        Then User deletes the polygon and click on the 'Search' button
        Then User clicks on search icon in side bar menu
        Then User verfies sidepanel footer buttons
        Then User verifies the expected well count

    @35913 @regression @grid_table
    Scenario:Verify that the 'Has Well Economics' attribute is added to the grid table
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State      | County    |
            | NEW MEXICO | EDDY - NM |
        Then User scroll the result grid to right
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Has Well Economics          |
        Then User verifies if the below fields are Non default fields
            | ShowOrHideNonDefaultFieldsVerify |
            | Has Well Economics               |
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Has Well Economics         |
        Then User verifies if the below field is in to default list
            | ShowOrHideDefaultVerifyList |
            | Has Well Economics          |
        Then User click on the body of the application
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel     |
            | Has Well Economics |
        Then User click on 'true' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel     |
            | Has Well Economics |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel     |
            | Has Well Economics |
        Then User verifies if 'Sort A to Z' option is disabled
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile       |
            | Has Well Economics |

    @21788 @regression @grid_table
    Scenario:Grid Results - Verify "Spud Date" field column (Date)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Spud Date                   |
        Then User verifies if the below fields are Non default fields
            | ShowOrHideNonDefaultFieldsVerify |
            | Spud Date                        |
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Spud Date                  |
        Then User click on the body of the application
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User click on '1939' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User verifies if 'Date Filter' menu is available
        Then User click on the body of the application
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User click on 'Sort Z to A' option
        Then User click on the Square button on the search results header at the right most edge of the screen
        Then User click on the two downward arrows on the search result header at right most edge of the result grid
        Then User click on the two upward arrows on the search result header at right most edge of the result grid
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile |
            | Spud Date    |
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile |
            | Spud Date    |
        Then User click on the body of the application
        Then User unsort back to the UWI ASC order
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User click on 'Clear' button and verifies if the filter is removed successfully

    @32176 @regression @grid_table
    Scenario: 21766 - Grid Results - Verify "MeasuredDepth" field column (Integer)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   | County    |
            | ALABAMA | BIBB - AL |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Measured Depth              |
        Then User verifies if the below field is in to default list
            | ShowOrHideDefaultVerifyList |
            | Measured Depth              |
        Then User changes below default value to non default
            | ShowOrHideDefaultconversionList |
            | Measured Depth                  |
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Measured Depth             |
        Then User click on the body of the application
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Measured Depth |
        Then User click on '12404' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Measured Depth |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Measured Depth |
        Then User click on 'Sort Z to A' option
        Then User click on the Square button on the search results header at the right most edge of the screen
        Then User click on the two downward arrows on the search result header at right most edge of the result grid
        Then User click on the two upward arrows on the search result header at right most edge of the result grid
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile   |
            | Measured Depth |
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile   |
            | Measured Depth |
        Then User click on the body of the application
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Measured Depth |
        Then User click on 'Clear' button and verifies if the filter is removed successfully

    @32177 @regression @grid_table
    Scenario:Grid Results - Verify "Spud Date" field column (Date)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   | County    |
            | ALABAMA | BIBB - AL |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Spud Date                   |
        Then User verifies if the below fields are Non default fields
            | ShowOrHideNonDefaultFieldsVerify |
            | Spud Date                        |
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Spud Date                  |
        Then User click on the body of the application
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User click on '1985' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User verifies if 'Date Filter' menu is available
        Then User click on the body of the application
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User click on 'Sort Z to A' option
        Then User click on the Square button on the search results header at the right most edge of the screen
        Then User click on the two downward arrows on the search result header at right most edge of the result grid
        Then User click on the two upward arrows on the search result header at right most edge of the result grid
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile |
            | Spud Date    |
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile |
            | Spud Date    |
        Then User click on the body of the application
        Then User unsort back to the UWI ASC order
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Spud Date      |
        Then User click on 'Clear' button and verifies if the filter is removed successfully


    @33173 @regression @grid_table
    Scenario: Verify that the new attributes is added to show/hide column section of search grid
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ALABAMA |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Oil Algorithm               |
            | Oil Initial Rate            |
            | Oil Decline Rate            |
            | Oil B-Factor                |
            | Oil Start                   |
            | Gas Algorithm               |
            | Gas Initial Rate            |
            | Gas Decline Rate            |
            | Gas B-Factor                |
            | Gas Start                   |
            | Water Algorithm             |
            | Water Initial Rate          |
            | Water Decline Rate          |
            | Water B-Factor              |
            | Water Start                 |
        Then User verifies if the below fields are Non default fields
            | ShowOrHideNonDefaultFieldsVerify |
            | Oil Algorithm                    |
            | Oil Initial Rate                 |
            | Oil Decline Rate                 |
            | Oil B-Factor                     |
            | Oil Start                        |
            | Gas Algorithm                    |
            | Gas Initial Rate                 |
            | Gas Decline Rate                 |
            | Gas B-Factor                     |
            | Gas Start                        |
            | Water Algorithm                  |
            | Water Initial Rate               |
            | Water Decline Rate               |
            | Water B-Factor                   |
            | Water Start                      |
        Then User changes already default values to non default
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Oil Algorithm              |
            | Oil Initial Rate           |
            | Oil Decline Rate           |
            | Oil B-Factor               |
            | Oil Start                  |
            | Gas Algorithm              |
            | Gas Initial Rate           |
            | Gas Decline Rate           |
            | Gas B-Factor               |
            | Gas Start                  |
            | Water Algorithm            |
            | Water Initial Rate         |
            | Water Decline Rate         |
            | Water B-Factor             |
            | Water Start                |
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile                                                                                                                                                                                                                   |
            | Oil Algorithm,Oil Initial Rate,Oil Decline Rate,Oil B-Factor,Oil Start,Gas Algorithm,Gas Initial Rate,Gas Decline Rate,Gas B-Factor,Gas Start,Water Algorithm,Water Initial Rate,Water Decline Rate,Water B-Factor,Water Start |



    @33173 @regression @grid_table
    Scenario: Verify that the new attributes is added to show/hide column section of search grid
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Oil Algorithm               |
            | Oil Initial Rate            |
            | Oil Decline Rate            |
            | Oil B-Factor                |
            | Oil Start                   |
            | Gas Algorithm               |
            | Gas Initial Rate            |
            | Gas Decline Rate            |
            | Gas B-Factor                |
            | Gas Start                   |
            | Water Algorithm             |
            | Water Initial Rate          |
            | Water Decline Rate          |
            | Water B-Factor              |
            | Water Start                 |
        Then User verifies if the below fields are Non default fields
            | ShowOrHideNonDefaultFieldsVerify |
            | Oil Algorithm                    |
            | Oil Initial Rate                 |
            | Oil Decline Rate                 |
            | Oil B-Factor                     |
            | Oil Start                        |
            | Gas Algorithm                    |
            | Gas Initial Rate                 |
            | Gas Decline Rate                 |
            | Gas B-Factor                     |
            | Gas Start                        |
            | Water Algorithm                  |
            | Water Initial Rate               |
            | Water Decline Rate               |
            | Water B-Factor                   |
            | Water Start                      |
        Then User changes already default values to non default
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Oil Algorithm              |
            | Oil Initial Rate           |
            | Oil Decline Rate           |
            | Oil B-Factor               |
            | Oil Start                  |
            | Gas Algorithm              |
            | Gas Initial Rate           |
            | Gas Decline Rate           |
            | Gas B-Factor               |
            | Gas Start                  |
            | Water Algorithm            |
            | Water Initial Rate         |
            | Water Decline Rate         |
            | Water B-Factor             |
            | Water Start                |
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile                                                                                                                                                                                                                   |
            | Oil Algorithm,Oil Initial Rate,Oil Decline Rate,Oil B-Factor,Oil Start,Gas Algorithm,Gas Initial Rate,Gas Decline Rate,Gas B-Factor,Gas Start,Water Algorithm,Water Initial Rate,Water Decline Rate,Water B-Factor,Water Start |



    @32178 @regression @grid_table
    Scenario: Grid Results - Verify "Oil Total Cum" field column (Numeric)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Oil Total Cum               |
        Then User verifies if the below field is in to default list
            | ShowOrHideDefaultVerifyList |
            | Oil Total Cum               |
        Then User changes below default value to non default
            | ShowOrHideDefaultconversionList |
            | Oil Total Cum                   |
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Oil Total Cum              |
        Then User click on the body of the application
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User click on '1459063' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User verifies if 'Number Filter' menu is available
        Then User click on the body of the application
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User click on 'Sort Z to A' option
        Then User click on the Square button on the search results header at the right most edge of the screen
        Then User click on the two downward arrows on the search result header at right most edge of the result grid
        Then User click on the two upward arrows on the search result header at right most edge of the result grid
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile  |
            | Oil Total Cum |
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile  |
            | Oil Total Cum |
        Then User click on the body of the application
        Then User unsort back to the UWI ASC order
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User click on 'Clear' button and verifies if the filter is removed successfully

    @21808 @regression @grid_table
    Scenario: Grid Results - Verify "Oil Total Cum" field column (Numeric)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  | County      |
            | ALASKA | BARROW - AK |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Oil Total Cum               |
        Then User verifies if the below field is in to default list
            | ShowOrHideDefaultVerifyList |
            | Oil Total Cum               |
        Then User changes below default value to non default
            | ShowOrHideDefaultconversionList |
            | Oil Total Cum                   |
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Oil Total Cum              |
        Then User click on the body of the application
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User click on '0' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User verifies if 'Number Filter' menu is available
        Then User click on the body of the application
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User click on 'Sort Z to A' option
        Then User click on the Square button on the search results header at the right most edge of the screen
        Then User click on the two downward arrows on the search result header at right most edge of the result grid
        Then User click on the two upward arrows on the search result header at right most edge of the result grid
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile  |
            | Oil Total Cum |
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile  |
            | Oil Total Cum |
        Then User click on the body of the application
        Then User unsort back to the UWI ASC order
        Then User scroll the result grid to right
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Total Cum  |
        Then User click on 'Clear' button and verifies if the filter is removed successfully


    @21786 @regression @grid_table
    Scenario: 21766 - Grid Results - Verify "MeasuredDepth" field column (Integer)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Measured Depth              |
        Then User verifies if the below field is in to default list
            | ShowOrHideDefaultVerifyList |
            | Measured Depth              |
        Then User changes below default value to non default
            | ShowOrHideDefaultconversionList |
            | Measured Depth                  |
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Measured Depth             |
        Then User click on the body of the application
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Measured Depth |
        Then User click on '22290' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Measured Depth |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Measured Depth |
        Then User click on 'Sort Z to A' option
        Then User click on the Square button on the search results header at the right most edge of the screen
        Then User click on the two downward arrows on the search result header at right most edge of the result grid
        Then User click on the two upward arrows on the search result header at right most edge of the result grid
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile   |
            | Measured Depth |
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile   |
            | Measured Depth |
        Then User click on the body of the application
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Measured Depth |
        Then User click on 'Clear' button and verifies if the filter is removed successfully

    @33159 @regression @grid_table
    Scenario: Verify that the new attributes is added to show/hide column section of search grid
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Oil EUR Per Ft              |
            | Gas EUR Per Ft              |
            | Oil Cum Per Ft              |
            | Gas Cum Per Ft              |
            | Water Cum Per Ft            |
            | BOE Cum Per Ft              |
            | BOE IP30                    |
            | BOE IP90                    |
        Then User verifies if the below fields are Non default fields
            | ShowOrHideNonDefaultFieldsVerify |
            | Oil EUR Per Ft                   |
            | Gas EUR Per Ft                   |
            | Oil Cum Per Ft                   |
            | Gas Cum Per Ft                   |
            | Water Cum Per Ft                 |
            | BOE Cum Per Ft                   |
            | BOE IP30                         |
            | BOE IP90                         |
        Then User changes already default values to non default
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Well Name                  |
            | Oil EUR Per Ft             |
            | Gas EUR Per Ft             |
            | Oil Cum Per Ft             |
            | Gas Cum Per Ft             |
            | Water Cum Per Ft           |
            | BOE Cum Per Ft             |
            | BOE IP30                   |
            | BOE IP90                   |
        Then User click on the body of the application
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil EUR Per Ft |
        Then User click on '3057.434' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil EUR Per Ft |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil EUR Per Ft |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil EUR Per Ft |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Equals' option value to '0' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Oil EUR Per Ft   |
            | Gas EUR Per Ft   |
            | Oil Cum Per Ft   |
            | Gas Cum Per Ft   |
            | Water Cum Per Ft |
            | BOE Cum Per Ft   |
            | BOE IP30         |
            | BOE IP90         |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Greater Than' option value to '1000' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Oil EUR Per Ft   |
            | Gas EUR Per Ft   |
            | Oil Cum Per Ft   |
            | Gas Cum Per Ft   |
            | Water Cum Per Ft |
            | BOE Cum Per Ft   |
            | BOE IP30         |
            | BOE IP90         |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Greater Than Or Equal To' option value to '1000' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Oil EUR Per Ft   |
            | Gas EUR Per Ft   |
            | Oil Cum Per Ft   |
            | Gas Cum Per Ft   |
            | Water Cum Per Ft |
            | BOE Cum Per Ft   |
            | BOE IP30         |
            | BOE IP90         |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Less Than' option value to '1000' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Oil EUR Per Ft   |
            | Gas EUR Per Ft   |
            | Oil Cum Per Ft   |
            | Gas Cum Per Ft   |
            | Water Cum Per Ft |
            | BOE Cum Per Ft   |
            | BOE IP30         |
            | BOE IP90         |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Less Than Or Equal To' option value to '1000' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Oil EUR Per Ft   |
            | Gas EUR Per Ft   |
            | Oil Cum Per Ft   |
            | Gas Cum Per Ft   |
            | Water Cum Per Ft |
            | BOE Cum Per Ft   |
            | BOE IP30         |
            | BOE IP90         |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Between' option value from '0' to '100' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Oil EUR Per Ft   |
            | Gas EUR Per Ft   |
            | Oil Cum Per Ft   |
            | Gas Cum Per Ft   |
            | Water Cum Per Ft |
            | BOE Cum Per Ft   |
            | BOE IP30         |
            | BOE IP90         |
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Gas EUR Per Ft |
        Then User click on '107006.974' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Gas EUR Per Ft |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Gas EUR Per Ft |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Gas EUR Per Ft |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Cum Per Ft |
        Then User click on '2248.426' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Cum Per Ft |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Cum Per Ft |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Oil Cum Per Ft |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Gas Cum Per Ft |
        Then User click on '40627.28' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Gas Cum Per Ft |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Gas Cum Per Ft |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Gas Cum Per Ft |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel   |
            | Water Cum Per Ft |
        Then User click on '4502.458' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel   |
            | Water Cum Per Ft |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel   |
            | Water Cum Per Ft |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel   |
            | Water Cum Per Ft |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE Cum Per Ft |
        Then User click on '7976.846' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE Cum Per Ft |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE Cum Per Ft |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE Cum Per Ft |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE IP30       |
        Then User click on '1362573.5' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE IP30       |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE IP30       |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE IP30       |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE IP90       |
        Then User click on '3586367.667' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE IP90       |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE IP90       |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | BOE IP90       |
        Then User click on 'Sort Z to A' option


    @35907 @regression @grid_table
    Scenario:Verify that the log curve attributes is added to the grid table
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ALABAMA |
        # Then User click on the Square button on the search results header at the right most edge of the screen
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Vshale                      |
            | Density                     |
            | Neutron Porosity            |
            | Resistivity                 |
            | Sonic                       |
        Then User verifies if the below fields are Non default fields
            | ShowOrHideNonDefaultFieldsVerify |
            | Vshale                           |
            | Density                          |
            | Neutron Porosity                 |
            | Resistivity                      |
            | Sonic                            |
        Then User changes already default values to non default
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Vshale                     |
            | Density                    |
            | Neutron Porosity           |
            | Resistivity                |
            | Sonic                      |
        Then User verifies if the below field is in to default list
            | ShowOrHideDefaultVerifyList |
            | Vshale                      |
            | Density                     |
            | Neutron Porosity            |
            | Resistivity                 |
            | Sonic                       |
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile                                      |
            | Vshale,Density,Neutron Porosity,Resistivity,Sonic |

    @18055 @regression @grid_table
    Scenario: 17716 - Draw to Select - Verify map spinner after selecting data with <50K

        Given User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User clicks on search icon in side bar menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon and click on the 'Search' button in the side panel
        Then User Verifies Wells drawn through polygon are displayed in Grid result
        Then User clicks on 'Reset' button in side panel



    @35909 @regression @grid_table
    Scenario:Verify all the filter operators for the log curve attributes in the grid table
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County         |
            | TEXAS | GLASSCOCK - TX |
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Vshale                      |
            | Density                     |
            | Neutron Porosity            |
            | Resistivity                 |
            | Sonic                       |
        Then User verifies if the below fields are Non default fields
            | ShowOrHideNonDefaultFieldsVerify |
            | Vshale                           |
            | Density                          |
            | Neutron Porosity                 |
            | Resistivity                      |
            | Sonic                            |
        Then User changes already default values to non default
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Well Name                  |
            | Vshale                     |
            | Density                    |
            | Neutron Porosity           |
            | Resistivity                |
            | Sonic                      |
        Then User verifies if the below field is in to default list
            | ShowOrHideDefaultVerifyList |
            | Well Name                   |
            | Vshale                      |
            | Density                     |
            | Neutron Porosity            |
            | Resistivity                 |
            | Sonic                       |
        Then User click on the body of the application
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Vshale         |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Vshale         |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Vshale         |
        Then User click on '0' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Vshale         |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Density        |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Density        |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Density        |
        Then User click on '2.5' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Density        |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel   |
            | Neutron Porosity |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel   |
            | Neutron Porosity |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel   |
            | Neutron Porosity |
        Then User click on '0.02' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel   |
            | Neutron Porosity |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Resistivity    |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Resistivity    |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Resistivity    |
        Then User click on '10.32' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Resistivity    |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Sonic          |
        Then User click on 'Sort A to Z' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Sonic          |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Sonic          |
        Then User click on '52.65' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile                                      |
            | Vshale,Density,Neutron Porosity,Resistivity,Sonic |
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Sonic          |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Equals' option value to '0' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Vshale           |
            | Density          |
            | Neutron Porosity |
            | Resistivity      |
            | Sonic            |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Greater Than' option value to '10' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Vshale           |
            | Density          |
            | Neutron Porosity |
            | Resistivity      |
            | Sonic            |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Greater Than Or Equal To' option value to '10' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Vshale           |
            | Density          |
            | Neutron Porosity |
            | Resistivity      |
            | Sonic            |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Less Than' option value to '10' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Vshale           |
            | Density          |
            | Neutron Porosity |
            | Resistivity      |
            | Sonic            |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Less Than Or Equal To' option value to '10' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Vshale           |
            | Density          |
            | Neutron Porosity |
            | Resistivity      |
            | Sonic            |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Between' option value from '0' to '10' and click on 'Apply Filter' option
            | mouseOverLabel   |
            | Vshale           |
            | Density          |
            | Neutron Porosity |
            | Resistivity      |
            | Sonic            |



    @39874 @regression @grid_table
    Scenario: Verify all the filter operators for the new attributes in the grid table
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ALABAMA |
        Then User click on the Square button on the search results header at the right most edge of the screen
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Recent1MoGas                |
            | Recent6MoGas                |
            | Recent1YrGas                |
            | Recent1MoOil                |
            | Recent6MoOil                |
            | Recent1YrOil                |
            | Recent1MoWater              |
            | Recent6MoWater              |
            | Recent1YrWater              |
        Then User verifies if the below fields are Non default fields
            | ShowOrHideNonDefaultFieldsVerify |
            | Recent1MoGas                     |
            | Recent6MoGas                     |
            | Recent1YrGas                     |
            | Recent1MoOil                     |
            | Recent6MoOil                     |
            | Recent1YrOil                     |
            | Recent1MoWater                   |
            | Recent6MoWater                   |
            | Recent1YrWater                   |
        Then User changes already default values to non default
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Recent1MoGas               |
            | Recent6MoGas               |
            | Recent1YrGas               |
            | Recent1MoOil               |
            | Recent6MoOil               |
            | Recent1YrOil               |
            | Recent1MoWater             |
            | Recent6MoWater             |
            | Recent1YrWater             |
        Then User verifies if the below field is in to default list
            | ShowOrHideDefaultVerifyList |
            | Recent1MoGas                |
            | Recent6MoGas                |
            | Recent1YrGas                |
            | Recent1MoOil                |
            | Recent6MoOil                |
            | Recent1YrOil                |
            | Recent1MoWater              |
            | Recent6MoWater              |
            | Recent1YrWater              |
        Then User click on the body of the application
        Then User mouse over to the below label and click on the 3 dots,click on 'Select All' checkbox and click on 'Apply Filter' button and verifies if filter is applied
            | mouseOverLabel |
            | Recent1MoGas   |
            | Recent6MoGas   |
            | Recent1YrGas   |
            | Recent1MoOil   |
            | Recent6MoOil   |
            | Recent1YrOil   |
            | Recent1MoWater |
            | Recent6MoWater |
            | Recent1YrWater |
        Then User mouse over to the below label and click on the 3 dots,click on 'Sort A to Z' option and verify if the option is disabled
            | mouseOverLabel |
            | Recent1MoGas   |
            | Recent6MoGas   |
            | Recent1YrGas   |
            | Recent1MoOil   |
            | Recent6MoOil   |
            | Recent1YrOil   |
            | Recent1MoWater |
            | Recent6MoWater |
            | Recent1YrWater |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Equals' option value to '1' and click on 'Apply Filter' option
            | mouseOverLabel |
            | Recent1MoGas   |
            | Recent6MoGas   |
            | Recent1YrGas   |
            | Recent1MoOil   |
            | Recent6MoOil   |
            | Recent1YrOil   |
            | Recent1MoWater |
            | Recent6MoWater |
            | Recent1YrWater |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Greater Than' option value to '1' and click on 'Apply Filter' option
            | Recent1MoGas   |
            | Recent6MoGas   |
            | Recent1YrGas   |
            | Recent1MoOil   |
            | Recent6MoOil   |
            | Recent1YrOil   |
            | Recent1MoWater |
            | Recent6MoWater |
            | Recent1YrWater |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Greater Than Or Equal To' option value to '1' and click on 'Apply Filter' option
            | mouseOverLabel |
            | Recent1MoGas   |
            | Recent6MoGas   |
            | Recent1YrGas   |
            | Recent1MoOil   |
            | Recent6MoOil   |
            | Recent1YrOil   |
            | Recent1MoWater |
            | Recent6MoWater |
            | Recent1YrWater |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Less Than' option value to '1' and click on 'Apply Filter' option
            | mouseOverLabel |
            | Recent1MoGas   |
            | Recent6MoGas   |
            | Recent1YrGas   |
            | Recent1MoOil   |
            | Recent6MoOil   |
            | Recent1YrOil   |
            | Recent1MoWater |
            | Recent6MoWater |
            | Recent1YrWater |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Less Than Or Equal To' option value to '1' and click on 'Apply Filter' option
            | Recent1MoGas   |
            | Recent6MoGas   |
            | Recent1YrGas   |
            | Recent1MoOil   |
            | Recent6MoOil   |
            | Recent1YrOil   |
            | Recent1MoWater |
            | Recent6MoWater |
            | Recent1YrWater |
        Then User mouse over to the below label and click on the 3 dots and from number filter select 'Between' option value from '1' to '3' and click on 'Apply Filter' option
            | mouseOverLabel |
            | Recent1MoGas   |
            | Recent6MoGas   |
            | Recent1YrGas   |
            | Recent1MoOil   |
            | Recent6MoOil   |
            | Recent1YrOil   |
            | Recent1MoWater |
            | Recent6MoWater |
            | Recent1YrWater |
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile                                                                                                               |
            | Recent1MoGas,Recent6MoGas,Recent1YrGas,Recent1MoOil,Recent6MoOil,Recent1YrOil,Recent1MoWater,Recent6MoWater,Recent1YrWater |


   @32194 @regression
    Scenario:31436 - Verify R360 in Export - All rows from the grid are selected
        Given User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox
        Then Click the 3 dots on top of the grid and click R360
        Then User Validates error page once after clicking on OPEN IN NEW WINDOW popup

     @32194 @regression
    Scenario:31436 - Verify R360 in Export - All rows from the grid are selected
        Given User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox
        Then Click the 3 dots on top of the grid and click R360
        Then User Validates error page once after clicking on OPEN IN NEW WINDOW popup