<script>


export default {  
    methods: {
      addEventListeners() {
      this.links.forEach((link) => {
        link.addEventListener("click", this.closeOnClick);
      });
    },
    closeOnClick() {
      this.$refs.popup.classList.remove("open");
      this.$refs.hamb.classList.remove("active");
      this.$refs.body.classList.remove("noscroll");
    },
    
    hambHandler(e) {
      const hamb = document.querySelector("#hamb");
      const popup = document.querySelector("#popup");
      const body = document.body;
      e.preventDefault();
      // Переключаем стили элементов при клике
      popup.classList.toggle("open");
      hamb.classList.toggle("active");
      body.classList.toggle("noscroll");
      this.renderPopup();
    },

  mounted() {
    
  
    
    window.removeEventListener('wheel', this.handleWheel)

    const menu = document.querySelector("#menu").cloneNode(1);
        popup.appendChild(menu);
}
}
}







 </script>

<template>
    <!-- <header>
    <div class="container">
        <nav class="navbar">
          <div class="container__nav">
            <div class="navbar__wrap">
              <div class="hamb">
                <div @click="hambHandler" class="hamb__field" id="hamb">
                  <span class="bar"></span> <span class="bar"></span>
                  <span class="bar"></span>
                </div>
              </div>
            <ul ref="menu" class="menu" id="menu">
                <li><router-link to="/"><h4>Мой опыт</h4></router-link></li>
                <li> <router-link to="/specialization"> <h4>Специализация</h4></router-link></li>
                <li><router-link to='/experience'><h4>Экспертиза</h4></router-link></li>
                <li><router-link to='/Technologies'><h4>IT - база</h4></router-link></li>
                <li><router-link to='/servise'><h4>УСЛУГИ</h4></router-link></li>
                <li><router-link to='/Contacts'><h4>Контакты</h4></router-link></li>
            </ul>
            <div @click="goNext" class="arrow"></div>
          </div>
          </div>
        </nav>
        <div class="popup" id="popup">
          
        </div>
    </div>
    </header> -->
        
    <!-- <div ref="swiper" class="swiper"
    v-swiper:swiper="swiperOption"
    @click="sliderClicked">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :style="sliderStyle"
        v-for="(component, index) in components" :key="index"
        v-bind:data-index="index">
      <component :is="component"></component>
      </div>
    </div>
  
     <div class="swiper-button-next">
      <UIButton
        text="Читать историю"
        @click="goNext"
        borderColor="#fff"
        imageUrl="/img/Slider/arrow.svg"
        imageWidth="40%"
        size="250"
        borderWidth="0"
        fontSize="0"
        top="-100px"
        position="absolute"
        margin="0 25% 10%"
      />
    </div> -->
  <!-- </div> -->
 
    

  </template>


 <style>



@media (max-width: 1150px) {
  .navbar__wrap .menu {
    display: none;
  }

  .hamb {
    display: flex;
    align-items: center;    
  }

  .hamb__field {
    padding: 10px 20px;
    cursor: pointer;
  }

  .bar {
    display: block;
    width: 57px;
    height: 1px;
    margin: 10px auto;
    background-color: #181717;
    transition: 0.2s;
  }

  .popup {
    position: fixed;
    top: 100px;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    display: flex;
    transition: 0.3s;
  }

  .popup.open {
    left: 0;
  }

  .popup .menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 50px 0;
    overflow: auto;
  }

  .popup .menu > li {
    width: 100%;
  }

  .popup .menu > li > a {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    font-size: 20px;
    font-weight: bold;
    color: #3f3f3f;
  }

  .popup .menu > li > a:hover {
    background-color: rgba(122, 82, 179, 0.1);
  }

  .hamb__field.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamb__field.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamb__field.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  body.noscroll {
    overflow: hidden;
  }
}
</style> 

