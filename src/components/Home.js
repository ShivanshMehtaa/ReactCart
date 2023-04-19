import React from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
const img1="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=1280&hei=1190&fmt=jpeg&qlt=90&.v=1664497359481"
const img2="https://cdn.shopify.com/s/files/1/0360/6491/9692/products/AirJordan1LowAluminum_360x.jpg?v=1671805734"

const Home = () => {

    const productList = [
        {name:"Mac Book", price:120000, imgSrc:img1,id:"aidjvbsidvbdsvb"},
        {name:"Nike AJ1 Low", price:8999, imgSrc:img2, id:"sdvbousudbvv"}
    ]

    const dispatch = useDispatch()

    const addToCartHandler =(options)=>{
        console.log(options);
        dispatch({type:"addToCart",payload:options})
        dispatch({type:"calculatePrice"})
        toast.success("Added to Cart")
        
    }
  return (
    <div className='home'>
      {
        productList.map(i =>(
            <ProductCard key={i.id} imgSrc={i.imgSrc} name={i.name} price={i.price} id={i.id} handler={addToCartHandler}/>
        ))
      }
    </div>
  )
}

const ProductCard = ({name, id, price, handler,imgSrc}) =>(
    <div className='productCard'>
        <img src={imgSrc} alt="img" />
        <p>{name}</p>
        <h4>₹{price}</h4>
        <button onClick={()=>handler({name,price,id,quantity:1,imgSrc})}>Add To Cart</button>
    </div>
)

export default Home
