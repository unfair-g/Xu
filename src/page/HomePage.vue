<template>
<div class="page">
<div class="top-vertical-text-column animate__animated animate__fadeIn animate__delay-2s" style="letter-spacing: 5px;line-height: 30px;">
    <p>疗愈。</p>
    <p>花器</p>
    <p>插花</p>
</div>
<div class="center-image animate__animated animate__fadeIn animate__delay-2s" style="margin-top: 20vh;margin-bottom: 18vh">
<img src="../assets/home-1.png">
</div>
<div class="text" ref="text1">
        <p 
            v-for="(line, index) in text1" 
            :key="index" 
            :class="{ visible: text1Visible }" 
            :style="{ transitionDelay: `${index * 0.35}s`,transitionDuration:`${(7-index) * 0.5}s` }" 
            >
            {{ line || '\u00A0' }}
        </p>
    <a :class="{ visible: text1Visible }" style="transition-delay: 2.45s;">关于我们</a>
</div>
<div class="center-image" style="margin-top: 20vh;margin-bottom: 15vh" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
<img src="../assets/home-2.png">
</div>
<div class="bg1" ref="flowers" style="width: 100vw;height:85vh" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
    <div class="pot">
        <img src="../assets/flower1.png" :class="{ visible: flowesVisible }" style="transition-delay: 0.9s;width:22%;position: absolute;left: -2%;bottom: 48%;">
        <img src="../assets/flower2.png" :class="{ visible: flowesVisible }" style="transition-delay: 0.7s;width:20%;position: absolute;left: 18%;bottom: 5%;">
        <img src="../assets/flower3.png" :class="{ visible: flowesVisible }" style="transition-delay: 0.5s;width:30%;position: absolute;left: 28%;bottom: 50%;">
        <img src="../assets/flower4.png" :class="{ visible: flowesVisible }" style="transition-delay: 0.6s;width:22%;position: absolute;right: 26%;bottom: 25%;">
        <img src="../assets/flower5.png" :class="{ visible: flowesVisible }" style="transition-delay: 0.8s;width:33%;position: absolute;right: 15%;bottom: 55%;">
        <img src="../assets/flower6.png" :class="{ visible: flowesVisible }" style="transition-delay: 1.0s;width:20%;position: absolute;right: 0;bottom: 25%;">
    </div>
</div>
<div style="width:100vw;display: flex;justify-content: center;margin-bottom: 30vh;">
    <div class="right-vertical-text-column" ref="text2">
        <p 
            v-for="(line, index) in text2" 
            :key="index" 
            :class="{ visible: text2Visible }" 
            :style="{ transitionDelay: `${index * 0.35}s`,transitionDuration:`${(11-index) * 0.5}s` }" 
            >
            {{ line || '\u00A0' }}
        </p>
    </div>
     <div style="margin-left: 5vw;position: absolute;right: 5vw;">
        <p v-animate-onscroll.repeat="'animate__animated animate__slideInDown animate__delay-1s'"><img src="../assets/home-dot.svg" style="margin-left:40px"></p>
        <p><img src="../assets/title-1.png"></p>
    </div>
</div>

<div style="display: flex;margin-bottom: 30vh;position: relative;width: 100vw;height: 70vh;">
    <div class="group" ref="group1">
        <img class="left-pic" :class="{ visible: group1Visible }"  src="../assets/home-3.png" style="width:20vw;left:15vw;bottom: 18vh;">
        <img class="left-pic"  src="../assets/home-3-bg.png" style="width:53vw;z-index: -1;opacity: 1;" v-animate-onscroll="{down: 'animate__animated animate__slideInUp'}">
    </div>
    <div style="margin-left: 10vw;position: absolute;right: 0;width:30vw">
        <img src="../assets/home-dot.svg" style="margin-left: -30px;" v-animate-onscroll.repeat="'animate__animated animate__slideInDown animate__delay-1s'">
        <img src="../assets/title-2.png">
        <div class="text" style="width:30vw" ref="text3">
        <p 
            v-for="(line, index) in text3" 
            :key="index" 
            :class="{ visible: text3Visible }" 
            :style="{ transitionDelay: `${index * 0.25}s`,transitionDuration:`${(3-index) * 0.5}s` }" 
            >
            {{ line || '\u00A0' }}
        </p>
        <a :class="{ visible: text3Visible }" style="transition-delay: 1.05s;" @click="toCourse">九月时令课</a>
        </div>
    </div>
</div>

