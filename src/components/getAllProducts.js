import axios from "axios";
import {useState, useEffect} from "react";

export function AllProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const get = async ()=>{
        try {
            setLoading(true);
            const take = await axios.get("https://fakestoreapi.com/products");
            // console.log("Data",take.data);
            setProducts(take.data); 
        
        } catch (error) {
        
            console.log(error);
        
        }   finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        get();
    },[])

    return[products,loading];
}