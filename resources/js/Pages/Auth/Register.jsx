import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AccessSelect from '../../Components/Select'
export default function Register({ switchView }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        access: 1,
        name: '',
        email: '',
        number: '',
        address:'',
        birthday: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        
        console.log(data);
        post(route('register'));
        
    };

    return (
        <>
            <Head title="Register" />
            <div className="relative gap-4 flex justify-center items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white ">                
                <div className='bg-white flex justify-center items-center w-full md:w-[60%] rounded-3xl p-4 border'>
                    <div className="flex items-center flex-col gap-4 h-full max-w-full md:w-[50%] bg-[#3b37ff] rounded-2xl p-6">
                        <div className="flex w-full">
                            <h1 className='text-xs font-extrabold text-left text-white'>
                                Transport Appointment System in North Daang Hari 
                            </h1>
                        </div>

                        <div className='flex justify-center flex-col w-full h-full'>
                            <div className='flex justify-center items-center flex-col gap-2 p-4 '>
                            <p className='text-md lg:text-3xl font-black text-white mb-2 mt-5' style={{ lineHeight: '1.5' , letterSpacing: '1px' }}>
                                Escape the Commuting Chaos!
                            </p>
                            <p className='text-sm font-thin text-white' style={{ lineHeight: '2.5', letterSpacing: '.5px' }}>
                                Register now and take control of your transport appointments for a hassle-free journey.
                            </p>
                            </div>                                
                            
                        </div>
                        <div className="hidden justify-center flex-col p-6 md:flex w-full h-full">
                            <div className='w-28 h-28'></div>
                        </div>                                        
                    </div>
                    <div className="hidden justify-center flex-col p-6 md:flex w-full h-full">
                        <p className='text-black font-bold text-5xl ' style={{ lineHeight: '1.5'}}>Sign up</p>

                        <Link
                            href={route('login')}
                            className="flex underline text-sm font-bold mb-4 w-fit text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-left"
                        >
                            Have an Account ? ‎ <p className='text-[#3b37ff]'> Login </p>
                        </Link>       
                        <form onSubmit={submit}>
                            <div className="mt-4">
                                <AccessSelect accessLevel={setData}/>
                            </div>
                            <div className='flex gap-4 w-full'>            
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
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
                                <div>
                                    <InputLabel htmlFor="address" value="Address" />

                                    <TextInput
                                        id="address"
                                        name="address"
                                        value={data.address}
                                        className="mt-1 block w-full"
                                        autoComplete="address"
                                        isFocused={true}
                                        onChange={(e) => setData('address', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.address} className="mt-2" />
                                </div>
                            </div>
                            
                            <div className="">
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
                                                            
                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            

                            <div className="mt-4">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="flex flex-col justify-center items-center mt-4 gap-4">
                                
                                <PrimaryButton className="w-1/4" disabled={processing}>
                                    Register
                                </PrimaryButton>             
                            </div>                            
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    );
}
