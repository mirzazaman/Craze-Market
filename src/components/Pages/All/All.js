import {AllProducts} from "../../getAllProducts";
import Header from "../../Header/Header";
import Loader from "../../Loader/Loader";
import "./All.css"

function All() {
    
    const [products,loading] = AllProducts()

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
                <div id="allProductDiv">    
                <div>
                    <p> <center> <b>{product.category}</b> </center> </p>
                    <img id="allProductImg" src={product.image} alt={product.category} />
                    <p> <center> <b>Price: {product.price}$</b> </center></p>
                </div>
                </div>    
                )
            })}
        </center>
    
        </div>);
}

export default All;