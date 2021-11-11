import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useHistory } from 'react-router-dom'



const ProductDetail = () =>{
    const {id} = useParams();

    const history = useHistory();

    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response =>{
                console.log(response)
                setProductInfo(response.data.results)
            })
            .catch(err=>console.log('error on get one ', err))
    },[])

    const deleteProduct = () =>{
        console.log('deleting product that has this id', id)
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(response =>{
                console.log(response)
                history.push('/')
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <h1>{productInfo.name}</h1>
            <p>{productInfo.price}</p>
            <p>{productInfo.description}</p>

            <button onClick = {deleteProduct} className = 'btn btn-danger'>Delete {productInfo.name}</button>
        </div>
    )
}

export default ProductDetail