<div style="display: flex;margin-bottom: 10vh;position: relative;width: 100vw;height: 70vh;">
    <div class="group" ref="group2">
        <img class="right-pic" :class="{ visible: group2Visible }" src="../assets/home-4.png" style="width:17vw;right:18vw;bottom: 23vh;">
        <img class="right-pic" src="../assets/home-4-bg.png" style="width:53vw;z-index: -1;opacity: 1;" v-animate-onscroll="{down: 'animate__animated animate__slideInUp'}">
    </div>
    <div style="margin-left: 5vw;position: absolute;left: 5vw;">
        <img src="../assets/home-dot.svg" style="margin-bottom: 70px;" v-animate-onscroll.repeat="'animate__animated animate__slideInDown animate__delay-1s'">
        <img src="../assets/title-3.png">
        <div class="text" ref="text4">
        <p 
            v-for="(line, index) in text4" 
            :key="index" 
            :class="{ visible: text4Visible }" 
            :style="{ transitionDelay: `${index * 0.35}s`,transitionDuration:`${(3-index) * 0.5}s` }" 
            >
            {{ line || '\u00A0' }}
        </p>
        <a :class="{ visible: text4Visible }" style="transition-delay: 1.05s;" @click="toFlower">制作你的插花作品</a>
        </div>
    </div>
</div>

<div ref="scroll">
   <img v-if="stop" src="../assets/scroll.gif" style="width:100vw;">
   <img v-if="!stop && finish" style="width:100vw;" src="../assets/scroll.gif">
</div>

<div style="display: flex;width: 100vw;height: 80vh;margin-top: 40vh;position: relative;">
    <div style="margin-left: 5vw;position: absolute;left: 13vw;" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
        <img src="../assets/title-6.png">
    </div>
    <div style="margin-left: 5vw;position: absolute;right: 23vw;" class="notice" ref="notice">
         <div v-for="(item, index) in notice" :key="index" style="margin-bottom: 5vh;"
            :class="{ visible: noticeVisible }" 
            :style="{ transitionDelay: `${index * 0.4}s` }" 
        >
            <p class="data">{{ item.date }}</p>
            <a class="activity" @click="toNews">{{ item.title }}</a>
        </div>
    </div>
</div>
<img src="../assets/bottom.svg" style="width:100vw">
</div>
</template>

<script>
export default {
    data() {
        return {
            outAnimation:"",
            text1: [
                '我们的故事从宋代花艺开始。',
                '在这里花、瓶子和人融为一体，成为了一个平实却又神圣的存在。',
                '它不仅捕捉了花朵即刻的状态，更将插花人情感具象化，',
                '通过花艺，我们能在有限的瞬间中感受到情感的无限延续。',
                '',
                '透过花朵和双手观察世界，',
                '让人们发现隐藏在拥挤的里弄与嘈杂的市集中的美。',
                ''
            ],
            text1Visible: false,
            text2: [
                '宋代插花如其工笔画',
                '讲究形神并举.',
                '以理为表,以意为理',
                '或表明心境,或以花喻人',
                '又或借花述说天地哲理。',
                '宋代诗人曾端伯以十种花各题名目',
                '',
                '即兰为芳友 梅为清友',
                '腊梅为奇友 瑞香为殊友 莲为净友',
                '栀子为禅友 菊为佳友 桂为仙友',
                '海棠为名友 荼蘼为韵友'
            ],
            text2Visible: false,
            text3: [
                '煦说：在这里，',
                '你可以尽情感知周围的一切，',
                '花会告诉你想要的答案呢。',
                '',
            ],
            text3Visible: false,
            text4: [
                '煦与花相伴十二年，',
                '精心准备了国内首个沉浸式在线插花系统，',
                '您可以在这里与花尽情交流。',
                '',
            ],
            text4Visible: false,
            text5: [
                '煦通过器物传递故事。',
                '当质感在指尖流淌时，泥土与双手交织时，',
                '我们会重新感知世界的脉动与深意。'
            ],
            text5Visible: false,
            flowesVisible: false,
            notice: [
                {
                    date: '2024.09.15 丨 通知',
                    title: '【活动】关于举办中国插花花艺协会第五期高级讲师培训班的通知'
                },
                {
                    date: '2024.09.14 丨 通知',
                    title: '【课程】第4期手机花艺摄影及短视频训练营'
                },
                {
                    date: '2024.09.13 丨 新闻',
                    title: '【中秋】精美的创意手作里，满满都是中秋韵味'
                }
            ],
            noticeVisible: false,
            group1Visible: false,
            group2Visible: false,
            stop: false,
            finish:false,
        }
    },
    mounted() {
        const observer = new IntersectionObserver(this.handleIntersection,{threshold: 0.3});
        observer.observe(this.$refs.text1);
        observer.observe(this.$refs.text2);
        observer.observe(this.$refs.text3);
        observer.observe(this.$refs.text4);
        observer.observe(this.$refs.flowers);
        observer.observe(this.$refs.notice);
        observer.observe(this.$refs.group1);
        observer.observe(this.$refs.group2);
        observer.observe(this.$refs.scroll);
    },
    methods: {
        playAnimation() {
            setTimeout(() => {
                this.outAnimation = "animate__animated animate__fadeOutLeft"
           }, 1000);
        },
        ScrollDown() {
            this.$refs.notice.scrollIntoView({ behavior: 'smooth', block: 'end' });
        },
        handleIntersection(entries) {
            entries.forEach(entry => {
                 if (entry.target == this.$refs.text1) {
                     if (entry.isIntersecting) {
                        console.log('进入')
                        this.text1Visible = true;
                    } 
                }else if (entry.target == this.$refs.text2) {
                     if (entry.isIntersecting) {
                        this.text2Visible = true;
                    }
                }else if (entry.target == this.$refs.text3) {
                    if (entry.isIntersecting) {
                        this.text3Visible = true;
                    } 
                }else if (entry.target == this.$refs.text4) {
                    if (entry.isIntersecting) {
                        this.text4Visible = true;
                    } 
                }else if (entry.target == this.$refs.text5) {
                    if (entry.isIntersecting) {
                        this.text5Visible = true;
                    } 
                }else if (entry.target == this.$refs.flowers) {
                    if (entry.isIntersecting) {
                        this.flowesVisible = true;
                    }
                }else if (entry.target == this.$refs.notice) {
                    if (entry.isIntersecting) {
                        this.noticeVisible = true;
                    } 
                }else if (entry.target == this.$refs.group1) {
                     if (entry.isIntersecting) {
                        setTimeout(() => {
                            this.group1Visible = true;
                        }, 500);
                    }
                }else if (entry.target == this.$refs.group2) {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            this.group2Visible = true;
                        }, 500);
                    } 
                }else if (entry.target == this.$refs.scroll) {
                     if (entry.isIntersecting) {
                        this.stop = true;
                        setTimeout(() => {
                            this.stop = false;
                            this.finish = true;
                        }, 15500);
                    } 
                }
            });
        },
        toNews() {
            this.$router.push('/news');
        },
        toCourse() {
            this.$router.push('/courses');
        },
        toFlower() {
            this.$router.push('/news');
        },
    }
}
</script>

