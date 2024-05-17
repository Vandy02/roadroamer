'use client'
import React, { useMemo, useState } from 'react'
import { Form } from './ui/form'
import DateTimeForm from './DateTimeForm'
import { pickupTime } from '@/constants/appdata'
import SelectTimeForm from './SelectForm'
import CitySelect from './CitySelect'
import { Country, State, City } from 'country-state-city'
import dynamic from 'next/dynamic'

const StepOne = ({ form }) => {
    const getCities = City?.getCitiesOfState("US", "CA");
    const [getSource, setSource] = useState(null);
    const [getDestination, setDestination] = useState(null);
    const Map = useMemo(
    () => dynamic(() => import("@/components/Map")),
    [getSource, getDestination]
  );

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-[10%] my-10'>
            <Form {...form}>
                <form className='w-full bg-white p-5 shadow-md border'>
                    <DateTimeForm id='pickupdate' label='Pickup Date' control={form.control} />
                    <SelectTimeForm 
                    id='pickuptime' 
                    label='Pickup Time' 
                    placeholder='Set Pickup Time'
                     list={pickupTime} 
                     control={form.control} />
                    <CitySelect
                        id='source'
                        label='Source'
                        placeholder='Select Your Starting Point'
                        list={getCities}
                        setValue={setSource}
                        control={form.control} />
                         <CitySelect
                        id='destination'
                        label='Destination'
                        placeholder='Select Your Destination'
                        list={getCities}
                        setValue={setDestination}
                        control={form.control} />
                          <SelectTimeForm
                        id='persons'
                        label='Persons'
                        placeholder='Select Persons'
                        list={[1,2,3,4,5,6]}
                        control={form.control} />
                        <SelectTimeForm
                        id='transferType'
                        label='Transfer Type'
                        placeholder='Select Transfer Type'
                        list={["One Way", "Return"]}
                        control={form.control} />
                </form>
                </Form>
                <div className='flex justify-start flex-col'>
                    <Map getSource={getSource} getDestination={getDestination}/>
                </div>
           
        </div>
    )
}

export default StepOne