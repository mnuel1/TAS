import React from 'react';
import { Select, Space } from 'antd';


export default function AccessSelect ({accessLevel}) {
      
    const handleChange = (value) => {
        accessLevel(value)
        console.log(accessLevel);
    };


    return(
        <Space wrap>
            <Select
            defaultValue="1"
            style={{
                width: '100%',
            }}
            onChange={handleChange}
            options={[
                {
                    value: '1',
                    label: 'User',
                },
                {
                    value: '2',
                    label: 'Staff',
                },
                {
                    value: '3',
                    label: 'Admin',
                },                                
            ]}
            />            
        </Space>
    );
  
    };
