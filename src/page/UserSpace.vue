<template>
<img src="../assets/userspace.svg" style="width:75vw;margin-top: 10vh;margin-left: 20vw;">   
<div class="page" style="min-height: 80vh;position: relative;">
<div class="sidebar">
<p><a @click="toPart(0)" :class="{'underlined': !parts[0]}">个人作品</a></p>
<p><a @click="toPart(1)" :class="{'underlined': !parts[1]}">我的收藏</a></p>
<p><a @click="toPart(2)" :class="{'underlined': !parts[2]}">我的订单</a></p>
<p><a @click="toPart(3)" :class="{'underlined': !parts[3]}">个人信息</a></p>
</div>
<div style="width:75vw;min-height:65vh;margin-left: 20vw;">
<UserWork v-if="parts[0]" />
<UserStar style="margin-top: 8vh;" v-if="parts[1]" />
<UserOrder v-if="parts[2]" />
<UserInfo v-if="parts[3]" />
</div>
</div>
<img src="../assets/bottom.svg" style="width:100vw">
</template>

<script>
import UserWork from '../components/UserWork.vue'
import UserStar from '../components/UserStar.vue'
import UserOrder from '../components/UserOrder.vue'
import UserInfo from '../components/UserInfo.vue'

export default {
    components: {
        UserWork,
        UserStar,
        UserOrder,
        UserInfo
    },
    data() {
        return{
            parts: [true, false, false, false],
        }
    },
    methods: {
        toPart(index) {
            this.parts = this.parts.map((part, i) => i === index);
        }
    }
}
</script>

<style scoped>
.sidebar{
    position: fixed;
    left: 3vw;
    top:18vh;
    font-family: 思源黑体 CN Normal;
    font-size: 20px;
    line-height: 50px;
    color: #5D5D5D;
}

.underlined::before{
    transform: scaleX(0);
}
</style>