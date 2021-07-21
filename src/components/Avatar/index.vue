<template>
  <img 
    class = "Avatar-container"
    :src="url" 
    :style = "{
        width:size+'px',
        height:size+'px'
    }"
  />
</template>

<script>
export default {
    props:{
        url:String,
        size:Number
    }
}
</script>

<style scoped>
    .Avatar-container{
        display:block;
        border-radius: 50%;
        object-fit: cover; 
    }
</style>
