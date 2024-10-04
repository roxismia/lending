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
    <div class="services">
      <div class="title">
        <h1>УСЛУГИ</h1>
        <div class="title__right2">ЗАКРОЮ ОДНУ ИЛИ <br>
          НЕСКОЛЬКО ВАКАНСИЙ
        </div>
      </div>
    
      <div class="servise__cards">
        <div class="servise__card color__violet">
          <div class="servese__top"><div class="servise__circle">
            <div class="servese__num">1</div> 
          </div>
          <div class="servise__text">Выявление требований и пожеланий к будущим кандидатам</div></div>
          <div class="servise__border"></div>
          <div class="servise__center">1999 Руб</div>
          <div @click="openModal" class="servese__bottom btn">Получить</div>
          <ModalView v-if="showModal" ></ModalView>

        </div>

        <div class="servise__card color__pinck">
          <div class="servese__top">
            <div class="servise__circle">
            <div class="servese__num">2</div> 
          </div>
          <div class="servise__text">Поиск эффективных каналов поиска, написание и публикация вакансий</div></div>
          <div class="servise__border"></div>
          <div class="servise__center">1999 Руб</div>
          <div @click="openModal" class="servese__bottom btn">Получить</div>
          <ModalView v-if="showModal" ></ModalView>
        </div>

        <div class="servise__card color__green">
          <div class="servese__top ">
            <div class="servise__circle">
            <div class="servese__num">3</div> 
          </div>
          <div class="servise__text">Жесткий отбор, интервью и тестирование</div></div>
          <div class="servise__border"></div>
          <div class="servise__center">1999 Руб</div>
          <div @click="openModal" class="servese__bottom btn">Получить</div>
          <ModalView v-if="showModal" ></ModalView>
        </div>
        <div class="servise__card color__black">
          <div class="servese__top">
            <div class="servise__circle">
            <div class="servese__num">4</div> 
          </div>
          <div class="servise__text">Предварительный список подходящих кандидатов и контрольное собеседование</div></div>
          <div class="servise__border"></div>
          <div class="servise__center">1999 Руб</div>
          <div @click="openModal" class="servese__bottom btn">Получить</div>
          <ModalView v-if="showModal" ></ModalView>

        </div>

        <div class="servise__card color__pinck">
          <div class="servese__top">
            <div class="servise__circle">
            <div class="servese__num">5</div> 
          </div>
            <div class="servise__text">
              Вывод сотрудника на должность 
              и гарантия бесплатной замены
            </div>
        </div>
          <div class="servise__border"></div>
          <div class="servise__center">1999 Руб</div>
          <div @click="openModal" class="servese__bottom btn">Получить</div>
          <ModalView v-if="showModal" ></ModalView>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.servise__border {
  border-bottom: 1px solid #ffff;
    width: 160px;
}

.color__pinck {
  background: #D11074;
}

.color__green {
  background: #A0B427;
}

.color__black {
  background: #000;
}

.color__violet {
  background: #5C42C8;
}

.title__right2 {
  color: #000;
  border-left: 1px solid #000;
  font-size: 27px;
  text-align: left;
  padding-left: 25px;
  margin-left: 20px;
  position: relative;
  right: 600px;
}

.servise__cards {
display: flex;
}

.servise__card {
  width: 20%;
  margin-right: 13px;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
}

.servise__circle {
  width: 50px;
  height: 50px;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.servese__num {
  font-size: 20px;
}

.servise__text {
  padding: 20px;
  font-size: 23px;
  line-height: 32px;
  text-align: center;
  color: #FFFFFF;
  padding-bottom: 50px;
}

.servise__center {
  font-size: 23px;
  color: #FFFFFF;
  margin: 43px 0 32px 0;
}

.servese__bottom{
  border: 1px solid #FFFFFF;
  border-radius: 30px;
  padding: 10px 50px;
  margin: 10px;
  font-size: 23px;
  transition:all 0.3s;
}

.servese_bottom:hover {
  background-color: #FF0000;
  color: #FF0000;
}

.servese__top {
  display: flex;
    margin-top: 60px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.servise__card .btn {
  width: auto;
  height: auto;
  background: none;
  color: #fff;
 }

.servise__card .btn:hover {
  background: none;
 }



@media (max-width: 480px) {
  .servise__cards {
    flex-direction: column;
  }

  .servise__card {
    width: 100%;
    margin: 10px 0
  }
  .servise__circle {
    left: 195px
  }
  .servise__text {
    padding-bottom: 0;
  }
  .title__right2 {
    border-left: none;
    right:0;
  }
  .servise__center {
    margin-top: 10px;
  }
  
}

@media (max-width: 1150px) {
  .servise__cards {
    flex-direction: column;
  }

  .servise__card {
    width: 100%;
    margin: 10px 0
  }
  .servise__circle {
    left: 195px
  }
  .servise__text {
    padding-bottom: 0;
  }
  .title__right2 {
    border-left: none;
    right:0;
  }
  .servise__center {
    margin-top: 10px;
  }
  
}

</style>

