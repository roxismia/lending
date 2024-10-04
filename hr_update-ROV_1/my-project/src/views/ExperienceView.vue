<template>
    <div class="container">
        <div class="title">
            <h1>ЭКСПЕРТИЗА И ОПЫТ</h1>
        </div>

        <div class="experience__cards">
            <div class="experience__card">
                <div class="card__content top ">
                    <div class="experience__circle">
                        <div class="experience__num">1</div>
                    </div>
                    <div class="card__text">Подбираю команды под Ваши бизнес-идеи</div>
                </div>
                <div class="card__content center">
                    <div class="experience__circle">
                        <div class="experience__num">2</div>
                    </div>
                    <div class="card__text">Лично составляю <br> и проверяю ТЗ</div>
                </div>
                <div class="card__content bottom">
                    <div>
                        <div class="experience__circle">
                            <div class="experience__num">3</div>
                        </div>

                        <div class="card__text">Декомпозирую <br> задачи в Jira</div>
                        <div class="card__content1">
                            <div class="experience__circle1">
                                <div class="experience__num1">4</div>
                            </div>
                            <div class="card__text1">Проверяю <br> правильность <br> выполнения задач</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="experience__card experience__card__img"></div>
            <div class="experience__card">
                <div class="experience__btn ">
                    <span>JAVA</span><span>NOCODE</span><span>SEO</span><span>LARAVEL</span>
                </div>
                <div class="card__content color__5">
                    <div class="experience__circle">
                        <div class="experience__num">5</div>
                    </div>
                    <div class="card__text">Разработка и реализация стратегических планов компании</div>
                </div>
                <div class="card__content color__6">
                    <div class="experience__circle2">
                        <div class="experience__num">6</div>
                    </div>
                    <div class="card__text2">Внедряю новые технологии и методики работы</div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.experience__circle2 {
    width: 50px;
    height: 50px;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 115px;
    left: 15px;

}

.card__text2 {
    text-align: left;
    margin-top: 108px;
    margin-left: 85px;

}

.experience__cards {
    display: flex;
    align-items: senter;
}

.experience__card {
    width: 33%;

}


.card__content {
    position: relative;
    display: flex;
    width: 400px;
    height: 226px;
    border: 1px solid #222222;
    border-radius: 20px;
    font-size: 22px;
}

.card__content1 {
    display: flex;
    position: relative;
}


.experience__circle {
    width: 50px;
    height: 50px;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 45px;
    left: 15px;
}

.experience__circle1 {
    width: 50px;
    height: 50px;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    left: 15px;
}

.experience__num {
    font-size: 20px;
}

.card__content__bottom div {
    display: flex;
    align-items: flex-start;
    text-align: left;
}

.bottom {
    position: relative;
    background: #A0B427;
    display: flex;
    flex-direction: column;
    top: -200px;
}

.top {
    background: #5C42C8;
}

.center {
    position: relative;
    top: -100px;

    background: #D11074;
}

.card__number {
    margin: 10px;
    padding: auto;
    margin-top: 38px;
    margin-left: 16px;
    width: 50px;
    height: 50px;
    border: 1px solid #FFFFFF;
    border-radius: 50px;
}

.card__text {
    text-align: left;
    margin-top: 38px;
    margin-left: 85px;
}

.card__text1 {

    margin-left: 85px;
    text-align: left;
    margin-top: 5px;

}

.experience__btn {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    color: #212121;
    padding-right: 60px;
    font-size: 22px;
    margin-right: 25px;
}

.experience__btn span {
    border: 1px solid #000;
    border-radius: 20px;
    padding: 5px 30px;
    margin-right: 5px;
    margin-bottom: 5px;

}



.color__5 {
    background: #5C42C8;
    position: relative;
    z-index: 2;
}

.color__6 {
    position: relative;
    background: #D11074;
    top: -70px;
}

.color__6 .card__text {
    padding-top: 70px;
}

.color__6 .card__number {
    padding-top: 70px;
}

@media (max-width: 480px) {
    .experience__cards {
        flex-wrap: wrap;
        justify-content: center;
    }
    .experience__card {
        width: 100%;
        flex: 1;
        padding-bottom: 50px;
        height: 430px;
    }

    
    .experience__card:nth-child(2) {
    order: -1; 
    }

    .experience__btn {
    display: none;
    }
    .color__5 {
    z-index: 1;
    }

    .experience__card__img {
    margin-bottom: 20px;
    }
    
    .card__content {
        width: 355px;
    }
}

@media (max-width: 1150px) {
    .experience__cards {
        flex-wrap: wrap;
        justify-content: center;
    }
    .experience__card {
        width: 100%;
        flex: 1;
        padding-bottom: 50px;
        height: 430px;
    }

    
    .experience__card:nth-child(2) {
    order: -1; 
    }

    .experience__btn {
    display: none;
    }
    .color__5 {
    z-index: 1;
    }

    .experience__card__img {
    margin-bottom: 20px;
    }
    
    .card__content {
        width: 355px;
    }
}


</style>