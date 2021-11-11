import axios from 'axios'
import {useParams} from 'react-router'
import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'

const EditAuthorForm = (props) =>{
    const {id} = useParams();
    const [formInfo, setFormInfo] = useState({
        name: ''
    })
    const [formErrors, setFormErrors] = useState({
        name: ''
    })
    const history = useHistory()
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(response=>{
                console.log(response)
                setFormInfo(response.data.results)
            })
    },[])



    const changeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/author/${id}`, formInfo)
            .then(response=>{
                console.log(response)

                if(response.data.err){
                    setFormErrors(response.data.err.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)
                    setFormInfo({
                        name:''
                    })
                    setFormErrors({
                        name: ''
                    })
                    history.push('/')
                }

            })
            .catch(err=>console.log(err))
    }

    const cancelHandler = (e) =>{
        e.preventDefault()
        history.push('/')
    }

    return(
        <div>
            <form onSubmit = {submitHandler}>
                <div className = 'form-group'>
                    <label>Author Name: </label>
                    <input onChange = {changeHandler} type = 'text' className = 'form-control' name = 'name' value = {formInfo.name}/>
                    <p className = 'text-danger'>{formErrors.name? formErrors.name.message: ''}</p>
                </div>
                <button onClick = {cancelHandler} className = 'btn btn-danger mt-3'>Cancel</button>
                <input type = 'submit' value = 'Update Author' className = 'btn btn-success mt-3' />
            </form>
        </div>
    )
}


export default EditAuthorForm