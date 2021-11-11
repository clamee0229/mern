import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllAuthors = (props) =>{

    const [allAuthors, setAllAuthors] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/author')
        .then(response =>{
            console.log(response)
            setAllAuthors(response.data.results)
        })
        .catch(err=>console.log(err))
    },[props.formSubmitted, deleteToggle])

    const deleteAuthor = (id) =>{
        console.log('deleting author ', id)
        axios.delete(`http://localhost:8000/api/author/delete/${id}`)
            .then(response=>{
                console.log(response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <Link to = '/new' className = 'btn btn-primary mt-3'>Add an Author</Link>
            <p>Here are all of the authors</p>
            {
            allAuthors.map((author, i)=>{
                return (
                    <div key = {i}>
                        <h3>{author.name}</h3>
                        <button onClick = {(e)=>deleteAuthor(author._id)} className = 'btn btn-danger'>Delete {author.name}</button>
                        <Link to = {`/edit/${author._id}`} className = 'btn btn-info'>Edit</Link>
                    </div>
                )
            })
            }
        </div>
    )
}

export default AllAuthors