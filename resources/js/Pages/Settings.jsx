import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react'; 
import { useForm, usePage } from '@inertiajs/react';



export default function Settings({ auth }) {

    const user = usePage().props.auth.user;
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        birthday: user.birthday,
        number: user.number,

    });
    // Define states for user preferences
    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [notificationPreferences, setNotificationPreferences] = useState({
        email: false,
        sms: false,
    });

    
  // Add more states for other preferences as needed

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

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Settings</h2>}
    >
      <Head title="Settings" />

      <div className="py-12">
        <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <section className="max-w-xl">
                <header>
                    <h2 className="text-lg font-medium text-gray-900">Personal Preference</h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Update your account's personal preferences.
                    </p>
                </header>
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Vehicle Types */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Vehicle Types</label>
                    <select
                    className="mt-1 block w-full p-2 border rounded-md"
                    multiple
                    value={vehicleTypes}
                    onChange={(e) => setVehicleTypes(Array.from(e.target.selectedOptions, (option) => option.value))}
                    >
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                    <option value="scooter">Scooter</option>
                    {/* Add more options for vehicle types */}
                    </select>
                </div>

                {/* Pick-up Location */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Pick-up Location</label>
                    <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    />
                </div>

                {/* Drop-off Location */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Drop-off Location</label>
                    <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={dropoffLocation}
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
                        checked={notificationPreferences.email}
                        onChange={(e) => setNotificationPreferences({ ...notificationPreferences, email: e.target.checked })}
                        />
                        <span className="ml-2">Email</span>
                    </label>
                    <label className="inline-flex items-center ml-4">
                        <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={notificationPreferences.sms}
                        onChange={(e) => setNotificationPreferences({ ...notificationPreferences, sms: e.target.checked })}
                        />
                        <span className="ml-2">SMS</span>
                    </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                    <PrimaryButton disabled={processing}>             
                    Save Preferences
                    </PrimaryButton>
                </div>
                </form>
            </section>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
