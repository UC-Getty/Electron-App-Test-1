Feature: todo
As a user
I want to input 1 to the First Number input and 2 to the Second Number input
So I can add the two numbers together

    @demo
    Scenario: Number input and addition
        Given a user has opened the application
        And a user has input "1" into the First Number input
        And a user has input "2" into the Second Number input
        When the user clicks the Add Numbers button
        Then the application should display a "3"