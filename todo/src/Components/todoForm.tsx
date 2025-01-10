import React, {useState} from 'react';
import { todo } from '../types/interface';
import { useDispatch} from 'react-redux';
import {addTodo} from "../slices/todoSlice"

const TodoForm :React.FC<{}> = () => {

    const [todo, setTodo] = useState<todo>({
        id:0,
        title:"",
        status:"",
        group:[]
    })
    const dispatch = useDispatch()

    const groupOptions :string[] = ["Grocery", "Office", "Bills", "Extra", "Study", "Health"]

    const onSubmit = () => {
        let genID = Math.floor(Math.random()*1000)
        const updatedTodo = {...todo, id:genID}
        dispatch(addTodo(updatedTodo))
        setTodo({      
            id:0,
            title:"",
            status:"",
            group:[]})
    }

    const handleTitleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, title:event?.target.value})
    }

    const handleStatusChange : React.ChangeEventHandler<HTMLSelectElement>= (event) => {
        setTodo({...todo, status : event.target.value})
    }

    const handleGroupChange =(groupItem : string) => {
        setTodo((prevState) => {
            const updatedTodo = prevState.group.includes(groupItem) ?
            prevState.group.filter((item) => item !== groupItem) : [...prevState.group , groupItem];

            return({...prevState, group : updatedTodo})
        })
    }

  return (
    <div className="flex justify-center flex-col items-center p-4 bg-blue-500">
      <h1 className="text-black text-xl font-bold">Create Tasks</h1>
        <div className='w-full flex justify-center'>
            <input 
                className='w-3/5 rounded-lg p-1 mb-2 border border-gray-300 focus:outline-none'
                type='text'
                placeholder='Enter your task details'
                value={todo.title}
                onChange={handleTitleChange}
            />
        </div>
        <div className='w-3/5 flex'>
            <div className='w-4/5 flex flex-wrap'>
                {groupOptions.map((item) => (
                    <button 
                        key={item}
                        className={`px-1 m-1 hover:bg-gray-300 rounded-lg transition duration-200 ${todo.group.includes(item) ? 'bg-orange-300' : 'bg-gray-200'}`}
                        onClick={() => handleGroupChange(item)}
                        >
                        {item}
                    </button>
                ))}
            </div>
            <div>
                <select 
                    className='px-1 rounded-lg' 
                    onChange={handleStatusChange} 
                    value={todo.status}>
                        <option></option>
                        <option>Todo</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                </select>
            </div>
        </div>
        <div className='w-2/5 flex my-2 justify-center bg-gray-200 rounded-md hover:bg-gray-300'>
            <button onClick={() => onSubmit()}>Add Task</button>
        </div>
    </div>
  );
}

export default TodoForm;
