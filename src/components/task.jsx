import { useDispatch } from "react-redux";
import { doneTask, removeTask } from "./redux/tasksSlice";
import bin from '../assets/img/trash.png';
import done from '../assets/img/circle-done.png'
import active from '../assets/img/circle-active.png'

const Task = ({tasks}) => {
    const dispatch = useDispatch();
    const removeThisTask = () => {
        dispatch(
			removeTask({
				id: tasks.id
			})
		)
    }
    const doneHandler = () => {
        dispatch(
            doneTask(
                {
                    id: tasks.id
                }
            )
        )
    }
    return (
        <div className="task">
            <div className="task__description">
                <input type="checkbox" name={tasks.task} id={tasks.id} onChange={doneHandler}/>
                <label style={{textDecoration: tasks.isDone ? "line-through" : "none", color: tasks.isDone ? "#C4C4C4" : "#3E3B3B"}} htmlFor={tasks.id}>
                    <img src={tasks.isDone ? done : active} alt="" />
                    {tasks.task}</label>
            </div>
            <button onClick={()=>removeThisTask()}>
                <img src={bin} alt="" />
            </button>
            
        </div>
    )
}
export default Task;