<template>
<div class="page">
<img src="../assets/purchase-top.png" class="animate__animated animate__fadeIn" style="position: fixed;left:45%;top:35%" :class="topAnimation">
<div v-if="!disappear" class="fix-container">
<img src="../assets/bottles.png" :class="{'fix': !fixed}">
</div>
<img v-if="!fixed" src="../assets/home-bg.png" style="width:100vw;height: 100vh;" ref="bg">
<div v-else class="flow-container">
<img src="../assets/bottles.png">
</div>
<div style="position: relative;">
    <img src="../assets/purchase-title.png" style="width:75vw;position: absolute;right: 0;top: -10vh;">
    <div class="cursor" ref="cursor">
        <div class="text" :class="enter" style="width:25vw;padding-left: 7vw;padding-top: 15vh;" ref="side">
            <p class="title">岩语 · 花器</p>
            <p>颜色：一汀春 白浪川</p>
            <p>尺寸：210mm*270mm</p>
            <br/>
            <br/>
            <a>立即购买</a>
        </div>
        <img src="../assets/cursor.gif" style="width:75vw;height: 75vh;">

    </div>
    <div class="purchase" style="display: flex;margin-top: 30vh;">
        <div style="width:25vw;"><img src="../assets/purchase-side.png" style="width:5vw;margin-left: 6vw;margin-top: 10vh"></div>
        <div style="width:75vw;display: flex; flex-wrap: wrap;">
            <div v-for="(bottle,index) in bottles" :key="index" class="purchase-item" :ref="setItemRef"
                style="flex: 0 0 30%; height: 50vh; margin-bottom: 15vh;box-sizing: border-box; padding: 10px;text-align: center;"
                :style="{ animationDelay: `${(index % 3)*0.5 }s` ,animationDuration:`${(9-index)*0.4+0.5 }s`}" 
            >
                <img :src="bottle.pic" style="height:30vh;margin-bottom: 5vh;">
                <div style="font-family: 思源黑体 CN Normal;" :class="texts[index]" >
                <p v-for="(line, pindex) in bottle.lines" :key="pindex"
                    :style="{ animationDelay: `${pindex*0.35 + 1}s` }" 
                >
                    {{ line }}
                </p>
                </div>
            </div>
        </div>
    </div>
