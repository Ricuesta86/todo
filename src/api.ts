import { todo } from './todo';
const api={
    todos:{
        list:():todo[]=>{
            try {
                return JSON.parse(localStorage.getItem('todos')||'[]');
            } catch (error) {
                return []
            }
        },
        set:(todos:todo[])=>localStorage.setItem('todos',JSON.stringify(todos))
    }

}

export default api