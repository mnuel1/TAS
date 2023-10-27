
import { Card, CardHeader, CardBody, CardFooter, Typography,  Button, Tooltip, IconButton, } from "@material-tailwind/react";
import { Link } from "@inertiajs/react";



export function VehicleCard({ id, model, driver, rate, ratings, img, description}) {
    
    const vehicleData = {id:id, model : model, driver: driver, rate: rate, ratings: ratings, img: img, description:description }
    const vehicleDataJSON = JSON.stringify(vehicleData);
    
    
    return (
        <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
                <img
                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="vehicle"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />                
            </CardHeader>

            <CardBody>
                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                        {model}
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                        </svg>
                        {ratings}
                    </Typography>
                </div>
                <div className="flex justify-between items-center w-full"> 
                    <div>{driver}</div> 
                    {rate}    
                </div>
                <Typography color="gray"> {description} </Typography>

                {/* cards */}
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">                   
                {/* <Tooltip content="And +20 more">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    +20
                    </span>
                </Tooltip> */}
                </div>
            </CardBody>
            <CardFooter className="pt-3">
                <Link href={route('appoint.edit')} data={{vehicles:vehicleDataJSON}}>
                    <Button size="lg" fullWidth={true}> Make an Appointment </Button>
                </Link>
            </CardFooter>            
        </Card>
    );
}