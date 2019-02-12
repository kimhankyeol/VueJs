<template>
  <div>
  <div>이름 : {{nameOfChild}}</div>
  <div>주소 : {{addressOfChild}}</div>
  <div>전화번호 : {{phoneOfChild}}</div>
  <div>반려견유무 : {{hasDogOfChild}}</div>
  <div>수정일자 : {{editedDate}}</div>
  </div>

</template>

<script>
import { eventBus } from "../main"
export default {
  data(){
    return{
      editedDate:null
    }
  },
  props:['nameOfChild','addressOfChild','phoneOfChild','hasDogOfChild'],
  computed:{
    hasDogKr(){
      return this.hasDogOfChild === true ? '있음':'없음'
    }
  },
  created(){
    eventBus.$on('userWasEdited',(date)=>{
      this.editedDate = date 
    })  //UserEdit 에서 보낸 신호
  }
}
</script>

<!--
  <template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{nameOfChild}}</p>
    <p>{{sayHello}}</p>
    <v-btn @click="switchName()">이름변경</v-btn>
  </div>
</template>

    <p>{{nameOfChild.name}}</p>
    <p>{{nameOfChild.familyName}}</p>
<script>
export default {
  props:{
    nameOfChild:{
      type:String,
      required: true, //필요한데 부모 컴포넌트에서 넘겨주지 않으면 오류 뜸
      default:'LEGO' // 부모 컴포넌트에서 값을 넘겨주지 않으면 기본값으로 LEGO 
    } //데이터 형식을 알기위해 써주는것 Object가 넘어오는데 데이터 형을  String 을 써주면 오류가 뜸
  },// 부모 컴포넌트에서 받아온 변수  props 를 보내면 어떤형태인지 모름 그래서  props[] -> props{}   props:{nameOfChild:String  },
  computed:{  //window.onload 개념
    sayHello(){
      return this.nameOfChild+'안녕하세요' //this 로 불러내어 nameOfChild를 사용할수 있음
    }
  },
  methods:{
    switchName(){
      this.nameOfChild='컴퓨터'
    }
  }
}
</script>


-->