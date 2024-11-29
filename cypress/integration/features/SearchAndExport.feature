Feature: Validation of Search and Export

    Background: Login to Saga Analytics application through okta
        Given User opens the Saga Analytics application url and login

    @23336 @regression @search_and_export 
    Scenario: Geotech User - Build a new Petra Project
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   | County      |
            | WYOMING | WESTON - WY |
        Then User clicks on search icon in side bar menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon and click on the 'Search' button in the side panel
        Then User click on the two downward arrows on the search result header at right most edge of the screen
        Then User zoom in to zoom lvl 12 and right click on one of the well spots on the map
        Then User click on the two upward arrows on the search result header at right most edge of the screen
        Then User click on the Square button on the search results header at the right most edge of the screen
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel   |
            | Current Operator |
        Then User click on 'Sort Z to A' option
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Well Type      |
        Then User click on 'Oil (OIL)' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        



     @32139 @regression @search_and_export 
    Scenario: 11923 - Attribute Search Export - Polygons ONLY - Verify Export option is enabled when Expected Wells Count is <=100K
        When User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon and click on the 'Search' button in the side panel
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu

   @32140 @regression @search_and_export 
    Scenario: Attribute Search Export - Attributes and Polygons - Verify Export option is enabled when Expected Wells Count is from <=100K
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | MICHIGAN |
        Then User clicks the three-dot menu in the Search menu header
        Then User verifies 'Export' option is 'enabled' in menu

    @15473 @regression @search_and_export
    Scenario: 11923 - Attribute Search Export - Polygons ONLY - Verify Export option is disabled when Expected Wells Count is =0 or >100K
        When User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon with >100k expected wells count and click on the 'Search' button in the side panel
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User click on the 'Reset' button in the side panel
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | VERMONT |
        Then User clicks on search icon in side bar menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon and click on the 'Search' button in the side panel
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu

    @22347 @regression @search_and_export 
    Scenario: 22066 - UWI Search Export - Verify Export option is disabled if Saved Search Results Grid Count =0
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | VERMONT |
        Then User clicks on search icon in side bar menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon and click on the 'Search' button in the side panel
        Then click on 'Save' option and provide the below name and save the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on the saved search icon and click on the recent saved search
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu


    @15205 @regression @search_and_export 
    Scenario: 14295 - Verify that map will zoom to fit a search result - Search with multiple states
        When User clicks on search icon in side bar menu
        Then User extracts the starting zoom value
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | FLORIDA |
        Then User extracts the search zoom value
        Then User clicks on search icon in side bar menu
        Then User deletes the previous searched attribute
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State      |
            | WASHINGTON |
        Then User extracts the search zoom value
        Then User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User extracts the near search zoom value
        Then User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | FLORIDA |
        Then User extracts the far search zoom value
        Then User clicks on search icon in side bar menu
        Then User deletes the previous searched attribute
        Then User click on 'Search' option from the sidebar menu
        Then User extracts the near search zoom value
        Then User clicks on search icon in side bar menu
        Then User deletes the previous searched attribute
        Then User click on 'Search' option from the sidebar menu
        Then User extracts the search zoom value


    @15205 @regression @search_and_export 
    Scenario: 14295 - Verify that map will zoom to fit a search result - Search with multiple states
        When User clicks on search icon in side bar menu
        Then User extracts the starting zoom value
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | FLORIDA |
        Then User extracts the search zoom value
        Then User clicks on search icon in side bar menu
        Then User deletes the previous searched attribute
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State      |
            | WASHINGTON |
        Then User extracts the search zoom value
        Then User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User extracts the near search zoom value
        Then User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | FLORIDA |
        Then User extracts the far search zoom value
        Then User clicks on search icon in side bar menu
        Then User deletes the previous searched attribute
        Then User click on 'Search' option from the sidebar menu
        Then User extracts the near search zoom value
        Then User clicks on search icon in side bar menu
        Then User deletes the previous searched attribute
        Then User click on 'Search' option from the sidebar menu
        Then User extracts the search zoom value



    @32141 @regression @search_and_export 
    Scenario: 22066 - UWI Search Export - Verify Export option is enabled if Results Grid Count <=60k
        When  User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                                                                                                                                                                                                                                                                                                                                       |
            | 14001100010000,14001100020000,14001100030000,14007200010000,14009000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000 |
        Then User captures the search UWI from the Grid
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu


    @32142 @regression @search_and_export 
    Scenario: 22729 - Loaded UWI Search Export - Verify Export option is enabled if Uploaded UWI Results Grid Count <=1.5M
        When User clicks on search icon in side bar menu
        Then User select the UWI tab
        Then User upload a valid UWI csv file
        Then User close the sidePanel dashboard
        Then User wait for the UWI file upload to complete
        Then User clicks on search icon in side bar menu
        Then User verifies the file upload
        Then User clicks on 'Search' button in side panel
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu
        Then User clicks on 'Reset' button in side panel
        Then User select the UWI tab
        Then User upload a valid UWI text file
        Then User close the sidePanel dashboard
        Then User wait for the UWI file upload to complete
        Then User clicks on search icon in side bar menu
        Then User verifies the file upload
        Then User clicks on 'Search' button in side panel
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu


    @32132 @regression @search_and_export 
    Scenario: 24850 - Charts - Verify exported Plot Daily Values charts - Display by All Wells
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by All wells and enable Plot Daily Values
        Then User selects value for Y Axis data field
            | YDataField                      |
            | Oil (Monthly)                   |
            | Gas (Monthly)                   |
            | BOE (Monthly)                   |
            | Water (Monthly)                 |
            | Total Injected Liquid (Monthly) |
            | Total Injected Gas (Monthly)    |
            | Total Disposed Volume           |
            | Used                            |
            | Inferred                        |
            | Other                           |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button
        Then mouse hover on chart line and validate Unit and Number Format
        Then User click on the Export button and click the Export Image button
        Then User clicks on Analyze Type Curve
        Then User Navigate to Type curve Settings and Aggregate wells by All wells and enable Plot Daily Values
        Then User selects value for Y Axis data field
            | YDataField                      |
            | Oil (Monthly)                   |
            | Gas (Monthly)                   |
            | BOE (Monthly)                   |
            | Water (Monthly)                 |
            | Total Injected Liquid (Monthly) |
            | Total Injected Gas (Monthly)    |
            | Total Disposed Volume           |
            | Used                            |
            | Inferred                        |
            | Other                           |
            | Vent                            |
            | Flare                           |
            | Vent or Flare                   |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button for Type Curve Chat
        Then mouse hover on chart line and validate Unit and Number Format for 'Type Curve'
        Then User click on the Export button and click the Export Image button for Type Curve Chat
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |


    @32132 @regression @search_and_export 
    Scenario: 24850 - Charts - Verify exported Plot Daily Values charts - Display by All Wells
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by All wells and enable Plot Daily Values
        Then User selects value for Y Axis data field
            | YDataField                      |
            | Oil (Monthly)                   |
            | Gas (Monthly)                   |
            | BOE (Monthly)                   |
            | Water (Monthly)                 |
            | Total Injected Liquid (Monthly) |
            | Total Injected Gas (Monthly)    |
            | Total Disposed Volume           |
            | Used                            |
            | Inferred                        |
            | Other                           |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button
        Then mouse hover on chart line and validate Unit and Number Format
        Then User click on the Export button and click the Export Image button
        Then User clicks on Analyze Type Curve
        Then User Navigate to Type curve Settings and Aggregate wells by All wells and enable Plot Daily Values
        Then User selects value for Y Axis data field
            | YDataField                      |
            | Oil (Monthly)                   |
            | Gas (Monthly)                   |
            | BOE (Monthly)                   |
            | Water (Monthly)                 |
            | Total Injected Liquid (Monthly) |
            | Total Injected Gas (Monthly)    |
            | Total Disposed Volume           |
            | Used                            |
            | Inferred                        |
            | Other                           |
            | Vent                            |
            | Flare                           |
            | Vent or Flare                   |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button for Type Curve Chat
        Then mouse hover on chart line and validate Unit and Number Format for 'Type Curve'
        Then User click on the Export button and click the Export Image button for Type Curve Chat
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |



    @32133 @regression @search_and_export 
    Scenario: 24850 - Charts - Verify exported Plot Daily Values charts - Display by Individual Wells
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by Individual wells and enable Plot Daily Values
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Oil (Monthly) |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button
        Then mouse hover on chart line and validate Unit and Number Format
        Then User click on the Export button and click the Export Image button
        Then User clicks on Analyze Type Curve
        Then User Navigate to Type curve Settings and Aggregate wells by Individual wells and enable Plot Daily Values
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Gas (Monthly) |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button for Type Curve Chat
        Then mouse hover on chart line and validate Unit and Number Format for 'Type Curve'
        Then User click on the Export button and click the Export Image button for Type Curve Chat
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |

    @32133 @regression @search_and_export 
    Scenario: 24850 - Charts - Verify exported Plot Daily Values charts - Display by Individual Wells
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by Individual wells and enable Plot Daily Values
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Oil (Monthly) |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button
        Then mouse hover on chart line and validate Unit and Number Format
        Then User click on the Export button and click the Export Image button
        Then User clicks on Analyze Type Curve
        Then User Navigate to Type curve Settings and Aggregate wells by Individual wells and enable Plot Daily Values
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Gas (Monthly) |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button for Type Curve Chat
        Then mouse hover on chart line and validate Unit and Number Format for 'Type Curve'
        Then User click on the Export button and click the Export Image button for Type Curve Chat
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |



    @32134 @regression @search_and_export 
    Scenario: 24850 - Charts - Verify exported Plot Daily Values charts - Display by Group Wells By Attribute
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate Group wells by Attribute and enable Plot Daily Values
            | GroupBy          |
            | Current Operator |
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Oil (Monthly) |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button
        Then mouse hover on chart line and validate Unit and Number Format
        Then User click on the Export button and click the Export Image button
        Then User clicks on Analyze Type Curve
        Then User Navigate to Settings and Aggregate Group wells by Attribute and enable Plot Daily Values for Type Curve
            | GroupBy           |
            | Original Operator |
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Gas (Monthly) |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button for Type Curve Chat
        Then mouse hover on chart line and validate Unit and Number Format for 'Type Curve'
        Then User click on the Export button and click the Export Image button for Type Curve Chat
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |

    @32134 @regression @search_and_export
    Scenario: 24850 - Charts - Verify exported Plot Daily Values charts - Display by Group Wells By Attribute
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate Group wells by Attribute and enable Plot Daily Values
            | GroupBy          |
            | Current Operator |
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Oil (Monthly) |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button
        Then mouse hover on chart line and validate Unit and Number Format
        Then User click on the Export button and click the Export Image button
        Then User clicks on Analyze Type Curve
        Then User Navigate to Settings and Aggregate Group wells by Attribute and enable Plot Daily Values for Type Curve
            | GroupBy           |
            | Original Operator |
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Gas (Monthly) |
        Then User clicks on save icon and verify chart
        Then User click on the Export button and click the Export to Excel button for Type Curve Chat
        Then mouse hover on chart line and validate Unit and Number Format for 'Type Curve'
        Then User click on the Export button and click the Export Image button for Type Curve Chat
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |


    @25599 @regression @search_and_export 
    Scenario: 22066 - UWI Search Export - Verify that only unique and existing UWIs are exported to datalake
        When User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User perform below UWI search
            | UWI                           |
            | 49045050010000,49045050010000 |
        Then User click on the 'Reset' button
        Then User perform below UWI search
            | UWI            |
            | 49045050010001 |
        Then User click on the 'Reset' button
        Then User perform below UWI search and click on 'Search' option
            | UWI            |
            | 49045050010000 |
        Then User clicks on search icon in side bar menu and click on export button


    @22342 @regression @search_and_export 
    Scenario: 22066 - UWI Search Export - Verify Export option is enabled if Results Grid Count <=60k
        When  User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                                                                                                                                                                                                                                                                                                                                       |
            | 14001100010000,14001100020000,14001100030000,14007200010000,14009000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000 |
        Then User captures the search UWI from the Grid
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu

    @22345 @regression @search_and_export
    Scenario: 22066 - UWI Search Export - Verify Export option is enabled if Saved Search Results Grid Count <=60k
        When  User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                                                                                                                                                                                                                                                                                                                                       |
            | 14001100010000,14001100020000,14001100030000,14007200010000,14009000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000 |
        Then User captures the search UWI from the Grid
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu

    @24419 @regression @search_and_export
    Scenario: 22729 - Loaded UWI Search Export - Verify Export option is enabled if Uploaded UWI Results Grid Count <=1.5M
        When User clicks on search icon in side bar menu
        Then User select the UWI tab
        Then User upload a valid UWI csv file
        Then User close the sidePanel dashboard
        Then User wait for the UWI file upload to complete
        Then User clicks on search icon in side bar menu
        Then User verifies the file upload
        Then User clicks on 'Search' button in side panel
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu
        Then User clicks on 'Reset' button in side panel
        Then User select the UWI tab
        Then User upload a valid UWI text file
        Then User close the sidePanel dashboard
        Then User wait for the UWI file upload to complete
        Then User clicks on search icon in side bar menu
        Then User verifies the file upload
        Then User clicks on 'Search' button in side panel
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu

    @25599 @regression @search_and_export 
    Scenario: 22066 - UWI Search Export - Verify that only unique and existing UWIs are exported to datalake
        When User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User perform below UWI search
            | UWI                           |
            | 49045050010000,49045050010000 |
        Then User click on the 'Reset' button
        Then User perform below UWI search
            | UWI            |
            | 49045050010001 |
        Then User click on the 'Reset' button
        Then User perform below UWI search and click on 'Search' option
            | UWI            |
            | 49045050010000 |
        Then User clicks on search icon in side bar menu and click on export button


        @39363 @regression @search_and_export
    Scenario: Verify the lease name and ID attribute value in query builder and in grid column
        When User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then User check if below attribute available in the attribute list
            | Attribute         |
            | Lease Name and ID |
        Then User select below non default attribute
            | NonDefaultAttribute |
            | Lease Name and ID   |
        Then User type 'a' in the text field and checks if the options are displaying
        Then User type 'ab' in the text field and checks if the options are displaying
        Then User selects '1' options from the dropdown
        Then User type 'ab' in the text field and checks if the options are displaying
        Then User selects '3' options from the dropdown
        Then User verifies the lease name and Id
        Then User click on 'Search' option from the sidebar menu
        Then User clicks the three-dot menu in the result grid header
        Then User selects 'Show or Hide Columns' option
        Then User verifies if below fields available in the 'Show or Hide Columns' option
            | ShowOrHideColumnsVerifyList |
            | Lease Name and ID           |
        Then User add below NonDefault fields to Default list
            | ShowOrHideNonDefaultFields |
            | Lease Name and ID          |
        Then User clicks the three-dot menu in the result grid header
        Then User clicks on 'Export as Excel' option
        Then User validate the downloaded excel file
            | validateFile                                                                                                               |
            | Lease Name and ID |


    @22345 @regression @search_and_export 
    Scenario: 22066 - UWI Search Export - Verify Export option is enabled if Saved Search Results Grid Count <=60k
        When  User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                                                                                                                                                                                                                                                                                                                                       |
            | 14001100010000,14001100020000,14001100030000,14007200010000,14009000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000,14015000000000 |
        Then User captures the search UWI from the Grid
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu

    @24633 @regression @search_and_export 
    Scenario: 22729 - Loaded UWI Search Export - Verify Export option is enabled if Saved Search Uploaded UWI Results Grid Count <=1.5M
        When User clicks on search icon in side bar menu
        Then User select the UWI tab
        Then User upload a valid UWI csv file
        Then User close the sidePanel dashboard
        Then User wait for the UWI file upload to complete
        Then User clicks on search icon in side bar menu
        Then User verifies the file upload
        Then User clicks on 'Search' button in side panel
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu
        Then User clicks on 'Reset' button in side panel
        Then User select the UWI tab
        Then User upload a valid UWI text file
        Then User close the sidePanel dashboard
        Then User wait for the UWI file upload to complete
        Then User clicks on search icon in side bar menu
        Then User verifies the file upload
        Then User clicks on 'Search' button in side panel
        Then User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'enabled' in menu

    @32143 @regression @search_and_export 
    Scenario: 22066 - UWI Search Export - Verify that only unique and existing UWIs are exported to datalake
        When User clicks on search icon in side bar menu
        Then User verifies 'Export' option is 'disabled' in menu
        Then User perform below UWI search
            | UWI                           |
            | 49045050010000,49045050010000 |
        Then User click on the 'Reset' button
        Then User perform below UWI search
            | UWI            |
            | 49045050010001 |
        Then User click on the 'Reset' button
        Then User perform below UWI search and click on 'Search' option
            | UWI            |
            | 49045050010000 |
        Then User clicks on search icon in side bar menu and click on export button