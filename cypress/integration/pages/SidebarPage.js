class SidebarPage {
    getSidebarSearchIcon() {
        return cy.get('div.sidebar-menu svg[data-testid="SearchIcon"]')
    }

    getUwiSearchTab() {
        return cy.get('div[aria-label="sidebar-tabs"] button:nth-child(2)')
    }

    getStateFilterCombobox() {
        return cy.get('input[placeholder="State/Province"]')
    }
    getBasinCombobox() {
        return cy.get('input[placeholder="Basin"]')
    }
    getFieldNameCombobox(){
        return cy.get('input[placeholder="Field Name"]')
    }
    getProducingFormationCombobox(){
        return cy.get('input[placeholder="Producing Formation"]')
    }
    
    getTGSOperatorCombobox() {
        return cy.get('input[placeholder="TGS Operator"]')
    }
    getCountyFilterCombobox() {
        return cy.get('input[placeholder="County"]')
    }
    getWellStatusCombobox() {
        return cy.get('input[placeholder="Well Status"]')
    }
    getComboboxOptions() {
        return cy.get('div.MuiAutocomplete-popper li span[class="option-label"]')
    }
    getSavedSearchIcon() {
        return cy.get('div.sidebar-menu svg[data-testid="SavedSearchRoundedIcon"]');
    }
    getDefaultDashboardIcon() {
        return cy.get('div.sidebar-menu button.menu-icon-box:nth-child(1)');
    }
    getFilterCombobox() {

        return cy.get('div.autocomplete-textfield-root input')
    }
    getOptionLabelNames(){
        return cy.get('div.MuiAutocomplete-paper ul li span:nth-child(1)')
    }

    getAttributeSearchTab() {
        return cy.get('div[aria-label="sidebar-tabs"] button:nth-child(1)');
    }
    getSelectedComboboxOptions() {
        return cy.get('div span.MuiChip-label')
    }

    getSidePanelFooterButtons() {
        return cy.get('div.search-panel-footer button')
    }

    getShapesPanel() {
        return cy.get('div[class="polygon-search"] div[class="polygon-buttons-container"] button')
    }
    getDrawButtonOption() {
        //return cy.get('button[class*="MuiButtonBase-root"] span[class*="MuiButton-endIcon"] svg[data-testid="ArrowRightIcon"]');
        return cy.get('button[type="button"] span[class="MuiButton-endIcon MuiButton-iconSizeMedium css-1n4a93h"] svg[data-testid="ArrowRightIcon"]')
    }
    getDrawButton() {
        return cy.get('div[class="polygon-search"] div[class="polygon-buttons-container"] button')
    }
    getPolygonOption() {
        return cy.get('div[class*="MuiPaper-root"] ul[class*="MuiList-root"] li[value="Polygon"] div img[class="draw-controls-icon"]');
    }
    getExpectedWellCount() {
        return cy.get('div.search-panel-footer div.expected-well-counts p.well-count-value:visible');
    }
    // li[id='tags-outlined-option-0'] span[class='option-label']

    // div.MuiAutocomplete-popper li span[class='option-label']
    getDrawArrowRightIcon() {
        return cy.get('button[type="button"] span[class="MuiButton-endIcon MuiButton-iconSizeMedium css-1n4a93h"] svg[data-testid="ArrowRightIcon"]')
    }

    getPolygonIcon() {
        return cy.get('div[class*="MuiPaper-root"] ul[class*="MuiList-root"] li[value="Polygon"] div img[class="draw-controls-icon"]')
    }

    getCavasMap() {
        return cy.get('#map')
    }
    getAttributeTextField() {
        return cy.get('input.MuiInput-input');
    }
    getTGSOperatorFilterCombobox() {
        return cy.get('input[placeholder="TGS Operator"]')
    }
    getDashboardArrowButton() {
        return cy.get('button.css-bgokul svg[data-testid="ChevronLeftIcon"]');
    }
    getThreeDotVerticalIcon() {
        return cy.get('[data-testid="MoreVertIcon"]')
    }

    getExportEnabledLabel() {
        return cy.get('div[class="export-card-label"]')
    }

    getExportDisabledLabel() {
        return cy.get('button[class*="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium Mui-disabled"]')
    }
    getSaveSearchField() {
        return cy.get('div[role="dialog"] div[class*="MuiInputBase-root"] input[placeholder="My Saved Search"]')
    }

    getSaveIcon() {
        return cy.get('div[role="dialog"] div[class*="MuiDialogActions-root"] button')
    }
}

export default SidebarPage