Feature: Validation of Attibute/UWI Saved Search

    Background: Login to Saga Analytics application through okta
        Given User opens the Saga Analytics application url and login


    @33439 @regression @saved_search @shama
    Scenario: Verify that the system should update saved search with the current search criteria when adding non-default attribute.
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
         When User clicks on search icon in side bar menu   
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on 'MODIFY/ADD MORE' button
        Then User select below non default attribute and populate below value and click on 'Search' button
            | NonDefaultAttribute | ItsValue  |
            | Well Status         | Producing |
        Then User click on the 3 dots at the right most edge of the search panel and select Export
        Then User click on the saved Search icon and click on the recent auto saved search

    @33392 @regression @saved_search @shama
    Scenario: Perform the Attribute Search and save the search
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User clicks on search icon in side bar menu
        Then User modifies below attribute search criteria and clicks on 'Search' button in side panel
            | TGSOperator        |
            | BASA RESOURCES INC |
        Then User click on the 3 dots at the right most edge of the search panel and select Export
        Then User click on the saved Search icon and click on the recent auto saved search

    @24071 @regression @saved_search @shama
    Scenario: 11936 - Saved Search - Verify UWI search is saved and retrieved
        When User clicks on search icon in side bar menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                                          |
            | 49045050010000,49045050020000,49045050030000 |
        Then User captures the search UWI from the Grid
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on the saved search icon in side bar menu and click the above UWI saved search
        Then User extracts the grid UWIs after save
        Then User verifies the results

    @35449 @regression @saved_search @shama
    Scenario: Verify the New attribute sort order for search
        When User clicks on search icon in side bar menu
        Then User verifies if all the varchar attributes having options in sorted order A-Z
        Then User click on Sorted by Alpha A-Z for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from Largest to smallest
        Then User click on Sorted by Well Count Largest - Smallest for all varchar attributes
        Then User verifies if all the varchar attributes having options in sorted order Z-A
        Then User click on Sorted by Alpha Z-A for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from smallest  to Largest
        Then User click on Sorted by Well Count Smallest - Largest for all varchar attributes
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | County      |
            | APACHE - AZ |
        Then User verifies if grid content is visible

    @35449 @regression @saved_search @shama
    Scenario: Verify the New attribute sort order for search
        When User clicks on search icon in side bar menu
        Then User verifies if all the varchar attributes having options in sorted order A-Z
        Then User click on Sorted by Alpha A-Z for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from Largest to smallest
        Then User click on Sorted by Well Count Largest - Smallest for all varchar attributes
        Then User verifies if all the varchar attributes having options in sorted order Z-A
        Then User click on Sorted by Alpha Z-A for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from smallest  to Largest
        Then User click on Sorted by Well Count Smallest - Largest for all varchar attributes
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | County      |
            | APACHE - AZ |
        Then User verifies if grid content is visible

    @35451 @regression @saved_search @shama
    Scenario: Verify the New attribute sort order for search (Saved-Search)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   | County      |
            | ARIZONA | APACHE - AZ |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User click on the search icon in side bar menu and select attribute option
        Then User verifies if all the varchar attributes having options in sorted order A-Z
        Then User click on Sorted by Alpha A-Z for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from Largest to smallest
        Then User click on Sorted by Well Count Largest - Smallest for all varchar attributes
        Then User verifies if all the varchar attributes having options in sorted order Z-A
        Then User click on Sorted by Alpha Z-A for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from smallest  to Largest
        Then User click on Sorted by Well Count Smallest - Largest for all varchar attributes
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | County        |
            | MARICOPA - AZ |
        Then User verifies if grid content is visible

    @35451 @regression @saved_search @shama
    Scenario: Verify the New attribute sort order for search (Saved-Search)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   | County      |
            | ARIZONA | APACHE - AZ |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User click on the search icon in side bar menu and select attribute option
        Then User verifies if all the varchar attributes having options in sorted order A-Z
        Then User click on Sorted by Alpha A-Z for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from Largest to smallest
        Then User click on Sorted by Well Count Largest - Smallest for all varchar attributes
        Then User verifies if all the varchar attributes having options in sorted order Z-A
        Then User click on Sorted by Alpha Z-A for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from smallest  to Largest
        Then User click on Sorted by Well Count Smallest - Largest for all varchar attributes
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | County        |
            | MARICOPA - AZ |
        Then User verifies if grid content is visible


    @34182 @regression @saved_search @shama
    Scenario: Verify the "Sorted by Alpha (Z-A)" functionality for all varchar attributes in the search panel
        When User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then User select below non default attribute
            | NonDefaultAttribute |
            | TGS Landing Zone    |
            | Current Operator    |
        Then User verifies if all the varchar attributes having options in sorted order A-Z
        Then User click on Sorted by Alpha A-Z for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from Largest to smallest
        Then User click on Sorted by Well Count Largest - Smallest for all varchar attributes
        Then User verifies if all the varchar attributes having options in sorted order Z-A
        Then User click on Sorted by Alpha Z-A for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from smallest  to Largest
        Then User click on Sorted by Well Count Smallest - Largest for all varchar attributes

    @34182 @regression @saved_search @shama
    Scenario: Verify the "Sorted by Alpha (Z-A)" functionality for all varchar attributes in the search panel
        When User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then User select below non default attribute
            | NonDefaultAttribute |
            | TGS Landing Zone    |
            | Current Operator    |
        Then User verifies if all the varchar attributes having options in sorted order A-Z
        Then User click on Sorted by Alpha A-Z for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from Largest to smallest
        Then User click on Sorted by Well Count Largest - Smallest for all varchar attributes
        Then User verifies if all the varchar attributes having options in sorted order Z-A
        Then User click on Sorted by Alpha Z-A for all varchar attributes
        Then User verifies if all the varchar attributes having well count in sorted order from smallest  to Largest
        Then User click on Sorted by Well Count Smallest - Largest for all varchar attributes


    @19546 @regression @saved_search @shama
    Scenario: 12245 - Saved Search - Verify multiple deletion of saved search
        When User clicks on Saved search icon in side bar menu
        Then User selects below number of saved searches and confirm delete
            | NumberOfSavedSearchesToDelete |
            | 2                             |
        Then User confirm to delete all the selected saved search
        Then User verifies the Saved Search Menu

    @12245 @regression @saved_search @shama
    Scenario: 12245 - Saved Search - Verify multiple deletion of saved search
        When User clicks on Saved search icon in side bar menu
        Then User selects below number of saved searches and confirm delete
            | NumberOfSavedSearchesToDelete |
            | 4                             |
        Then User confirm to delete all the selected saved search
        Then User verifies the Saved Search Menu


    @19545  @regression @saved_search @shama
    Scenario: 12245 - Saved Search - Verify Delete saved search confirmation
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then user 'Reset' the search and click on the saved search option
        Then User verifies the 'CANCEL' and 'CONFIRM' options
        Then User verifies the previous saved search is deleted successfully

    @24069 @regression @saved_search @shama
    Scenario:11767 - Saved Search - Verify Update Save and Save As
        When User clicks on search icon in side bar menu
        Then User click on load shape button and select the 'SinglePolygon' file
        Then User click on 'Search' option from the sidebar menu
        # Then User click on load shape button and select the file and click on the 'Search' button in the side panel
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MyInitialSavedSearch |
            | My Saved Search      |
        Then User click on the saved search icon in side bar menu and click the above original saved search
        Then User clicks on search icon in side bar menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon
        Then User click on 'Search' option from the sidebar menu
        Then User clicks on search icon in side bar menu
        Then User verifies if the polygon search id is generated under shapes section
        Then User clicks on search icon in side bar menu
        Then User click the dropdown next to save button
        Then User click on the save option
        Then User click on the saved search icon in side bar menu and click the above original saved search
        Then User click on the search icon and deletes the polygon and click on the 'Search' button
        #Then User clicks on search icon in side bar menu
        Then User click the dropdown next to save button
        Then User click on Save As option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User click on the saved search icon in side bar menu and click the above original saved search


    @24069 @regression @saved_search @shama
    Scenario:11767 - Saved Search - Verify Update Save and Save As
        When User clicks on search icon in side bar menu
        Then User click on load shape button and select the 'SinglePolygon' file
        Then User click on 'Search' option from the sidebar menu
        # Then User click on load shape button and select the file and click on the 'Search' button in the side panel
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MyInitialSavedSearch |
            | My Saved Search      |
        Then User click on the saved search icon in side bar menu and click the above original saved search
        Then User clicks on search icon in side bar menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon
        Then User click on 'Search' option from the sidebar menu
        Then User clicks on search icon in side bar menu
        Then User verifies if the polygon search id is generated under shapes section
        Then User clicks on search icon in side bar menu
        Then User click the dropdown next to save button
        Then User click on the save option
        Then User click on the saved search icon in side bar menu and click the above original saved search
        Then User click on the search icon and deletes the polygon and click on the 'Search' button
        #Then User clicks on search icon in side bar menu
        Then User click the dropdown next to save button
        Then User click on Save As option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User click on the saved search icon in side bar menu and click the above original saved search


    @14875 @regression @saved_search @shama
    Scenario: Saved Search - Verify Attributes search with attributes and polygons is saved and retrieved
        When User clicks on search icon in side bar menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon and click on the 'Search' button in the side panel
        Then User click on Save option and provide the below name and save the search
            | MySavedSearch      |
            | PolygonSavedSearch |
        Then User click the saved search icon in side bar menu and click the above afterSavedSearch

    @24070 @regression @saved_search @shama
    Scenario: Saved Search - Verify Attributes search with attributes and polygons is saved and retrieved
        When User clicks on search icon in side bar menu
        Then User click on the Load Shape button at the bottom of the search panel
        Then User click on the 'Search' button in the side panel
        Then User click on Save option and provide the below name and save the search
            | MySavedSearch      |
            | PolygonSavedSearch |
        Then User click the saved search icon in side bar menu and click the above afterSavedSearch

    @33356 @regression @saved_search @shama
    Scenario: Verify that modified Attribute search are auto-saved when export button is clicked using existing Saved Search
        When User clicks on Saved search icon in side bar menu and clicks on existing Saved search
            | MySavedSearch         |
            | AttributeArizonaState |
        Then User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | TGSOperator      |
            | AAA FISHING TOOL |
        #Then User navigates to attribute search criteria and update TGS Operator and clicks on 'Search' button in side panel
        #  | TGSOperator      |
        # | AAA FISHING TOOL |
        Then Click 3dots at the right-most edge of the Search Panel then select Export
        Then Click Saved Search icon located below the Search icon and view recent auto-saved search
            | MySavedSearch          |
            | AttributeArizonaState_ |

    @36689 @regression @saved_search @shama
    Scenario: Verify the deselection of all y-axis fields in Scatter Plot settings using Saved Search
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then click on 'Save' option and provide the below name and save the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on the saved search icon and click on the recent saved search
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks three dots from default view and select settings
        Then User clears default title and modify title
            | Title             |
            | Scatter Plot Test |
        Then User unselects checkboxes for Y Axis data field and verify save button is disabled
        Then User clicks on CANCEL button
        Then User click on the saved search icon and click on the recent saved search

    @23586 @regression @saved_search @shama1
    Scenario: 23326 - Verify Stacked Area - On load of Saga
        When User verifies if dashboard chart is visible
        Then User verifies the chart style
        Then User clicks on search icon in side bar menu
        Then User clicks on Saved search icon in side bar menu
        Then User clicks on the default dashboard icon in side bar menu

    @23027 @regression @saved_search @shama1
    Scenario:21538 - Verify Stacked Bar - On load of Saga
        When User verifies if dashboard chart is visible
        Then User verifies the chart style
        Then User clicks on search icon in side bar menu
        Then User clicks on Saved search icon in side bar menu
        Then User clicks on the default dashboard icon in side bar menu


    @23208 @regression @saved_search @shama1
    Scenario: 22511 - Verify Sideways-Bar Display on Search / Save / Retrieve Saved Search
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User captures sideways-bar in default dashboard panel
        Then User hover on the red portion of the bar
        Then User User hover on the green portion of the bar
        Then User verifies the chart before filter
        Then User mouse over to the below label and click on the 3 dots,click on 'Oil (OIL)' checkbox and click on 'Apply Filter' button and verifies if filter is applied
            | mouseOverLabel |
            | Well Type      |
        Then User verifies the chart after filter
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User captures sideways-bar in default dashboard panel

    @30777 @regression @saved_search @shama1
    Scenario: 30695 - Verify UWI File Upload Components does not stop when Dashboard is closed
        When User clicks on search icon in side bar menu
        Then User select the UWI tab
        Then User upload a valid UWI file
        Then User close the sidePanel dashboard
        Then User wait for the UWI file upload to complete
        Then User clicks on search icon in side bar menu
        Then User verifies the file upload
        Then User verfies sidepanel footer buttons

    @39491 @regression @saved_search @shama1
    Scenario: Verify the Search for wells with RAS data
        When User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then User check if below attribute available in the attribute list
            | Attribute  |
            | Has Raster |
        Then User select below non default attribute
            | NonDefaultAttribute |
            | Has Raster          |
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | AttributeName |
            | False         |
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count


    @39486 @regression @saved_search @shama1
    Scenario: Verify the Search for wells with LAS data
        When User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then User check if below attribute available in the attribute list
            | Attribute |
            | Has LAS   |
        Then User select below non default attribute
            | NonDefaultAttribute |
            | Has LAS             |
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | AttributeName |
            | True          |
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count


    @36666 @regression @saved_search @shama1
    Scenario: Verify the added non-default attribute "Has DST" in the query builder (Post-search)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then User check if below attribute available in the attribute list
            | Attribute |
            | Has DST   |
        Then User select below non default attribute
            | NonDefaultAttribute |
            | Has DST             |
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | AttributeName |
            | True          |
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count
        Then User click on 'MODIFY/ADD MORE' button
        Then User remove the below attribute from the default list and click on 'Search' button in side panel
            | Attribute |
            | Has DST   |
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count

    @12245 @regression @saved_search @shama1
    Scenario: 12245 - Saved Search - Verify multiple deletion of saved search
        When User clicks on Saved search icon in side bar menu
        Then User selects below number of saved searches and confirm delete
            | NumberOfSavedSearchesToDelete |
            | 4                             |
        Then User confirm to delete all the selected saved search
        Then User verifies the Saved Search Menu


    @23812 @regression @saved_search @shama1
    Scenario: Verify the "TGS Stratigraphic Models" layers under Map Settings > Cultural Layers for saved search(UWI Search)
        When User clicks on search icon in side bar menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                                          |
            | 49045050010000,49045050020000,49045050030000 |
        Then User captures the search UWI from the Grid
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Stratigraphic Model Outlines" option in the culture layers and verify applied to maps
            | CultureLayerOption               |
            | TGS Stratigraphic Model Outlines |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Structure Map"
        Then Check "01 Rustler" Layer and verify applied to maps
            | IsopachMapOptions |
            | 01 Rustler        |
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then User clicks on search icon in side bar menu
        Then User click the dropdown next to save button
        Then User click on the save option
        Then User clicks on 'Reset' button in side panel
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then Check "04 San Andreas" Layer and verify applied for retrieved saved search
            | IsopachMapOptions |
            | 04 San Andreas    |


    @33444 @regression @saved_search @shama1
    Scenario: Verify that the system should update saved search with the current search criteria when adding non-default attribute.
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        When User clicks on search icon in side bar menu    
        Then User click on 'MODIFY/ADD MORE' button
        Then User select below non default attribute and populate below value and click on 'Search' button
            | NonDefaultAttribute | ItsValue  |
            | Well Status         | Producing |
        Then User click on the 3 dots at the right most edge of the search panel and select Export
        Then User click on the saved Search icon and click on the recent auto saved search

    @36666 @regression @saved_search @shama1
    Scenario: Verify the added non-default attribute "Has DST" in the query builder (Post-search)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then User check if below attribute available in the attribute list
            | Attribute |
            | Has DST   |
        Then User select below non default attribute
            | NonDefaultAttribute |
            | Has DST             |
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | AttributeName |
            | True          |
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count
        Then User click on 'MODIFY/ADD MORE' button
        Then User remove the below attribute from the default list and click on 'Search' button in side panel
            | Attribute |
            | Has DST   |
        Then User clicks on search icon in side bar menu
        Then User verifies the expected well count


    @19545 @regression @saved_search @shama1
    Scenario: 12245 - Saved Search - Verify Delete saved search confirmation
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    | County        |
            | ARKANSAS | COLUMBIA - AR |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then user 'Reset' the search and click on the saved search option
        Then User verifies the 'CANCEL' and 'CONFIRM' options
        Then User verifies the previous saved search is deleted successfully

    @32138 @regression @saved_search @shama1
    Scenario: 30549 - Verify retrieved saved search with production plot & type curve chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   | County      |
            | ARIZONA | APACHE - AZ |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User clicks Analyze and selects Type Curve plot
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User checks UWI checkbox
        Then User selects the settings for 'PRODUCTION PLOT'
        Then User Aggregate wells by Individual wells,clicks CANCEL and Verify Production Plot Chart Data groups
        Then User selects the settings for 'PRODUCTION PLOT'
        Then User Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy          |
            | Current Operator |
        Then User click the dropdown next to save button
        Then User click on Save As option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User checks UWI checkbox
        Then User selects the settings for 'TYPE CURVE'
        Then User Aggregate wells by Individual wells,clicks CANCEL and Verify Production Plot Chart Data groups
        Then User selects the settings for 'TYPE CURVE'
        Then User Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy          |
            | Current Operator |
        Then User click the dropdown next to save button
        Then User click on Save As option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search

    @32138 @regression @saved_search @shama1
    Scenario: 30549 - Verify retrieved saved search with production plot & type curve chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   | County      |
            | ARIZONA | APACHE - AZ |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User clicks Analyze and selects Type Curve plot
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User checks UWI checkbox
        Then User selects the settings for 'PRODUCTION PLOT'
        Then User Aggregate wells by Individual wells,clicks CANCEL and Verify Production Plot Chart Data groups
        Then User selects the settings for 'PRODUCTION PLOT'
        Then User Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy          |
            | Current Operator |
        Then User click the dropdown next to save button
        Then User click on Save As option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User checks UWI checkbox
        Then User selects the settings for 'TYPE CURVE'
        Then User Aggregate wells by Individual wells,clicks CANCEL and Verify Production Plot Chart Data groups
        Then User selects the settings for 'TYPE CURVE'
        Then User Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy          |
            | Current Operator |
        Then User click the dropdown next to save button
        Then User click on Save As option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search


    @33095 @regression @saved_search @shama1
    Scenario: Verify that search results are auto-saved when export button is clicked
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User verifies Export option is enabled in menu
        Then User clicks on search icon in side bar menu
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then User select below non default attribute and populate below value and click on 'Search' button
            | NonDefaultAttribute | ItsValue             |
            | Current Operator    | ALASKA DEVELOPMENTCO |
        Then User clicks on 'Search' button in side panel
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then verify  Added NonDefaultAttribute is not selected in saved search
            | NonDefaultAttribute |
            | Current Operator    |
        Then User select below non default attribute and populate below value and click on 'Search' button
            | NonDefaultAttribute | ItsValue      |
            | Well Status         | Gas Well (GW) |
        Then User clicks on export option in menu
        Then User click on the saved Search icon and click on the recent auto saved search
        Then User clicks on search icon in side bar menu
        Then User click on 'MODIFY/ADD MORE' button
        Then verify  Added NonDefaultAttribute is selected in saved search
            | NonDefaultAttribute |
            | Well Status         |