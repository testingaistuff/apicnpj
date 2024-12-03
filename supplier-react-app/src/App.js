import React from 'react';
import SupplierForm from './components/SupplierForm';
import SupplierList from './components/SupplierList';
import { getAllSuppliers, createSupplier } from './services/supplierService';

function App() {
    return (
        <div className="App">
            <h1>Supplier Management</h1>
            <SupplierForm />
            <SupplierList />
        </div>
    );
}

export default App;