import React, { useState, useEffect } from 'react';
import SupplierForm from './components/SupplierForm';
import SupplierList from './components/SupplierList';
import { getAllSuppliers, createSupplier } from './services/supplierService';

const App = () => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        fetchSuppliers();
    }, []);

    const fetchSuppliers = async () => {
        try {
            const response = await getAllSuppliers();
            setSuppliers(response);
        } catch (error) {
            console.error('Error fetching suppliers:', error);
        }
    };

    const handleSupplierCreated = async (supplier) => {
        try {
            await createSupplier(supplier);
            fetchSuppliers(); // Refresh the supplier list
        } catch (error) {
            console.error('Error creating supplier:', error);
        }
    };

    return (
        <div>
            <h1>Supplier Management</h1>
            <SupplierForm onSupplierCreated={handleSupplierCreated} />
            <SupplierList suppliers={suppliers} />
        </div>
    );
};

export default App;