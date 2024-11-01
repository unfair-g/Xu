<template>
<div class="container">
<img src="../assets/order-1.svg" style="width:100%;animation-delay: 0.2s;" class="fadein">
<img src="../assets/order-2.svg" style="width:100%;animation-delay: 0.7s;" class="fadein">
</div>
</template>

<script>

</script>

<style scoped>
.fadein{
     opacity: 0;
     animation: imgfadein 1s forwards;
}

@keyframes imgfadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>