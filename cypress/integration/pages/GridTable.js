class GridTable {

    SelectAllrowsCheckbox(){
        return cy.get('input[aria-label="Select all rows"]')
    }

    HorizontalIcon() {
        return cy.get('svg[data-testid="MoreHorizIcon"]')
    }


    ShoworHideColumnsOption(){
        return cy.contains('Show or Hide Columns')
    }

    ShoworHideColumnsSearchBox(){
        return cy.get('input[class="MuiInputBase-input MuiInput-input MuiInputBase-inputSizeSmall css-1yrz7eg"]')
    }

    ShoworHideColumnsDropdownValues(){
        return cy.get('.grid-toggle-columns-form > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiTypography-root')
    }
    ToggleButton(){
        return cy.get('span[class="MuiSwitch-thumb css-19gndve"]')
    }
    Slantrow(){
        return cy.get('div[aria-label="Slant"] div[class="MuiDataGrid-columnHeaderTitleContainerContent"]')
    }

    SlantrowTripleDotsVerticalIcon(){
        return cy.get('div[data-field="Slant"] div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]')
    }
   
    StateWellIDrow(){
        return cy.get('div[aria-label="State Well ID"] div[class="MuiDataGrid-columnHeaderTitleContainerContent"]')
    }
    StateWellIDTripleDotsVerticalIcon(){
        return cy.get('div[data-field="StateWellID"] div[class*="MuiDataGrid-menuIcon"] button svg[data-testid="TripleDotsVerticalIcon"]')
    }

    ZtoASort(){
        return cy.contains('Sort Z to A')
    }
}

export default GridTable