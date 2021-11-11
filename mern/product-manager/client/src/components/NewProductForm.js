import React, {useState} from 'react'
import axios from 'axios'

const NewProductForm = (props) =>{

    const [formInfo, setFormInfo] = useState({
        name:'',
        price:'',
        description:''
    })

    const changeHandler = (e) =>{
        console.log('changing the form')
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/product', formInfo)
            .then(response=>{
                console.log(response)
                props.setFormSubmitted(!props.formSubmitted)
                setFormInfo({
                    name:'',
                    price:'',
                    description:''
                })
            })
            .catch(err=>console.log('Error on submit', err))
    }


    return(
        <div>
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
                <input type = 'submit' value = 'Add Product' className = 'btn btn-success mt-3'/>
            </form>
        </div>
    )
}

export default NewProductForm