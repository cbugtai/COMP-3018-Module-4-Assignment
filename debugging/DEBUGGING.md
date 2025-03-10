# Debugging Analysis

## Scenario 1: Authentication Middleware

-   **Breakpoint Location:** authentication.ts line 43
-   **Objective:** How the authentication middleware works

### Debugger Observations

-   **Variable States:** token = {a valid token}
                         res.locals.role = "officer"
                         res.locals.uid = "krebQq3WsbbzUAgyFNPlCZ9Lr7u2"
-   **Call Stack:** The GetLoans Endpoint gets called and it goes through the authenticate function
-   **Behavior:** The authenticate function parses the authorization header from the request and grabs the token.
                If the token exists, it tries to verifiy that token with firebases auth.verifyIdToken function. firebase
                returns a DecodedIdToken object that contains information about the token which includes email, role, and uid.
                once the authenticate functions gets the DecodedidToken object, it parses it, grabs the role and uid and 
                attaches it to the request and then passes it to the next function in the route.

### Analysis

-   I understood how the authenticaton middleware works better
-   I did not observe any unexpected behavior, the code was working as expected
-   The DecodedIdToken object contains a lot of information including stuff like if the email is a verified email.
    we can use that data to make the authentication more robust
-   I use firebase authentication for all my endpoints in my project so understanding how it works better will allow me to
    take advantage of its capabilities for other aspects of my project or to improve my authentication code.

## Scenario 2: [Title of the Scenario]

-   **Breakpoint Location:** [File and line number]
-   **Objective:** [What you are investigating or trying to understand]

### Debugger Observations

-   **Variable States:** [List key variables and their values]
-   **Call Stack:** [Summarize the function sequence leading to the breakpoint]
-   **Behavior:** [Describe what happens at this point in the program]

### Analysis

-   What did you learn from this scenario?
-   Did you observe any unexpected behavior? If so, what might be the cause?
-   Are there areas for improvement or refactoring in this part of the code?
-   How does this enhance your understanding of the overall project?

## Scenario 3: [Title of the Scenario]

-   **Breakpoint Location:** [File and line number]
-   **Objective:** [What you are investigating or trying to understand]

### Debugger Observations

-   **Variable States:** [List key variables and their values]
-   **Call Stack:** [Summarize the function sequence leading to the breakpoint]
-   **Behavior:** [Describe what happens at this point in the program]

### Analysis

-   What did you learn from this scenario?
-   Did you observe any unexpected behavior? If so, what might be the cause?
-   Are there areas for improvement or refactoring in this part of the code?
-   How does this enhance your understanding of the overall project?