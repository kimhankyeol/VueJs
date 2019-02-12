<template>
  <div class="yellow lighten-3 pa-3">
    <h3>회원 정보를 수정할 수 있습니다.</h3>
    <p>수정사항</p>
    <v-text-field label="이름" v-model="user.name"> <!--v-model 로 값가져옴 /  v-model="nameOfChild" 그리고 받아온 props 에서  html 화면에서 데이터를 수정하면 오류가뜸-->
    </v-text-field>
    <v-text-field label="주소" v-model="user.address">
    </v-text-field>
    <v-text-field label="전화번호" v-model="user.phone">
    </v-text-field>
    <!--true /false 라디오 버튼을 통해-->
    <v-radio-group v-model="user.hasDog">
      <v-radio label="반려견 있음" :value="true" ></v-radio>
      <v-radio label="반려견 없음" :value="false"></v-radio>
    </v-radio-group>
    <v-btn @click="changeUser">수정완료</v-btn>

  </div>
</template>
<!--자식에서 부모로 보내기 위해 새로운 객체를 만들어서 보냄-->

<script>
//eventBus
import { eventBus } from "../main"//main.js 에서 불러옴

export default {
   props:["nameOfChild","addressOfChild","phoneOfChild","hasDogOfChild"],
    data(){
      return{
        user:{} //1. 여기서 user 객체를 만들고 
      }
    },
    created(){   //2. 부모에서 받아온 props 로 다시 user 로 재할당
      this.user.name=this.nameOfChild
      this.user.address=this.addressOfChild
      this.user.phone=this.phoneOfChild
      this.user.hasDog=this.hasDogOfChild
    },
    methods:{
      changeUser(){
        this.$emit("child",this.user)  //자식이 부모에게 보내는 신호 $emis 그 신호의 이름을 String 형태로 보내줘야됨
        // eventBus.$emit("userWasEdited",new Date())//userWasEdited 신호가 이벤트 버스로 수정한 시간과 전달이 됨     
        eventBus.userWasEdited(new Date())
        }
    }
  }
</script>
