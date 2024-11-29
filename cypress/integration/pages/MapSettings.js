class MapSettings {

    MapSettingsIcon() {
        return cy.get('button[aria-label="MAP SETTINGS"]')
    }

    ColorByFieldValue() {
        return cy.get('.well-color-container > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select')
    }
   AttributeValue(){
    return cy.get('li[data-value="attribute"]')
   }
    
   AttributeField(){
       return cy.get('.well-color-container > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
   }

   AttributeFieldDropDownValues(){
       return cy.get('ul[class="MuiAutocomplete-listbox css-1yn9syo"] li[role="option"]')
   }

   BottomHoleLocationCheckbox(){
       //return cy.get('body > div:nth-child(3) > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > label:nth-child(1) > span:nth-child(1) > input:nth-child(1)')
    return cy.get('div[class*="MuiCollapse-entered css-c4sutr"] span[class*="MuiCheckbox-colorPrimary MuiCheckbox-root MuiCheckbox-colorPrimary css-11r0csu"] input[type="checkbox"]')
    }

   SurfaceHoleLocationCheckbox(){
       //return cy.get('span[class="MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root MuiCheckbox-root MuiCheckbox-colorPrimary Mui-checked MuiCheckbox-root MuiCheckbox-colorPrimary css-11r0csu"] input[type="checkbox"]')
       return cy.get('label[class*="MuiFormControlLabel-labelPlacementEnd css-kswqkt"] span[class*="Mui-checked MuiCheckbox-root MuiCheckbox-colorPrimary css-11r0csu"] input[type="checkbox"]')
   }
   WellPathCheckbox(){
       return cy.get('label[class*="mapsetting-label css-kswqkt"] span[class*="Mui-checked MuiCheckbox-roo"] input[type="checkbox"]')
   }

   WellLabelCheckbox(){
       return cy.get('div[class*="Mui-expanded custom-accordion css-kg13js"] label:nth-child(2) span:nth-child(1) input:nth-child(1)')
   }

}

export default MapSettings