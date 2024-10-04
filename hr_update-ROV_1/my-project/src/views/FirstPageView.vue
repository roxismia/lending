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


<template>
    <div class="container">
        <div class="title">
            <h1>ВАСИЛИЙ  КУЗНЕЦОВ</h1>
        </div>
        
        <div class="block__info">
            <div class="block__info__row">
                <div class="block__info__text">
                    <div class="block__info__title"><h2>Нужен <span>надёжный</span> <br>коллектив  для IT - <br> проекта?</h2></div>
                    <div class="block__info__sub"><h3>Соберу команду <br> профессионалов!</h3></div>
                </div>
                    <div class="bloc__info__img__radius">
                    <div id="img" class="block_info__img"></div>
                </div>
            </div>

            <div class="block__info__Bottoms">
                <div @click="openModal" class="btn"><span>Связаться</span></div>
                    <ModalView v-if="showModal" ></ModalView>
                <div class="block__info__btn">
                    <div><span>CODE</span><span>SEO</span></div>
                    <div><span>JAVA</span><span>PYTHON</span></div>
                    <div><span>UX/UI</span><span>VUE.JS</span> <span class="block__info__mob">SQL</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>


.block__info__title {
    margin-bottom: 29px;
    margin-top: 20px;
    margin-left: 30px;
}

.block__info__title span {
    color: #A0B427;
}

.block__info__row {
    display: flex;
}

.block__info__text {
    text-align: start;
    width: 50%;
}

.block__info__sub {
    position: relative;
    margin-left: 30px;
}

.bloc__info__img__radius {
    margin-top: 20px;
    margin-left: 220px;
    position: relative;
    border: 1px solid #212121;
    border-radius: 50%;
}

.block__info__Bottoms {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-bottom: 30px;
}

.block__info__btn {
    position: absolute;
    left: 550px;
    top: -120px;
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
}

.block__info__btn div {
    margin-top: 35px;
}

.block__info__btn span {
    align-items: center;
    padding: 12px 30px;
    border: 1px solid #D1CBCB;
    border-radius: 35px;
    margin-right: 5px;
    font-size: 22px;
}

.btn span {
    padding-top: 10px;
    margin-top: 50px;
    font-size: 25px;
}

@media (max-width: 480px) {
    .block__info__btn {
        position: static;
    }

    .block__info__mob {
        opacity: 0;
    }

    .bloc__info__img__radius {
        margin: 20px 0;
    }
    .block__info__text {
        text-align: center;
        width: 90%;
    }
}

@media (max-width: 1150px) {
    .block__info__btn {
        position: static;
    }

    .block__info__mob {
        opacity: 0;
    }

    .bloc__info__img__radius {
        margin: 20px 0;
    }
    .block__info__text {
        text-align: center;
        width: 90%;
    }
}

</style>
