<template>
<div class="page">
    <div class="center-text-column" style="margin-top: 18vh">
        <img ref="newstitle" src="../assets/news-title.png" style="width:40vw">
        <PicScroll :class="picAnimation" style="margin-bottom: 10vh;opacity: 0;"/>
        <img ref="news" src="../assets/news.png" style="width:40vw;opacity: 0;animation-delay: 1.5s;">
    </div>
<img src="../assets/bottom.svg" style="width:100vw;">
</div>
</template>

<script>
import PicScroll from '@/components/PicScroll.vue';

export default {
    data() {
        return {
            picAnimation:""
        }
    },
    components: {
        PicScroll
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection,{threshold:0.3});
        observer.observe(this.$refs.newstitle);
        observer.observe(this.$refs.news);
    },
    methods: {
        handleIntersection(entries) {
            entries.forEach(entry => {
                if (entry.target == this.$refs.newstitle) {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('enter');
                            setTimeout(() => {
                                this.picAnimation = "animate__animated animate__fadeIn"
                            }, 1000);
                        }, 2000);
                    }
                }else if (entry.target == this.$refs.news) {
                    if (entry.isIntersecting) {
                        console.log('debug')
                        entry.target.classList.add('enter');
                    }
                }
            });
        }
    }
}
</script>

<style>
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