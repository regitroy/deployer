import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default {
    post: (path, data, onDone) => {
        axios.post(path, data)
        .then(function (response) {
            if(!response.data.success){
                toast.error(response.data.message);
                return;
            }
            onDone(response.data.data);
        }).catch(function (error) {
            console.log("ERROR -> ", error);
            toast("Something went wrong.");
        });
    },
    get: (path, onDone) => {
        axios.get(path)
        .then(function (response) {
            if(!response.data.success){
                toast.error(response.data.message);
                return;
            }
            onDone(response.data.data);
        })
        .catch(function (error) {
            toast("Something went wrong.");
        })
    },
    success: (msg) => {
        toast.success(msg);
    }
}