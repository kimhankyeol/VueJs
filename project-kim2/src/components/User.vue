<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름 :{{name}}</p>
    <v-btn @click="changeName()">이름변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <!--:nameOfChild="name"  이 정보를 준다고 말하고있음 부모에서 자식으로의 과정  왼쪽에서 자식에게 선언되는 Props에 변수명이 선언되고 그 변수에 어떤값을 넣어줄것인가는 오른쪽 -->
        <UserDetail :nameOfChild="name"
                    :addressOfChild="address"
                    :phoneOfChild="phone"
                    :hasDogOfChild="hasDog"
        ></UserDetail>
        <!--만약에 child 라는 신호가 오면 parents 라는 함수를 실행-->
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit :nameOfChild="name"
                  :addressOfChild="address"
                  :phoneOfChild="phone"
                  :hasDogOfChild="hasDog"
                   @child="parents" 
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>
<!--  :nameOfChild="{name:'hankyeol',familyName:'kim'}"-->

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data(){
      return{
          name:"김한결",
          address:"서울 서대문구 홍은2동",
          phone:"01086700474",
          hasDog:true
      }
  },
  methods:{
    parents(user){//parants 가 UserEdit 새로운 객체 user 에 object 받음
    //user={'name,'address','phone','hasDog'}
    this.name=user.name
    this.address=user.address
    this.phone=user.phone
    this.hasDog=user.hasDog
      console.log("차일드 받음")
    }
  }
}
</script>
<!--
   //methods 는 함수들 모아놓은곳
  methods:{
    changeName(){
      this.name="kim"
    }
  }
-->