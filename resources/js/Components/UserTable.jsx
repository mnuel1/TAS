import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',        
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',        
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Number',
        key: 'number',
        dataIndex: 'number',    
        width: 120,
    },
];


export default function UserTable ({users}) {
    
    const data = users.map(user => {

        // Get the current date and format it
        const dateNow = new Date().getFullYear();
        const bday = new Date(user.birthday).getFullYear();
        
        // Calculate the age by subtracting birth year from the current year
        const age = dateNow - bday;

        return {
            key: user.id.toString(),
            user_id: user.id,
            name: user.name,
            age: age,
            email: user.email,          
            address: user.address,
            number: user.number,

        }       
    });
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return(  
        <Table columns={columns} dataSource={data} onChange={onChange} />
    );
    
} 
    
 