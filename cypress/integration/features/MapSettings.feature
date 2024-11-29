Feature: Validation of Attibute/UWI Saved Search

    Background: Login to Saga Analytics application through okta
        Given User opens the Saga Analytics application url and login

    @32229 @regression @map_settings  
    Scenario: 20875 - Well Styling - Attribute Search - Color By Slant Attribute
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User clicks on MapSettings and under Surface & Bottom section->Color By then select Attribute field
            | AttributeField |
            | Slant          |
        Then select Zoom upto 12 or more
        Then Enable Bottom hole Location layer only then Enable Surface and Bottom hole Location layers
        Then User clicks three-dot menu in the Search menu header
        Then click Show or Hide Columns option then add Slant column
            | AttributeField |
            | Slant          |
        Then sort the column Z-A
        Then click on 'Save' option and provide the below name and save the search
            | MySavedSearch   |
            | My Saved Search |
        Then user clicks 'resetButton' in search and click on the saved search option

    @32230 @regression @map_settings  
    Scenario: 20875 - Well Styling - Attribute Search - Color By State Well ID Attribute
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ALBERTA |
        Then User clicks on MapSettings and under Surface & Bottom section->Color By then select Attribute field
            | AttributeField |
            | State Well ID  |
        Then select Zoom upto 12 or more
        Then Enable Bottom hole Location layer only then Enable Surface and Bottom hole Location layers
        Then User clicks three-dot menu in the Search menu header
        Then click Show or Hide Columns option then add State Well ID column
            | AttributeField |
            | State Well ID  |
        Then sort the column Z-A
        Then click on 'Save' option and provide the below name and save the search
            | MySavedSearch   |
            | My Saved Search |
        Then user clicks 'resetButton' in search and click on the saved search option

    @32231  @regression @map_settings 
    Scenario:26699 - Well Styling - Validate "Highlight Selected Well" option
        Given select Zoom upto 12 or more
        Then User clicks on MapSettings
        Then Enable SurfaceHoleLocation and BottonHoleLocation Option
        Then User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then Validate "Highlight Selected Well" option in the MAP SETTING
            | CultureLayerOption      |
            | Highlight Selected Well |
        Then User checks UWI checkbox
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then Unselect "Highlight Selected Well" option in the MAP SETTING
            | CultureLayerOption      |
            | Highlight Selected Well |
        Then Select "Highlight Selected Well" option in the MAP SETTING
            | CultureLayerOption      |
            | Highlight Selected Well |
        Then User uncheck UWI checkbox
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then Validate "Highlight Selected Well" option in the MAP SETTING
            | CultureLayerOption      |
            | Highlight Selected Well |
        Then User clicks on search icon in side bar menu
        Then User clicks on 'Reset' button in side panel
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ALABAMA |
        Then select Zoom level 3-19
        Then Hover to Surface Well Spots
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then Unselect "Highlight Selected Well" option in the MAP SETTING
            | CultureLayerOption      |
            | Highlight Selected Well |
        Then User clicks on search icon in side bar menu
        Then User clicks on 'Reset' button in side panel
        Then User click on the 'DRAW' button at the bottom of the search panel and click the 'Polygon' button
        Then User draw the polygon
        Then User click on 'Search' option from the sidebar menu
        Then User checks UWI checkbox
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then Unselect "Highlight Selected Well" option in the MAP SETTING
            | CultureLayerOption      |
            | Highlight Selected Well |
        Then Select "Highlight Selected Well" option in the MAP SETTING
            | CultureLayerOption      |
            | Highlight Selected Well |



    @32232 @regression @map_settings  
    Scenario:27446 - Well Styling - Validate Surface Well Spots "Well Label"
        Given select Zoom upto 12 or more
        Then User clicks on MapSettings
        Then under WellStyle Section select SurfaceHoleLocation and deselect BottonHoleLocation & WellPath Option
        Then User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ALABAMA |
        Then select Zoom level 3-19
        Then Validate Well label option under Map Settings
        Then Hover to Surface Well Spots
        Then Unselect Well label option in MAP SETTINGS then hover to Surface Well Spot

    @32144 @regression @map_settings  
    Scenario: Verify the landgrid title in the culture layer in map settings at zoom level 12
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then Select Zoomlevel
            | ZoomLevel |
            | 11        |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        And Check the "Land Grid by GVERSE GeoGraphix ®" title with checkbox in the Culture Layers in map settings
            | CultureLayerOption               |
            | Land Grid by GVERSE GeoGraphix ® |
        Then Select Zoomlevel
            | ZoomLevel |
            | 12        |
        Then Check the "Land Grid by GVERSE GeoGraphix ®" option in the culture layers and verify applied to maps
            | CultureLayerOption               |
            | Land Grid by GVERSE GeoGraphix ® |
        Then Uncheck the "Land Grid by GVERSE GeoGraphix ®" option in the culture layers and verify not applied to maps
            | CultureLayerOption               |
            | Land Grid by GVERSE GeoGraphix ® |
        Then Select Zoomlevel
            | ZoomLevel |
            | 11        |

    @32145 @regression @map_settings  
    Scenario: Verify the Offshore Blocks title in the culture layer in map settings at zoom level 5 and above
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then Select Zoomlevel
            | ZoomLevel |
            | 4         |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        And Check the "Offshore Blocks by GVERSE GeoGraphix ®" title with checkbox in the Culture Layers in map settings
            | CultureLayerOption                     |
            | Offshore Blocks by GVERSE GeoGraphix ® |
        Then Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then Check the "Offshore Blocks by GVERSE GeoGraphix ®" option in the culture layers and verify applied to maps
            | CultureLayerOption                     |
            | Offshore Blocks by GVERSE GeoGraphix ® |
        Then Uncheck the "LOffshore Blocks by GVERSE GeoGraphix ®" option in the culture layers and verify not applied to maps
            | CultureLayerOption                     |
            | Offshore Blocks by GVERSE GeoGraphix ® |
        Then Select Zoomlevel
            | ZoomLevel |
            | 4         |

    @32225 @regression @map_settings  
    Scenario: Verify the color by attribute without search
        When User clicks on MapSettings Icon in the right corner lower of the page
        And Click on the Surface & Bottom Color By dropdown and validate Attribute option
        Then Hover over the Attribute option under Color By dropdown and Validate display of tool tip "Search required"



    @35446 @regression @map_settings  
    Scenario: Verify the "Well Card" label option in the map settings (Post-Search)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then Check the Well Label should be changed to "Well Card" label


    @13692 @regression @map_settings  
    Scenario: Verify if Bottom Hole Layer selection is enabled when zoom level is 12 and above
        Given select Zoom upto 12 or more
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        And Verify of the Bottom Hole Layer selected is enabled
        Then Click on the Bottom Hole Layer


    @32226 @regression @map_settings  
    Scenario: Verify the Map Settings and Legend icon closing functionality
        Given User clicks on MapSettings Icon in the right corner lower of the page
        Then confirm MapSettings popup model displayed
        Then Again User clicks on MapSettings Icon and verify popup model closed
        Then Click on Legend icon and confirm popup model displayed
        Then Again Click on Legend icon and confirm popup model closed
        Then User clicks on search icon in side bar menu
        And User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | WYOMING |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then confirm MapSettings popup model displayed
        Then Again User clicks on MapSettings Icon and verify popup model closed
        Then Click on Legend icon and confirm popup model displayed
        Then Again Click on Legend icon and confirm popup model closed
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then confirm MapSettings popup model displayed
        Then Click on Legend icon and confirm popup model displayed
        Then Verify MapSettings and Legend icons are closed using X icon

    @32146 @regression @map_settings 
    Scenario: 23281 - Map Culture Layers - Validate Anomaly Layers
        Given User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Validate Anomaly layers options
        Then Select all Anomaly layers options
            | CultureLayerOption |
            | Anomaly: Bouguer   |
            | Anomaly: Isostatic |
            | Anomaly: Magnetic  |
            | Anomaly: Shaded    |
        Then Select Zoomlevel
            | ZoomLevel |
            | 12        |
        Then verify Anamoly layers are still applied
            | CultureLayerOption |
            | Anomaly: Bouguer   |
            | Anomaly: Isostatic |
            | Anomaly: Magnetic  |
            | Anomaly: Shaded    |
        Then User clicks on search icon in side bar menu
        And User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ALBERTA |
        Then Select Zoomlevel
            | ZoomLevel |
            | 12        |

        Then verify Anamoly layers are still applied
            | CultureLayerOption |
            | Anomaly: Bouguer   |
            | Anomaly: Isostatic |
            | Anomaly: Magnetic  |
            | Anomaly: Shaded    |

    @32147 @Regression @map_settings  
    Scenario: 23281 - Map Culture Layers - Validate Anomaly Layers for Saved Search
        Given  User clicks on Saved search icon in side bar menu and clicks on existing Saved search
            | MySavedSearch         |
            | AttributeArizonaState |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Validate Anomaly layers options
        Then Select all Anomaly layers options
            | CultureLayerOption |
            | Anomaly: Bouguer   |
            | Anomaly: Isostatic |
            | Anomaly: Magnetic  |
            | Anomaly: Shaded    |
        Then Select Zoomlevel
            | ZoomLevel |
            | 12        |
        Then verify Anamoly layers are still applied
            | CultureLayerOption |
            | Anomaly: Bouguer   |
            | Anomaly: Isostatic |
            | Anomaly: Magnetic  |
            | Anomaly: Shaded    |




    @32148 @Regression @Map_Settings  
    Scenario:Verify the new TGS Trends and TGS Major Basins Layer in the cultural layer
        Given Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        And Check the "TGS Trends" title with checkbox in the Culture Layers in map settings
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        And Check the "TGS Major Basins" title with checkbox in the Culture Layers in map settings
            | CultureLayerOption |
            | TGS Major Basins   |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
        Then expand "Base Map Style" Section
        Then Verify TGS Trends and TGS Major Basins are applied for all the base maps
            | BaseMapOptions |
            | Topographic    |
        Given Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
        Then Verify TGS Trends and TGS Major Basins are applied for all the base maps
            | BaseMapOptions |
            | Oceans         |
        Given Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then expand "Culture Layers" Section
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
        Then Verify TGS Trends and TGS Major Basins are applied for all the base maps
            | BaseMapOptions |
            | Streets        |
        Given Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then expand "Culture Layers" Section
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
        Then Verify TGS Trends and TGS Major Basins are applied for all the base maps
            | BaseMapOptions    |
            | Light Grey Canvas |
        Given Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then expand "Culture Layers" Section
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
        Then Verify TGS Trends and TGS Major Basins are applied for all the base maps
            | BaseMapOptions      |
            | Imagery with Labels |
        Given Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then expand "Culture Layers" Section
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
        Then Verify TGS Trends and TGS Major Basins are applied for all the base maps
            | BaseMapOptions |
            | Hybrid         |
        Given Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then expand "Culture Layers" Section
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
        Then Verify TGS Trends and TGS Major Basins are applied for all the base maps
            | BaseMapOptions |
            | NatGeo         |
        Given Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |


         @32149 @Regression @map_settings
    Scenario:Verify the new TGS Trends and TGS Major Basins Layer in the cultural layer for saved search
        Given  User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ARIZONA |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | AttributeArizonaState |
        Given User clicks on Saved search icon in side bar menu and clicks on existing Saved search
            | MySavedSearch         |
            | AttributeArizonaState |
        Then Select Zoomlevel
            | ZoomLevel |
            | 7         |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        And Check the "TGS Trends" title with checkbox in the Culture Layers in map settings
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        And Check the "TGS Major Basins" title with checkbox in the Culture Layers in map settings
            | CultureLayerOption |
            | TGS Major Basins   |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
        Then expand "Base Map Style" Section
        Then Verify TGS Trends and TGS Major Basins are applied for all the base maps
            | BaseMapOptions |
            | DarkGray       |
        Then User clicks on search icon in side bar menu
        Then User click the dropdown next to save button
        Then User click on the save option
        Then user 'Reset' the search and click on the saved search option
        Then User clicks on Saved search icon in side bar menu and clicks on existing Saved search
            | MySavedSearch         |
            | AttributeArizonaState |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
 
        Given User clicks on Saved search icon in side bar menu and clicks on existing Saved search
            | MySavedSearch         |
            | AttributeArizonaState |
        Then Select Zoomlevel
            | ZoomLevel |
            | 7         |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        And Check the "TGS Trends" title with checkbox in the Culture Layers in map settings
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        And Check the "TGS Major Basins" title with checkbox in the Culture Layers in map settings
            | CultureLayerOption |
            | TGS Major Basins   |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |
        Then expand "Base Map Style" Section
        Then Verify TGS Trends and TGS Major Basins are applied for all the base maps
            | BaseMapOptions |
            | Topographic    |
        Then User clicks on search icon in side bar menu
        Then User click the dropdown next to save button
        Then User click on the save option
        Then user 'Reset' the search and click on the saved search option
        Then User clicks on Saved search icon in side bar menu and clicks on existing Saved search
            | MySavedSearch         |
            | AttributeArizonaState |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Trends" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Trends         |
        Then Check the "TGS Major Basins" option in the culture layers and verify applied to maps
            | CultureLayerOption |
            | TGS Major Basins   |

    @32150 @regression @map_settings  
    Scenario:Verify the "07A2 Wolfcamp Y" Isopach layer under the Stratigraphic Layers
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | ANDREWS - TX |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Stratigraphic Model Outlines" option in the culture layers and verify applied to maps
            | CultureLayerOption               |
            | TGS Stratigraphic Model Outlines |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y" Layer is applied for all the base maps
            | BaseMapOptions |
            | Topographic    |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y" Layer is applied for all the base maps
            | BaseMapOptions |
            | Oceans         |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y" Layer is applied for all the base maps
            | BaseMapOptions |
            | Streets        |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y" Layer is applied for all the base maps
            | BaseMapOptions    |
            | Light Grey Canvas |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y" Layer is applied for all the base maps
            | BaseMapOptions      |
            | Imagery with Labels |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y" Layer is applied for all the base maps
            | BaseMapOptions |
            | Hybrid         |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y" Layer is applied for all the base maps
            | BaseMapOptions |
            | NatGeo         |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |

    @32153 @regression @map_settings  
    Scenario:Verify the "04 San Andreas" Isopach layer under the Stratigraphic Layers for saved search
        Given User clicks on Saved search icon in side bar menu and clicks on existing Saved search
            | MySavedSearch         |
            | AttributeArizonaState |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Stratigraphic Model Outlines" option in the culture layers and verify applied to maps
            | CultureLayerOption               |
            | TGS Stratigraphic Model Outlines |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | Topographic    |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | Oceans         |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | Streets        |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions    |
            | Light Grey Canvas |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions      |
            | Imagery with Labels |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | Hybrid         |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | NatGeo         |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |

    @32154 @regression @map_settings 
    Scenario:Verify the "07A2 Wolfcamp Y" and "04 San Andreas" Isopach layer under the Stratigraphic Layers for Pre-search
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Stratigraphic Model Outlines" option in the culture layers and verify applied to maps
            | CultureLayerOption               |
            | TGS Stratigraphic Model Outlines |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y and 04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y and 04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | Topographic    |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y and 04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y and 04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | Oceans         |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y and 04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
            | 04 San Andreas    |

        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y and 04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | Streets        |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y and 04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y and 04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions    |
            | Light Grey Canvas |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y and 04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y and 04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions      |
            | Imagery with Labels |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y and 04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y and 04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | Hybrid         |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y and 04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
            | 04 San Andreas    |
        Then expand "Base Map Style" Section
        Then Verify "07A2 Wolfcamp Y and 04 San Andreas" Layer is applied for all the base maps
            | BaseMapOptions |
            | NatGeo         |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "07A2 Wolfcamp Y and 04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 07A2 Wolfcamp Y   |
            | 04 San Andreas    |

    @32155 @regression @map_settings  
    Scenario:Verify that the stratigraphic layers can have 1 active layer at a time for each basin
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | ANDREWS - TX |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Stratigraphic Model Outlines" option in the culture layers and verify applied to maps
            | CultureLayerOption               |
            | TGS Stratigraphic Model Outlines |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then click on "Eagle Ford Basin"
        Then click on "Structure Map"
        Then Check "03 Lower Claiborne" Layer and verify applied to maps
            | IsopachMapOptions  |
            | 03 Lower Claiborne |
        Then click on "Anadarko Basin"
        Then click on "Structure Map"
        Then Check "01 Stone Corral" Layer and verify applied to maps
            | IsopachMapOptions |
            | 01 Stone Corral   |

    @23792 @regression @map_settings  
    Scenario:Verify the "Structure Maps" and "Isopach Maps" functionality in the cultural layers
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | ANDREWS - TX |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Stratigraphic Model Outlines" option in the culture layers and verify applied to maps
            | CultureLayerOption               |
            | TGS Stratigraphic Model Outlines |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
        Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then click on "Structure Map"
        Then Check "01 Rustler" Layer and verify applied to maps
            | IsopachMapOptions |
            | 01 Rustler        |
        # Then click on "Isopach Map"
        Then Check "04 San Andreas" Layer and verify not applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then Check "01 Rustler" Layer and verify not applied to maps
            | IsopachMapOptions |
            | 01 Rustler        |
        Then Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then Check "01 Rustler" Layer and verify not applied to maps
            | IsopachMapOptions |
            | 01 Rustler        |
        Then Select Zoomlevel
            | ZoomLevel |
            | 12        |
        Then Check "04 San Andreas" Layer and verify applied to maps
            | IsopachMapOptions |
            | 04 San Andreas    |
        Then Check "01 Rustler" Layer and verify not applied to maps
            | IsopachMapOptions |
            | 01 Rustler        |

    @14147 @regression @map_settings  
    Scenario:Verify the Surface WellSpots Layer in the map when for different basemaps
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State      |
            | CALIFORNIA |
        Then Select Zoomlevel
            | ZoomLevel |
            | 6         |
        Then  User checks Some rows of UWI checkbox
        Then Verify SurfaceHoleLocation Option is applied to selected rows
        Then expand "Base Map Style" Section
        Then Verify "Surface Hole Location" Layer is applied for all the base maps
            | BaseMapOptions |
            | Topographic    |
        Then Verify SurfaceHoleLocation Option is applied to selected rows
        Then expand "Base Map Style" Section
        Then Verify "Surface Hole Location" Layer is applied for all the base maps
            | BaseMapOptions |
            | Oceans         |
        Then Verify SurfaceHoleLocation Option is applied to selected rows

    @32227 @regression @map_settings   
    Scenario: 23281 -Verify Paths and Sticks section
        Given Select Zoomlevel
            | ZoomLevel |
            | 12        |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then Locate and verify Paths and Sticks section should be ON by default and Enabled
            | MapSettingsOptions |
            | Well Paths         |
        Then Select Zoomlevel
            | ZoomLevel |
            | 8         |
        Then Verify Paths and Sticks section should still shown but Disabled
            | MapSettingsOptions |
            | Well Paths         |

    @32228 @regression @map_settings  
    Scenario:15004 - Verify WellSpotStyling   - Behavior - Surface and Bottom Well Spots
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | ANDREWS - TX |
        Then Select Zoomlevel
            | ZoomLevel |
            | 12        |
        Then Enable Bottom hole Location layer only then Enable Surface and Bottom hole Location layers
        Then User clicks on MapSettings and under Surface & Bottom section->Color By then select Attribute field
            | AttributeField |
            | Oil Total Cum  |
        Then User clicks on search icon in side bar menu
        Then Click on the Cancel Icon
        Then Click on the Cancel Icon
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | ANDREWS - TX |
        Then User clicks on MapSettings under Surface & Bottom section->Color By then select Attribute field
            | AttributeField  |
            | Completion Date |


    @32235 @regression @map_settings 
    Scenario:30282 - Verify Well Styling - Color by Text Attribute - Verify Legend is sorted by CumBOE
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on MapSettings and under Surface & Bottom section->Color By then select Attribute field
            | AttributeField |
            | BOE Total Cum  |
        Then Verify Legend is selected and  Legend should display the list by CumBOE in descending order
        Then click on 'Save' option and provide the below name and save the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then Verify Legend is selected and  Legend should display the list by CumBOE in descending order

    @32235 @regression @map_settings 
    Scenario:30282 - Verify Well Styling - Color by Text Attribute - Verify Legend is sorted by CumBOE
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on MapSettings and under Surface & Bottom section->Color By then select Attribute field
            | AttributeField |
            | BOE Total Cum  |
        Then Verify Legend is selected and  Legend should display the list by CumBOE in descending order
        Then click on 'Save' option and provide the below name and save the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then Verify Legend is selected and  Legend should display the list by CumBOE in descending order


    @32236 @regression @map_settings 
    Scenario:30282 - Verify Well Styling - Color by Text Attribute - Verify Legend is sorted by CumBOE

        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on MapSettings and under Surface & Bottom section->Color By then select Attribute field
            | AttributeField |
            | BOE Total Cum  |
        Then Verify Legend is selected and  Legend should display the list by CumBOE in descending order
        Then click on 'Save' option and provide the below name and save the search
            | MySavedSearch   |
            | My Saved Search |
        Then User refresh the page
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then Verify Legend is selected and  Legend should display the list by CumBOE in descending order


    @17297 @regression @map_settings 
    Scenario: Verify the Offshore Blocks title in the culture layer in map settings at zoom level 5 and above
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then Select Zoomlevel
            | ZoomLevel |
            | 4         |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        And Check the "Offshore Blocks by GVERSE GeoGraphix ®" title with checkbox in the Culture Layers in map settings
            | CultureLayerOption                     |
            | Offshore Blocks by GVERSE GeoGraphix ® |
        Then Select Zoomlevel
            | ZoomLevel |
            | 5         |
        Then Check the "Offshore Blocks by GVERSE GeoGraphix ®" option in the culture layers and verify applied to maps
            | CultureLayerOption                     |
            | Offshore Blocks by GVERSE GeoGraphix ® |
        Then Uncheck the "LOffshore Blocks by GVERSE GeoGraphix ®" option in the culture layers and verify not applied to maps
            | CultureLayerOption                     |
            | Offshore Blocks by GVERSE GeoGraphix ® |
        Then Select Zoomlevel
            | ZoomLevel |
            | 4         |

    @32156 @regression @Map_Settings 
    Scenario: Verify that each of the basin layer can have 1 active layer at a time
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then expand "TGS Stratigraphic Models" Section
        Then expand "Permian Basin" Section
        Then expand "Structure Map" Section
        Then Check the "02 Salado" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer |
            | 02 Salado         |
        Then expand "Eagle Ford Basin" Section
        Then expand "Structure Map" Section
        Then Check the "03 Lower Claiborne" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer  |
            | 03 Lower Claiborne |
        Then expand "Anadarko Basin" Section
        Then expand "Structure Map" Section
        Then Check the "04 Chase" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer |
            | 04 Chase          |

    @32157 @regression @Map_Settings 
    Scenario: Verify that the stratigraphic layers can have 1 active layer at a time for each basin for saved search
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then user 'Reset' the search and click on the saved search option
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then expand "TGS Stratigraphic Models" Section
        Then expand "Permian Basin" Section
        Then expand "Structure Map" Section
        Then Check the "02 Salado" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer |
            | 02 Salado         |
        Then expand "Eagle Ford Basin" Section
        Then expand "Structure Map" Section
        Then Check the "03 Lower Claiborne" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer  |
            | 03 Lower Claiborne |
        Then expand "Anadarko Basin" Section
        Then expand "Structure Map" Section
        Then Check the "04 Chase" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer |
            | 04 Chase          |


    @32158 @regression @Map_Settings
    Scenario: Verify that the stratigraphic layers can have 1 active layer at a time for each basin for saved search
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch |
            | MySavedSearch |
        Then user 'Reset' the search and click on the saved search option
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then expand "TGS Stratigraphic Models" Section
        Then expand "Permian Basin" Section
        Then expand "Structure Map" Section
        Then Check the "02 Salado" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer |
            | 02 Salado         |
        Then expand "Eagle Ford Basin" Section
        Then expand "Structure Map" Section
        Then Check the "03 Lower Claiborne" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer  |
            | 03 Lower Claiborne |
        Then expand "Anadarko Basin" Section
        Then expand "Structure Map" Section
        Then Check the "04 Chase" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer |
            | 04 Chase          |

    @32186 @regression @Map_Settings 
    Scenario: Verify the font size of all layers labels (Post-search)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State   |
            | ALBERTA |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then expand "Anomaly: Bouguer" Section
        Then User clicks on close icon for Map Settings
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then expand "Anomaly: Isostatic" Section
        Then User clicks on close icon for Map Settings
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then expand "Anomaly: Magnetic" Section
        Then User clicks on close icon for Map Settings
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then expand "Anomaly: Shaded" Section
        Then User clicks on close icon for Map Settings
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then expand "TGS Stratigraphic Model Outlines" Section
        Then User clicks on close icon for Map Settings


    @regression @map_settings @32227 
    Scenario: 23281 -Verify Paths and Sticks section
        Given Select Zoomlevel
            | ZoomLevel |
            | 12        |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then Locate and verify Paths and Sticks section should be ON by default and Enabled
            | MapSettingsOptions |
            | Well Paths         |
        Then Select Zoomlevel
            | ZoomLevel |
            | 8         |
        Then Verify Paths and Sticks section should still shown but Disabled
            | MapSettingsOptions |
            | Well Paths         |

    @32196 @regression @map_settings  
    Scenario: Verify the Structure layers under Anadarko Basin (Pre-search)
        When User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Stratigraphic Model Outlines" option in the culture layers and verify applied to maps
            | CultureLayerOption               |
            | TGS Stratigraphic Model Outlines |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Anadarko Basin"
        Then click on "Structure Map"
        Then Check "01 Stone Corral" Layer and verify applied to maps
            | IsopachMapOptions |
            | 01 Stone Corral   |

    @32197 @regression @map_Settings
    Scenario: Verify the Structure layers under Anadarko Basin (Post-search)
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then expand "TGS Stratigraphic Models" Section
        Then expand "Anadarko Basin" Section
        Then expand "Structure Map" Section
        Then Check the "04 Chase" option in the Structure Map layer and verify applied to maps
            | StructureMapLayer |
            | 04 Chase          |

    @32228 @regression @map_settings  
    Scenario:15004 - Verify WellSpotStyling   - Behavior - Surface and Bottom Well Spots
        When User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | ANDREWS - TX |
        Then Select Zoomlevel
            | ZoomLevel |
            | 12        |
        Then Enable Bottom hole Location layer only then Enable Surface and Bottom hole Location layers
        Then User clicks on MapSettings and under Surface & Bottom section->Color By then select Attribute field
            | AttributeField |
            | Oil Total Cum  |
        Then User clicks on search icon in side bar menu
        Then Click on the Cancel Icon
        Then Click on the Cancel Icon
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | ANDREWS - TX |
        Then User clicks on MapSettings under Surface & Bottom section->Color By then select Attribute field
            | AttributeField  |
            | Completion Date |

