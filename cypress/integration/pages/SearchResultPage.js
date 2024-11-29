class SearchResultPage {

    getThreeDotIcon() {
        return cy.get('svg[data-testid="MoreHorizIcon"]')
    }

    getThreeDotMenuOptions() {
        return cy.get('ul.MuiList-root  li[role="menuitem"] span.MuiTypography-root')
    }
    getMinimizearrow(){
        cy.get('div[class*="grid-header-section"] div[class="grid-toolbar-control"] button svg[data-testid="KeyboardDoubleArrowDownIcon"]')
    }
    getExportAsExcelOption() {
        return cy.get('svg[data-testid="FileDownloadOutlinedIcon"]')
    }
    getShowOrHideColumnsOption(){
        return cy.get('svg[data-testid="ViewWeekSharpIcon"]')
    }
    getAttributeTextField(){
        return cy.get('input.MuiInput-input');
    }
}

export default SearchResultPage