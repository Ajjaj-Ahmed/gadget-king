import { NavLink } from "react-router-dom";
import bannerImg from '../../assets/banner.jpg'

const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink >Statistics</NavLink></li>
        <li><NavLink >Dashboard</NavLink></li>
    </>
    return (
        <div>
            <div className="bg-[#9538E2] text-white rounded-xl">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget King</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
            <div className="max-w-5xl mx-auto text-center text-[#FFFFFF] pt-16 pb-44">
                <h2 className="font-bold text-6xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg py-7">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <button className="bg-[#FFFFFF] rounded-xl px-6 py-4 text-[#9538E2]">Shop Now</button>
            </div>
        </div>
        {/* banner section */}
        <div className="max-w-4xl mx-auto z-50 relative bottom-40 border-2 border-white rounded-xl p-6 bg-transparent bg-opacity-65">
            <img className="w-full rounded-xl" src={bannerImg} alt="" />
        </div>
        </div>
    );
};

export default Navbar;