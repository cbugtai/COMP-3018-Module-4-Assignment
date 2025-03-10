# Debugging Analysis

## Scenario 1: Authentication Middleware

-   **Breakpoint Location:** authentication.ts line 43
-   **Objective:** How the Firebase Authentication verifies ID tokens

### Debugger Observations

-   **Variable States:** token = {a valid token}
                         res.locals.role = "officer"
                         res.locals.uid = "krebQq3WsbbzUAgyFNPlCZ9Lr7u2"
-   **Call Stack:** The GetLoans Endpoint gets called and it goes through the authenticate function
-   **Behavior:** The authenticate function parses the authorization header from the request and grabs the token.
                If the token exists, it tries to verifiy that token with firebases auth.verifyIdToken function. if the token is valid,
                firebase returns a DecodedIdToken object that contains information about the token which includes email, role, and uid.
                once the authenticate functions gets the DecodedidToken object, it parses it, grabs the role and uid and 
                attaches it to the request and then passes it to the next function in the route.

### Analysis

-   I understood how the authenticaton middleware works better
-   I did not observe any unexpected behavior, the code was working as expected
-   The DecodedIdToken object contains a lot of information including stuff like if the email is a verified email.
    we can use that data to make the authentication more robust
-   I use firebase authentication for all my endpoints in my project so understanding how it works better will allow me to
    take advantage of its capabilities for other aspects of my project or to improve my authentication code.

## Scenario 2: Role-Based Access Control

-   **Breakpoint Location:** authorization.ts Line 25
-   **Objective:** How the authorization middleware enforces role restrictions

### Debugger Observations

-   **Variable States:** AuthorizationOptions.hasRole = [ "admin", "officer" ]
                        res.locals.role = "user" 
-   **Call Stack:** The reviewLoans endpoint gets called, the request goes through the authentication middleware and passes it with attached role 
                    and uid then sends the request to the isAuthorized function with the { hasRole: ["admin", "manager"] } argument.
-   **Behavior:** The isAuthorized function parses the request and grabs the role in the request then it checks if the role exists, 
                if it does the it then checks if the role of the request is included in the allowed role of the endpoint. In this case
                the role of the request is "user" and the allowed roles are "admin" and "officer" so the function sends an 
                INSUFFICIENT_ROLE error to the next fuction.


### Analysis

-   This shows how simple this function really is, it simply compares the user role to the allowed roles for the endpoint.
-   I did not observe any unexpected behavior, the code was working as expected
-   This code is so simple I dont really know how to improve it further, there was some extra code in 
    the function that my project isn't using so i deleted it.
-   I suppose it shows me that middelware doesnt have to be anything complicated, it can be simple a function 
    that changes/checks a piece of data from the request then passes it off to the next one.

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