<template>
<star-rating class="star_rate"></star-rating>
</template>
<script>
import StarRating from 'vue-star-rating'

export default
{
  components: {
           StarRating
       }
}
</script>
<style scoped>
.star_rate{
  display: none;
}
</style>
