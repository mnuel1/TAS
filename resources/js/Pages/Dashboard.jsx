// Install dependencies:
// npm install react-chartjs-2 chart.js

import React, { useState, useEffect } from 'react';

import { Chart } from '@/Components/Chart';
const Dashboard = () => {
  const [data, setData] = useState({
    vehicles: 0,
    occupied: 0,
    available: 0,
    users: 0,
    staff: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
            // Fetch data using Axios from your Laravel API endpoints
            const usersResponse = await axios.get('/api/dashboard/users-count');
            const usersData = usersResponse.data;
    
            const staffResponse = await axios.get('/api/dashboard/staffs-count');
            const staffData = staffResponse.data;
    
            const vehiclesResponse = await axios.get('/api/dashboard/vehicles-count');
            const vehiclesData = vehiclesResponse.data;
            // Update the state with the fetched data
            setData({
                vehicles: vehiclesData.vehicles_count,
                occupied: vehiclesData.occupied_count,
                available: vehiclesData.available_count,
                users: usersData.users_count,
                staff: staffData.staffs_count,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    
    fetchData();
  }, []); 

  return (
    <div className="py-12 h-auto">
        <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-4">                    
                    <div className='flex flex-col p-4'>
                        <div className='flex flex-col p-4'>
                            <h2 className='text-2xl font-bold mb-4'>Vehicle Statistics</h2>
                            <div className='flex items-center gap-4'>
                                <div className='bg-gray-100 p-4 rounded-md shadow-md w-72 h-36 
                                flex justify-center items-center hover:bg-gray-200 cursor-pointer mb-4'>
                                    <div className='flex flex-col items-center gap-6'>
                                        <p className='text-2xl'>Total Vehicles </p>
                                        <p className='font-bold'>{data.vehicles}</p>
                                    </div>                                
                                </div>
                                <div className='bg-gray-100 p-4 rounded-md shadow-md w-72 h-36 
                                flex justify-center items-center hover:bg-gray-200 cursor-pointer mb-4'>
                                    <div className='flex flex-col items-center gap-6'>
                                        <p className='text-2xl'>Occupied Vehicles </p>
                                        <p className='font-bold'>{data.occupied}</p>
                                    </div>                                
                                </div>
                                <div className='bg-gray-100 p-4 rounded-md shadow-md w-72 h-36 
                                flex justify-center items-center hover:bg-gray-200 cursor-pointer mb-4'>
                                    <div className='flex flex-col items-center gap-6'>
                                        <p className='text-2xl'>Available Vehicles </p>
                                        <p className='font-bold'>{data.available}</p>
                                    </div>                                
                                </div>
                               
                            </div>
                        </div>
                        <div className='flex flex-col p-4'>
                            <h2 className='text-2xl font-bold mb-4'>User and Staff Statistics</h2>
                            <div className='flex items-center gap-4'>

                                <div className='bg-gray-100 p-4 rounded-md shadow-md w-72 h-36 
                                    flex justify-center items-center hover:bg-gray-200 cursor-pointer mb-4'>
                                    <div className='flex flex-col items-center gap-6'>
                                        <p className='text-2xl'>Total Users </p>
                                        <p className='font-bold'>{data.users}</p>
                                    </div>                                
                                </div>
                                <div className='bg-gray-100 p-4 rounded-md shadow-md w-72 h-36 
                                    flex justify-center items-center hover:bg-gray-200 cursor-pointer mb-4'>
                                    <div className='flex flex-col items-center gap-6'>
                                        <p className='text-2xl'>Total Staff </p>
                                        <p className='font-bold'>{data.staff}</p>
                                    </div>                                
                                </div>                            
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
        </div>
    </div>
     
  );
};

export default Dashboard;
