class ProductionPlot {

    getAnalyzeIcon() {
        return cy.get('.modules-menu-container > .analyze-button-container > .MuiButtonBase-root')
    }

    getProductionCurve() {
        return cy.get('div[class*="MuiPaper-root MuiMenu-paper"]  li[class*="MuiButtonBase-root"]  img[alt="Production Plot Selector"]:visible')
    }

    getThreeDotMenuIcon() {
        return cy.get('div[class="plot-chart-toolbar"] [data-testid="MoreHorizIcon"]')
    }

    getSettingsIcon() {
        return cy.get('[data-testid="SettingsIcon"]')
    }

    getGroupwellbyAttributeBtn() {
        return cy.get('label[class*="MuiFormControlLabel-root"] [value="ATTRIBUTES"]')
    }

    getGroupbyField() {
        return cy.get('[id="groupby-select"]')
    }

    getGroupbyFieldvalues() {
        return cy.get('li[class*="MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1bo1rz0"]')
    }

    getSaveIcon() {
        return cy.get('[data-testid="SaveIcon"]')
    }

    getProductionChartGroups() {
        return cy.get('div div div div div div div div div svg g g g g g text[class="legendtext"]')
    }

    getProductionPlotChartMousehover(){
        return cy.get('div[class="plot-chart-container"] svg[class="main-svg"] [class="draglayer cursor-crosshair"] [class="xy"] [class="nsewdrag drag"]')
    }

    getTypeCurve() {
        return cy.get('.css-1sucic7 > .MuiPaper-root > .MuiList-root > :nth-child(3) > img')
    }

    getChartYAxislabel() {
        return cy.get('div div div div div div div div div svg g g text[data-unformatted="Daily Production Rate / Volume"]:visible')
    }
}

export default ProductionPlot