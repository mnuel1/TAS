import { Card, CardHeader, CardBody, CardFooter, Typography, Checkbox } from "@material-tailwind/react";
import { useState,useEffect } from "react";


export function VehicleTypesCard({ value, title, rate, description, isPreferred, imgLink, selectedVehicles, setSelectedVehicles,}) {

    const handleVehicleChange = () => {
        if (selectedVehicles.includes(title)) {
          setSelectedVehicles(selectedVehicles.filter((v) => v !== title));
        } else {
          setSelectedVehicles([...selectedVehicles, title]);
        }
      };

          
    return (
        <Card className="w-auto md:w-80 ">
            <CardHeader shadow={false} floated={false} className="h-96">
                <img
                    src={imgLink}
                    alt="card-image"
                    height={300}
                    width={300}
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {title}
                    </Typography>                    
                </div>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                >
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex ">
                <div className="flex items-center justify-center w-full rounded-xl bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100">                    
                    <Checkbox                        
                        checked={selectedVehicles.includes(title)}
                        onChange={(e) => handleVehicleChange()}

                        ripple={false}
                        className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                    />
                    Add to my preferences
                </div>            
            </CardFooter>
        </Card>
    );
}