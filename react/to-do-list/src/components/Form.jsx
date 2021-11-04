import React, {useState} from 'react';


const Form = () => {

    const [task, setTask] = useState({
        nameOfTask: '',
        isComplete: false
    })

    const [listOfTasks, setListOfTasks] = useState([])

    const changeHandler = (e) =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const submitTask = (e) => {
        e.preventDefault()
        setListOfTasks([...listOfTasks, task])

        setTask({
            nameOfTask: '',
            isComplete: false
        })


    }

    const completeTask = (e,idx) => {
        let [...updatedListOfTasks] = listOfTasks

        updatedListOfTasks[idx].isComplete = !updatedListOfTasks[idx].isComplete

        setListOfTasks(updatedListOfTasks)
    }

    const deleteTask = (e,idx) => {
        let newList = listOfTasks.filter((task, i)=>{
            return i != idx
        })

        setListOfTasks(newList)
    }

    return(
        <div>
            <form onSubmit = {submitTask}>
                <div>
                    <label htmlFor = ''>New Item:</label>
                    <input onChange={changeHandler} type='text' name ='nameOfTask' value ={task.nameOfTask} id=''/>
                </div>
                <input type = 'submit' value = 'Add Item'/>
            </form>
            {
                listOfTasks.map((taskObj, i)=>{
                    return (
                    <div key = {i}>
                        <p style = {{textDecoration: taskObj.isComplete? 'line-through' : 'none'}}>{taskObj.nameOfTask} <input onClick = {(e)=>completeTask(e,i)} type ='checkbox' name ='' id =''/></p>
                        <button onClick = {(e) => deleteTask(e, i)}>Delete</button>
                    </div>
                    )
                })
            }
        </div>
    )
}


export default Form;