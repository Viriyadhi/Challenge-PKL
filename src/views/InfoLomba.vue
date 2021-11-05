<template>
<div class="hero-image ">
 
  <div class="container-flex">

      <div class="div-lomba"></div>
      <h1>Lomba Olahraga</h1>
      <p>Beberapa jenis lomba yang tersedia</p>
     

      <div class="div-gambar">
<img src="@/assets/image 6.png" alt="" srcset="">
<h1>Title</h1>

      </div>
  </div>
   </div>

  
</template>


<script>
export default {
  name: "InfoLomba",
  mounted() {
    this.$emit('changeRoute', this.$route.name);
  }
};
</script>


<style scoped>
 
.hero-image {
  background-image: url(~@/assets/background-esport.png);
  background-color: #cccccc;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.container-flex{
  display: flex;
  flex-direction: row;
width: 80%;
 margin: auto;
  padding-top: 33rem; 
}

.div-lomba{
display: flex;
flex-direction: row;
}

.div-gambar {

}


</style>