class ZoomLevel {

    ZoomValue() {
        return cy.get('div[class="map-action"] ul[class*="map-left-action"] div button p')
    }

    ZoomLevels() {
        return cy.get('div[class="map-action"] ul[class*="map-left-action"] button p')
    }

}

export default ZoomLevel