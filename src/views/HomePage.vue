<template>
  <h1>Judul</h1>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    this.$emit('changeRoute', this.$route.name);
  }
};
</script>

<style>

</style>
