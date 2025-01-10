import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { todoSelector, filteringTodo } from '../types/interface'
import TodoItem from './todoItem';


const TodoList: React.FC<{}> = () => {

    const [todoByCategory, setTodoByCategory] = useState<filteringTodo>({
        toStart:[],
        inProgress:[],
        done:[]
    })
    const todoList = useSelector((state : todoSelector) => state.todo.todo);

    useEffect(() => {
        filterTodos()
    }, [todoList])

    console.log(todoList, "selector 10")

    const filterTodos = () => {
        let toStartTodo = todoList.filter((item) => item.status === "Todo");
        let inProgressTodo = todoList.filter((item) => item.status === "In Progress");
        let doneTodo = todoList.filter((item) => item.status === "Completed");
        
        setTodoByCategory({
            toStart: toStartTodo,
            inProgress: inProgressTodo,
            done: doneTodo
        })
    }   

    console.log(todoByCategory, "todoByCategory")

    return(
        <div className='flex w-full flex-col justify-center items-center p-4'>
            <h2 className='text-xl font-bold'>Todo List</h2>
            <div className='flex w-full justify-between space-x-6 my-2'>
                <div className='w-1/3 bg-gray-200 rounded-lg'>
                    <h2 className='text-lg font-semibold mb-4 flex justify-center'>To Do</h2>
                    <TodoItem todos={todoByCategory.toStart}/>
                </div>
                <div className='w-1/3 bg-gray-200 rounded-lg'>
                    <h2 className='flex justify-center text-lg font-semibold mb-4'>In Progress</h2>
                    <TodoItem todos={todoByCategory.inProgress} />
                </div>
                <div className='w-1/3 bg-gray-200 rounded-lg'>
                    <h2 className='flex justify-center text-lg font-semibold mb-4'>Done</h2>
                    <TodoItem todos={todoByCategory.done}/>
                </div>
            </div>
            </div>
    )
}

export default TodoList