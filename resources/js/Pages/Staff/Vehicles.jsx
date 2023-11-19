import React, { useState,useEffect } from 'react';
import StaffAuthenticated from '@/Layouts/StaffAuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { Button, Form, Input, Radio, Select,Checkbox } from 'antd';

import VehiclesTable from '@/Components/VehiclesTable';
import Modal from '@/Components/Modal';
import AdminAuthenticated from '@/Layouts/AdminAuthenticatedLayout';
export default function Vehicles({ auth }) {

    const [form] = Form.useForm();
    const [create,setCreate] = useState(false);
    const [modelVal,setModelVal] = useState('');
    const [formLayout, setFormLayout] = useState('horizontal');
    
    const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
    
       
    const deleteVehicle = async (vehicleId) => {
        
        try {
            await axios.delete(`/api/staff/vehicles/${vehicleId}/delete`);
            
        } catch (error) {
            console.error('Error approving appointment:', error);
            setError('Error approving appointment');
        }
          window.location.reload();
    }
   
    const handleChange = (value) => {        
        setModelVal(value)       
    };
    const handleClick = () => {        
        setCreate(!create);
    }

    const onFinish = (values) => {
        values.img = modelVal
        values.ratings = 0
        values.occupied = 0
        values.rate = 0

        axios.post('/api/staff/vehicles/add', values)
        .then(response => {
            // Handle success
            console.log('Successfully sent data to the server:', response.data);
        })
        .catch(error => {
            // Handle error
            console.error('Error sending data to the server:', error);
        });
        
    };
    return (
        auth.user.access == 2 ? (
            <StaffAuthenticated
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vehicles List</h2>}
            >
            <Head title="Vehicle" />

            <div className="py-12 h-screen">
                <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4">
                            
                            <h3 className="text-lg font-semibold mt-4">Add New Vehicle</h3>
                                                                                                    
                            <button 
                                className='m-4 text-black px-4 py-2 rounded-md bg-blue-200 hover:bg-blue-400 flex gap-2'
                                onClick={handleClick}
                            >
                                
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                Create
                            </button>                                                                        
                            <VehiclesTable vehicles={usePage().props.vehicles} onDelete={deleteVehicle}/>
                        </div>

                        <div className={`p-4 ${create ? 'block' : 'hidden'}`}>
                            <h3 className="text-lg font-semibold mb-4 mt-4">Add New Vehicle</h3>
                            <Form
                                {...formItemLayout}
                                layout={formLayout}
                                form={form}
                                initialValues={{
                                    layout: formLayout,
                                }}
                                // onValuesChange={onFormLayoutChange}
                                style={{
                                    maxWidth: formLayout === 'inline' ? 'none' : 600,
                                }}
                                onFinish={onFinish}
                                > 
                                <Form.Item label="Model: " name='model'>
                                    <Select                                                                      
                                        style={{ width: 120 }}
                                        onChange={handleChange}
                                        options={[
                                            { value: 'l300', label: 'L300' },
                                            { value: 'motor', label: 'Motorcycle' },
                                            { value: 'car', label: 'Car' },
                                            { value: 'bike', label: 'Bike' },
                                            { value: 'ebike', label: 'E-Bike' },
                                            { value: 'multicab', label: 'Multicab' },
                                            { value: 'tric', label: 'Tricycle' },
                                            { value: 'van', label: 'Van' },                                        
                                        ]}
                                    />
                                </Form.Item>
                                <Form.Item label="img" name='img' className='hidden'>
                                    <input placeholder="Enter Name" />
                                </Form.Item>
                                <Form.Item label="ratings" name='ratings' className='hidden'>
                                    <input placeholder="Enter Name" />
                                </Form.Item>
                                <Form.Item label="rate" name='rate' className='hidden'>
                                    <input placeholder="Enter Name" />
                                </Form.Item>
                                <Form.Item label="occupied" name='occupied' className='hidden'>
                                    <input placeholder="Enter Name" />
                                </Form.Item>
                                <Form.Item label="Driver" name='driver'>
                                    <Input placeholder="Enter Name" />
                                </Form.Item>
                                <Form.Item label="Description" name='description'>
                                    <Input placeholder="Add any description" />
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" className='bg-blue-500' htmlType="submit">Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            </StaffAuthenticated>
        ) : (
            <AdminAuthenticated
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vehicles List</h2>}
            >
                <Head title="Vehicle" />

                <div className="py-12 h-screen">
                    <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-4">
                                
                                <h3 className="text-lg font-semibold mt-4">Add New Vehicle</h3>
                                                                                                        
                                <button 
                                    className='m-4 text-black px-4 py-2 rounded-md bg-blue-200 hover:bg-blue-400 flex gap-2'
                                    onClick={handleClick}
                                >
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    Create
                                </button>                                                                        
                                <VehiclesTable vehicles={usePage().props.vehicles} onDelete={deleteVehicle}/>
                            </div>

                            <div className={`p-4 ${create ? 'block' : 'hidden'}`}>
                                <h3 className="text-lg font-semibold mb-4 mt-4">Add New Vehicle</h3>
                                <Form
                                    {...formItemLayout}
                                    layout={formLayout}
                                    form={form}
                                    initialValues={{
                                        layout: formLayout,
                                    }}
                                    // onValuesChange={onFormLayoutChange}
                                    style={{
                                        maxWidth: formLayout === 'inline' ? 'none' : 600,
                                    }}
                                    onFinish={onFinish}
                                    > 
                                    <Form.Item label="Model: " name='model'>
                                        <Select                                                                      
                                            style={{ width: 120 }}
                                            onChange={handleChange}
                                            options={[
                                                { value: 'l300', label: 'L300' },
                                                { value: 'motor', label: 'Motorcycle' },
                                                { value: 'car', label: 'Car' },
                                                { value: 'bike', label: 'Bike' },
                                                { value: 'ebike', label: 'E-Bike' },
                                                { value: 'multicab', label: 'Multicab' },
                                                { value: 'tric', label: 'Tricycle' },
                                                { value: 'van', label: 'Van' },                                        
                                            ]}
                                        />
                                    </Form.Item>
                                    <Form.Item label="img" name='img' className='hidden'>
                                        <input placeholder="Enter Name" />
                                    </Form.Item>
                                    <Form.Item label="ratings" name='ratings' className='hidden'>
                                        <input placeholder="Enter Name" />
                                    </Form.Item>
                                    <Form.Item label="rate" name='rate' className='hidden'>
                                        <input placeholder="Enter Name" />
                                    </Form.Item>
                                    <Form.Item label="occupied" name='occupied' className='hidden'>
                                        <input placeholder="Enter Name" />
                                    </Form.Item>
                                    <Form.Item label="Driver" name='driver'>
                                        <Input placeholder="Enter Name" />
                                    </Form.Item>
                                    <Form.Item label="Description" name='description'>
                                        <Input placeholder="Add any description" />
                                    </Form.Item>
                                    <Form.Item >
                                        <Button type="primary" className='bg-blue-500' htmlType="submit">Submit</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminAuthenticated>
        )    
    );
}
