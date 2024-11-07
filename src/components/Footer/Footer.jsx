import React from 'react';

const Footer = () => {
    return (
        <div className='max-w-6xl mx-auto py-20'>
                <div className='max-w-lg mx-auto text-center pb-8'>
                    <h2 className='font-bold text-4xl pb-3'>Gadget Heaven</h2>
                    <p className='font-medium text-lg text-[#09080F99]'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="divider"></div>

                <div className='flex justify-center gap-40  pt-6'>
                    <div className='text-center'>
                        <h2 className='font-bold text-lg text-[#09080F] pb-4'>Service</h2>
                        <ul className='text-[#09080F99] space-y-2'>
                            <li>Product Supprt</li>
                            <li>Order Tracking</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-lg text-[#09080F] pb-4'>Company</h2>
                        <ul className='text-[#09080F99] space-y-2'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                           
                        </ul>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-lg text-[#09080F] pb-4'>Legal</h2>
                        <ul className='text-[#09080F99] space-y-2'>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            
        </div>
    );
};

export default Footer;