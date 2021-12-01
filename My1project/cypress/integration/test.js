it('Test', function() {
    // Open my home page
    cy.visit('https://joshwoodcolour.com/')
    cy.viewport(1920, 1080)

    // Click on the button "ALL PRODUCTS"
    cy.wait(5000)
    cy.get(':nth-child(5) > .site-nav__item > div > .site-nav__link > .site-nav__text').click({force: true})
    force: true

    // Click on the button "customize"
    cy.wait(5000)
    cy.get('.products-list-grid > :nth-child(1)')
    //cy.get(':nth-child(1) > .product-list-item__info > .button').click()
    cy.get(':nth-child(1) > .product-list-item__info > .button').click({ force: true })
    
    // Select random “Select Base Colour”, “Select Tone” 
    // Validate that Validate that “Colour” and “Tone” are selected
    
    function randomPurchaseGeneration() {
        function getRandomInt() {
            return Math.floor(Math.random() * 2) + 1;
        }
        var random = getRandomInt()
        if(random == 1) {
            cy.wait(5000)
            cy.get('.pdp-selection-filters__item--active').click({ force: true })
            function RandomForDark() {
                return Math.floor(Math.random() * 5) + 1;
            }
            var randomForDark = RandomForDark()
            if (randomForDark == 1) {
                cy.get(':nth-child(1) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click({force: true}).should('be.visible')
                cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click({force: true}).should('be.visible')
            }
            else if (randomForDark == 2) {
                cy.wait(5000)
                cy.get(':nth-child(1) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click({force: true})
                cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click({force: true}).should('be.visible')
            }
            else if (randomForDark == 3) {
                cy.get(':nth-child(1) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(3) > img').click({force: true})
                function RandomForDark_point3() {
                    return Math.floor(Math.random() * 3) + 1;
                }
                var randomForDark_point3 = RandomForDark_point3()
                if (randomForDark_point3 == 1) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click({force: true}).should('be.visible')
                }
                else if (randomForDark_point3 == 2) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click().should('be.visible')
                }
                else if (randomForDark_point3 == 3) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(3) > img').click().should('be.visible')
                }
            }
            else if (randomForDark == 4) {
                cy.get(':nth-child(1) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(4) > img').click({force: true})
                function RandomForDark_point4() {
                    return Math.floor(Math.random() * 6) + 1;
                }
                var randomForDark_point4 = RandomForDark_point4()
                if (randomForDark_point4 == 1) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click().should('be.visible')
                }
                else if (randomForDark_point4 == 2) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click().should('be.visible')
                }
                else if (randomForDark_point4 == 3) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(3) > img').click().should('be.visible')
                }
                else if (randomForDark_point4 == 4) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(4) > img').click().should('be.visible')
                }
                else if (randomForDark_point4 == 5) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(5) > img').click().should('be.visible')
                }
                else if (randomForDark_point4 == 6) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(6) > img').click().should('be.visible')
                }
            }
            else if (randomForDark == 5) {
                cy.get(':nth-child(1) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(5) > img').click({force: true})
                function RandomForDark_point5() {
                    return Math.floor(Math.random() * 6) + 1;
                }
                var randomForDark_point5 = RandomForDark_point5()
                if (randomForDark_point5 == 1) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click().should('be.visible')
                }
                else if (randomForDark_point5 == 2) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click().should('be.visible')
                }
                else if (randomForDark_point5 == 3) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(3) > img').click().should('be.visible')
                }
                else if (randomForDark_point5 == 4) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(4) > img').click().should('be.visible')
                }
                else if (randomForDark_point5 == 5) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(5) > img').click().should('be.visible')
                }
                else if (randomForDark_point5 == 6) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(6) > img').click().should('be.visible')
                }
            }
        }
        else if(random == 2) {
            cy.wait(5000)
            cy.get('.pdp-selection__filters > :nth-child(2)').click({ force: true })
            function RandomForLight() {
                return Math.floor(Math.random() * 6) + 1;
            }
            var randomForLight = RandomForLight()
            if (randomForLight == 1) {
                cy.get(':nth-child(1) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(6) > img').click()
                function RandomForLight_point1() {
                    return Math.floor(Math.random() * 6) + 1;
                }
                var randomForLight_point1 = RandomForLight_point1() 
                if (randomForLight_point1 == 1) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click().should('be.visible')
                }
                else if (randomForLight_point1 == 2) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click().should('be.visible')
                }
                else if (randomForLight_point1 == 3) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(3) > img').click().should('be.visible')
                }
                else if (randomForLight_point1 == 4) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(4) > img').click().should('be.visible')
                }
                else if (randomForLight_point1 == 5) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(5) > img').click().should('be.visible')
                }
                else if (randomForLight_point1 == 6) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(6) > img').click().should('be.visible')
                }
            }
            else if (randomForLight == 2) {
                cy.get(':nth-child(1) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(7) > img').click()
                function RandomForLight_point2() {
                    return Math.floor(Math.random() * 4) + 1;
                }
                var randomForLight_point2 = RandomForLight_point2() 
                if (randomForLight_point2 == 1) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click().should('be.visible')
                }
                else if (randomForLight_point2 == 2) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click().should('be.visible')
                }
                else if (randomForLight_point2 == 3) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(3) > img').click().should('be.visible')
                }
                else if (randomForLight_point2 == 4) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(4) > img').click().should('be.visible')
                }
            }
            else if (randomForLight == 3) {
                cy.get(':nth-child(8) > img').click()
                function RandomForLight_point3() {
                    return Math.floor(Math.random() * 4) + 1;
                }
                var randomForLight_point3 = RandomForLight_point3() 
                if (randomForLight_point3 == 1) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click().should('be.visible')
                }
                else if (randomForLight_point3 == 2) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click().should('be.visible')
                }
                else if (randomForLight_point3 == 3) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(3) > img').click().should('be.visible')
                }
                else if (randomForLight_point3 == 4) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(4) > img').click().should('be.visible')
                }
            }
            else if (randomForLight == 4) {
                cy.get(':nth-child(1) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(9) > img').click({force: true})
                function RandomForLight_point4() {
                    return Math.floor(Math.random() * 3) + 1;
                }
                var randomForLight_point4 = RandomForLight_point4()
                if (randomForLight_point4 == 1) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click().should('be.visible')
                }
                else if (randomForLight_point4 == 2) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click().should('be.visible')
                }
                else if (randomForLight_point4 == 3) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(3) > img').click().should('be.visible')
                }
            }
            else if (randomForLight == 5) {
                cy.get(':nth-child(10) > img').click()
                function RandomForLight_point5() {
                    return Math.floor(Math.random() * 2) + 1;
                }
                var randomForLight_point5 = RandomForLight_point5()
                if (randomForLight_point5 == 1) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click().should('be.visible')
                }
                else if (randomForLight_point5 == 2) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click().should('be.visible')
                }
            }
            else if (randomForLight == 6) {
                cy.get(':nth-child(11) > img').click()
                function RandomForLight_point6() {
                    return Math.floor(Math.random() * 2) + 1;
                }
                var randomForLight_point6 = RandomForLight_point6()
                if (randomForLight_point6 == 1) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(1) > img').click().should('be.visible')
                }
                else if (randomForLight_point6 == 2) {
                    cy.get(':nth-child(2) > .pdp-selection-level__flex > .pdp-selection-level__row > :nth-child(2) > img').click().should('be.visible')
                }
            }
        }
    }
    randomPurchaseGeneration()

    // Select “Auto delivery”
    cy.wait(5000)
    cy.get('.product-miracle-select__control').click({force: true})

    // Click on “Delivery every N weeks” and choose random one
    function RandomForDelivery() {
        return Math.floor(Math.random() * 8) + 2;
    }
    var Delivery = RandomForDelivery()
    if (Delivery == 2) {
        cy.wait(5000)
        cy.contains('Delivery every 2 weeks').click({force: true})
    }
    else if(Delivery == 3) {
        cy.contains('Delivery every 3 weeks').click({force: true})
    }
    else if(Delivery == 4) {
        cy.contains('Delivery every 4 weeks').click({force: true})
    }
    else if(Delivery == 5) {
        cy.contains('Delivery every 5 weeks').click({force: true})
    }
    else if(Delivery == 6) {
        cy.contains('Delivery every 6 weeks').click({force: true})
    }
    else if(Delivery == 7) {
        cy.contains('Delivery every 7 weeks').click({force: true})
    }
    else if(Delivery == 8) {
        cy.contains('Delivery every 8 weeks').click({force: true})
    }

    // Click on “add to bag”
    cy.get('.product-miracle-actions > .button').click({force: true})

    // Close appeared window by pressing on “x” on the top right corner
    cy.wait(5000)
    cy.get('.header__cart-icon').click({force: true})
    cy.wait(5000)
    cy.get('.container').not('be.visible') 
    cy.get('.cart-footer').not('be.visible')   

    // Validate that “Bag” contains 1 item
    cy.get('.header__cart-icon > span').contains('1') 
    
    // Click on “Bag”
    cy.get('.header__cart-icon > span').click({force: true})
     
    // Validate that down there is exactly selected by you item
    /*
    
    
    cy.wait(5000)
    cy.get('.cart-item__title').should('have.class', '.pdp-info__title bold')                                 problem 13  
    
    
    */

    // Click “Remove” button
    cy.get('.cart-item__remove').click({force: true})

    // Validate that there is no items in the “Bag”
    cy.get('.cart-empty__text').contains('Your cart is currently empty.')

    // Click “Continue shopping” button
    cy.get('.cart-empty__button').click({force: true})

    // Being on the same page add the same random items in to the “Bag”
    randomPurchaseGeneration()
    cy.wait(5000)
    cy.get('.product-miracle-select__control').click({force: true})
    function RandomForDelivery() {
        return Math.floor(Math.random() * 8) + 2;
    }
    var Delivery = RandomForDelivery()
    if (Delivery == 2) {
        cy.wait(5000)
        cy.contains('Delivery every 2 weeks').click({force: true})
    }
    else if(Delivery == 3) {
        cy.contains('Delivery every 3 weeks').click({force: true})
    }
    else if(Delivery == 4) {
        cy.contains('Delivery every 4 weeks').click({force: true})
    }
    else if(Delivery == 5) {
        cy.contains('Delivery every 5 weeks').click({force: true})
    }
    else if(Delivery == 6) {
        cy.contains('Delivery every 6 weeks').click({force: true})
    }
    else if(Delivery == 7) {
        cy.contains('Delivery every 7 weeks').click({force: true})
    }
    else if(Delivery == 8) {
        cy.contains('Delivery every 8 weeks').click({force: true})
    }
    cy.get('.product-miracle-actions > .button').click({force: true})

    // Open bag and add one more same item by pressing “+” button  
    cy.get('.cart-item__qty > .0 ').click()               

    // With purchase window
    
    // Press “checkout” button
    cy.get('.cart-footer__checkout').click()

})