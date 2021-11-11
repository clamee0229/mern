import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const EditProductForm = (props) =>{

    const [formInfo, setFormInfo] = useState({
        name:'',
        price:'',
        description:''
    })

    const history = useHistory();

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(response =>{
                console.log(response)
                setFormInfo(response.data.results)
            })
            .catch(err=>console.log('error on get one ', err))
    },[])

    const changeHandler = (e) =>{
        console.log('changing the form')
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, formInfo)
            .then(response=>{
                console.log('response from the put request', response)
                history.push('/')
            })
            .catch(err=>console.log(err))
    }



    return(
        <div>
            <h1>Edit Product</h1>
            <form onSubmit = {submitHandler}>
                <div className = 'form-group'>
                    <label>Name:</label>
                    <input onChange = {changeHandler} type = 'text' name = 'name' className = 'form-control' value = {formInfo.name}></input>
                </div>
                <div className = 'form-group'>
                    <label>Price:</label>
                    <input onChange = {changeHandler} type = 'text' name = 'price' className = 'form-control' value = {formInfo.price}></input>
                </div>
                <div className = 'form-group'>
                    <label>Description:</label>
                    <input onChange = {changeHandler} type = 'text' name = 'description' className = 'form-control' value = {formInfo.description}></input>
                </div>
                <input type = 'submit' value = 'Update Product' className = 'btn btn-success mt-3'/>
            </form>
        </div>
    )
}

export default EditProductForm