import React from 'react';

const SupplierList = (suppliers) => {
    return (
        <div>
            <h2>Supplier List</h2>
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