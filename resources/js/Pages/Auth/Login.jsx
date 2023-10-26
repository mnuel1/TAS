import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login({ status, canResetPassword, switchView  }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="relative gap-4 flex justify-center items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white ">                
                <div className='bg-white flex justify-center items-center w-full md:w-[60%] rounded-3xl p-4 border'>                    
                   
                    
                    <div className="hidden items-center justify-center flex-col p-6 md:flex w-full h-full ">
                    
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        <img src="https://cdn.dribbble.com/users/836931/screenshots/2753936/media/8fc47ac5ab4384635552133aa135744b.png?resize=800x600&vertical=center" alt="" 
                        className='rounded-xl'
                        style={{
                            width: '650px', 
                            height: 'auto',  
                        }}/>
                    </div>                                                                    
                    <div className="flex items-center flex-col gap-4 border-2 h-full w-full md:w-[50%] bg-[#3b37ff] rounded-2xl p-6">
                        <div className="flex justify-center">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAETUlEQVR4nO2aaYiVVRjHzxhlpWkmWhouOB/SRBGVqcQF1NQwQZIwCBULTPug4AczSFpcSgpFJSvcQCUtCpLUROmLhJq24haa44ILpKOSmlo6v3i8/5c53nnvOu+9cwT/cOHeeZ5z3v/znnOe7Yxzd1EcgEpgIbAPuKzPAWAJ0NPdCQCmA/+SGf8Bc4AKFyqAqSJbCywHngKaAQ8CPYD5wHXpLHIhAugkkmbEuCx6Qz1jJrrQoLdtWJuH7jTpXgMGuZAA/Cpy9YgB83Tg5+p3BbBO+jeAzSYD3gA+AL4E/gRqgNfLbchFEWsRI7sk2d/e3+6VFzNDsqGm3IZc1YObxsjmypg5MbIOwATgLa2GrcpYYKXm21c2I0SoWg9+ooHzNAFmADflOJ5PjmV+BFbLkBlFjm8GvAT87rnw6ckzzU3kWRE4Fbe90nSbA32B8QqOG4B/vHNxDBhdPvb1Ce4WkdcyyO8DPpHbTYdtpe3mpXK9iJIDGCNSdl7uiZHbYY5c7l7ga62Ibal2LhQYeeCoyA6PkR+X7GkXOoCZIrs0RhalJg+40AFUiexvMbIzkvVwoQNoLbJnY2RfSfauCx3yTIbrMbLBUdoBPOJChtJ5w+kM8h2Sr3EhA5gkot9mkD/pxZEXXYhQRvuHSI7PUQ6jjLnShQbVHYbDZlQWvQrgG+n+mE23sbZUraL2gDz0WwEnZMytgqtRobT7HRlhnykFjB2oHMu6Ll1LyzQ7kZ7ALq/NM7mIOZZp/KbSsMz+8HbAh17/ylL3oUXO1Ub1fG3ZDr5qiDVeznRT/asGBTdgleabnRzb+lF6CLAAOEQdbCU+B3ol9JwRmndXQw6qeY8uQG9gmHpOy7T3bcl9nFEj4fEkDIgAdNb8510hsAoOOEdu2L79GXhPWW2Tgh6UP5+m0UoXOjBKp6/q+0FgJ/AdsFgx4Zm4HlUpADwWrXi+A/qrLo4O65FSveVCADwnPj/kO+Ckt23MmG0htPdJNSTyr1OAPRpgiV0fFwCA9tri5sq7F+Id7OYI5USrGjP7JNWs2Cg+XxQ62C5d3vfOiaUW67VP67VwSmzEEnH4ywqyhlRyn3oGGU4r9RhUyiYZqRTney+4Dkxi0o6WGqQ5AsMVYCvwJtAPeCihS9KPNbfhQlz/K4mltmuxRV5nPR3HFGts1V5RJmB3g48qQ7i1NYGWOsQWRMcBnwH7FWAjWGHVIVEjMhjWDXhV9xQH00gUC0t5rGtfVXIDcnTQ+wAvq197VuSqFVhrvMuei8oYflJ/d5a69fe70GBRWKRzlrVBA/hFhlQpQ7igVTgi2Q51Ft+27NqFCKCtAuo1xaXoXiQTql2IIHVGbmvCAQ8rPnTRWeqva+cIH7nQQN09x8gcehM9Qw650EDdnfoK4AW1QVup01ih7xZo10rPvNkoFxpIFV6WreaLPS5UAN3VIt2iWHLe+y8G82CWt5nnMp32STz0f/ym9ihDPEb/AAAAAElFTkSuQmCC"/>
                        </div>

                        <div className='flex justify-center flex-col w-full h-full'>
                            <div className='flex justify-center items-center flex-col gap-2 p-4 '>
                                <p className='text-md lg:text-3xl font-black text-white mb-2' style={{ lineHeight: '1.5' , letterSpacing: '1px' }}>Welcome Back!</p>
                                <p className='text-sm font-thin text-white' style={{ lineHeight: '2.5', letterSpacing: '.5px' }}>Please enter your details.</p>
                            </div>                                
                            <form onSubmit={submit} className=''>
                                <div>
                                    <InputLabel htmlFor="email" value="Email" className='text-white'/>

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Password" className='text-white'/>

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="block mt-4">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <span className="ml-2 text-sm text-white">Remember me</span>
                                    </label>
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="underline text-sm text-white hover:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}                                            
                                </div>
                                <div className='flex flex-col items-center justify-center mt-4 gap-4'>
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        Log in
                                    </PrimaryButton>

                                    <Link className="ml-4 bg-white text-black hover:bg-[#304055] hover:text-white inline-flex w-11/12 justify-center items-center px-4 py-3 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" 
                                        href={route('register')}  >
                                        Register
                                    </Link>
                                    
                                </div>
                            </form>                                                        
                        </div>                                
                    </div>                                                               
                </div>
                
            </div>
            

            
        </>
    );
}
