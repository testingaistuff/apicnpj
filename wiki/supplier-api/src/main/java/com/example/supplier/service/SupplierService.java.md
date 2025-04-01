# SupplierService Documentation

## Overview
The `SupplierService` class is a service layer in a Spring-based application that manages operations related to suppliers. It interacts with the `SupplierRepository` to perform CRUD (Create, Read, Update, Delete) operations on supplier entities. Additionally, it validates supplier data using utility methods before persisting or updating records.

---

## Class Details

### Package
`com.example.supplier.service`

### Annotations
- `@Service`: Indicates that this class is a Spring service component, making it eligible for Spring's component scanning and dependency injection.

---

## Dependencies

### Injected Dependencies
| Dependency              | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| `SupplierRepository`     | Repository interface for database operations on `Supplier` entities.       |
| `CodigoUtil`             | Utility class for validating supplier-related data, such as CNPJ format.   |

---

## Methods

### `createSupplier(Supplier supplier)`
Creates a new supplier in the database after validating the CNPJ.

#### Parameters
| Name       | Type       | Description                     |
|------------|------------|---------------------------------|
| `supplier` | `Supplier` | The supplier entity to create. |

#### Returns
| Type       | Description                     |
|------------|---------------------------------|
| `Supplier` | The saved supplier entity.      |

#### Exceptions
| Type                        | Description                     |
|-----------------------------|---------------------------------|
| `IllegalArgumentException`  | Thrown if the CNPJ is invalid. |

---

### `getAllSuppliers()`
Retrieves all suppliers from the database.

#### Returns
| Type            | Description                     |
|-----------------|---------------------------------|
| `List<Supplier>` | List of all supplier entities. |

---

### `getSupplierById(Long id)`
Fetches a supplier by its unique identifier.

#### Parameters
| Name | Type   | Description                     |
|------|--------|---------------------------------|
| `id` | `Long` | The unique ID of the supplier. |

#### Returns
| Type                  | Description                     |
|-----------------------|---------------------------------|
| `Optional<Supplier>`  | The supplier entity wrapped in an `Optional`. |

---

### `updateSupplier(Long id, Supplier supplierDetails)`
Updates an existing supplier's details after validating the CNPJ.

#### Parameters
| Name              | Type       | Description                     |
|-------------------|------------|---------------------------------|
| `id`              | `Long`     | The unique ID of the supplier. |
| `supplierDetails` | `Supplier` | The updated supplier details.  |

#### Returns
| Type       | Description                     |
|------------|---------------------------------|
| `Supplier` | The updated supplier entity.   |

#### Exceptions
| Type                        | Description                     |
|-----------------------------|---------------------------------|
| `IllegalArgumentException`  | Thrown if the CNPJ is invalid. |
| `RuntimeException`          | Thrown if the supplier is not found. |

---

### `deleteSupplier(Long id)`
Deletes a supplier by its unique identifier.

#### Parameters
| Name | Type   | Description                     |
|------|--------|---------------------------------|
| `id` | `Long` | The unique ID of the supplier. |

#### Returns
| Type      | Description                     |
|-----------|---------------------------------|
| `boolean` | `true` if the supplier was successfully deleted. |

#### Exceptions
| Type             | Description                     |
|------------------|---------------------------------|
| `RuntimeException` | Thrown if the supplier is not found. |

---

## Insights

1. **Validation Logic**: The class uses `CodigoUtil.isValidCNPJ()` to ensure that the CNPJ (Cadastro Nacional da Pessoa Jurídica) is valid before creating or updating a supplier. This ensures data integrity and compliance with business rules.

2. **Error Handling**: The service throws specific exceptions (`IllegalArgumentException` and `RuntimeException`) to handle invalid data and missing entities, respectively. This provides clear feedback to the caller.

3. **CRUD Operations**: The class implements all CRUD operations, making it a complete service layer for managing suppliers.

4. **Optional Usage**: The `getSupplierById` method returns an `Optional<Supplier>`, which is a good practice to handle potential null values and avoid `NullPointerException`.

5. **Spring Integration**: The use of `@Service` and `@Autowired` annotations ensures seamless integration with the Spring framework for dependency injection and service management.

6. **Encapsulation of Business Logic**: The service encapsulates business logic, such as validation and exception handling, ensuring that the repository layer focuses solely on data persistence.
