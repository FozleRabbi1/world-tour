import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
// import ReactDatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Bocking = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const data = useLoaderData();
    console.log(startDate)
    console.log(startDate2)
    return (
        <div>

            <div className="grid grid-cols-2 gap-5 bg-gray-300 -mt-16 py-28 px-28 ">


                <div className="text-div relative">
                    <img className="   " src={data.locationImage} alt="" />

                    <div className=" absolute top-20 left-10 pe-10 text-black ">
                        <h2 className=" text-4xl font-bold ">{data?.roomHeading}</h2>
                        <p className="font-semibold ">{data?.roomDescription} {data?.roomDescription} {data?.roomDescription} </p>

                    </div>
                </div>

                <div className="select-data-div mt-6">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor=""
                                    value="Origin"
                                />
                            </div>
                            <TextInput
                                id="text"
                                type="text"
                                placeholder=" your current location "
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor=""
                                    value="to"
                                />
                            </div>
                            <TextInput
                                id=""
                                type="text"
                                placeholder={data.location}
                                required={true}
                            />
                        </div>

                        <div className="flex justify-between text-center w-full ">
                            <div>
                                <DatePicker
                                    className=" bg-green-200 "
                                    showIcon
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                />
                            </div>

                            <span className="" >To</span>

                            <div>
                            <DatePicker
                                className=" bg-green-200"
                                showIcon
                                selected={startDate2}
                                onChange={(date) => setStartDate2(date)}
                            />
                            </div>

                        </div>


                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Bocking;