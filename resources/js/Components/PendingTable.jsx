import React from 'react';
import { Space, Table, Tag } from 'antd';

export default function PendingTable({appointments, onApprove, onReject}) {

    
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',    
            render: (text) => <a>{text}</a>,
        },
        
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            width:70,
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
        
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            width: 100,
            },
        {
            title: 'Driver',
            dataIndex: 'driver',
            key: 'driver',
            width: 150,
        },
        
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, { status }) => {
                let color;

                switch (status) {
                    case 'Pending':
                    color = 'orange';
                    break;
                    case 'Rejected':
                    color = 'red';
                    break;
                    case 'Approved':
                    color = 'green';
                    break;
                }
                                       
                return (
                    <>
                      <Tag color={color} key={status}>
                        {status.toUpperCase()}
                      </Tag>
                    </>
                  );                                                  
            },
            fixed: 'right',
            width:100,
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            width:250,
            render: (_, record) => (
                <Space size="middle">
                    <a
                        className='bg-blue-200 p-2 rounded-md hover:text-blue-900 hover:bg-blue-100'
                        onClick={() => onApprove(record.user_id,record.vehicle_id)}
                    >
                        Approve
                    </a>
                    {record.status === 'Rejected' ? (
                        <div>

                        </div>
                    ) : (
                        <a className='bg-red-200 p-2 rounded-md hover:text-red-900 hover:bg-red-100'
                        onClick={() => onReject(record.user_id,record.vehicle_id)}
                        >
                            Reject
                        </a>
                    )}
                    
                </Space>
            ),
        },
        
    ];
    
    const data = appointments.map(appointment => {
                  
        // Get the current date and format it
        const dateNow = new Date().getFullYear();
        const bday = new Date(appointment.user.birthday).getFullYear();
        
        // Calculate the age by subtracting birth year from the current year
        const age = dateNow - bday;
                                
        return {
            key: appointment.id.toString(),
            user_id: appointment.user_id,
            vehicle_id:appointment.vehicle.id,
            name: appointment.user.name,
            age: age,
            email: appointment.user.email,          
            address: appointment.user.address,
            number: appointment.user.number,
            model: appointment.vehicle.model,
            driver: appointment.vehicle.driver,

            status: appointment.status,
        };
    });

    return(
        <Table columns={columns} dataSource={data} 
            scroll={{
                x: 1000,
                y: 300,
            }}
        />
    );

}


