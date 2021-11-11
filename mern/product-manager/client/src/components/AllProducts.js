import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllProducts = (props) =>{

    const [allProducts, setAllProducts] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then(response =>{
            console.log(response)
            setAllProducts(response.data.results)
        })
        .catch(err=>console.log(err))
    },[props.formSubmitted, deleteToggle])

    const deleteProduct = (id) =>{
        console.log('deleting product ', id)
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(response =>{
                console.log(response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=>console.log(err))
    }
    
    return(
        <div>
            <h1>All Products:</h1>

            {
                allProducts.map((product, i)=>{
                    return(
                        <div key = {i}>
                            <h3><Link to = {`/product/${product._id}`}>{product.name}</Link></h3>
                            <button onClick = {(e)=>deleteProduct(product._id)} className = 'btn btn-danger mb-3 mr-2'>Delete {product.name}</button>
                            <Link to = {`/edit/${product._id}`} className = 'btn btn-info mb-3'>Edit</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts