<template>
<div class="container" style="margin-top: 2vh;">
    <img src="../assets/user.svg" style="width:100%" class="fadein">

</div>
</template>

<script>

</script>

<style scoped>
.fadein{
     opacity: 0;
     animation-delay: 0.3s;
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