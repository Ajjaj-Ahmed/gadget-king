import { useEffect, useState } from "react";

const Laptop = () => {
    const [gadgets, setGadgets] = useState([]);

    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch('../../../public/prodcuts.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])

    
        const groupLaptops = gadgets.filter(gadget => gadget.category == "Laptop")
       

   

    return (
        <div>
           
            
        </div>
    );
};

export default Laptop;