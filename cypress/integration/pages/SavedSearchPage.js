class SavedSearchPage {

    getSavedSearchRoundedIcon() {
        return cy.get('div.sidebar-menu svg[data-testid="SavedSearchRoundedIcon"]')
    }

    getSavedSearchValues() {
        return cy.get('.saved-search-content ul div div div div li div div h5')
    }

}

export default SavedSearchPage