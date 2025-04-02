# SupplierForm Component Documentation

## Overview
The `SupplierForm` component is a React-based form designed to create supplier records. It includes input fields for supplier details such as name, CNPJ (Brazilian company registration number), contact name, contact email, and contact phone number. The form validates the CNPJ format and ensures all fields are filled before submission. Upon successful validation, the form interacts with a service to persist the supplier data.

---

## Technology Overview

### Imports and Packages
| **Import/Package**       | **Description**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| `React`                  | A JavaScript library for building user interfaces. Used here to create the component and manage state. |
| `useState`               | A React Hook that allows managing state within functional components.           |
| `InputMask`              | A library for masking input fields. Used to enforce the format of the CNPJ field. |
| `createSupplier`         | A function imported from `supplierService`. It handles the API call to create a supplier record. |

---

## Component Structure

### State Management
The component uses two state variables:
1. **`supplier`**: An object containing the supplier's details (`nome`, `cnpj`, `nomeContato`, `emailContato`, `telefoneContato`).
2. **`error`**: A string to store error messages for validation or API failures.

### Form Fields
The form includes the following fields:
- **Nome**: Text input for the supplier's name.
- **CNPJ**: Masked input for the supplier's CNPJ, formatted as `99.999.999/9999-99`.
- **Nome Contato**: Text input for the contact person's name.
- **Email Contato**: Email input for the contact person's email.
- **Telefone Contato**: Text input for the contact person's phone number.

---

## Key Functions

### `handleChange`
- **Purpose**: Updates the `supplier` state when a form field changes.
- **Logic**: Extracts the `name` and `value` from the event object and updates the corresponding field in the `supplier` state.

### `validateCNPJ`
- **Purpose**: Validates the format and checksum of the CNPJ.
- **Logic**:
  - Removes non-numeric characters.
  - Ensures the CNPJ has 14 digits.
  - Implements checksum validation using the standard algorithm for CNPJ verification.
- **Returns**: `true` if the CNPJ is valid, otherwise `false`.

### `handleSubmit`
- **Purpose**: Handles form submission.
- **Logic**:
  - Prevents default form submission behavior.
  - Validates that all fields are filled.
  - Validates the CNPJ using `validateCNPJ`.
  - Calls the `createSupplier` service to persist the data.
  - Resets the form state upon successful submission.
  - Sets an error message if validation fails or the API call encounters an error.

---

## Insights

### Validation
The CNPJ validation is robust, ensuring both format and checksum correctness. This is critical for applications dealing with Brazilian business entities.

### Error Handling
The component provides user feedback for validation errors and API failures, enhancing the user experience.

### Input Masking
The use of `InputMask` ensures that the CNPJ field adheres to the required format, reducing user input errors.

### State Reset
After successful submission, the form resets its state, preparing it for new entries without requiring a page reload.

### Service Integration
The `createSupplier` function abstracts the API interaction, making the component reusable and decoupled from backend implementation details.

---

## Dependencies
| **Dependency**       | **Purpose**                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| `react-input-mask`    | Provides input masking functionality for the CNPJ field.                   |
| `supplierService`     | Contains the `createSupplier` function for API interaction.                |

---

## Potential Enhancements
- **Field Validation**: Add validation for email and phone number formats.
- **Loading State**: Introduce a loading indicator during API calls.
- **Error Details**: Display detailed error messages from the API response.
