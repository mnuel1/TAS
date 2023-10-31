import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { VehicleTypesCard } from '@/Components/VehicleTypesCard';
import { Head } from '@inertiajs/react';
import { useState } from 'react'; 
import { useForm, usePage } from '@inertiajs/react';



export default function Settings({ auth }) {

    const user = usePage().props.auth.preference;
    
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        dropoff_loc: user.dropoff_loc,
        pickup_loc: user.pickup_loc,
        email_notif: user.email_notif,
        sms_notif: user.sms_notif,

    });
    // Define states for user preferences    
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [notificationPreferences, setNotificationPreferences] = useState({
        email: false,
        sms: false,
    });

    
    // Function to handle form submissions
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // You can save user preferences to a backend or handle them as needed here
        console.log('User preferences submitted:', {
            vehicleTypes,
            pickupLocation,
            dropoffLocation,
            notificationPreferences,
        });
    };

    const vehicleTypes = [
        {
            value: 'l300',
            title: 'L300',
            
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "C:/Users/Manuel Marin/Desktop/Transport Appointment System/resources/img/l300.jpg",
        },
        {
            value: 'van',
            title: 'Van',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "resources/img/van.jpg",
        },
        {
            value: 'car',
            title: 'Car',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "resources/img/car.jpg",
        },
        {
            value: 'bike',
            title: 'Bike',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "resources/img/bike.jpg",
        },
        {
            value: 'ebike',
            title: 'E-Bike',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "resources/img/ebike.jpg",
        },
        {
            value: 'tricycle',
            title: 'Tricycle',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "resources/img/tric.jpg",
        },
        {
            value: 'multicab',
            title: 'Multicab',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "resources/img/multicab.jpg",
        },
        {
            value: 'motorcycle',
            title: 'Motorcycle',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: "resources/img/motor.jpg",
        },
    ];
      
      
      

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Settings</h2>}
        >
        <Head title="Settings" />

        <div className="py-12">
            <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <section className="max-w-min">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Personal Preference</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Update your account's personal preferences.
                            </p>
                        </header>
                        <form onSubmit={handleSubmit} className="mt-6 space-y-6 w-full">

                            {/* Vehicle Types */}
                            <label className="block text-sm font-medium text-gray-700">Vehicle Types</label>

                            <div className="mb-4 flex justify-between items-center w-full gap-2 flex-col lg:flex-row ">
                                
                                {vehicleTypes.slice(0, 4).map((vehicle, index) => (
                                    <VehicleTypesCard
                                    key={index}
                                    title={vehicle.title}
                                    rate={vehicle.rate}
                                    description={vehicle.description}
                                    isPreferred={vehicle.isPreferred}
                                    imgLink={vehicle.imgLink}
                                    index={index}
                                    />
                                ))}
                                </div>
                            <div className="mb-4 flex justify-between items-center w-full flex-col lg:flex-row">
                                
                                {vehicleTypes.slice(4, 8).map((vehicle, index) => (
                                    <VehicleTypesCard
                                    key={index}
                                    title={vehicle.title}
                                    rate={vehicle.rate}
                                    description={vehicle.description}
                                    isPreferred={vehicle.isPreferred}
                                    imgLink={vehicle.imgLink}
                                    index={index + 4} // Adjust the index for the second row
                                    />
                                ))}
                            </div>



                            {/* Pick-up Location */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Pick-up Location</label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    value={data.pickup_loc}
                                    onChange={(e) => setPickupLocation(e.target.value)}
                                />
                            </div>

                            {/* Drop-off Location */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Drop-off Location</label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    value={data.dropoff_loc}
                                    onChange={(e) => setDropoffLocation(e.target.value)}
                                />
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
                                        onChange={(e) => setNotificationPreferences({ ...notificationPreferences, email: e.target.checked })}
                                        />
                                        <span className="ml-2">Email</span>
                                    </label>
                                    <label className="inline-flex items-center ml-4">
                                        <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={data.sms_notif}
                                        onChange={(e) => setNotificationPreferences({ ...notificationPreferences, sms: e.target.checked })}
                                        />
                                        <span className="ml-2">SMS</span>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-4">
                                <PrimaryButton disabled={processing}>Save Preferences</PrimaryButton>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}
