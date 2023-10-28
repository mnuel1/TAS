import { Card, CardHeader, CardBody, CardFooter, Typography, Button, Checkbox } from "@material-tailwind/react";


export function CheckboxCustomStyles({isPreferred}) {
    return (
        <Checkbox
            defaultChecked = {isPreferred}
            ripple={false}
            className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
        />
    );
}
export function VehicleTypesCard({ title, rate, description, isPreferred, imgLink}) {
    return (
        <Card className="w-80 ">
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
                    <Typography color="blue-gray" className="font-medium">
                        {/* {rate} */}
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
                    <CheckboxCustomStyles defaultChecked={isPreferred}/>
                    Add to my preferences
                </div>
                

            </CardFooter>
        </Card>
    );
}