@23794 @regression @map_settings 
    Scenario:Verify the "Isopach Maps" layers under Map Settings > Cultural Layers for saved search(Attribute Search)

        Given User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State | County       |
            | TEXAS | HOUSTON - TX |
        Then click on 'Save' option and provide the below name and 'SAVE' the search
            | MySavedSearch   |
            | My Saved Search |
        Then User click on the saved search icon in side bar menu and click the above saved search
        Then User clicks on MapSettings Icon in the right corner lower of the page
        Then expand "Culture Layers" Section
        Then Check the "TGS Stratigraphic Model Outlines" option in the culture layers and verify applied to maps
            | CultureLayerOption               |
            | TGS Stratigraphic Model Outlines |
        Then expand "TGS Stratigraphic Models" Section
        Then click on "Permian Basin"
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
        # Then User refresh the page
        # Then User click on the saved search icon in side bar menu and click the above saved search
        # Then User clicks on MapSettings Icon in the right corner lower of the page
        # Then expand "Culture Layers" Section
        # Then Check the "TGS Stratigraphic Model Outlines" option in the culture layers and verify applied to maps
        #     | CultureLayerOption               |
        #     | TGS Stratigraphic Model Outlines |
        # Then expand "TGS Stratigraphic Models" Section
        # Then click on "Permian Basin"
        # Then click on "Isopach Map"
        # Then Check "04 San Andreas" Layer and verify applied to maps
        #     | IsopachMapOptions |
        #     | 04 San Andreas    |
        # Then expand "Base Map Style" Section
        # Then Verify "04 San Andreas" Layer is applied for all the base maps
        #     | BaseMapOptions |
        #     | Topographic    |
        # Then User clicks on search icon in side bar menu
        # Then User click the dropdown next to save button
        # Then User click on the save option
        # Then User clicks on 'Reset' button in side panel
        # Then User click on the saved search icon in side bar menu and click the above saved search
        # Then Check "04 San Andreas" Layer and verify applied for retrieved saved search
        #     | IsopachMapOptions |
        #     | 04 San Andreas    |

    @32194 @regression
    Scenario:31436 - Verify R360 in Export - All rows from the grid are selected
        Given User clicks on search icon in side bar menu
        Then User selects below attribute search criteria and clicks on 'Search' button in side panel
            | State  |
            | ALASKA |
        Then User checks UWI checkbox
        Then Click the 3 dots on top of the grid and click R360
        Then User Validates error page once after clicking on OPEN IN NEW WINDOW popup