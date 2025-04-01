# Documentation: GlobalExceptionHandler.java

## Overview
The `GlobalExceptionHandler` class is a centralized exception handling mechanism for a Spring Boot application. It uses the `@ControllerAdvice` annotation to intercept exceptions thrown by controllers and provide custom responses. This approach ensures consistent error handling across the application.

## Features
- Handles specific exceptions such as `ConstraintViolationException` and `IllegalArgumentException`.
- Provides a fallback mechanism for handling generic exceptions.
- Returns meaningful HTTP responses with appropriate status codes and error messages.

## Code Structure

### Annotations Used
| Annotation         | Purpose                                                                 |
|--------------------|-------------------------------------------------------------------------|
| `@ControllerAdvice`| Marks the class as a global exception handler for controllers.          |
| `@ExceptionHandler`| Specifies the type of exception to handle and maps it to a handler method.|

### Exception Handling Methods
| Method Name                          | Exception Type                  | HTTP Status Code         | Description                                                                 |
|--------------------------------------|----------------------------------|--------------------------|-----------------------------------------------------------------------------|
| `handleConstraintViolationException` | `ConstraintViolationException`  | `400 BAD_REQUEST`        | Handles validation errors caused by constraint violations.                 |
| `handleIllegalArgumentException`     | `IllegalArgumentException`      | `400 BAD_REQUEST`        | Handles errors caused by invalid arguments passed to methods.              |
| `handleException`                    | `Exception`                     | `500 INTERNAL_SERVER_ERROR` | Handles all other uncaught exceptions and logs the stack trace.            |

### Error Response Structure
The `ErrorResponse` object encapsulates the error details returned in the HTTP response. It includes:
- **Status Code**: The HTTP status code as a string.
- **Message**: A descriptive error message.

## Insights
- **Centralized Error Handling**: By using `@ControllerAdvice`, the application ensures that all exceptions are handled in a single place, improving maintainability and reducing boilerplate code in controllers.
- **Custom Error Messages**: The error responses are tailored to provide meaningful feedback to the client, enhancing the user experience.
- **Logging**: The `handleException` method logs the stack trace of uncaught exceptions, aiding in debugging and error tracking.
- **Extensibility**: Additional exception handler methods can be added to handle other specific exceptions as needed.

## Dependencies
- **Spring Framework**: Provides annotations like `@ControllerAdvice` and `@ExceptionHandler`.
- **Jakarta Validation**: Used for handling `ConstraintViolationException`.

## File Metadata
| Key         | Value                     |
|-------------|---------------------------|
| **File Name** | `GlobalExceptionHandler.java` |
