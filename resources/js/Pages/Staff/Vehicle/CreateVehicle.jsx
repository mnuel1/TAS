// Create.js
import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

const Create = () => {
    const { data, setData, post, processing } = useForm({
        make: '',
        model: '',
        driver: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('vehicles.store'));
    };

    return (
        <div>
            <h1>Create Vehicle</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Make:</label>
                    <input type="text" value={data.make} onChange={(e) => setData('make', e.target.value)} />
                </div>
                <div>
                    <label>Model:</label>
                    <input type="text" value={data.model} onChange={(e) => setData('model', e.target.value)} />
                </div>
                <div>
                    <label>Driver:</label>
                    <input type="text" value={data.driver} onChange={(e) => setData('driver', e.target.value)} />
                </div>
                <div>
                    <button type="submit" disabled={processing}>Create Vehicle</button>
                </div>
            </form>
        </div>
    );
};

export default Create;
