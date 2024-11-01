<template>
<div class="page" ref="page" @mousewheel="scrollChange">
<div ref="scrollview" style="max-width: 100vw;max-height: 110vw;overflow: hidden;">
<div class="vertical-text-column" style="margin-left: 80vw;">
    <div ref="textColumn1" style="opacity: 0;"><img src="../assets/about-title-1.svg"></div>
    <div ref="top2" style="opacity: 0;"><img src="../assets/about-title-2.svg"></div>
    <div ref="top3" style="opacity: 0;"><img src="../assets/about-title-3.svg"></div>
</div>
<div :class="['main-bg']" ref="main">
</div>
</div>
<div class="left-text-column">
    <p class="title" ref="title1" style="opacity: 0;"><img src="../assets/text-2.svg"></p>
     <img ref="textColumn2" style="opacity: 0;" src="../assets/text-3.svg">
</div>
<div style="display: flex;">
    <div class="image-container">
    <img src="../assets/about-1.png" v-animate-onscroll="'animate__animated animate__fadeIn'">
    </div>
    <div class="right-text-column">
    <p class="title" ref="title2" style="opacity: 0;"><img src="../assets/text-4.svg"></p>
    <p><img ref="textColumn3" style="opacity: 0;" src="../assets/text-5.svg"></p>
    </div>
</div>
<div class="center-text-column">
    <p class="title" ref="title3" style="opacity: 0;"><img src="../assets/text-6.svg"></p>
    <img ref="textColumn4" style="opacity: 0;" src="../assets/text-7.svg">
</div>
<div style="display: flex;width:80vw;margin-left: auto;margin-right:auto;margin-bottom: 20vh;"
v-animate-onscroll="'animate__animated animate__fadeIn animate__delay-1s'"
>
    <img src="../assets/about-2.jpg" class="pic"/>
    <img src="../assets/about-3.jpg" class="pic"/>
    <img src="../assets/about-4.jpg" class="pic"/>
</div>
<img src="../assets/bottom.svg" style="width:100vw">
</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
     setup() {
        const lastTop = ref(0); // 记录目标元素上一次的顶部位置
        const page = ref(null);
        const scrollview = ref(null); // 引用滚动容器
        const isScaledUp = ref(false);
        const isScaledDown = ref(false);
        const isFixed = ref(false);
        const backgroundOpacity = ref(1);
        const textColumn1 = ref(null);
        const top2 = ref(null);
    const top3 = ref(null);
    const main = ref(null)

        const scrollChange = () => {
            const rect = scrollview.value.getBoundingClientRect(); // 获取目标元素的位置
            const currentTop = rect.top; // 获取目标元素当前顶部位置

          if (currentTop < lastTop.value) {
            
            main.value.classList.add('scaled-up')
               main.value.classList.remove('scaled-down')
              
          } else if (currentTop > lastTop.value) {
            
              main.value.classList.add('scaled-down') // 增加透明度
            
                main.value.classList.remove('scaled-up')
                
            
          }

            lastTop.value = currentTop; // 更新目标元素的顶部位置
         };

        
        const textColumn2 = ref(null);
        const textColumn3 = ref(null);
        const textColumn4 = ref(null);
        const title1 = ref(null);
        const title2 = ref(null);
        const title3 = ref(null);
        const observer = ref(null);

        const fadeIn = (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (entry.target == textColumn1.value) {
                setTimeout(() => {
                  entry.target.classList.add('enter');
                }, 2500);
              }else if (entry.target == top2.value) {
                setTimeout(() => {
                  entry.target.classList.add('enter');
                }, 2700);
              }else if (entry.target == top3.value) {
                setTimeout(() => {
                  entry.target.classList.add('enter');
                }, 3000);
              }else {
                entry.target.classList.add('enter');
              }
            }
          });
        };

        onMounted(() => {
        // 添加滚动监听
            page.value.addEventListener('scroll', scrollChange, true);
          lastTop.value = scrollview.value.getBoundingClientRect().top; // 初始化顶部位置

          setTimeout(() => {
            main.value.classList.add('scale-in');
          }, 2000);

            //增加视口监听
            observer.value = new IntersectionObserver(fadeIn, {
                threshold: 0.8, // 10% 的可见区域
            });

            if (textColumn1.value) {
                observer.value.observe(textColumn1.value); // 观察目标元素
            }
            if (textColumn2.value) {
                observer.value.observe(textColumn2.value); // 观察目标元素
            }
            if (textColumn3.value) {
                observer.value.observe(textColumn3.value); // 观察目标元素
            }
            if (textColumn4.value) {
                observer.value.observe(textColumn4.value); // 观察目标元素
            }
            if (title1.value) {
                observer.value.observe(title1.value); // 观察目标元素
            }
            if (title2.value) {
                observer.value.observe(title2.value); // 观察目标元素
            }
            if (title3.value) {
                observer.value.observe(title3.value); // 观察目标元素
          }
          observer.value.observe(top2.value);
          observer.value.observe(top3.value);
          observer.value.observe(main.value);
        });

        return {
            page,
            scrollview,
            scrollChange,
            isScaledUp,
            isScaledDown,
            isFixed,
            backgroundOpacity,
            textColumn1,
            textColumn2,
            textColumn3,
            textColumn4,
            title1,
            title2,
          title3,
          top2,
          top3,
            main
        };
  },
}
</script>

