import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux/tasksSlice";
import '../assets/styles/app.scss'

const TaskInput = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const addNewTask = () => {
        if(inputValue.trim().length === 0)
		{
			alert('Input field is empty');
			setInputValue('');
			return;
		}
        dispatch(
            addTask({
                task: inputValue
            })
        )
        setInputValue('');
    }
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    return (
        <div className="taskInput">
            <input type="text" value={inputValue} onChange={handleChange} placeholder='Task'/>
            <button onClick={addNewTask}>Add task</button>
        </div>
    )
}
export default TaskInput;