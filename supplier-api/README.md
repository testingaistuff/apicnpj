# Supplier API

This project is a Spring Boot application that provides a RESTful API for managing suppliers. It uses an H2 in-memory database for data storage and supports CRUD operations.

## Project Structure

```
supplier-api
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── supplier
│   │   │               ├── SupplierApplication.java
│   │   │               ├── controller
│   │   │               │   └── SupplierController.java
│   │   │               ├── model
│   │   │               │   └── Supplier.java
│   │   │               ├── repository
│   │   │               │   └── SupplierRepository.java
│   │   │               └── service
│   │   │                   └── SupplierService.java
│   │   └── resources
│   │       ├── application.properties
│   │       └── data.sql
│   └── test
│       └── java
│           └── com
│               └── example
│                   └── supplier
│                       └── SupplierApplicationTests.java
├── mvnw
├── mvnw.cmd
└── pom.xml
```

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd supplier-api
   ```

2. Run the application using Maven:
   ```
   ./mvnw spring-boot:run
   ```

### API Endpoints

- **Create Supplier**: `POST /suppliers`
- **Get All Suppliers**: `GET /suppliers`
- **Get Supplier by ID**: `GET /suppliers/{id}`
- **Update Supplier**: `PUT /suppliers/{id}`
- **Delete Supplier**: `DELETE /suppliers/{id}`

### Database

The application uses an H2 in-memory database. Sample data can be initialized using the `data.sql` file located in the `src/main/resources` directory.

### Running Tests

To run the tests, use the following command:
```
./mvnw test
```

## License

This project is licensed under the MIT License.