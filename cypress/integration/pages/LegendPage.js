class LegendPage {

    getLegendOption() {
        return cy.get('button[area-label="LEGEND"]')
    }

    LegendIcon() {
        return cy.get('.legends-card > .MuiCardHeader-root > .MuiCardHeader-content > .MuiTypography-root')
    }

}
export default LegendPage;