</div>
<img src="../assets/bottom.svg" style="width:100vw;">
</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    data() {
        return{
            bottles: [
                {
                    pic: require('../assets/purchase-1.png'),
                    lines: [
                        "花瓶｜甜白花",
                        "瓶口25* 瓶底130mm",
                        "高120mm"
                    ]
                },
                {
                    pic: require('../assets/purchase-2.png'),
                    lines: [
                        "花瓶｜山恋花",
                        "瓶口18 * 瓶底85mm",
                        "高167mm"
                    ]
                },
                {
                    pic: require('../assets/purchase-3.png'),
                    lines: [
                        "花瓶｜浮云花",
                        "瓶口39 * 瓶底50mm",
                        "高189mm"
                    ]
                },
                {
                    pic: require('../assets/purchase-4.png'),
                    lines: [
                        "花瓶｜又见春",
                        "瓶口115 * 瓶底70mm",
                        "高140mm"
                    ]
                },
                {
                    pic: require('../assets/purchase-5.png'),
                    lines: [
                        "花瓶｜池坊青",
                        "瓶口130 * 瓶底65mm",
                        "高240mm"
                    ]
                },
                {
                    pic: require('../assets/purchase-6.png'),
                    lines: [
                        "花瓶｜蝴蝶兰",
                        "瓶口70 * 瓶底80mm",
                        "高290mm"
                    ]
                },
                {
                    pic: require('../assets/purchase-7.png'),
                    lines: [
                        "花瓶｜甜白花",
                        "瓶口25* 瓶底130mm",
                        "高120mm"
                    ]
                },
                {
                    pic: require('../assets/purchase-8.png'),
                    lines: [
                        "花瓶｜山恋花",
                        "瓶口18 * 瓶底85mm",
                        "高167mm"
                    ]
                },
                {
                    pic: require('../assets/purchase-9.png'),
                    lines: [
                         "花瓶｜浮云花",
                        "瓶口39 * 瓶底50mm",
                        "高189mm"
                    ]
                }
            ]
        }
    },
     setup() {
         const itemRefs = ref([]);
         const fixed = ref(false);
         const topAnimation = ref("")
         const enter = ref("")
         const texts = ref(Array(9).fill(""))
         const cursor = ref(null);
         const disappear = ref(false);

         const setItemRef = (el) => {
             if (el && !itemRefs.value.includes(el)) {
                itemRefs.value.push(el);
            }
        };

        const fadein = (entries) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add('bottlein');
                    if (entry.target == itemRefs.value[0]) {
                        texts.value[0] = "textfadein";
                    } else if (entry.target == itemRefs.value[1]) {
                        texts.value[1] = "textfadein";
                    } else if (entry.target == itemRefs.value[2]) {
                        texts.value[2] = "textfadein";
                    } else if (entry.target == itemRefs.value[3]) {
                        texts.value[3] = "textfadein";
                    } else if (entry.target == itemRefs.value[4]) {
                        texts.value[4] = "textfadein";
                    } else if (entry.target == itemRefs.value[5]) {
                        texts.value[5] = "textfadein";
                    } else if (entry.target == itemRefs.value[6]) {
                        texts.value[6] = "textfadein";
                    } else if (entry.target == itemRefs.value[7]) {
                        texts.value[7] = "textfadein";
                    } else if (entry.target == itemRefs.value[8]) {
                        texts.value[8] = "textfadein";
                    }
                }
            });
         };

          const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.target == bg.value) {
                    if (entry.isIntersecting) {
                        topAnimation.value = "animate__animated animate__fadeOut"
                        fixed.value = true;
                    }
                }
             });
         };

          const TopfadeOut = (entries) => {
            entries.forEach(entry => {
                if (entry.target == bg.value) {
                    if (entry.isIntersecting) {
                        topAnimation.value = "animate__animated animate__fadeOut"
                    }
                } else if (entry.target == side.value) {
                   if (entry.isIntersecting) {
                        enter.value = "enter"
                    }
                }else if (entry.target == cursor.value) {
                    if (entry.isIntersecting) {
                    if(!disappear.value)
                       disappear.value = true;
                    }
                }
             });
         };

         onMounted(() => {
             const bottleobserver = new IntersectionObserver(fadein, {
                 threshold: 0.3, // 50% 可见度
             });

             itemRefs.value.forEach(item => {
                 
                 bottleobserver.observe(item);
             });

             const observer = new IntersectionObserver(handleIntersection, { threshold: 0.98 });
             const smallobserver = new IntersectionObserver(TopfadeOut, { threshold: 0.4 });
             observer.observe(bg.value);

             smallobserver.observe(cursor.value);
             smallobserver.observe(bg.value);
             smallobserver.observe(side.value);
         });

         const bg = ref(null)
         const side =ref(null)

        return {
            setItemRef,
            bg,
            side,
            fixed,
            topAnimation,
            enter,
            texts,
            cursor,
            disappear
        };
    },
}
</script>

<style scoped>
.animate__animated.animate__fadeOut {
  --animate-duration: 1s;
}

.title{
    font-size: 30px;
    line-height: 30px;
    color: #666666;
}

.text{
    opacity: 0;
    font-size: 20px;
    line-height: 40px;
    color: #757575;
}

.cursor{
    display: flex;
    margin-top: 30vh;
    width:100vw;
}

.fix-container{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
   
}

.flow-container{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/home-bg.png');
    background-size: 100% 100%;
}

.fix{
    position: fixed;
}

.purchase-item{
  opacity: 0;
  font-size: 17px;
  line-height: 37px;
  color: #757575;
}

.description{
    opacity: 0;
}

.textfadein{
    animation: bottlefadein 0.3s forwards;
}

.bottlein{
    animation: bottlefadeIn 0.5s ease forwards; 
}

@keyframes bottlefadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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