<style>
.animate__animated.animate__slideInUp {
  --animate-duration: 2s;
}

.animate__animated.animate__fadeIn {
  --animate-duration: 3s;
}

.animate__animated.animate__fadeOutLeft {
  --animate-duration: 2s;
}

.data{
    color: #8D8D8D;
    font-size: 22px;
    line-height: 60px;
}

.activity{
    color: #5D5D5D;
    font-size: 23px;
    line-height: 60px;
}

.center-image{
    display: flex;
    justify-content: center;
}

.left-pic{
    position: absolute;
    left:0;
}

.right-pic{
    position: absolute;
    right:0;
}

.top-vertical-text-column{
    writing-mode: vertical-rl; /* 文字竖排，从右到左 */
    font-size: 21.5px;
    position: absolute;
    left:28vw;
    top: 30vh;
    color: #757575;
}

.right-vertical-text-column{
    writing-mode: vertical-rl; /* 文字竖排，从右到左 */
    font-size: 21.5px;
    line-height: 50px;
    letter-spacing: 3.2px;
    margin-top: 18vh;
    color: #757575;
}

.right-vertical-text-column p{
    opacity: 0; /* 初始透明 */
    transition: opacity 0.5s ease; /* 动画过渡效果 */
}

.right-vertical-text-column p.visible{
    opacity: 1; /* 可见时变为不透明 */
}

.bg1{
    background-image: url('../assets/home-bg.png');
    background-size: 100% 100%;
    margin-bottom: 10vh;
    display: flex;
    justify-content: center;
    position: relative;
}

.pot{
    width:90%;
    height: 80%;
    background-image: url('../assets/home-pot.png');
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    display: flex;
}

.text{
    font-family: 思源黑体 CN Normal;
    width:35vw;
    margin-left: auto;
    margin-right: auto;
    font-size: 21.5px;
    line-height: 52px;
    color: #5D5D5D;
    margin-top: 5vh;
}

.text p{
    opacity: 0; /* 每个段落初始透明 */
    transition: opacity 0.5s ease forwards; /* 段落的动画过渡 */
}

.text p.visible{
    opacity: 1; /* 可见时变为不透明 */
}

.text a{
    opacity: 0; /* 每个段落初始透明 */
    transition: opacity 0.5s ease; /* 段落的动画过渡 */
}

.text a.visible{
    opacity: 1; /* 可见时变为不透明 */
}

.pot img{
    opacity: 0; /* 每个段落初始透明 */
    transition: opacity 1.5s ease; /* 段落的动画过渡 */
}

.pot img.visible{
    opacity: 1; /* 可见时变为不透明 */
}

.notice div{
    opacity: 0; /* 每个段落初始透明 */
    transition: opacity 0.5s ease; /* 段落的动画过渡 */
}

.notice div.visible{
   opacity: 1; /* 可见时变为不透明 */
}


.group img{
    opacity: 0; /* 每个段落初始透明 */
    transition: opacity 0.5s ease; /* 段落的动画过渡 */
}

.group img.visible{
    opacity: 1; /* 可见时变为不透明 */
}
</style>