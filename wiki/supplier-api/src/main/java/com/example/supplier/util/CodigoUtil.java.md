# Documentation for `CodigoUtil.java`

## Overview

The `CodigoUtil` class provides a utility method to validate Brazilian CNPJ (Cadastro Nacional da Pessoa Jurídica) numbers. CNPJ is a unique identifier assigned to companies in Brazil. The validation process ensures that the provided CNPJ adheres to the official algorithm used for verification.

---

## Class: `CodigoUtil`

### Package
`com.example.supplier.util`

### Purpose
The class is designed to validate CNPJ numbers using the official checksum algorithm. It also includes a `main` method for testing purposes.

---

## Method Details

### `isValidCNPJ(long cnpj)`

#### Description
This method validates a given CNPJ number by:
1. Formatting the input into a 14-digit string.
2. Calculating two verification digits using predefined weight arrays.
3. Comparing the calculated verification digits with the ones in the input.

#### Parameters
| Parameter | Type   | Description                          |
|-----------|--------|--------------------------------------|
| `cnpj`    | `long` | The CNPJ number to be validated.    |

#### Return Value
| Type      | Description                                      |
|-----------|--------------------------------------------------|
| `boolean` | Returns `true` if the CNPJ is valid, otherwise `false`. |

#### Algorithm
1. **Input Validation**: The input is converted to a 14-digit string. If the length is not 14, the method returns `false`.
2. **First Verification Digit**:
   - Multiply the first 12 digits of the CNPJ by the corresponding weights in `weight1`.
   - Compute the sum of the products.
   - Calculate the modulus of the sum by 11.
   - Determine the first verification digit:
     - If the modulus is less than 2, the digit is `0`.
     - Otherwise, the digit is `11 - modulus`.
3. **Second Verification Digit**:
   - Multiply the first 13 digits (including the first verification digit) by the corresponding weights in `weight2`.
   - Compute the sum of the products.
   - Calculate the modulus of the sum by 11.
   - Determine the second verification digit:
     - If the modulus is less than 2, the digit is `0`.
     - Otherwise, the digit is `11 - modulus`.
4. **Validation**:
   - Compare the calculated verification digits with the 13th and 14th digits of the input CNPJ.
   - Return `true` if they match, otherwise `false`.

#### Example Usage
```java
long cnpj = 12345678000195L; // Example CNPJ
boolean isValid = CodigoUtil.isValidCNPJ(cnpj);
System.out.println("CNPJ is valid: " + isValid);
```

---

### `main(String[] args)`

#### Description
A simple test method to demonstrate the usage of the `isValidCNPJ` method. It validates a hardcoded CNPJ and prints the result to the console.

#### Example Output
```
CNPJ is valid: false
```

---

## Insights

1. **CNPJ Validation Algorithm**:
   - The method implements the official CNPJ validation algorithm, which uses two sets of weights (`weight1` and `weight2`) to calculate the verification digits.
   - This ensures compliance with Brazilian standards for CNPJ validation.

2. **Error Handling**:
   - The method includes a `try-catch` block to handle potential exceptions, such as invalid input formats. If an exception occurs, the method returns `false`.

3. **Input Formatting**:
   - The input CNPJ is formatted as a 14-digit string using `String.format`. This ensures that shorter numbers are padded with leading zeros.

4. **Efficiency**:
   - The algorithm is efficient, with a time complexity of O(1) since it processes a fixed number of digits (14).

5. **Limitations**:
   - The method does not handle non-numeric inputs directly, as it expects a `long` type. This could be extended to accept `String` inputs for more flexibility.

6. **Testing**:
   - The `main` method provides a basic example of how to use the utility. For production use, more comprehensive testing with various CNPJ values is recommended.
