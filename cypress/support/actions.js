function waitElement(el) {
    cy.log('Waiting for ' + el + ' element to be visible')
    cy.get(el, { timeout: 10000 }).should('be.visible')
    cy.log('Found the element ' + el)
}

function waitElement_index(el, index) {
    try {
        cy.log('Waiting for ' + el + ' Index ' + index + ' to be visible')
        cy.get(el).eq(index, {timeout: 10000} )
        cy.log('Found the element ' + el)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return waitElement_index;
}

function loadPage(url) {
    try {
        cy.log(`Waiting to load ${url}`)
        cy.visit(url)
        cy.log('Loaded the URL ' + url)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return waitElement_index;
}

function set(el, text, option) {
    waitElement(el)
    try {
        cy.get(el).type(text, option)
        cy.log('Set the information in the ' + el)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return set;
}

function set_Index(el, text, index) {
    waitElement(el)
    try {
        cy.get(el).eq(index).type(text)
        cy.log('Set the information in ' + el + ' with index ' + index)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return set_Index;
}

function click(el) {
    waitElement(el)
    try {
        cy.get(el).click();
        cy.log('Clicked on the Element ' + el)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return click;
}

function clickForce(el) {
    waitElement(el)
    try {
        cy.get(el).click({force: true});
        cy.log('Clicked on the Element with Force ' + el)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return click;
}

function click_index(el, index) {
    waitElement_index(el, index)
    try {
        cy.get(el).eq(index).click();
        cy.log('Clicked on the Element ' + el + ' with Index ' + index)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return click_index;
}

function click_indexForce(el, index) {
    waitElement_index(el, index)
    try {
        cy.get(el).eq(index).click( {force: true} );
        cy.log('Clicked on the Element with Force ' + el + ' with Index ' + index)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return click_index;
}

function click_text(el, text) {
    waitElement(el)
    try {
        cy.get(el).and('contain', text).click();
        cy.log('Clicked on the Element ' + el + ' with text ' + text)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return click_text;
}

function clear(el) {
    waitElement(el)
    try {
        cy.get(el).clear();
        cy.log('Cleaned on the Element ' + el)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return clear;
}

function clear_index(el, index) {
    waitElement_index(el, index)
    try {
        cy.get(el).eq(index).clear();
        cy.log('Cleaned on the Element ' + el + ' with index ' + index)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return clear_index;
}

function get_text(el) {
    waitElement(el)
    let text
    try {
        text = cy.get(el).invoke('text');
        cy.log('Found the Element ' + el + ' with the text ' + text)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return text;
}

function get_texts(el, index1, index2) {
    waitElement(el)
    try {
        return cy.get(el).then($elements => {
            const text1 = $elements.eq(index1).text().trim();
            const text2 = $elements.eq(index2).text().trim();
            return [text1, text2]
        })      
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
}

function get_text_index(el, index) {
    waitElement(el)
    let text
    try {
        text = cy.get(el).eq(index).invoke('text');
        cy.log('Found the ' + el + ' with the index ' + index + ' and the text ' + text)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return text;
}

function scrollTo(el) {
    waitElement(el)
    try {
        cy.get(el).scrollIntoView();
        cy.log('Viewed the Element ' + el)
    } catch (error) {
        cy.log('Exception caught: ' + error.message);
    }
    return scrollTo;
}

function replaceIN(el, v1, v2) {
    waitElement(el)
    let corretValue = '';
    try {
    cy.get(el)
        .should('be.visible')
        .invoke('text')
        .then(text => {
            corretValue = text.replace(v1, v2);
            cy.log('Element text ' + el + ' obtained successfully: ' + text);
            cy.log('Corrected text: ' + corretValue);
        })} catch (error) {
            cy.log('Exception caught when getting element text ' + el + ': ' + error.message);
        }
    return corretValue;
}

function splitIn(el, index) {
    waitElement(el)
    let corretValue = '';
    try {
    cy.get(el)
        .should('be.visible')
        .invoke('text')
        .then(text => {
            corretValue = text.split(' ')[index];
            cy.log('Element text ' + el + ' obtained successfully: ' + text);
            cy.log('Split text: ' + corretValue);
        })} catch (error) {
            cy.log('Exception caught when getting element text ' + el + ': ' + error.message);
        }
    return corretValue;
}

function listLength(el, qtd) {
    cy.get(el, { timeout: 10000 }).should('exist').and('have.length', qtd)
    cy.log('Viewed the Element ' + el + ' with length ' + qtd)
}

module.exports = {
    set, click, waitElement, waitElement_index, click_index, 
        clear, get_text, scrollTo, get_text_index, replaceIN, splitIn,
            click_text, loadPage, set_Index, clickForce, click_indexForce, clear_index,
                get_texts, listLength
};