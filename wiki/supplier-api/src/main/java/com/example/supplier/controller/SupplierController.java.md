# SupplierController Documentation

## Overview
The `SupplierController` is a RESTful controller in a Spring Boot application that manages CRUD operations for `Supplier` entities. It provides endpoints for creating, reading, updating, and deleting suppliers. The controller interacts with the `SupplierService` to perform business logic and data manipulation.

## File Metadata
- **File Name**: `SupplierController.java`

## Endpoints

### 1. **Get All Suppliers**
   - **URL**: `/api/suppliers`
   - **HTTP Method**: `GET`
   - **Description**: Retrieves a list of all suppliers.
   - **Response**: 
     - **200 OK**: Returns a list of `Supplier` objects.

### 2. **Get Supplier by ID**
   - **URL**: `/api/suppliers/{id}`
   - **HTTP Method**: `GET`
   - **Description**: Fetches a specific supplier by its ID.
   - **Path Variable**:
     - `id` (Long): The ID of the supplier to retrieve.
   - **Response**:
     - **200 OK**: Returns the `Supplier` object if found.
     - **404 Not Found**: If no supplier exists with the given ID.

### 3. **Create Supplier**
   - **URL**: `/api/suppliers`
   - **HTTP Method**: `POST`
   - **Description**: Creates a new supplier.
   - **Request Body**:
     - A `Supplier` object containing the details of the supplier to be created.
   - **Response**:
     - **201 Created**: Returns the created `Supplier` object.

### 4. **Update Supplier**
   - **URL**: `/api/suppliers/{id}`
   - **HTTP Method**: `PUT`
   - **Description**: Updates an existing supplier's details.
   - **Path Variable**:
     - `id` (Long): The ID of the supplier to update.
   - **Request Body**:
     - A `Supplier` object containing the updated details.
   - **Response**:
     - **200 OK**: Returns the updated `Supplier` object if successful.
     - **404 Not Found**: If no supplier exists with the given ID.

### 5. **Delete Supplier**
   - **URL**: `/api/suppliers/{id}`
   - **HTTP Method**: `DELETE`
   - **Description**: Deletes a supplier by its ID.
   - **Path Variable**:
     - `id` (Long): The ID of the supplier to delete.
   - **Response**:
     - **204 No Content**: If the supplier was successfully deleted.
     - **404 Not Found**: If no supplier exists with the given ID.

## Dependencies
- **Spring Framework**:
  - `@RestController`: Marks the class as a RESTful controller.
  - `@RequestMapping`: Maps the base URL for the controller.
  - `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`: Maps HTTP methods to specific handler methods.
  - `ResponseEntity`: Used to build HTTP responses with appropriate status codes.
- **SupplierService**: A service layer that handles business logic for supplier operations.
- **Supplier**: A model class representing the supplier entity.

## Insights
- **Error Handling**: The controller uses `ResponseEntity` to handle cases where a supplier is not found, ensuring proper HTTP status codes (`404 Not Found`).
- **Dependency Injection**: The `SupplierService` is injected using `@Autowired`, promoting loose coupling and testability.
- **RESTful Design**: The controller adheres to REST principles, using appropriate HTTP methods for CRUD operations.
- **Scalability**: The design allows for easy extension of functionality, such as adding filters or pagination for the `getAllSuppliers` endpoint.
