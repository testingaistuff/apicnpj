# Documentation: `SupplierRepository.java`

## Overview
The `SupplierRepository` interface is a data structure that serves as a repository for managing `Supplier` entities. It leverages Spring Data JPA to provide CRUD operations and query capabilities for the `Supplier` entity without requiring explicit implementation of methods.

## Purpose
This repository is designed to interact with the database layer for `Supplier` entities. By extending `JpaRepository`, it inherits a wide range of methods for database operations, such as saving, updating, deleting, and querying entities.

## Key Components

### Package
The class is part of the `com.example.supplier.repository` package, which likely organizes repository-related classes for the application.

### Annotations
- **`@Repository`**: Marks the interface as a Spring-managed bean, indicating that it is a repository component in the application context.

### Interface Declaration
```java
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
```
- **`Supplier`**: The entity type managed by this repository.
- **`Long`**: The type of the primary key for the `Supplier` entity.

### Inheritance
The interface extends `JpaRepository`, which provides:
- Predefined methods for CRUD operations (`save`, `findById`, `delete`, etc.).
- Pagination and sorting capabilities.
- Query derivation based on method names.

## Insights
- **No Custom Methods**: The repository does not define any custom methods, relying entirely on the default functionality provided by `JpaRepository`.
- **Entity Dependency**: The repository is tightly coupled with the `Supplier` entity, which must be properly annotated as a JPA entity (`@Entity`) and have a primary key of type `Long`.
- **Spring Integration**: The use of `@Repository` ensures seamless integration with Spring's dependency injection and transaction management.

## Usage
This repository can be injected into service classes or controllers to perform database operations on `Supplier` entities. Example usage:
```java
@Autowired
private SupplierRepository supplierRepository;

Supplier supplier = supplierRepository.findById(1L).orElse(null);
supplierRepository.save(new Supplier(...));
```

## Table: Key Features of `JpaRepository`
| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `save()`                 | Persists a new entity or updates an existing one.                          |
| `findById()`             | Retrieves an entity by its primary key.                                    |
| `delete()`               | Deletes an entity or a collection of entities.                            |
| `findAll()`              | Retrieves all entities in the database.                                   |
| Pagination and Sorting   | Supports paginated and sorted queries using `Pageable` and `Sort`.         |


