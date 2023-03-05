import { toast } from 'react-hot-toast';

const notificationSuccess = (message) => {
    return toast.success(message,{
        duration: 2000,
        position: 'bottom-right',
        style: {
            border: '1px solid #666',
            background: '#333',
            color: '#fff'
        },
    })
}

const notificationError = (message) => {
    return toast.error(message,{
        duration: 2000,
        position: 'bottom-right',
        style: {
            border: '1px solid #666',
            background: '#333',
            color: '#fff'
        },
    })
}

export  { notificationSuccess, notificationError };