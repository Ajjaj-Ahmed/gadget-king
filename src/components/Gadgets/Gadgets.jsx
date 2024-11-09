import React, { useEffect, useState} from 'react';
import Gadget from '../Gadget/Gadget';
import './Gadgets.css'
import { useLocation } from 'react-router-dom';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])
    const { pathname } = useLocation();


    useEffect(() => {
        fetch('/prodcuts.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

   
    const laptops = gadgets.filter(gadget => gadget.category === 'Laptop')

    return (
        <div className='-mt-20'>
            <h2 className='text-center font-bold text-4xl pb-10'>Explore Cutting-Edge Gadgets</h2>

            <div className='flex justify-between gap-4'>

                <div className='flex flex-col items-center gap-4 w-3/15 p-4 '>
                    <button className={`${pathname === '/' ? 'bg-green-300' : 'btn'}`}>All Products</button>
                    <button className={`btn `}>Laptops</button>
                    <button className={`btn`}>Accessories</button>
                    <button className='btn '>Phones</button>
                    <button className='btn '>Smart Watches</button>
                    <button className='btn '>MacBook</button>
                    <button className='btn '>Iphone</button>
                </div>
                {
                    pathname === '/' && <div className=' w-12/15  grid grid-cols-3 gap-3'>
                        {
                            gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                        }
                    </div>
                }



            </div>
        </div>

    );
};

export default Gadgets;