import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('tasks')) && JSON.parse(localStorage.getItem('tasks')).tasks || [];

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: new Date().getTime(),
                task: action.payload.task,
                isDone: false
            }
            state.push(newTask);
        },
        removeTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
        doneTask: (state, action) => {
            state.map((item) => {
                if (item.id === action.payload.id) return item.isDone = !item.isDone;
            })
        }
    },
})

export const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('tasks', JSON.stringify(getState()));
        return result;
    };
};


export const { addTask, removeTask, doneTask } = tasksSlice.actions

export default tasksSlice.reducer