import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { VehicleTypesCard } from '@/Components/VehicleTypesCard';
import { Head } from '@inertiajs/react';
import { useState,useEffect } from 'react'; 
import { useForm, usePage } from '@inertiajs/react';
import  bike  from '../../img/bike.jpg'
import  car  from '../../img/car.jpg'
import  ebike  from '../../img/ebike.jpg'
import  l300  from '../../img/l300.jpg'
import  motor  from '../../img/motor.jpg'
import  multicab  from '../../img/multicab.jpg'
import  tric  from '../../img/tric.jpg'
import  van  from '../../img/van.jpg'
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';


export default function Settings({ auth }) {

    const user = usePage().props.auth.preference;
    
    
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        user_preferred_vehicles_id: user.user_preferred_vehicles_id,
        dropoff_loc: user.dropoff_loc,
        pickup_loc: user.pickup_loc,
        email_notif: user.email_notif,
        sms_notif: user.sms_notif,

    });
    

    const vehicleTypes = [
        {
            value: 1,
            title: 'L300',
            description: 'This is the L300 vehicle. It is a small and efficient cargo van.',
            isPreferred: (data.user_preferred_vehicles_id & 1) === 1 ? true : false,
            imgLink: l300,
        },
        {
            value: 2,
            title: 'Van',
            description: 'The Van is a versatile vehicle often used for transporting passengers or cargo.',
            isPreferred: (data.user_preferred_vehicles_id & 2) === 2 ? true : false,
            imgLink: van,
        },
        {
            value: 4,
            title: 'Car',
            description: 'The Car is a personal vehicle commonly used for daily commuting.',
            isPreferred: (data.user_preferred_vehicles_id & 4) === 4 ? true : false,
            imgLink: car,
        },
        {
            value: 8,
            title: 'Bike',
            description: 'The Bike is a two-wheeled vehicle often used for short-distance travel and exercise.',
            isPreferred: (data.user_preferred_vehicles_id & 8) === 8 ? true : false,
            imgLink: bike,
        },
        {
            value: 16,
            title: 'E-Bike',
            description: 'The E-Bike is an electric bicycle with a motor for easier pedaling.',
            isPreferred: (data.user_preferred_vehicles_id & 16) === 16 ? true : false,
            imgLink: ebike,
        },
        {
            value: 32,
            title: 'Tricycle',
            description: 'The Tricycle is a three-wheeled vehicle used for various purposes, including transportation and cargo delivery.',
            isPreferred: (data.user_preferred_vehicles_id & 32) === 32 ? true : false,
            imgLink: tric,
        },
        {
            value: 64,
            title: 'Multicab',
            description: 'The Multicab is a small, multipurpose vehicle suitable for different transport needs.',
            isPreferred: (data.user_preferred_vehicles_id & 64) === 64 ? true : false,
            imgLink: multicab,
        },
        {
            value: 128,
            title: 'Motorcycle',
            description: 'The Motorcycle is a two-wheeled vehicle powered by an engine, commonly used for personal transportation.',
            isPreferred: (data.user_preferred_vehicles_id & 128) === 128 ? true : false,
            imgLink: motor,
        },
    ];
           
    const [selectedVehicles, setSelectedVehicles] = useState(() => {
        const preferredVehicles = vehicleTypes
            .filter((vehicle) => vehicle.isPreferred)
            .map((vehicle) => vehicle.title);
        return preferredVehicles;
    });
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        let vehiclePreference = 0;
    
        for (const title of selectedVehicles) {
            const vehicle = vehicleTypes.find((v) => v.title === title);
            if (vehicle) {
                vehiclePreference += vehicle.value;
            }
        }        
        data.user_preferred_vehicles_id = vehiclePreference
            
        patch(route('settings.update'))                            
    };
                    

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Settings</h2>}
        >
        <Head title="Settings" />

        <div className="py-12">
            <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <section className="max-w-full">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Personal Preference</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Update your account's personal preferences.
                            </p>
                        </header>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-6 w-full">

                            {/* Vehicle Types */}
                            <label className="block text-sm font-medium text-gray-700">Vehicle Types</label>

                            <div className="mb-4 flex flex-nowrap flex-col md:flex-row md:flex-wrap justify-center items-center w-full ">
                                
                                {vehicleTypes.slice(0, 4).map((vehicle, index) => (
                                    <VehicleTypesCard
                                        key={index}
                                        value={vehicle.value}
                                        title={vehicle.title}
                                        rate={vehicle.rate}
                                        description={vehicle.description}
                                        isPreferred={vehicle.isPreferred}
                                        imgLink={vehicle.imgLink}
                                        index={index}
                                        selectedVehicles={selectedVehicles}
                                        setSelectedVehicles={setSelectedVehicles}                                    
                                        
                                    />
                                ))}
                            </div>
                            <div className="mb-4 flex flex-nowrap flex-col md:flex-row md:flex-wrap justify-center items-center w-full">
                                
                                {vehicleTypes.slice(4, 8).map((vehicle, index) => (
                                    <VehicleTypesCard
                                        key={index}
                                        value={vehicle.value}
                                        title={vehicle.title}
                                        rate={vehicle.rate}
                                        description={vehicle.description}
                                        isPreferred={vehicle.isPreferred}
                                        imgLink={vehicle.imgLink}
                                        index={index + 4} // Adjust the index for the second row
                                        selectedVehicles={selectedVehicles}
                                        setSelectedVehicles={setSelectedVehicles}
                                        
                                    />
                                ))}
                            </div>

                            {/* Pick-up Location */}
                            <div className="mb-4">
                                
                                <InputLabel htmlFor="pickup_loc" value="Pick-up Location" className="block text-sm font-medium text-gray-700"/>

                                <TextInput
                                    id="pickup_loc"    
                                    value={data.pickup_loc}
                                    onChange={(e) => setData('pickup_loc', e.target.value)}
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded-md"                                    
                                />

                                <InputError message={errors.pickup_loc} className="mt-2" />
                            </div>

                            {/* Drop-off Location */}
                            <div className="mb-4">
                                <InputLabel htmlFor="dropoff_loc" value="Drop-off Location" className="block text-sm font-medium text-gray-700"/>
                                
                                <TextInput
                                    id="dropoff_loc"    
                                    value={data.dropoff_loc}
                                    onChange={(e) => setData('dropoff_loc', e.target.value)}
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    
                                />

                                <InputError message={errors.dropoff_loc} className="mt-2" />



                            </div>

                            {/* Notification Preferences */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Notification Preferences</label>
                                <div className="mt-1">
                                    <label className="inline-flex items-center">
                                        <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={data.email_notif}
                                        onChange={(e) => setData('email_notif', e.target.checked )}
                                        />
                                        <span className="ml-2">Email</span>
                                    </label>
                                    <label className="inline-flex items-center ml-4">
                                        <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={data.sms_notif}
                                        onChange={(e) => setData('sms_notif', e.target.checked )}
                                        />
                                        <span className="ml-2">SMS</span>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-4">
                                <PrimaryButton disabled={processing} className='w-full'>Save Preferences</PrimaryButton>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}
