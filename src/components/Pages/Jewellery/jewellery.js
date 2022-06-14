import {Jewellery} from "../../getJewellery";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";
import "./jewellery.css"

function JewelleryProducts() {
    
    const [products,loading] = Jewellery()

    // start of views / user view
    // console.log("products",products);
    
     if(loading){
         return (
             <div><Loader /></div>
         )
     }
      return (<div>
        <div>
            <Header/>
        </div>
        <center>
            {products.map((product)=> {
                return(
                <div id="jewelleryProductDiv">    
                <div>
                    <p> <center> <b>{product.category}</b> </center> </p>
                    <img id="jewelleryProductImg" src={product.image} alt={product.category} />
                    <p> <center> <b>Price: {product.price}$</b> </center></p>
                </div>
                </div>    
                )
            })}
        </center>
    
        </div>);
}

export default JewelleryProducts;