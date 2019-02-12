<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{count}}</p>
    <button @click="count++">추가</button>
      <AppStatus></AppStatus>
     <HomeComponent></HomeComponent>
  </div>
</template>

<script>
  import HomeComponent from './Home.vue'; //외부에 만들어져 있는 뷰파일을 가지고 오기 위한 약속은 import  .vue는 생략해도됨 @/ 이러면 src 부터 시작
  /*
  템플릿 안에서 홈 컴포넌트를 사용하기 위해 export 에서 이것은 컴포넌트 라고 선언해줘야됨
  */
  export default {
    components: {
      HomeComponent
    },
    data() {
      return {
        title: "안녕하세요.",
        count: 165
      }
    }
  }
</script>
