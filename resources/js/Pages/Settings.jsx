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



export default function Settings({ auth }) {

    const user = usePage().props.auth.preference;
    
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        user_preferred_vehicles_id: user.user_preferred_vehicles_id,
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

    const vehicleTypes = [
        {
            value: 1,
            title: 'L300',            
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: l300,
        },
        {
            value: 2,
            title: 'Van',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: van,
        },
        {
            value: 4,
            title: 'Car',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: car,
        },
        {
            value: 8,
            title: 'Bike',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: bike,
        },
        {
            value: 16,
            title: 'E-Bike',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: ebike,
        },
        {
            value: 32,
            title: 'Tricycle',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: tric,
        },
        {
            value: 64,
            title: 'Multicab',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: multicab,
        },
        {
            value: 128,
            title: 'Motorcycle',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            isPreferred: false,
            imgLink: motor,
        },
    ];
    
    const [selectedVehicles, setSelectedVehicles] = useState([]);
    useEffect(() => {
    
        console.log(selectedVehicles);
    }, [selectedVehicles]);

    
    // Function to handle form submissions
    const handleSubmit = (e) => {
        e.preventDefault();

        // Calculate the sum of the values of selected vehicles
        const vehiclePreference = selectedVehicles.reduce((acc, title) => {
            const vehicle = vehicleTypes.find((v) => v.title === title);
            if (vehicle) {
                return acc + vehicle.value;
            }

            return acc;
        }, 0);


        // Gather the user's updated preferences
        const updatedPreferences = {
            vehiclePreference: vehiclePreference,
            pickupLocation: pickupLocation,
            dropoffLocation: dropoffLocation,
            notificationPreferences: notificationPreferences,
        };
        patch(route('settings.update'))
    };

    
    
    
    // In your VehicleTypesCard component, update the checkbox like this:
    
      
      

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
                            <div className="mb-4 flex justify-between items-center w-full flex-col lg:flex-row">
                                
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
