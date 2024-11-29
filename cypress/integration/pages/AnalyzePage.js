class AnalyzeScreen{
 
    getAnalyzeIcon(){
        return cy.get('svg[data-testid="AddCircleOutlineRoundedIcon"]')
    }

    getProductionPlot(){
        //return cy.get('li.MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-divider.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-divider.css-1y1898e span.MuiTouchRipple-root.css-w0pj6f');
        return cy.get('ui li.MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-divider.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-divider.css-1y1898e img[alt="Production Plot Selector"]');
    }
    getTypeCurve(){
       // return cy.get('li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-divider.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-divider.css-1y1898e span.MuiTouchRipple-root css-w0pj6f');
       return cy.get('ui li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-divider.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-divider.css-1y1898e img[alt="Scatter Plot Selector"]');
    }
    getScatterPlot(){
        return cy.get('ui li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-divider.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-divider.css-1y1898e img[alt="Scatter Plot Selector"]');
    }

}
export default AnalyzeScreen