import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/Axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setProduct] = useState(null);
  const {id} =useParams()
  // i use fetched data that exist already
  // const [products] =useContext(ProductContext);
  // or re fetch new data with 
  const getsingleProduct = async ()=>{
    try{
      const {data}= await axios.get(`/products/${id}`)
      // console.log(data)
      setProduct(data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getsingleProduct()
  },[])

  return product? (
    <div className=" w-[70%] flex  justify-between  items-center  h-full  m-auto p-[10%] ">
      <Link to="/" className="mr-5 py-2 px-5 border border-blue-200 text-blue-300 rounded  absolute left-[17%] top-[3%]" >Home</Link>

      <img
        className="w-[40%] h-[80%] object-contain "
        src={`${product.image}`}
        alt="Image"
      />
      <div className="content w-[50%]">
        <h1 className="text-3xl">
          {product.title}
        </h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-500 mb-3">{product.price}$</h2>
        <p className="mb-[5%] text-sm">{product.description}</p>
        <Link to="/" className=" mr-5 py-2 px-5 border border-blue-200 text-blue-300 rounded ">Edit</Link>
        <Link to="/" className="py-2 px-5 border border-red-200 text-red-300 rounded ">Delete</Link>
      </div>
    </div>
  ):( <Loading/>);
};

export default Details;
