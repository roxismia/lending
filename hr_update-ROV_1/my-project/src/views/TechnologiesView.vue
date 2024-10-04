<script>
export default {
  data () {
    return {
      images : [
        {url : "images/laravel 1.svg", alt : "laravel "},
        {url : "images/react 1.png", alt : "React"},
        {url : "images/python 1.png", alt : "Python"},
        {url : "images/aws.svg", alt : "Aws"},
        {url : "images/vue.png", alt : "Vue"},
        {url : "images/airflow.png", alt : "Airflow"},
        {url : "images/ibm.png", alt : "IBM"},
        {url : "images/npm.svg", alt : "NPM"},
        {url : "images/nodejs.svg", alt : "NodeJs"},
        {url : "images/bootstrap.png", alt : "Bootstrap"},
        {url : "images/mysql.svg", alt : "MySql"},
        {url : "images/csharp.svg", alt : "c sharp"},
        {url : "images/postgresql.png", alt : "Postgresql"},
        {url : "images/bootstrap.png", alt : "Bootstrap"},
      ]
    }
  }
}
</script>

<template class="slide">
  <div class="container slide ">
    <div class="base">
      <div class="title"><h1>ЛИЧНАЯ IT - БАЗА</h1><div class="title__right">+500 <br> спецов</div></div>

      <div class="base__cards">
        <div class="base__card__row">
              <div class="base__card">
                <div class="base__title">Разработка, Тестирование, <br> DevOps</div>
                <div class="base__svg"></div>
                <div class="base__text">
                  <div class="base__sub">Back-end и Front-end разработчики
                    любого стека (PHP, C++, C#, .Net, Python, Go, Perl,
                    Java, Node.js, Android, IOS, и т.п.), cистемные администраторы,
                      DevOps инженеры, QA lead, QA engineer,
                      ручное и автоматизированное тестирование
                  </div>
                </div>
              </div>

        <div class="base__card">
          <div class="base__title">Маркетинг и Дизайн</div>
          <div class="base__svg"></div>
          <div class="base__text">
            <div class="base__sub">
              Директологи, Интернет-маркетологи,
              таргетологи, web-аналитики, SEO-оптимизаторы, траффик-менеджеры,
              email-маркетологи, digital-стратеги, digital креаторы,
              SMM-менеджеры, контент менеджеры, копирайтеры,
              редактора.
              Web и граф. дизайнеры, UI / UX дизайнеры,
              иллюстраторы.
            </div>
          </div>
        </div>

              <div class="base__card">
                <div class="base__title">Data и безопасность</div>

                <div class="base__svg"></div>
                <div class="base__text">
                  <div class="base__sub">
                      Администратор базы данных,
                      Data Analytics, Data Scientists, BI, Пентестеры,
                      Machine Learning Developer, Информационная безопасность,
                      Специалисты по сетям, Облачная безопасность, Риск менеджер
                  </div>
                </div>
              </div>

              <div class="base__card display__none">
                <div class="base__svg"></div>
                <div class="base__text">
                  <div class="base__title">Управление, проекты <br> и сервис</div>
                </div>
              </div>

              <div class="base__card display__none">
                <div class="base__svg"></div>
                <div class="base__text">
                  <div class="base__title">GameDev направление</div>
                </div>
              </div>

              <div class="base__card display__none">
                <div class="base__svg"></div>
                <div class="base__text">
                <div class="base__title">Подбор в web 3.0 <br> проекты</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  

  
  <div  class="title display__none"><h1>ТЕХНОЛОГИИ</h1><div class="title__right">+500 <br> Работ</div></div>
  <div class="technologies__row display__none">
    <div v-for="image in images" class="technologies__svg">
      <img :src="image.url" :alt="image.alt">
    </div>
  </div>
</div>

</template>

<style>
.base__card__TR {
  display: flex;
  margin-left: 80px;
  width: 1000px;
  justify-content: space-between;
}

.base__card__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 50px;
}

.base__card {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 29%;
  margin-bottom: 30px;
}

.base__text {
  display: flex;
  flex-direction: column;
  width: 375px;
  text-align: left;
}

.base__title {
  margin-bottom: 20px;
  font-family: 'Dela Gotic One';
  font-size: 23px;
  color: #FFFFFF;
}

.base__sub {
  font-family: 'Dela Gotic One';
  font-size: 20px;
  color: #FFFFFF;
}

.technologies__svg {
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 161px;
  height: 161px;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  justify-content: center;
}

.swiper-slide img {
	width: auto; 
	height: auto;
	object-fit:none;
	position: static;
  }

@media (max-width: 480px) {

.base__card__row {
  flex-direction: column;
  padding-left: 0;
  align-items: center;
}

.base__card {
  width: 100%;
  align-items: center;
}
.display__none {
  display:none;
}

.base__sub {
  font-size: 15px;
}

}

@media (max-width: 1150px) {

  .base__card__row {
    flex-direction: column;
    padding-left: 0;
    align-items: center;
  }
  
  .base__card {
    width: 100%;
    align-items: center;
  }
  .display__none {
    display:none;
  }
  
  .base__sub {
    font-size: 25px;
  }
  .base__text {
    width: auto;
  }
  .base__title {
    font-size: 33px;
  }
  }
  
</style>