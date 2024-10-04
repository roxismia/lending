
<script setup>
import { Xmodal } from "./../modal/Xmodal";
const { submitForm, form,closeModal,message,isChecked,validateForm} = Xmodal();
import {vMaska} from "maska";
</script>

<template  class="slide">
    <form id="forma" class="modal"  @submit.prevent="submitForm">
        <div class="modal-content">
            <div class="modal__title">
                <p>Оставьте заявку</p>
                <button class="closeModal" @click="closeModal">x</button>
            </div>
            <div class="modal__form">
                телефон:
                <input v-maska
                data-maska="+7 (9##) ###-##-##"
                v-model="form.number"
                type="text"
                placeholder="телефон"
                required
                
                />
            
            <div>
                email:
                <input class="email" v-model="form.email" type="text" placeholder="почта" required/>
            </div>
            <div>
                Ваш запрос:
                <input v-model="form.task" type="text" placeholder="задача" required/>
            </div>
        </div>
            <div class="checkbox">
                <input class="checkbox__rectangle" type="checkbox" @click="validateForm"  v-model="isChecked" required>
                Даю согласие на обработку персональных данных
            </div>

            <button   @click="submitForm" class="modal__btn" type="submit">Связаться</button>
        </div>
        <div  class="modal__message">{{message}}</div>
    </form>
  </template>
  

  <style>
  .modal__message {
    position: relative;
    font-size: 40px;
    top: -150px;
    color: #db6e09;
    border:1px solid #db6e09 ;
  }

  .modal__message-active {
display: block;
background-color: #e70909;
  }
  input:required:invalid {
    border-color: rgb(245, 242, 242);
  }
  
  input:focus:required:invalid {
    border-color: 2px solid red;
  }
  

  
  form:invalid {
    border: 5px solid #ffdddd;
  }
  
   input:valid {
    border: 1px solid #0df72c;
  }
  
  form:valid {
    border: 5px solid #ddffdd;
  }
  
  input:required {
    border-width: 3px;
  }


  .closeModal {
    width: 60px;
    height: 40px;
    position: absolute;
    color: #2e2a2a;;
    background: none;
    left: 410px;
    top: -20px;

  }

.border-red {
    border: 3px solid #e70909;;
}
  .errs {
      border-color: red 1px;
  }
  .checkbox__rectangle {
      height: 26px;
      width: 26px;
      margin-right: 26px;
  }
  .checkbox {
      display: flex;
      height: 50px;
      align-items: center;
  }
  
  .modal__title {
    position: relative;
    display: flex;
  font-size: 40px;
  text-transform: uppercase;
  color: #D7F61C;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  }
  
  .modal__form {
  width: 511px;
  height: 319px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.48); 
  border-radius: 20px;
  
  }
  input {
    

opacity: 0,5;
width: 494px;
height: 81px;
border: 4px solid #FFFFFF;
border-radius: 20px;
background: rgba(255, 255, 255, 0.48);
  }
  
  .modal__btn {
  width: 286px;
  height: 76px;
  background: #D7F71C;
  border: 1px solid #212121;
  box-shadow: 0px 4px 10px rgba(160, 180, 39, 0.25);
  border-radius: 50px;
  font-size: 25px;
  color: #212121;
  
  }
  .close {
      color: red;
  }
  .modal {
      display: flex;
      flex-direction:column ;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  
  .modal-content {
    position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 590px;
      height: 633px;
    background: url('./images/фон.png');
    background-size: cover;
    padding: 20px;
    border-radius: 20px;
  }
  
  </style>  
  
