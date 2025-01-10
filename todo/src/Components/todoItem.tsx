import React from 'react';
import {useDispatch} from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import { FaTrash } from 'react-icons/fa'; 
import { TodoItemProps } from '../types/interface';

const TodoItem:React.FC<TodoItemProps> = ({todos}) => {

    const dispatch = useDispatch()

    return(
        <div className='flex'>
            {todos.map((item, index) => (
                <div className='bg-yellow-100 p-2 w-max rounded-lg text-sm m-1' key={index}>
                    <h4 className='flex justify-center my-1 font-medium'>{item.title}</h4>
                    <h4 className='flex justify-center my-1'>{item.status}</h4>
                    <div className="flex flex-wrap gap-2">
                        {item.group.map((groupItem) => (
                            <span
                                key={groupItem}
                                className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                                {groupItem}
                            </span>
                        ))}
                    </div>
                    <div className='flex w-full my-2 justify-center '>    
                    <button className='bg-white text-red-600 hover:text-red-800 ' onClick={() => dispatch(deleteTodo(index))}> <FaTrash /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoItem