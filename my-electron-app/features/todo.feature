Feature: todo
As a user
I want to login
So I can add the hello world page
 
    Scenario: Number input and addition
        Given the user is on the 'LEARN ELECTRON!' page
        And a user has inputs their username '<username>'
        And a user has inputs their password '<password>'
        When the user clicks login button
        Then the user sees "Welcome to your Electron application."
    
    Examples:
        | username | password |
        | test | 12345678 |
        | wrongusername | wrongpassword |