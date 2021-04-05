Feature: The Internet Guinea Pig Website

        Scenario Outline: As a user, I can log into the secure area

            Given I am on the main page
             When I click Annual cover starting option
             Then I should be redirected to Annual cover page


            Given I am on the main page
             When I click Single cover trip starting option
             Then I should be redirected to Single cover trip page

            Given I am on the main page
             When I click hamburger button
             Then Hamburger menu is expanded
             When I click support icon
             Then Support window is opened




