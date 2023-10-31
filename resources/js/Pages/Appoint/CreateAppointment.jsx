import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, usePage, Link } from '@inertiajs/react';
import { Checkbox } from '@material-tailwind/react';
import { ImgCard } from '@/Components/ImgCard';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
// import { BreadcrumbsLinks } from '@/Components/Breadcrumbs';
import { Chatbox } from '@/Pages/Chatbox';

const AppointmentForm = (props) => {

    const user = usePage().props.auth.preference;
    const { auth } = props
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        vehicle_id: props.vehicles.id,
        startDate: '',
        endDate: '',        
        pickup_loc: '',
        dropoff_loc: '',      
        
    });
    
    const [checkPickup, setCheckPickup] = useState(true)
    const [checkDropoff, setCheckDropoff] = useState(true)

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('appoint.store'), data);
    };

    const handlePickupCheckbox = () => {
        
        setCheckPickup(!checkPickup);
        setData('pickup_loc', checkPickup ? user.pickup_loc : ''); 
    };

    const handleDropoffCheckbox = () => {
        setCheckDropoff(!checkDropoff);
        setData('dropoff_loc', checkDropoff ? user.dropoff_loc : ''); // Clear the dropoff_loc if using different
    };
    

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointment</h2>}
        >
            <div className="py-12">
                <div className="w-full mx-auto sm:px-6 lg:px-8">                
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Link href={route('appointment')}
                            className='mt-6 ml-8 flex items-center justify-center w-32 h-8 rounded-xl bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100'> 
                            Back 
                        </Link>
                        <div className="p-12 grid grid-cols-2 gap-4">                            
                            <div className='flex w-full h-auto'>
                                <ImgCard id={props.vehicles.id} model={props.vehicles.model} driver={props.vehicles.driver} rate={props.vehicles.rate} 
                                    ratings={props.vehicles.ratings} img={props.vehicles.img} description={props.vehicles.description}/>
                            </div>                     
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Create an Appointment</h2>
                                <form onSubmit={handleSubmit}>                                        
                                    <div className='flex w-full gap-2'>
                                        <div className="mb-4 w-full ">
                                            <InputLabel htmlFor="startDate" value="Start Date" className='text-black'/>
                                            <TextInput
                                                id="startDate"
                                                type="date"
                                                name="startDate"
                                                value={data.startDate}
                                                className="mt-1 block w-full"
                                                autoComplete="startDate"
                                                isFocused={true}
                                                onChange={(e) => setData('startDate', e.target.value)}
                                            />
                                            <InputError message={errors.startDate} className="mt-2" />
                                        </div>
                                        <div className="mb-4 w-full ">
                                            <InputLabel htmlFor="endDate" value="End Date" className='text-black'/>
                                            <TextInput
                                                id="endDate"
                                                type="date"
                                                name="endDate"
                                                value={data.endDate}
                                                className="mt-1 block w-full"
                                                autoComplete="endDate"
                                                isFocused={true}
                                                onChange={(e) => setData('endDate', e.target.value)}
                                            />
                                            <InputError message={errors.endDate} className="mt-2" />
                                        </div>
                                    </div>
                                                            
                                    <div className="mb-4">
                                        <InputLabel htmlFor="pickup_loc" value="Pick up Location" className='text-black'/>
                                        <TextInput
                                            id="pickup_loc"
                                            type="text"
                                            name="pickup_loc"
                                            value={data.pickup_loc}
                                            className="mt-1 block w-full"
                                            autoComplete="pickup_loc"
                                            isFocused={true}
                                            onChange={(e) => setData('pickup_loc', e.target.value)}
                                        />
                                        <InputError message={errors.pickup_loc} className="mt-2" />
                                                                                
                                        <div className='flex items-center text-gray-600 text-xs hover:cursor-pointer' onClick={handlePickupCheckbox}>
                                            <Checkbox checked={checkPickup} className='h-4 w-4 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0'/>
                                            Use different Pickup Location
                                        </div>
                                    </div> 
                                    <div className="mb-4">
                                                                                                           
                                        <InputLabel htmlFor="dropoff_loc" value="Drop off location" className='text-black'/>
                                            <TextInput
                                            id="dropoff_loc"
                                            type="text"
                                            name="dropoff_loc"
                                            value={data.dropoff_loc}
                                            className="mt-1 block w-full"
                                            autoComplete="dropoff_loc"
                                            isFocused={true}
                                            onChange={(e) => setData('dropoff_loc', e.target.value)}
                                        />
                                        <InputError message={errors.dropoff_loc} className="mt-2" />

                                        <div className='flex items-center text-gray-600 text-xs hover:cursor-pointer' onClick={handleDropoffCheckbox}>
                                            <Checkbox checked={checkDropoff} className='h-4 w-4 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0'/>
                                            Use different Drop off Location
                                        </div>
                                    </div>
                            
                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                                        >
                                            Create Appointment
                                        </button>
                                    </div>
                                </form>
                            </div>                                            
                        </div>
                        <Chatbox user={auth.user.id}vehiclesId={props.vehicles.id}/>
                    </div>
                    
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
};

export default AppointmentForm;
