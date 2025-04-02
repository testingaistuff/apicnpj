# Documentation: Supplier Service Module

## Overview
This module provides functionality to interact with a supplier management API. It includes methods for retrieving all suppliers and creating new suppliers. The module is designed to work with a server running at `http://localhost:8081`.

---

## Technology Overview

### JavaScript ES6 Features
- **`async/await`**: Used for handling asynchronous operations in a readable and maintainable way.
- **Template Literals**: Utilized for constructing dynamic URLs.
- **Object Spread Operator (`...`)**: Used to clone and modify objects.

### Fetch API
The `fetch` function is used to make HTTP requests to the server. It supports promises and is a modern alternative to older methods like `XMLHttpRequest`.

### JSON
The module uses JSON for data serialization and deserialization when communicating with the API.

---

## Functions

### `getAllSuppliers`
#### Description
Fetches all suppliers from the API.

#### Implementation Details
- Sends a `GET` request to the endpoint `/api/suppliers`.
- Checks the response status using `response.ok`. If the request fails, an error is thrown.
- Parses the response body as JSON and returns it.

#### Parameters
None.

#### Return Value
Returns a promise that resolves to an array of supplier objects.

#### Error Handling
Throws an error if the response status is not OK.

---

### `createSupplier`
#### Description
Creates a new supplier by sending supplier data to the API.

#### Implementation Details
- Accepts a supplier object as input.
- Cleans the `cnpj` field by removing all non-numeric characters using a regular expression (`/\D/g`).
- Sends a `POST` request to the endpoint `/api/suppliers` with the cleaned supplier data in the request body.
- Sets the `Content-Type` header to `application/json`.
- Checks the response status using `response.ok`. If the request fails, an error is thrown.
- Parses the response body as JSON and returns it.

#### Parameters
| Parameter | Type   | Description                          |
|-----------|--------|--------------------------------------|
| `supplier`| Object | The supplier data to be sent to the API. |

#### Return Value
Returns a promise that resolves to the created supplier object.

#### Error Handling
Throws an error if the response status is not OK.

---

## Insights

### API Design
- The API endpoints follow RESTful conventions (`/api/suppliers` for both `GET` and `POST` operations).
- The module assumes the server is running locally on port `8081`. This should be configurable for production environments.

### Data Validation
- The `createSupplier` function includes basic data sanitization by cleaning the `cnpj` field. However, additional validation (e.g., checking the format of `cnpj`) could be implemented for robustness.

### Error Handling
- Errors are thrown when the response status is not OK, but the error messages are generic. Consider including more detailed error information from the server response.

### Scalability
- The module is simple and does not include advanced features like retry mechanisms or caching. These could be added for better scalability and performance.

### Security
- The module does not include authentication or authorization mechanisms. If the API requires secure access, token-based authentication (e.g., JWT) should be implemented.

### Maintainability
- The use of ES6 features like `async/await` and the spread operator makes the code clean and maintainable.
- The hardcoded `serverUrl` could be replaced with an environment variable for better configurability.

---

## File Metadata
| Key         | Value                  |
|-------------|------------------------|
| **File Name** | `supplierService.js` |
