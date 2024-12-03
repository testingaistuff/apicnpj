# FILE: /supplier-react-app/supplier-react-app/README.md

# Supplier React App

This is a React application that allows users to manage suppliers. It provides functionality to list all suppliers and create new suppliers through a form.

## Project Structure

- **public/index.html**: The main HTML file for the React application.
- **src/components/SupplierForm.js**: A form component for creating a new supplier.
- **src/components/SupplierList.js**: A component that fetches and displays a list of suppliers.
- **src/App.js**: The main application component that renders the form and list components.
- **src/index.js**: The entry point of the React application.
- **src/services/supplierService.js**: Contains functions for making API calls to the backend.
- **package.json**: Configuration file for npm.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd supplier-react-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Use the form to add new suppliers by filling in the required fields and submitting the form.
- The list of suppliers will be displayed below the form, showing all the suppliers fetched from the backend.

## License

This project is licensed under the MIT License.