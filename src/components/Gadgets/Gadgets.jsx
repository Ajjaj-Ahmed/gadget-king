import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';
import './Gadgets.css'

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([])
    const[gadgetValue, setGadgetValue]= useState(true)

    const[laptops,setLaptops] =useState([])
    const[laptopValue, setLaptopValue]= useState(false)

    const[accessories,setAccessories] =useState([])
    const[accessoriesValue, setaccessoriesValue]= useState(false)

    useEffect(()=>{
        fetch('/prodcuts.json')
        .then(res=>res.json())
        .then(data=>setGadgets(data))
    },[])
    // handle all gedgets
    const handleGadgets =()=>{
        setGadgetValue(!gadgetValue);
        setLaptopValue(!laptopValue);
        setaccessoriesValue(!accessoriesValue)
    }
   
    const handleLaptop=()=>{
        setLaptopValue(!laptopValue)
        setGadgetValue(!gadgetValue)
        setaccessoriesValue(!accessoriesValue)
        const groupLaptops = gadgets.filter(gadget => gadget.category == "Laptop")
        setLaptops(groupLaptops)
    }
    const handleAccessories=()=>{
        setaccessoriesValue(!accessoriesValue)
        setLaptopValue(!laptopValue)
        setGadgetValue(!gadgetValue)

        const Accessories = gadgets.filter(gadget => gadget.category == "Accessories")
        setAccessories(Accessories)
    }

    return (
        <div className='-mt-20'>
            <h2 className='text-center font-bold text-4xl pb-10'>Explore Cutting-Edge Gadgets</h2>

        <div className='flex justify-between gap-4'>

            <div className='flex flex-col items-center gap-4 w-3/15 p-4 '>
                <button onClick={handleGadgets} 
                className={`btn  ${gadgetValue && 'bg-[#9538E2] text-white'} `}>All Products</button>

                <button onClick={handleLaptop} 
                className={`btn ${laptopValue && ` text-white bg-[#9538E2]`}`}>Laptops
                </button>
                <button onClick={handleAccessories} 
                className={`btn ${accessoriesValue && ` text-white bg-[#9538E2]`}`}>Accessories
                </button>       
                <button className='btn '>Phones</button>
                <button className='btn '>Smart Watches</button>
                <button className='btn '>MacBook</button>
                <button className='btn '>Iphone</button>
            </div>
            {
             gadgetValue && <div className=' w-12/15  grid grid-cols-3 gap-3'>
                {
                   gadgets.map(gadget =><Gadget key={gadget.product_id} gadget={gadget}></Gadget>) 
                }
                </div>
            }
            {
                laptopValue && <div className=' w-12/15  grid grid-cols-3 gap-3'>
                {
                   laptops.map(gadget =><Gadget key={gadget.product_id} gadget={gadget}></Gadget>) 
                }
                </div>
            }
            {
                accessoriesValue && <div className=' w-12/15  grid grid-cols-3 gap-3'>
                {
                   accessories.map(gadget =><Gadget key={gadget.product_id} gadget={gadget}></Gadget>) 
                }
                </div>
            }
        </div>
        </div>
        
    );
};

export default Gadgets;