<!-- html 템플릿코드 -->
<template>
  <div class="mytemp">
    <span class="tit">{{  }}</span>
  </div>
</template>

<!-- 자바스크립트 코드 -->
<script>
  export default(await import("vue").undefinedComponent({
    name: "myTemp",
    data(){
      return{
        txt : "연습이에요~!"
      }
    }
  }))
</script>

<!-- 스타일시트 코드 -->
<style scoped>
  span.tit {color:red}
</style>