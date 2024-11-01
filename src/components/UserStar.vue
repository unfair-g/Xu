<template>
<div class="container">
<div v-for="(star,index) in stars" :key="index" class="star-item" :ref="setItemRef"
>
<div style="width:100%;margin-bottom: 3vh; overflow: hidden;">
<img class="star-pic" :class="{'scale-up': isHovered[index]}" :src="star.pic" style="width:100%;" @mouseenter="isHovered[index] = false" @mouseleave="isHovered[index] = true">
</div>
<a class="star-info"><span>{{ star.title }}</span><span>{{ star.name }}</span></a>
</div>
</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    data() {
        return{
            stars: [
                {
                    pic: require('../assets/star-1.png'),
                    title: "花弄影 丨 ",
                    name:"菊花细颈双耳瓶金秋插花"
                },
                {
                    pic: require('../assets/star-2.png'),
                    title: "花弄影 丨 ",
                    name:"菊花细颈双耳瓶金秋插花"
                },
                {
                    pic: require('../assets/star-3.png'),
                    title: "绿竹入幽径 丨 ",
                    name:"竹子兰花禅意插花"
                },
                {
                    pic: require('../assets/star-4.png'),
                    title: "绿竹入幽径 丨 ",
                    name:"竹子兰花禅意插花"
                },
                {
                    pic: require('../assets/star-5.png'),
                    title: "花弄影 丨 ",
                    name:"菊花细颈双耳瓶金秋插花"
                },
                {
                    pic: require('../assets/star-6.png'),
                    title: "绿竹入幽径 丨 ",
                    name:"竹子兰花禅意插花"
                },
                {
                    pic: require('../assets/star-7.png'),
                    title: "绿竹入幽径 丨 ",
                    name:"竹子兰花禅意插花"
                },
                {
                    pic: require('../assets/star-8.png'),
                    title: "绿竹入幽径 丨 ",
                    name:"竹子兰花禅意插花"
                },
            ],
            isHovered: [false, false, false, false, false, false, false, false],
        }
    },
    setup() {
        const itemRefs = ref([]);

        const setItemRef = (el) => {
            if (el && !itemRefs.value.includes(el)) {
                itemRefs.value.push(el);
            }
        };

        const handleIntersection = (entries) => {
             entries.forEach(entry => {
                 if (entry.isIntersecting) {
                     entry.target.classList.add('starin');
                 }
             });
         };

        onMounted(() => {
             const observer = new IntersectionObserver(handleIntersection, {
                 threshold: 0.3, // 50% 可见度
             });

            setTimeout(() => {
                itemRefs.value.forEach(item => {
                    observer.observe(item);
                });
            }, 10);
         });

        return {
            setItemRef,
        };
    }
}
</script>

<style scoped>
.container{
    width:75vw;
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top:0;
}

.star-item {
  width: 45%; /* 适当调整宽度以适应容器 */
  opacity: 0;
  margin-left: 2.5%; /* 设置左右间距 */
  margin-right: 2.5%;
  margin-bottom: 8vh;
  box-sizing: border-box; /* 包含边框和填充 */
  font-size: 20px;
  line-height: 30px;
  color: #5D5D5D;
}

.starin{
    animation:starIn 1s ease forwards;
}

@keyframes starIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.star-pic:hover {
  filter: blur(4px); /* 悬浮时模糊 */
  animation: hover 2s ease forwards; /* 悬浮时执行淡入动画 */
}

@keyframes hover {
  0% {
    filter: blur(4px);
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100% {
    filter: blur(0);
    transform: scale(1.1);
  }
}

.star-pic:not(:hover) {
  filter: blur(0); /* 鼠标移出时恢复清晰 */
}

.star-pic.scale-up {
  animation: nothover 1.5s ease forwards; /* 添加动画 */
}

@keyframes nothover {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes indexfadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes indexfadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.star-info .index {
  opacity: 0; /* 默认透明 */
  animation: indexfadeOut 0.3s ease forwards; /* 默认执行淡出动画 */
}

.star-info:hover .index {
  animation: indexfadeIn 0.3s ease forwards; /* 悬浮时执行淡入动画 */
}

</style>