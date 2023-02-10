Feature: todo
As a user
I want to login
So I can add the hello world page


    @demo
    Scenario: Number input and addition
        Given the user is on the 'LEARN ELECTRON!' page
        Given a user has input their username '<username>'
        Given a user has input their password '<password>'
        When the user clicks login button
        # Then the user sees "Welcome to your Electron application."
        Then the user sees '<prompt>'
    
    Examples:
        | username | password | prompt |
        | test | 12345678 | Welcome to your Electron application. |
        | wrongusername | 12345 | LOGIN FAILED |