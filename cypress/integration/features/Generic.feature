Feature: Verify Release Notes and What's Next

    Background: Login to Saga Analytics application through okta
        Given User opens the Saga Analytics application url and login

    @34647 @regression @generic
    Scenario: Verify Release Notes and What's Next
        When User clicks on question mark icon in top right corner of app
        Then User selects Release Notes for the current release
        Then User clicks on Whats Next

    @37083 @regression @generic
    Scenario: Verify placing of Help Page
        When User clicks on question mark icon in top right corner of app
        Then User selects Help and verify Link


    @37086 @regression @generic
    Scenario: Verify the Link to Data Dictionary
        When User clicks on question mark icon in top right corner of app
        Then User selects Data Dictionary and verify Link


    @32671 @regression @generic
    Scenario: Verify that font size in search grid header is adjusted when zooming in on browser.
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | County      |
            | APACHE - AZ |
        Then User close the sidePanel dashboard
        Then User verifies if grid content is visible
        Then User verifies the 'Search result' and 'filtered' font size at 150%
        Then User sets the browser zoom value to 150%
        Then User verifies the 'Search result' and 'filtered' font size at 150%
        Then User clicks on search icon in side bar menu
        Then User verifies if grid content is visible
        And User verifies the search panel is displayed
        Then User sets the browser zoom value to 100%
        Then User verifies the 'Search result' and 'filtered' font size at 100%



    @15197 @regression @generic
    Scenario: 14298 - Verify that Polygon search is recursive - Multiple polygons
        When User clicks on search icon in side bar menu
        Then User click on the 'State/Province' field and extracts the dropdown option labels
        Then User click on the 'County' field and extracts the dropdown option labels
        Then User click on the 'Basin' field and extracts the dropdown option labels
        Then User click on the 'TGS Operator' field and extracts the dropdown option labels
        Then User click on the 'Field Name' field and extracts the dropdown option labels
        Then User click on the 'Producing Formation' field and extracts the dropdown option labels
        Then User click on load shape button and select the 'SinglePolygon' file
        Then User verifies if the polygon search id is generated under shapes section
        Then User click on the 'State/Province' field and verify only selected values in the dropdown is available
        Then User click on the 'County' field and verify only selected values in the dropdown is available
        Then User click on the 'Basin' field and verify only selected values in the dropdown is available
        Then User click on the 'Field Name' field and verify only selected values in the dropdown is available
        Then User click on the 'TGS Operator' field and verify only selected values in the dropdown is available
        Then User click on the 'Producing Formation' field and verify only selected values in the dropdown is available
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon
        Then User verifies if the polygon search id is generated under shapes section
        Then User click on the 'State/Province' field and verify if new set of values in the dropdown is available
        Then User click on the 'County' field and verify if new set of values in the dropdown is available
        Then User click on the 'Basin' field and verify if new set of values in the dropdown is available
        Then User click on the 'Field Name' field and verify if new set of values in the dropdown is available
        Then User click on the 'TGS Operator' field and verify if new set of values in the dropdown is available
        Then User click on the 'Producing Formation' field and verify if new set of values in the dropdown is available
        Then User click on the 'Search' button in the side panel
        Then User click on the search icon and deletes the polygon
        Then User click on the 'State/Province' field and verify only selected values in the dropdown is available
        Then User click on the 'County' field and verify only selected values in the dropdown is available
        Then User click on the 'Basin' field and verify only selected values in the dropdown is available
        Then User click on the 'Field Name' field and verify only selected values in the dropdown is available
        Then User click on the 'TGS Operator' field and verify only selected values in the dropdown is available
        Then User click on the 'Producing Formation' field and verify only selected values in the dropdown is available
        Then User click on the 'Search' button in the side panel
        Then User zoom in to zoom lvl 12


    @16693 @regression @generic
    Scenario:11347 - Import Shapefile - Verify behavior
        When User clicks on search icon in side bar menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon
        Then User click on 'Search' option from the sidebar menu
        Then User clicks on search icon in side bar menu
        Then User click on load shape button and select the 'SinglePolygon' file
        Then User click on load shape button and select the 'Multi_Polygon' file
        Then User click on load shape button and select the 'InvalidPolygon' file
        Then User click on load shape button and select the 'SinglePolygon_OtherPolygon' file
        Then User click on 'Search' option from the sidebar menu
        Then User verifies the count of the polygons under the shape section to be equal to '3'


    @16796 @regression @generic
    Scenario: 15425 - UWI Search - Verify that well spots are filtered on the map base on Results Grid
        When User clicks on search icon in side bar menu
        Then User perform below UWI search and click on 'Search' option
            | UWI            |
            | 09001100010000 |
        Then Select Zoomlevel
            | ZoomLevel |
            | 12        |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then Verify of the Bottom Hole Layer selected is enabled
        Then Click on the Bottom Hole Layer
        Then User clicks on search icon in side bar menu
        Then User remove the last UWI from text field
        Then User perform below UWI search and click on 'Search' option
            | UWI            |
            | 09001100020000 |
        Then User from the result grid verify if below UWI is visible
            | UWI            |
            | 09001100020000 |
        Then User clicks on search icon in side bar menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                                           |
            | ,09005200010000,09005200030000,09005200040000 |
        Then User from the result grid verify if below UWI is visible
            | UWI            |
            | 09005200010000 |
            | 09005200030000 |
            | 09005200040000 |
        Then User clicks on search icon in side bar menu
        Then User remove the last UWI from text field
        Then User click on the 'Search' button in the side panel
        Then User from the result grid verify if below UWI is visible
            | UWI            |
            | 09005200010000 |
            | 09005200030000 |
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Well Type      |
        Then User click on 'Oil & Gas (OG)' checkbox and click on 'Apply Filter' button and verifies if the filter is applied successfully
        Then User mouse over to the below label and click on the 3 dots
            | mouseOverLabel |
            | Well Type      |
        Then User click on 'Clear' button and verifies if the filter is removed successfully
        Then User clicks on search icon in side bar menu
        # valid UWIs
        Then User perform below UWI search and click on 'Search' option
            | UWI                                           |
            | ,09021200360000,09021200510000,09021200820000 |
        Then User clicks on search icon in side bar menu
        #Invalid UWIs
        Then User perform below UWI search and click on 'Search' option
            | UWI                                           |
            | ,09021200388000,09021200516000,09021200516000 |
        Then User from the result grid verify if below UWI is visible
            | UWI            |
            | 09021200388000 |
            | 09021200516000 |
            | 09021200516000 |


    @17705 @regression @generic
    Scenario: 17696 - UWI Search - Verify zoom to fit
        When User clicks on search icon in side bar menu
        Then User select the UWI tab
        Then User extracts the starting zoom value
        Then User perform below UWI search and click on 'Search' option
            | UWI            |
            | 09303100130000 |
        Then User extracts the search zoom value
        Then User clicks on search icon in side bar menu
        Then User remove the last UWI from text field
        Then User perform below UWI search and click on 'Search' option
            | UWI            |
            | 46005000030000 |
        Then User extracts the search zoom value
        Then User clicks on search icon in side bar menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                            |
            | ,33001000030000,33001000050000 |
        Then User extracts the near search zoom value
        Then User clicks on search icon in side bar menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                            |
            | ,09003300040000,09005100070000 |
        Then User extracts the far search zoom value
        Then User clicks on search icon in side bar menu
        Then User remove the last UWI from text field
        Then User remove the last UWI from text field
        Then User click on 'Search' option from the sidebar menu
        Then User extracts the near search zoom value
        Then User clicks on search icon in side bar menu
        Then User remove the last UWI from text field
        Then User remove the last UWI from text field
        Then User click on 'Search' option from the sidebar menu
        Then User extracts the search zoom value


    @32168 @regression @generic
    Scenario: 29387 - Well Card - Validate PRODUCTION PLOT tab
        When User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then User check if below attribute available in the attribute list
            | Attribute      |
            | Has Production |
        Then User select below non default attribute
            | NonDefaultAttribute |
            | Has Production      |
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | HasProduction | State   |
            | True          | WYOMING |
        Then User selects the well spot and click on more info 
       Then User selects the charts option
       Then User validate the production plot chart
       Then User click on Analyse button
       Then User Navigate to Settings and enable Plot Daily Values for Production Plot and click on Save
        Then Check the Chart Y-Axis label
        Then User closes the surface well card
         Then select Zoom upto 12 or more
        Then User clicks on MapSettings
        Then Enable SurfaceHoleLocation and BottonHoleLocation Option
         Then User selects the well spot and click on more info 
       Then User selects the charts option
       Then User validate the production plot chart


       @22062 @regression @generic
    Scenario: Verify the UWI search messaging with more than 60k
        When notepad content is copied to clipboard for morethan 60k
        When User clicks on search icon in side bar menu
        Then User selects the UWI tab
        Then User paste the UWIs morethan 60k

    @25388 @regression @generic
    Scenario: Verify that the UWI search will puts the count over to 60K limit
        When Notepad content is copied to clipboard for 40k
        When User clicks on search icon in side bar menu
        Then User selects the UWI tab
        Then User paste UWI set of 40k
        When notepad content is copied to clipboard for morethan 60k
        Then User paste the UWIs morethan 60k

    @33428 @regression @generic
    Scenario:Verify the export auto-saved functionality for UWI saved search
        When Notepad content is copied to clipboard for 20k
        When User clicks on search icon in side bar menu
        Then User selects the UWI tab
        Then User paste UWI set of 20k
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
       # Then User click on the saved search icon in side bar menu and click the above saved search
        When notepad content is copied to clipboard for morethan 60k
       # When User clicks on search icon in side bar menu
        Then User paste the UWIs morethan 60k
       # When User clicks on search icon in side bar menu
        Then User click on reset option from the sidebar menu
        Then User verifies the footer panel buttons
        Then User upload a valid UWI file
        Then User wait for the UWI file upload to complete
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        
    @32671 @regression @generic 
    Scenario: Verify that font size in search grid header is adjusted when zooming in on browser.
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | County      |
            | APACHE - AZ |
        Then User close the sidePanel dashboard
        Then User verifies if grid content is visible
        Then User verifies the 'Search result' and 'filtered' font size at 150%
        Then User sets the browser zoom value to 150%
        Then User verifies the 'Search result' and 'filtered' font size at 150%
        Then User clicks on search icon in side bar menu
        Then User verifies if grid content is visible
        And User verifies the search panel is displayed
        Then User sets the browser zoom value to 100%
        Then User verifies the 'Search result' and 'filtered' font size at 100%