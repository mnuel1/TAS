import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, usePage } from '@inertiajs/react';
import { Checkbox } from '@material-tailwind/react';
import { ImgCard } from '@/Components/ImgCard';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

export function CheckboxCustomStyles() {
    return (
        <Checkbox
            defaultChecked
            ripple={false}
            className="h-4 w-4 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
        />
    );
}


const AppointmentForm = (props, auth) => {

    const user = usePage().props.auth.preference;
    
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        vehicle_id: '',
        startDate: '',
        endDate: '',        
        pickup_loc: '',
        dropoff_loc: '',      
        
    });

    // const [formData, setFormData] = useState({
    //     startDate: '',
    //     endDate: '',        
    //     pickup_location: '',
    //     dropoff_location: '',
        
    // });
    const [checkPickup, setCheckPickup] = useState(true)
    const [checkDropoff, setCheckDropoff] = useState(true)

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('appoint.store'), data);
    };

    const handlePickupCheckbox = (e) => {
        setCheckPickup(true);
        
    }

    const handleDropoffCheckbox = (e) => {
        setCheckDropoff(true)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointment</h2>}
        >
            <div className="py-12">
                <div className="w-full mx-auto sm:px-6 lg:px-8">                
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-12 grid grid-cols-2 gap-4">   
                            <div className='flex w-full h-auto'>
                                <ImgCard id={props.vehicles.id} model={props.vehicles.model} driver={props.vehicles.driver} rate={props.vehicles.rate} 
                                    ratings={props.vehicles.ratings} img={props.vehicles.img} description={props.vehicles.description}/>
                            </div>                     
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Create an Appointment</h2>
                                <form onSubmit={handleSubmit}>
                                        <TextInput
                                                id="vehicle_id"
                                                type="text"
                                                name="vehicle_id"
                                                value={props.vehicles.id}
                                                className="mt-1 w-full hidden"
                                                autoComplete="username"
                                                isFocused={true}
                                                onChange={(e) => setData('vehicle_id', e.target.value)}
                                        />
                                    <div className='flex w-full gap-2'>
                                        <div className="mb-4 w-full ">
                                            <InputLabel htmlFor="startDate" value="Pick up Location" className='text-white'/>
                                            <TextInput
                                                id="startDate"
                                                type="date"
                                                name="startDate"
                                                value={data.startDate}
                                                className="mt-1 block w-full"
                                                autoComplete="username"
                                                isFocused={true}
                                                onChange={(e) => setData('startDate', e.target.value)}
                                            />
                                            <InputError message={errors.startDate} className="mt-2" />
                                        </div>
                                        <div className="mb-4 w-full ">
                                            <InputLabel htmlFor="endDate" value="Pick up Location" className='text-white'/>
                                            <TextInput
                                                id="endDate"
                                                type="date"
                                                name="endDate"
                                                value={data.endDate}
                                                className="mt-1 block w-full"
                                                autoComplete="username"
                                                isFocused={true}
                                                onChange={(e) => setData('endDate', e.target.value)}
                                            />
                                            <InputError message={errors.endDate} className="mt-2" />
                                        </div>
                                    </div>
                                                            
                                    <div className="mb-4">
                                    <InputLabel htmlFor="pickup_loc" value="Pick up Location" className='text-white'/>
                                        <TextInput
                                        id="pickup_loc"
                                        type="text"
                                        name="pickup_loc"
                                        value={data.pickup_location}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('pickup_loc', e.target.value)}
                                    />
                                    <InputError message={errors.pickup_loc} className="mt-2" />

                                        {/* {checkPickup ? (
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={formData.pickup_location}
                                                onChange={handleChange}
                                                className="mt-1 p-2 w-full border rounded-md"
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={data.pickup_loc}
                                                onChange={handleChange}
                                                className="mt-1 p-2 w-full border rounded-md"
                                            />
                                        )} */}
                                        
                                        <div className='flex items-center text-gray-600 text-xs '>
                                            <CheckboxCustomStyles onChange={handlePickupCheckbox}/>
                                            Use different Pickup Location
                                        </div>
                                    <div className="mb-4">
                                    </div>
                                    
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                                            Drop off Location:
                                        </label>
                                        <InputLabel htmlFor="dropoff_loc" value="Drop off location" className='text-white'/>
                                            <TextInput
                                            id="dropoff_loc"
                                            type="text"
                                            name="dropoff_loc"
                                            value={data.dropoff_location}
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('dropoff_loc', e.target.value)}
                                        />
                                        <InputError message={errors.dropoff_loc} className="mt-2" />

                                        <div className='flex items-center text-gray-600 text-xs '>
                                        <CheckboxCustomStyles onClick={handleDropoffCheckbox} checked={checkDropoff} />
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
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
};

export default AppointmentForm;
