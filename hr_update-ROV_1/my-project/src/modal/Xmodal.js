import { ref } from "vue";
import axios from "axios";
export const showModal = ref(false);
export const openModal = () => {
    showModal.value = true;
    console.log(showModal.value)
};
export const closeModal = () => {
    showModal.value = false;
    console.log(showModal.value)
};


export const Xmodal = () => {
    const form = ref({
    });
    const message = ref("");
    const isChecked = ref(false);
    const validateForm = () => {
        
        if (isChecked.value === false && form.value.email === undefined && form.value.number === undefined && form.value.task === undefined){
            console.log("поля не заполнены")
            
        }
    }


    const resetForm = () => {
        form.value = {
            email: '',
            number: '',
            task: '',          
        };
        };

    const submitForm = async () => {
        const formData = {
        result_view: "compas-hr",
        connector: `почта:${form.value.email} номер:${form.value.number} задача:${form.value.task}`,
        };
    
        try {
        console.log("try?");
        await axios.post("https://api.yourcompas.ru/notification/", formData);
        message.value = 'Ваша заявка успешно отправлена! Мы получили Вашу заявку и в скором времени направим специалиста, который сможет проконсультировать Вас. Благодарим за отклик!';
        resetForm(); // Сброс данных формы после успешной 
        console.log(message.value = "Письмо отправленно")
        } catch (er) {
            
        console.log("er", er);
        message.value = "попробуйте еще раз";
        } finally {
        setTimeout(() => {
            if(isChecked.value === true){
            form.value = {};
            showModal.value = false;}else{
                showModal.value = true;
                message.value = "письмо не может быть пустым";

            }
        }, 5000);
        }
    };

    return { submitForm, form, message, showModal, openModal, closeModal, isChecked,validateForm};
    };


