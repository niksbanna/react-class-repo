import React, { useState } from 'react'

export default function Todo({ data, name, changeCounter, callback }) {




    console.log("props value", data, name)

    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);



    const handleChange = (event) => {
        setInput(event.target.value);
        console.log(input);
    }



    const handleSubmit = () => {
        setTasks([...tasks, input]);
        // setInput("");
        console.log(tasks);

    }

    const handleDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }
    return (
        <div className='container'>
            <input type="text" value={input} onChange={handleChange} />
            <button onClick={handleSubmit} >Submit</button>

            <div className='tasks'>
                <ul className='tasks-ul'>
                    <li>All tasks </li>
                    {
                        tasks.map((task, index) => {
                            return (
                                <li key={index} onClick={() => handleDelete(index)} > {task} </li>
                            )
                        })
                    }
                </ul>
            </div>
            <button onClick={() => changeCounter((prev) => prev + 1)} >Change Count in TODO</button>
            <button onClick={callback} >Call Callback</button>
        </div>
    )
}
