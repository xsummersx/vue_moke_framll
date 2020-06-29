<template>
  <div>
    <img src='/imgs/1.jpg'>
    <img src='../../public/imgs/2.jpg'>
    <nav-header></nav-header>
    <nav-feets></nav-feets>
  </div>
</template>
<script>
import NavHeader from './../components/Header.vue'
import NavFeets from './../components/Footer.vue'
export default {
  name: 'test',
  data () {
    return {

    }
  },
  components: {
    NavHeader,
    NavFeets,
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      var url = "/znhTJXX/api/ZNBK/W_ZNBK_GetCourseClassIDFromBase?Token=773b818b-e1f1-4f8c-95d4-a4bccd466dee&UserID=GT009&Key=1RQwMDk=&SubjectID=C";
      console.log(url)
      this.axios.get(url).then((response) => {
        let res = response.data;
        console.log(res.data);
      })
    }
  }
}
</script>