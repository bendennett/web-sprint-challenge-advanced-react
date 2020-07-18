// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";


export const useForm = (initialValue, cb) => {
    const [values, setValues] = useLocalStorage('form-data', initialValue);
    const [showSuccessMessage, setShowSuccessMessage] = useLocalStorage(initialValue);
    
    const handleChanges = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });


    };

    

    



    

    

    



    return [values, handleChanges];
};