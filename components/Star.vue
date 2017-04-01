<template>
  <star-rating />
</template>

<script>

import StarRating from 'vue-star-rating'

export default
{
  data(){
    return {
      rating: 1
    }
  },
  methods: {

      selectRating(val){
          this.rating = val;
      },
      starShow(val) {
          if(val <= this.rating)
              return 'icon-star'
          else return 'icon-star-empty'
      }
    },
  components: {
        StarRating
  }
}
</script>
<style scoped>

</style>
