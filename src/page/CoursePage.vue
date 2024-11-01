<template>
<div class="page">
    <img class="course-bg" src="../assets/course-bg.png" style="width:100vw;"/>
    <img src="../assets/course-title.png" style="width:70vw;margin-left: 25vw;"/>
    <img src="../assets/course-side.png" class="course-list" style="opacity: 0.01;" :class="first">
    <div style="width:70vw;margin-left:25vw;margin-bottom: 10vh">
        <div v-for="(course, index) in courses" :key="index"
            class="course-detail" :ref="setItemRef"
        >
            <div style="display: flex;">
                <img class="course-img" :src="course.pic" style="width:40vw;opacity: 0.3;" :class="images[index]">
                <div class="text" :class="texts[index]">
                <p class="course-name">{{ course.title }}</p>
                <br/>
                <p v-for="(line, index) in course.lines" :key="index">
                    {{ line }}
                </p>
                <br/>
                <br/>
                <a>课程详情</a>
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
            courses: [
                {
                    pic: require('../assets/course-1.png'),
                    title: '九月插花课 /',
                    lines: [
                        "秋花入瓶",
                        "观花察自心"
                    ]
                },
                {
                    pic: require('../assets/course-2.png'),
                    title: '花弄影 /',
                    lines: [
                        "煦说：在这里，",
                        "你可以尽情感知周围的一切，",
                        "花会告诉你想要的答案呢。"
                    ]
                },
                {
                    pic: require('../assets/course-3.png'),
                    title: '插花疗愈 /',
                    lines: [
                        "煦与花相伴十二年，",
                        "精心准备了在线插花系统，",
                        "您可以与花尽情交流。"
                    ]
                },
                {
                    pic: require('../assets/course-4.png'),
                    title: '绿竹入幽径 / ',
                    lines: [
                        "煦说：在这里，",
                        "你可以尽情感知周围的一切，",
                        "花会告诉你想要的答案呢。"
                    ]
                },
                {
                    pic: require('../assets/course-5.png'),
                    title: '瓶花史 / ',
                    lines: [
                        "从宋代花艺开始，",
                        "花、瓶子和人融为一体，",
                        "成为了一个平实却又神圣的存在。"
                    ]
                },
                {
                    pic: require('../assets/course-6.png'),
                    title: '花弄影 /',
                    lines: [
                        "煦说：在这里，",
                        "你可以尽情感知周围的一切，",
                        "花会告诉你想要的答案呢。"
                    ]
                },
            ]
        }
    },
     setup() {
         const itemRefs = ref([]);
         const images = ref(Array(6).fill(""))
         const texts = ref(Array(6).fill(""))
         const first = ref("")

         const handleIntersection = (entries) => {
             entries.forEach(entry => {
                 if (entry.target == itemRefs.value[0]) {
                     if (entry.isIntersecting) {
                         texts.value[0] = "enter";
                         images.value[0] = "fadein";
                         if (first.value == "") {
                             setTimeout(() => {
                                 first.value = "enter";
                             }, 2000);
                         }
                     } else {
                         texts.value[0] = "textout";
                         images.value[0] = "fadeout";
                     }
                 }else if (entry.target == itemRefs.value[1]) {
                     if (entry.isIntersecting) {
                         texts.value[1] = "enter";
                         images.value[1] = "fadein";
                     } else {
                         texts.value[1] = "textout";
                         images.value[1] = "fadeout";
                     }
                 }else if (entry.target == itemRefs.value[2]) {
                     if (entry.isIntersecting) {
                         texts.value[2] = "enter";
                         images.value[2] = "fadein";
                     } else {
                         texts.value[2] = "textout";
                         images.value[2] = "fadeout";
                     }
                 }else if (entry.target == itemRefs.value[3]) {
                     if (entry.isIntersecting) {
                         texts.value[3] = "enter";
                         images.value[3] = "fadein";
                     } else {
                         texts.value[3] = "textout";
                         images.value[3] = "fadeout";
                     }
                 }else if (entry.target == itemRefs.value[4]) {
                     if (entry.isIntersecting) {
                         texts.value[4] = "enter";
                         images.value[4] = "fadein";
                     } else {
                         texts.value[4] = "textout";
                         images.value[4] = "fadeout";
                     }
                 }else if (entry.target == itemRefs.value[5]) {
                     if (entry.isIntersecting) {
                         texts.value[5] = "enter";
                         images.value[5] = "fadein";
                     } else {
                         texts.value[5] = "textout";
                         images.value[5] = "fadeout";
                     }
                 }
             });
         };

         const setItemRef = (el) => {
            if (el && !itemRefs.value.includes(el)) {
                itemRefs.value.push(el);
            }
         };

         onMounted(() => {
             const observer = new IntersectionObserver(handleIntersection, {
                 threshold: 0.95, // 50% 可见度
             });

             itemRefs.value.forEach(item => {
                 observer.observe(item);
             });
         });
        
        return {
            setItemRef,
            images,
            texts,
            first
        };
    },
}
</script>

<style scoped>
.course-list{
    position: fixed;
    left: 3vw;
    top:30vh;
    opacity: 0;
    width:15vw;
    z-index: -1;
}

.course-bg{
    opacity: 0.1;
    animation: bgfadein 3s forwards;
    animation-delay: 2s;
}

@keyframes bgfadein {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

.course-detail{
   margin-top: 5vh;
   opacity: 1;
}

.course-name{
    font-size: 30px;
}

.fadein{
    animation: imgfadein 1s forwards;
}

.fadeout{
    animation: imgfadeout 0.8s forwards;
    pointer-events: none; /* 禁止鼠标事件 */
}

.text{
    width:35vw;
    margin-left: 8vw;
    opacity: 1;
    font-size: 20px;
    line-height: 40px;
    color: #5D5D5D;
    margin-top: 5vh;
}

.textout{
    animation: textfadeout 0.5s forwards;
}

@keyframes textfadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes imgfadein {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

@keyframes imgfadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}

.course-img {
  transition: transform 2.5s ease; /* 过渡效果 */
}

.course-img:hover {
  transform: scaleX(1.05); /* 放大1.1倍 */
}

@keyframes picfadeIn {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
  100% {
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
