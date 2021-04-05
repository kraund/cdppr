Feature: Code&Pepper test

        Scenario Outline: User is able to reach main page and choose "Annual cover" option
            Given I am on the main page
             When I click Annual cover starting option
             Then I should be redirected to Annual cover page

        Scenario Outline: User is able to reach main page and choose "Single cover trip" option
            Given I am on the main page
             When I click Single cover trip starting option
             Then I should be redirected to Single cover trip page

        Scenario Outline: Hamburger button, hamburger menu and support window work correctly
            Given I am on the main page
             When I click hamburger button
             Then Hamburger menu is expanded
             When I click support icon
             Then Support window is opened




