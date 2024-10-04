<script>
import ModalView from '../views/ModalView.vue';
import { Xmodal } from "./../modal/Xmodal";
const {showModal,openModal  } = Xmodal();
export default {
    components: {ModalView},
    methods: {
    openModal,
    },
    computed: {
        showModal() {       
            return showModal.value;
        },
    }
}
</script>

<template class="slide">
    <div class="container slide ">
        <div class="title">
            <h1>КОНТАКТЫ</h1>
            <div class="title__right2">Давай обсудим <br>
                Вашу задачу?!
            </div>
        </div>
        
        <div class="block__info">        
            <div class="block__info__row">
                <div class="block__info__text ">
                    <div class="block__info__title contact__font">
                        Вогоград: ул. Ряжская 39 <br>
                        Москва: Сколково Амальтея <br> <br>
                        Телефон: <a href="tel:+79375596195">+79375596195</a> <br>
                        <a href="https://t.me/compass_pro">@compass_pro(Телеграмм)</a>  <br>  
                        <a href="mailto:info@compas-pro.com">email:info@compas-pro.com</a>  
                    </div>
                </div>
                    <div class="bloc__info__img__radius">
                        <div class="block_info__img"></div>                    
                    </div>
            </div>

            <div class="block__info__Bottoms">
                <div @click="openModal" class="btn"><span>Связаться</span></div>
                    <ModalView v-if="showModal" ></ModalView>
                <div class="block__info__btn">
                    <div><span>CODE</span><span>SEO</span></div>
                    <div><span>JAVA</span><span>PYTHON</span></div>
                    <div><span>UX/UI</span><span>VUE.JS</span> <span class="display__none" >SQL</span></div>
                </div>
            </div>
        </div>
    </div>


    </template>
    <style scoped>
    .contact__font {
        position: relative;
        font-size: 25px;
        margin-top: 50px;
    }
    a{
        color: aliceblue;
    }
</style>

