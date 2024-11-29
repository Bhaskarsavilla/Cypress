Feature: Validation of Attibute/UWI/Polygon search, Analyze and Plot

    Background: Login to Saga Analytics application through okta
        Given User opens the Saga Analytics application url and login

    @32126 @regression @analyze_and_plot 
    Scenario: Verify Production Plot Chart Data with Less than 10 groups
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | MARYLAND |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy          |
            | Current Operator |

    @32126 @regression @analyze_and_plot 
    Scenario: Verify Production Plot Chart Data with Less than 10 groups
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | MARYLAND |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy          |
            | Current Operator |
    @32127 @regression @analyze_and_plot 
    Scenario: Verify Production Plot Chart Data with More than 10 groups (All top 10 has production data)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy      |
            | TGS Operator |


    @32127  @regression @analyze_and_plot 
    Scenario: Verify Production Plot Chart Data with More than 10 groups (All top 10 has production data)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy      |
            | TGS Operator |

    @32128 @regression @analyze_and_plot  
    Scenario: Verify Production Plot hover box unit and number format
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        And mouse hover on chart line and validate Unit and Number Format

    @32128 @regression @analyze_and_plot 
    Scenario: Verify Production Plot hover box unit and number format
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        And mouse hover on chart line and validate Unit and Number Format


    @32129 @regression @analyze_and_plot  
    Scenario: Verify Type Curve hover box unit and number format
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze Type Curve
        And mouse hover on chart line and validate Unit and Number Format



    @32131 @regression @analyze_and_plot 
    Scenario: Verify the Plot Daily Values functionalities when enabled for Type Curve chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze Type Curve
        Then User Navigate to Settings and enable Plot Daily Values for Type Curve and click on Save
        Then Check the Chart Y-Axis label



    @17257 @regression @analyze_and_plot 
    Scenario: Verify Grid table overlaps Analysis Parent Pane - Default Size
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User checks UWI checkbox
        Then User clicks on Analyze button from result grid and verify if it is overlapping the parent pane

    @17258 @regression @analyze_and_plot 
    Scenario: Verify Grid table overlaps Analysis Parent Pane - Full Screen
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User checks UWI checkbox
        Then User click on the Square button on the search results header at the right most edge of the screen
        Then User clicks on Analyze button from result grid and verify if it is overlapping the parent pane

    @32135 @regression @analyze_and_plot 
    Scenario: Verify Production plot chart text data upon hovering to graph lines
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by Individual wells and Verify Production Plot Chart Data groups
        Then mouse hover on fullscreen chart line and validate Unit and Number Format
        Then User Navigate to Settings and Aggregate wells by All wells and Verify Production Plot Chart Data groups
        Then mouse hover on fullscreen chart line and validate Unit and Number Format
        Then User Verify Production plot chart in full screen and Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy          |
            | TGS Landing Zone |
        Then mouse hover on fullscreen chart line and validate Unit and Number Format

    @32136 @regression @analyze_and_plot 
    Scenario: Verify the chart static image under Analysis button (Pre-search)
        When User clicks on Analyze icon on right corner of page
        Then User selects production plot chart static image
        Then User clicks on Analyze and selects type curve chart static image

    @32137 @regression @analyze_and_plot 
    Scenario: Verify the chart static image under Analysis button (After Search)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User clicks Analyze and selects Type Curve plot

    @32995 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot settings in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks on fullscreen view
        Then User clicks three dots and select settings
        Then User clears default title and modify title
            | Title             |
            | Scatter Plot Test |
        Then User selects value for X Axis data field
            | DataField             |
            | Last Production Month |
        Then User selects value for Y Axis data field
            | YDataField     |
            | Measured Depth |
            | Lateral Length |
        Then User clicks on save icon and verify chart

    @33053 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot settings in Default Analysis Pane Size View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks three dots from default view and select settings
        Then User clears default title and modify title
            | Title             |
            | Scatter Plot Test |
        Then User selects value for X Axis data field
            | DataField             |
            | Last Production Month |
        Then User selects value for Y Axis data field
            | YDataField     |
            | Measured Depth |
            | Lateral Length |
        Then User clicks on save icon and verify chart

    @34152 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot Chart in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on Analyze, hover and selects the Scatter Plot Chart
        Then User checks UWI checkbox
        Then User clicks on fullscreen view

    @34156 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot Chart in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on Analyze, hover and selects the Scatter Plot Chart
        Then User checks UWI checkbox

    @35515 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot legend in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on Analyze, hover and selects the Scatter Plot Chart
        Then User checks UWI checkbox
        Then User clicks on fullscreen view
        Then User clicks on resize for minimized chart

    @33059 @regression @analyze_and_plot 
    Scenario: Verify that Chart is updated based on the saved settings in Default Analysis Pane Size View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks three dots from default view and select settings
        Then User clears default title and modify title
            | Title             |
            | Scatter Plot Test |
        Then User clicks on save icon and verify chart

    @33060 @regression @analyze_and_plot @mandar  @completed
    Scenario: Verify that Chart is updated based on the saved settings in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks on fullscreen view
        Then User clicks three dots and select settings
        Then User clears default title and modify title
            | Title             |
            | Scatter Plot Test |
        Then User clicks on save icon and verify chart

    @32985 @regression @analyze_and_plot
    Scenario: Verify the y-axis selection in Scatter Plot settings in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks on fullscreen view
        Then User clicks on resize for minimized chart
        Then User clicks three dots from default view and select settings
        Then User clears default title and modify title
            | Title             |
            | Scatter Plot Test |
        Then User selects value for X Axis data field
            | DataField             |
            | Last Production Month |
        Then User unselects checkboxes for Y Axis data field and verify save button is disabled
        Then User selects value for Y Axis data field
            | YDataField                 |
            | Measured Depth             |
            | Lateral Length             |
            | Total Vertical Depth       |
            | Completion Interval Top    |
            | Completion Interval Bottom |
        Then User clicks on save icon and verify chart

    @35858 @regression @analyze_and_plot 
    Scenario: Verify the log curve attributes to Scatter Plot settings in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks on fullscreen view
        Then User clicks on resize for minimized chart
        Then User clicks three dots from default view and select settings
        Then User clears default title and modify title
            | Title             |
            | Scatter Plot Test |
        Then User unselects checkboxes for Y Axis data field and verify save button is disabled
        Then User selects value for Y Axis data field
            | YDataField       |
            | Vshale           |
            | Density          |
            | Neutron Porosity |
            | Sonic            |
            | Resistivity      |
        Then User clicks on save icon and verify chart

    @36690 @regression @analyze_and_plot 
    Scenario: Verify the deselection of all y-axis fields in Scatter Plot settings
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks three dots from default view and select settings
        Then User clears default title and modify title
            | Title             |
            | Scatter Plot Test |
        Then User unselects checkboxes for Y Axis data field and verify save button is disabled
        Then User clicks on CANCEL button
        Then User clicks on fullscreen view
        Then User clicks on resize for minimized chart
        Then User clicks three dots from default view and select settings
        Then User clears default title and modify title
            | Title               |
            | Scatter Plot Test 1 |
        Then User unselects checkboxes for Y Axis data field and verify save button is disabled
        Then User clicks on CANCEL button
        Then User clicks on fullscreen view
        Then User clicks three dots and select settings
        Then User clears default title and modify title
            | Title               |
            | Scatter Plot Test 2 |
        Then User unselects checkboxes for Y Axis data field when chart is maximized and verify save button is disabled
        Then User clicks on CANCEL button

    @36705 @regression @analyze_and_plot
    Scenario: Verify the y axis label in the scatter plot chart for single y axis data field
        When User clicks on search icon in side bar menu
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon and click on the 'Search' button in the side panel
        Then User checks UWI checkbox
        Then User clicks Analyze and selects Scatter plot
        Then User clicks three dots from default view and select settings
        Then User unselects checkboxes for Y Axis data field and verify save button is disabled
        Then User selects value for Y Axis data field
            | YDataField           |
            | Total Vertical Depth |
        Then User clicks on save icon and verify chart
        Then User clicks on fullscreen view
        Then User clicks on resize for minimized chart
        Then User clicks on fullscreen view


    @33050 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot settings in Full Chart Size View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | VIRGINIA |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks on fullscreen view
        Then User clicks three dots and select settings
        Then User clears default title and modify title
            | Title               |
            | Scatter Plot Test 1 |
        Then User selects value for X Axis data field
            | DataField   |
            | Acid Amount |
        Then User selects value for Y Axis data field
            | YDataField |
            | Cum Yield  |
            | Water Cut  |
        Then User clicks on save icon and verify chart

    @33061 @regression @analyze_and_plot 
    Scenario: Verify that Chart is updated based on the saved settings in Full Chart Size View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | COLORADO |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks on fullscreen view
        Then User clicks three dots and select settings
        Then User clears default title and modify title
            | Title               |
            | Scatter Plot Test 1 |
        Then User clicks on save icon and verify chart

    @34155 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot Chart in Full Chart Size View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State |
            | GULF  |
        Then User clicks on Analyze, hover and selects the Scatter Plot Chart
        Then User checks UWI checkbox
        Then User clicks on fullscreen view


    @34155 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot Chart in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on Analyze, hover and selects the Scatter Plot Chart
        Then User checks UWI checkbox
        Then User clicks on fullscreen view

    @32190 @regression @analyze_and_plot 
    Scenario: Verify the Forecast cumulative linegraph with monthly Display By All wells in production plot chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | ARKANSAS |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and disable Include Forecast for Production Plot and click on Save
        Then User Navigate to Settings and enable Include Forecast for Production Plot and click on Save
        Then User clicks three dots from default view and select settings
        Then User unselects checkboxes for Y Axis data field for Production Plot
        Then User selects value for Y Axis data field
            | YDataField         |
            | Oil (Cumulative)   |
            | Gas (Cumulative)   |
            | BOE (Cumulative)   |
            | Water (Cumulative) |
        Then User clicks on save icon and verify chart
        Then User clicks three dots from default view and select settings
        Then User selects value for Y Axis data field
            | YDataField         |
            | Oil (Monthly)      |
            | Oil (Cumulative)   |
            | Gas (Monthly)      |
            | Gas (Cumulative)   |
            | BOE (Monthly)      |
            | BOE (Cumulative)   |
            | Water (Monthly)    |
            | Water (Cumulative) |
            | Days On Production |
            | Water-Oil Ratio    |
            | Water Cut          |
            | Gas-Oil Ratio      |
        Then User clicks on save icon and verify chart
        Then User clicks on 'Export as Excel' option value
        Then User validate the downloaded excel file data
            | validateFile       |
            | Name, Date         |


    @32191 @regression @analyze_and_plot 
    Scenario: Verify the Forecast cumulative linegraph with monthly Display By All wells in production plot chart for saved search
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then user 'Reset' the search and click on the saved search option
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and disable Include Forecast for Production Plot and click on Save
        Then User Navigate to Settings and enable Include Forecast for Production Plot and click on Save
        Then User clicks three dots from default view and select settings
        Then User unselects checkboxes for Y Axis data field for Production Plot
        Then User selects value for Y Axis data field
            | YDataField         |
            | Oil (Cumulative)   |
            | Gas (Cumulative)   |
            | BOE (Cumulative)   |
            | Water (Cumulative) |
        Then User clicks on save icon and verify chart
        Then User clicks three dots from default view and select settings
        Then User selects value for Y Axis data field
            | YDataField         |
            | Oil (Monthly)      |
            | Oil (Cumulative)   |
            | Gas (Monthly)      |
            | Gas (Cumulative)   |
            | BOE (Monthly)      |
            | BOE (Cumulative)   |
            | Water (Monthly)    |
            | Water (Cumulative) |
            | Days On Production |
            | Water-Oil Ratio    |
            | Water Cut          |
            | Gas-Oil Ratio      |
        Then User clicks on save icon and verify chart
        Then User clicks on 'Export as Excel' option value
        Then User validate the downloaded excel file data
            | validateFile       |
            | Name, Date         |


    @32192 @regression @analyze_and_plot 
    Scenario: Verify the Forecast cumulative linegraph with monthly Display By All wells in production plot chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State            |
            | BRITISH COLUMBIA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and disable Include Forecast for Production Plot and click on Save
        Then User Navigate to Settings and enable Include Forecast, Aggregate wells by Individual wells for Production Plot and click on Save
        Then User clicks three dots from default view and select settings
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Gas (Monthly) |
        Then User clicks on save icon and verify chart
        Then User clicks on 'Export as Excel' option value
        Then User validate the downloaded excel file data
            | validateFile       |
            | Name, Date         |


    @32193 @regression @analyze_and_plot 
    Scenario: Verify the Forecast cumulative linegraph with monthly Display By Group Wells By Attribute in production plot chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | COLORADO |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and disable Include Forecast for Production Plot and click on Save
        Then User Navigate to Settings and Aggregate Group wells by Attribute and enable Include Forecast
            | GroupBy             |
            | Producing Formation |
        Then User selects value for Y Axis data field  with radio button
            | YDataField      |
            | Water (Monthly) |
        Then User clicks on save icon and verify chart
        Then User clicks on 'Export as Excel' option value
        Then User validate the downloaded excel file data
            | validateFile       |
            | Name, Date         |

    @32190 @regression @analyze_and_plot 
    Scenario: Verify the Forecast cumulative linegraph with monthly Display By All wells in production plot chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | ARKANSAS |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and disable Include Forecast for Production Plot and click on Save
        Then User Navigate to Settings and enable Include Forecast for Production Plot and click on Save
        Then User clicks three dots from default view and select settings
        Then User unselects checkboxes for Y Axis data field for Production Plot
        Then User selects value for Y Axis data field
            | YDataField         |
            | Oil (Cumulative)   |
            | Gas (Cumulative)   |
            | BOE (Cumulative)   |
            | Water (Cumulative) |
        Then User clicks on save icon and verify chart
        Then User clicks three dots from default view and select settings
        Then User selects value for Y Axis data field
            | YDataField         |
            | Oil (Monthly)      |
            | Oil (Cumulative)   |
            | Gas (Monthly)      |
            | Gas (Cumulative)   |
            | BOE (Monthly)      |
            | BOE (Cumulative)   |
            | Water (Monthly)    |
            | Water (Cumulative) |
            | Days On Production |
            | Water-Oil Ratio    |
            | Water Cut          |
            | Gas-Oil Ratio      |
        Then User clicks on save icon and verify chart
        Then User clicks on 'Export as Excel' option value
        Then User validate the downloaded excel file data
            | validateFile       |
            | Name, Date         |


    @32191 @regression @analyze_and_plot 
    Scenario: Verify the Forecast cumulative linegraph with monthly Display By All wells in production plot chart for saved search
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then user 'Reset' the search and click on the saved search option
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and disable Include Forecast for Production Plot and click on Save
        Then User Navigate to Settings and enable Include Forecast for Production Plot and click on Save
        Then User clicks three dots from default view and select settings
        Then User unselects checkboxes for Y Axis data field for Production Plot
        Then User selects value for Y Axis data field
            | YDataField         |
            | Oil (Cumulative)   |
            | Gas (Cumulative)   |
            | BOE (Cumulative)   |
            | Water (Cumulative) |
        Then User clicks on save icon and verify chart
        Then User clicks three dots from default view and select settings
        Then User selects value for Y Axis data field
            | YDataField         |
            | Oil (Monthly)      |
            | Oil (Cumulative)   |
            | Gas (Monthly)      |
            | Gas (Cumulative)   |
            | BOE (Monthly)      |
            | BOE (Cumulative)   |
            | Water (Monthly)    |
            | Water (Cumulative) |
            | Days On Production |
            | Water-Oil Ratio    |
            | Water Cut          |
            | Gas-Oil Ratio      |
        Then User clicks on save icon and verify chart
        Then User clicks on 'Export as Excel' option value
        Then User validate the downloaded excel file data
            | validateFile       |
            | Name, Date         |


    @32192 @regression @analyze_and_plot 
    Scenario: Verify the Forecast cumulative linegraph with monthly Display By All wells in production plot chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State            |
            | BRITISH COLUMBIA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and disable Include Forecast for Production Plot and click on Save
        Then User Navigate to Settings and enable Include Forecast, Aggregate wells by Individual wells for Production Plot and click on Save
        Then User clicks three dots from default view and select settings
        Then User selects value for Y Axis data field  with radio button
            | YDataField    |
            | Gas (Monthly) |
        Then User clicks on save icon and verify chart
        Then User clicks on 'Export as Excel' option value
        Then User validate the downloaded excel file data
            | validateFile       |
            | Name, Date         |


    @32193 @regression @analyze_and_plot 
    Scenario: Verify the Forecast cumulative linegraph with monthly Display By Group Wells By Attribute in production plot chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | COLORADO |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and disable Include Forecast for Production Plot and click on Save
        Then User Navigate to Settings and Aggregate Group wells by Attribute and enable Include Forecast
            | GroupBy             |
            | Producing Formation |
        Then User selects value for Y Axis data field  with radio button
            | YDataField      |
            | Water (Monthly) |
        Then User clicks on save icon and verify chart
        Then User clicks on 'Export as Excel' option value
        Then User validate the downloaded excel file data
            | validateFile       |
            | Name, Date         |

   @32138 @regression @analyze_and_plot  
    Scenario: 30549 - Verify retrieved saved search with production plot & type curve chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User clicks on Analyze Type Curve
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then user 'Reset' the search and click on the saved search option


    @32130 @regression @analyze_and_plot 
    Scenario: Verify the Plot Daily Values functionalities when enabled for production plot chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ARIZONA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and enable Plot Daily Values for Production Plot and click on Save
        Then Check the Chart Y-Axis label

    @32130 @regression @analyze_and_plot 
    Scenario: Verify the Plot Daily Values functionalities when enabled for production plot chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | GULF    |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and enable Plot Daily Values for Production Plot and click on Save
        Then Check the Chart Y-Axis label


    @32131 @regression @analyze_and_plot 
    Scenario: Verify the Plot Daily Values functionalities when enabled for Type Curve chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State |
            | GULF  |
        Then User checks UWI checkbox and clicks on Analyze Type Curve
        Then User Navigate to Settings and enable Plot Daily Values for Type Curve and click on Save
        Then Check the Chart Y-Axis label

    @32135 @regression @analyze_and_plot @mandar
    Scenario: Verify Production plot chart text data upon hovering to graph lines
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | INDIANA |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User Navigate to Settings and Aggregate wells by Individual wells and Verify Production Plot Chart Data groups
        Then mouse hover on fullscreen chart line and validate Unit and Number Format
        Then User Navigate to Settings and Aggregate wells by All wells and Verify Production Plot Chart Data groups
        Then mouse hover on fullscreen chart line and validate Unit and Number Format
        Then User Verify Production plot chart in full screen and Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy             |
            | Producing Formation |
        Then mouse hover on fullscreen chart line and validate Unit and Number Format

    @32136 @regression @analyze_and_plot 
    Scenario: Verify the chart static image under Analysis button (Pre-search)
        When User clicks on Analyze icon on right corner of page
        Then User selects production plot chart static image
        Then User clicks on Analyze and selects type curve chart static image

    @32137 @regression @analyze_and_plot 
    Scenario: Verify the chart static image under Analysis button (After Search)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | KENTUCKY |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User clicks Analyze and selects Type Curve plot

    @33053 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot settings in Default Analysis Pane Size View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | KANSAS |
        Then User clicks Analyze and selects Scatter plot
        Then User checks UWI checkbox
        Then User clicks three dots from default view and select settings
        Then User clears default title and modify title
            | Title               |
            | Scatter Plot Test 1 |
        Then User selects value for X Axis data field
            | DataField         |
            | Frac Fluid Amount |
        Then User selects value for Y Axis data field
            | YDataField                 |
            | Completion Interval Top    |
            | Completion Interval Bottom |
        Then User clicks on save icon and verify chart

    @34152 @regression @analyze_and_plot
    Scenario: Verify the Scatter Plot Chart in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | ILLINOIS |
        Then User clicks on Analyze, hover and selects the Scatter Plot Chart
        Then User checks UWI checkbox
        Then User clicks on fullscreen view

    @34156 @regression @analyze_and_plot 
    Scenario: Verify the Scatter Plot Chart in Full Screen Analysis Pane View
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State    |
            | MICHIGAN |
        Then User clicks on Analyze, hover and selects the Scatter Plot Chart
        Then User checks UWI checkbox

    @32189 @regression @analyze_and_plot
    Scenario: Verify the production plot rendered graph & legend line with 1 month of production
        When User clicks on search icon in side bar menu
        Then User perform below UWI search and click on 'Search' option
            | UWI                                          |
            | 33009001000000                               |
        Then User clicks on Analyze icon on right corner of page
        Then User selects production plot chart static image
        Then User checks UWI checkbox
        Then mouse hover on chart line and validate Unit and Number Format
        Then User Navigate to Settings and Aggregate wells by Individual wells and Verify Production Plot Chart Data groups
        Then User clicks on resize for minimized chart
        Then User Navigate to Settings and Aggregate wells by attribute and Verify Production Plot Chart Data groups
            | GroupBy          |
            | Current Operator |


    @35862 @regression @analyze_and_plot 
    Scenario: Verify that the reset functionality for ProdPlot, TypeCurve and ScatterPlot Chart
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ARKANSAS |
        Then User checks UWI checkbox and clicks on Analyze production plot
        Then User deselects random data in the legend
        Then User resets the data
        Then User clicks on fullscreen view
        Then User deselects random data in the legend in fullscreen mode
        Then User resets the data in fullscreen mode
        Then User clicks on resize for minimized chart
        Then User deselects random data in the legend
        Then User resets the data
        Then User close the chart
        Then User clicks Analyze from grid table and selects Type Curve plot
        Then User deselects random data in the legend
        Then User resets the data
        Then User clicks on fullscreen view
        Then User deselects random data in the legend in fullscreen mode
        Then User resets the data in fullscreen mode
        Then User clicks on resize for minimized chart
        Then User deselects random data in the legend
        Then User resets the data
        Then User close the chart
        Then User clicks Analyze and selects Scatter plot
#        Then User deselects random data in the legend
        Then User resets the data
        Then User clicks on fullscreen view
#        Then User deselects random data in the legend in fullscreen mode
        Then User resets the data in fullscreen mode
        Then User clicks on resize for minimized chart
#        Then User deselects random data in the legend
        Then User resets the data