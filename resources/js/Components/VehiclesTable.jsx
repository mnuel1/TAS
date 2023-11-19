import React from 'react';
import { Space, Table, Tag } from 'antd';

export default function VehiclesTable({vehicles, onDelete}) {

    const columns = [
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
            fixed: 'left',    
            render: (text) => <a>{text}</a>,
            width:100,
        },
        
        // {
        //     title: 'Image',
        //     dataIndex: 'image',
        //     key: 'image',
        //     fixed: 'left',
        //     width:70,
            
        // },
        
        {
            title: 'Driver',
            key: 'driver',
            dataIndex: 'driver',      
            width:200,  
        },
        
        {
            title: 'Ratings',
            dataIndex: 'ratings',
            key: 'ratings',
            width:100,
        },
        
        {
            title: 'Description',
            key: 'description',
            dataIndex: 'description',    
            width: 120,
        },
         
        
        {
            title: 'Occupied',
            key: 'occupied',
            dataIndex: 'occupied',
            render: (_, { occupied }) => {
                let color;
                let text;
                switch (occupied) {
                    case 1:
                    color = 'red';
                    text = 'OCCUPIED'
                    break;
                    case 0:
                    color = 'green';
                    text = 'NOT OCCUPIED'
                    break;                    
                }
                                       
                return (
                    <>
                      <Tag color={color} key={occupied}>
                        {text}
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
            width:150,
            render: (_, record) => (
                <Space size="middle">                                      
                    <a className='bg-red-200 p-2 rounded-md hover:text-red-900 hover:bg-red-100'
                    onClick={() => onDelete(record.vehicle_id)}
                    >
                        Delete
                    </a>                                       
                </Space>
            ),
        },
        
    ];
    
    const data = vehicles.map(vehicle => {

        return {
            key: vehicle.id.toString(),            
            vehicle_id:vehicle.id,
            model: vehicle.model,
            img: vehicle.img,
            driver: vehicle.driver,          
            ratings: vehicle.ratings,
            description: vehicle.description,            
            occupied: vehicle.occupied,
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


