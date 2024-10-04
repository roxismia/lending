<script></script>
<template>
  <div class="container">
    <div class="specialization">
      <div class="title">
        <h1>СПЕЦИАЛИЗАЦИЯ</h1>
      </div>

      <div class="specialization_contet">
        <div class="specialization__row">
          <div class="specialization__text">
            <h5>Я разработал эффективные стратегии поиска и отбора кандидатов,
              используя как традиционные методы, так и инновационные подходы, 
              включая социальные сети и специализированные
              платформы. <br> <br>

              Моя компетенция включает проведение комплексных интервью, ассессментов
              и тестирований для оценки профессиональных и личных качеств кандидатов.
            </h5>
          </div>
          <div class="specialization__circle">
            <div class="top__circle">+12 лет <br> опыта</div>
            <div class="bottom__circle">
              <div class="bottom__circle1">HR-технологии</div>
              <div class="bottom__circle2">Аналитика</div>
              <div class="bottom__circle3">Навыки коммуникации</div>
            </div>
          </div>
          <div class="specialization__img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.specialization__row {
  display: flex;

}

.specialization__text {
  width: 445px;
  padding: 78px 80px;
  text-align: left;
  font-size: 23px;
  color: #FFFFFF;
font-size: 25px;
line-height: 33px;

}

.top__circle {
  position: relative;
  margin-top: 25px;
  padding: 45px 50px;
  font-family:'Dela Gotic One';
  line-height: 30px;
  text-align: center;
  background: #A0B427;
  color: #212121;
  border-radius: 50%;
  left: -50px;
}

.bottom__circle {
  position: relative;
  left: 70px;
  top: -30px;
}

.bottom__circle1 {
  top: 40px;
  padding: 50px 35px;
  position: absolute;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  font-size: 14px;
}

.bottom__circle2 {
  position: absolute;
  top: 170px;
  padding: 55px 35px;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  font-size: 14px;
  right: 110px;

}

.bottom__circle3 {
  position: absolute;
  top: 180px;
  padding: 50px 30px;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  font-size: 14px;
  left: 50px;

}

@media (max-width: 480px) {

  .specialization__row {
flex-direction: column ;
align-items: center;
  }

  .specialization__img {
    position: static;
    background: none;
  }
  .specialization__img::before {
    background: none;
  }

  .specialization__text {
    font-size: 18px;
    padding: 25px;
    line-height: 1.5;
    width: auto;
    padding-left: 10px;
  }

  .top__circle {
    width: 45px;
    height: 45px;
    left: 100px;
    top: -100px;
    font-size: 22px;
  }

  .bottom__circle1 {
    left: -95px;
    top: -90px;
    padding: px 20px;
    width: 55px;
    height: 30px;
  }

  .bottom__circle2 {
    right: 150px;
    top: 50px;
  }

  .bottom__circle3 {
    top: 20px;
    padding: auto;
    left: 0;
  }
}

@media (max-width: 1150px) {

  .specialization__row {
flex-direction: column ;
align-items: center;
  }

  .specialization__img {
    position: static;
    background: none;
  }
  .specialization__img::before {
    background: none;
  }

  .specialization__text {
    font-size: 18px;
    padding: 25px;
    line-height: 1.5;
    width: auto;
    padding-left: 10px;
  }

  .top__circle {
    width: 45px;
    height: 45px;
    left: 100px;
    top: -100px;
    font-size: 22px;
  }

  .bottom__circle1 {
    left: -95px;
    top: -90px;
    padding: px 20px;
    width: 55px;
    height: 30px;
  }

  .bottom__circle2 {
    right: 150px;
    top: 50px;
  }

  .bottom__circle3 {
    top: 20px;
    padding: auto;
    left: 0;
  }
}

</style>