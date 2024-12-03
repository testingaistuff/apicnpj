import React, { useEffect, useState } from 'react';
import { getAllSuppliers, createSupplier } from '../services/supplierService';

const SupplierList = () => {
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

    return (
        <div>
            <h2>Supplier List</h2><button type="button" onClick={fetchSuppliers}>Reload</button>
            <ul>
                {suppliers.map(supplier => (
                    <li key={supplier.id}>
                        {supplier.nome} - {supplier.cnpj} - {supplier.nomeContato} - {supplier.emailContato} - {supplier.telefoneContato}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupplierList;