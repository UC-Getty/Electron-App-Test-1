Feature: todo
As a user
I want to login
So I can add the hello world page
 
    @demo
    Scenario: Number input and addition
        Given the user is on the 'LEARN ELECTRON!' page
        Given a user has input their '<username>'
        And a user has input their '<password>'
        When the user clicks login button
        Then the user sees "Welcome to your Electron application."
    
    Examples:
        | username | password |
        | test | 12345678 |
        | wrongusername | 12345 |