<script setup>
import {onMounted, ref} from 'vue';
import Swiper from 'swiper';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import FirstPageView from '../views/FirstPageView.vue';
import TechnologiesView from '../views/TechnologiesView.vue';
import ContactsView from '../views/ContactsView.vue';
import ServiseView from '../views/ServiseView.vue';
import SpecializationView from '../views/SpecializationView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import QuestionView from '../views/QuestionView.vue';
import OlaView from '../views/OlaView.vue';







const swiperInstance = ref(null);
const isMobile = ref(false)
const components = ref([
	FirstPageView,
	SpecializationView,
	TechnologiesView,
	ExperienceView,
	ServiseView,
	ContactsView,
	QuestionView,
	OlaView

]);

// const handleMouseWheel = (event) => {
// 	if (event.deltaY > 0) {
// 		swiperInstance.value.slideNext();
// 	} else {
// 		swiperInstance.value.slidePrev();
// 	}
// };



const handleMouseWheel = (event) => {
  const currentComponent = swiperInstance.value.activeIndex;
  const isFirstPageView = currentComponent === 2; // FirstPageView
  const isSpecializationView = currentComponent === 6; // SpecializationView

  if (isFirstPageView || isSpecializationView) {
    const scrollPosition = window.scrollY;
    const screenHeight = window.innerHeight;
    const scrollBottom = scrollPosition + screenHeight;

    if (event.deltaY < 0) {
      if (scrollPosition < scrollBottom) {
        window.scrollTo(0, scrollPosition + screenHeight);
      } else {
        swiperInstance.value.slideNext(); // <--- Add this line
      }
    } else {
      if (scrollPosition > 0) {
        window.scrollTo(0, scrollPosition - screenHeight);
      } else {
		swiperInstance.value.slideNext();
        // swiperInstance.value.slidePrev();
      }
    }
  } else {
    if (event.deltaY > 0) {
      swiperInstance.value.slideNext();
    } else {
      swiperInstance.value.slidePrev();
    }
  }
};

// const handleMouseWheel = (event) => {
//   const currentComponent = swiperInstance.value.activeIndex;
//   const isFirstPageView = currentComponent === 2; // FirstPageView
//   const isSpecializationView = currentComponent === 6; // SpecializationView

//   if (isFirstPageView || isSpecializationView) {
//     const scrollPosition = window.scrollY;
//     const screenHeight = window.innerHeight;
//     const scrollBottom = scrollPosition + screenHeight;

//     let scrolledDown = false;
//     let scrolledUp = false;

//     if (event.deltaY > 0) {
//       if (scrollPosition < scrollBottom) {
//         window.scrollTo(0, scrollPosition + screenHeight);
//         scrolledDown = true;
//       } else {
//         swiperInstance.value.slideNext();
//         scrolledDown = false;
//         scrolledUp = false;
//       }
//     } else {
//       if (scrollPosition > 0) {
//         window.scrollTo(0, scrollPosition - screenHeight);
//         scrolledUp = true;
//       } else {
//         swiperInstance.value.slidePrev();
//         scrolledUp = false;
//         scrolledDown = false;
//       }
//     }
//   } else {
//     if (event.deltaY > 0) {
//       swiperInstance.value.slideNext();
//     } else {
//       swiperInstance.value.slidePrev();
//     }
//   }
// };

const newLocal = () => {
  components.value.forEach(element => {
    if (element === components.value.FirstPageView || element === components.value.SpecializationView) {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const scrollBottom = scrollPosition + screenHeight;

      if (scrollPosition >= scrollBottom) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'scroll';
      }
    } 
  });
};

const noScroll = () => {
    components.value.forEach(element => {
      if (element === components.value.FirstPageView || element === components.value.SpecializationView || element === components.value.ExperienceView || element === components.value.ContactsView) {
        document.body.style.overflow = 'hidden';
		console.log(components.value)
      }
    });
  }


onMounted(() => {
	window.addEventListener('wheel', (event) => {
		event.preventDefault()
		
	},{ passive: false })
	noScroll();
	const SECOND = 1000;
	swiperInstance.value = new Swiper('.swiper', {
		modules: [Navigation, Autoplay, Pagination],
		spaceBetween: 30,
		slidesPerView: 'auto',
		speed: SECOND / 1,
		observer: true,
		observeParents: true,
		parallax: true,
		preventClicks: false,
		preventClicksPropagation: false,
		slideToClickedSlide: true,
		touchEventsTarget: 'container',
		
	},
	);
	window.addEventListener('wheel', handleMouseWheel);
	
});

const goNext = () => {
	if (swiperInstance.value) {
		swiperInstance.value.slideNext();
	}
};
</script>

<template>
	<header>
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
							<li><a href="#component-0">
									<h4>Мой опыт</h4>
								</a></li>
							<li><a href="#component-1">
									<h4>Специализация</h4>
								</a></li>
							<li><a href="#component-3">
									<h4>Экспертиза</h4>
								</a></li>
							<li><a href="#component-2">
									<h4>IT - база</h4>
								</a></li>
							<li><a href="#component-4">
									<h4>УСЛУГИ</h4>
								</a></li>
							<li><a href="#component-5">
									<h4>Контакты</h4>
								</a></li>
						</ul>
						<div @click="goNext" class="arrow"></div>
					</div>
				</div>
			</nav>
			<div class="popup" id="popup">
			</div>
		</div>
	</header>

	<div ref="swiper" class="swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide" :style="sliderStyle" v-for="(component, index) in components" :key="index"
				v-bind:data-index="index" :id="'component-' + index">
				<component :is="component"></component>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
/* Стили для вашего слайдера */
.swiper {
	width: 100%;
	height: 100%;
	overflow: hidden;

}

.swiper [class^="swiper-button-"]::after {
	content: "";
}

.swiper-slide {
	width: 100%;
	min-height: 479px;
	padding: 0;
	display: flex;
	justify-content: center;
	background: #fff;
	position: relative;

}

.swiper-button-next {
	position: absolute;
	top: 50%;
	right: 17.7%;
	z-index: 2;
	/* Убедитесь, что кнопка находится над изображениями */
}

.swiper-additional-url {

	position: relative;
	top: 130px;
	display: flex;
	right: 50px;
	justify-content: end;

	a {
		padding: 80px 120px 0 30px;
		width: 50%;
		white-space: nowrap;
		font-family: 'Lato', sans-serif;
		font-weight: 300;
		font-size: 25px;
		color: white;
		top: 2px;
		text-decoration: none;
	}
}

.swiper-slide img {
	width: 0;
	height: 0;
	object-fit: none;
	position: static;
}


@media (max-width: 480px) {
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

	.popup .menu>li {
		width: 100%;
	}

	.popup .menu>li>a {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 20px 0;
		font-size: 20px;
		font-weight: bold;
		color: #3f3f3f;
	}

	.popup .menu>li>a:hover {
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

@media only screen and (max-width: 768px) {
	.swiper-slide {
	  width: 100%;
	}
  }
  

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

	.popup .menu>li {
		width: 100%;
	}

	.popup .menu>li>a {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 20px 0;
		font-size: 20px;
		font-weight: bold;
		color: #3f3f3f;
	}

	.popup .menu>li>a:hover {
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