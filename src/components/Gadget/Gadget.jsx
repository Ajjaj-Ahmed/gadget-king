
const Gadget = ({gadget}) => {
    const {product_image,product_title,price} = gadget;
    // console.log(gadget)
    return (
        <div>
            <img className="w-full h-44 object-fit bg-gray-300 rounded-xl p-2" src={product_image} alt="" />
            <h2 className="text-2xl font-semibold pt-6 pb-3">{product_title}</h2>
            <p className="text-xl text-[rgba(9, 8, 15, 0.6)] pb-6">Price : {price}</p>
            <button className="btn btn-outline">View Details</button>
        </div>
    );
};

export default Gadget;