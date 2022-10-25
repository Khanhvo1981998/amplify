import Axios from "axios";
import { ADD_TASK_API, CHECK_TASK_API, DEL_TASK_API, GET_TASK_API, REJECT_TASK_API } from "../constants/ToDoListConst";


export const getTaskListApi = () => {

    return dispatch => {
        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'GET'
        });

        promise.then((result) => {
            console.log(result.data);
            // nếu gọi api lấy kết quả thành công thì set lại state của component

            dispatch({
                type: GET_TASK_API,
                taskList: result.data

            })
        });
        promise.catch((err) => {
            console.log('thất bại');
            console.log(err.response.data);
        });
    }
}

export const addTaskApi = (taskName) => {

    return dispatch => {
        let promise = Axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'POST',
            data: { taskName: taskName }
        });

        promise.then(result => {
            // console.log(result.data);
            // alert('add task success')

            dispatch({
                type: ADD_TASK_API,
                taskList: result.data

            })
            dispatch(getTaskListApi())
        })
        promise.catch(result => {
            alert('add task fail', result.response.data)
            console.log(result.response.data);
        });

    }
}
export const delTaskApi = (taskName) => {

    return dispatch => {

        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE',
            data: { taskName: taskName }
        });



        promise.then(result => {
            // console.log(result.data);
            // alert('add task success')

            dispatch({
                type: DEL_TASK_API,
                taskList: result.data

            })
            dispatch(getTaskListApi())
        })
        promise.catch(result => {
            alert('del task fail', result.response.data)
            console.log(result.response.data);
        });

    }
}


export const checkTaskApi = (taskName) => {

    return dispatch => {

        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT',
            data: { taskName: taskName }
        });



        promise.then(result => {
            // console.log(result.data);
            // alert('add task success')

            dispatch({
                type: CHECK_TASK_API,
                taskList: result.data

            })
            dispatch(getTaskListApi())
        })
        promise.catch(result => {
            alert('del task fail', result.response.data)
            console.log(result.response.data);
        });

    }
}

export const rejectTaskApi = (taskName) => {

    return dispatch => {

        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT',
            data: { taskName: taskName }
        });

        promise.then(result => {
            // console.log(result.data);
            // alert('add task success')

            dispatch({
                type: REJECT_TASK_API,
                taskList: result.data

            })
            dispatch(getTaskListApi())
        })
        promise.catch(result => {
            alert('del task fail', result.response.data)
            console.log(result.response.data);
        });

    }
}