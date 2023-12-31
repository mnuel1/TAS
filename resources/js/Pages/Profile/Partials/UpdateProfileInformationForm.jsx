import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {

    const user = usePage().props.auth.user;
    console.log(user);
    
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        birthday: user.birthday,
        number: user.number,
        address: user.address,

    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className='flex flex-col md:flex-row w-full gap-4'>

                    <div className='w-full'>
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className='w-full'>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                            />

                        <InputError className="mt-2" message={errors.email} />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  w-full gap-4'>
                    <div className='w-full'>
                        <InputLabel htmlFor="number" value="Phone Number" />

                        <TextInput
                            id="number"
                            name="number"
                            value={data.number}
                            className="mt-1 block w-full"
                            autoComplete="number"
                            isFocused={true}
                            onChange={(e) => setData('number', e.target.value)}
                            required
                        />

                        <InputError message={errors.number} className="mt-2" />
                    </div>

                    <div className='w-full'>
                        <InputLabel htmlFor="birthday" value="Birthdate" />

                        <TextInput
                            id="birthday"
                            type="date"
                            name="birthday"
                            value={data.birthday}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('birthday', e.target.value)}
                            required
                        />

                        <InputError message={errors.birthday} className="mt-2" />
                    </div>
                </div>
                <div className='w-full'>
                        <InputLabel htmlFor="address" value="Address" />

                        <TextInput
                            id="address"
                            type="text"
                            name="address"
                            value={data.address}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('address', e.target.value)}
                            required
                        />

                        <InputError message={errors.address} className="mt-2" />
                    </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