<style>
.animate__animated.animate__fadeIn {
  --animate-duration: 3s;
}

.page{
    max-width: 100vw;
    width: 100vw;
    min-height:100vh;
    overflow-x: hidden;
}

.main-bg{
    background-image: url('../assets/main.png');
    background-size: 100% 100%;
    max-width: 100vw;
    height:100vw;
    animation-duration: 1s; /* 动画时长 */
    animation-fill-mode: forwards; /* 保持最后一帧 */
}

.image-container {
  position: absolute;
  width: 50vw; /* 容器宽度 */
  height: 30vw; /* 容器高度 */
  overflow: hidden; /* 确保内容超出部分不显示 */
}

.image-container img {
  width: 100%;
  height: 100%;
}

.pic{
    width: 20vw;
    margin-left: auto;
    margin-right: auto;
}

.title{
    color: #666666;
    font-size: 30px;
    line-height: 10vh;
    margin-top: 5vh;
    margin-bottom: 5vh;
}

.left-text-column {
  font-size: 18px;
  color: #5D5D5D;
  line-height: 55px;
  margin-top: 10vh;
  margin-left: 8vw;
  margin-bottom: 20vh;
  transition: opacity 2s; /* 添加 1s 的延迟 */
}

.right-text-column {
  font-size: 18px;
  color: #5D5D5D;
  line-height: 55px;
  margin-left: 55vw;
  margin-right: 8vw;
  margin-bottom: 20vh;
  transition: opacity 2s; /* 添加 1s 的延迟 */
}

.center-text-column {
  font-size: 18px;
  color: #5D5D5D;
  line-height: 55px;
  width: 40vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
  transition: opacity 2s; /* 添加 1s 的延迟 */
}

.vertical-text-column {
  position: absolute;
  top:20vh;
  z-index: 999;
  writing-mode: vertical-rl; /* 文字竖排，从右到左 */
  font-size: 25px;
  color: #757575;
  line-height: 50px;
  
  transition: opacity 2s; /* 添加 1s 的延迟 */
}

.scale-in {
  animation-duration: 2s; /* 动画时长 */
  animation-name: scaleIn; /* 动画名称 */
}

.scaled-up {
  animation-name: scaleUp; /* 动画名称 */
}

.scaled-down {
  animation-name: scaleDown; /* 动画名称 */
}

@keyframes scaleIn {
  0% {
    transform: scale(1); /* 初始状态 */
  }
  100% {
    transform: scale(1.1); /* 最终状态 */
  }
}

@keyframes scaleUp {
  0% {
    transform: scale(1.1); /* 初始状态 */
  }
  100% {
    transform: scale(1.2); /* 最终状态 */
  }
}

@keyframes scaleDown {
  0% {
    transform: scale(1.2); /* 初始状态 */
  }
  100% {
    transform: scale(1.1); /* 最终状态 */
  }
}

.enter {
    /* 贝塞尔曲线动画 */
    animation: enterenter 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

 @keyframes enterenter {
    0% {
        /* filter: blur(); 像素模糊效果 */
        opacity: 0;
        filter: blur(12px);
        /* 透明度也要改变 */
    }

    25%{
      opacity: 0;
    }

    50%{
      opacity: 0.5;
      filter: blur(5px);
    }

    100% {
        
        filter: blur(0);
        opacity: 1;
    }
}
</style>