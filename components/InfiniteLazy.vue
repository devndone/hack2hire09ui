<template>
  <div>
    <div class="bodycontainer">
      <div class="container">
        <div class="itemrow clear">
          <ItemBox v-for="(item, index) in rData" v-bind:rData='item' v-bind:key="index"></ItemBox>
          <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ItemBox from './ItemBox.vue'
  import InfiniteLoading from 'vue-infinite-loading'

  export default {
    data() {
      return {
        sortopenvalbool: false
      }
    },
    components: {
      ItemBox,
      InfiniteLoading
    },
    props: {
      rData: {
        default: [{
          name : 'Venue 1',
          location: 'XX YY',
          ratings: 3
        },
        {
          name : 'Venue 2',
          location: 'XX YY',
          ratings: 3
        },
        {
          name : 'Venue 3',
          location: 'XX YY',
          ratings: 3
        },
        {
          name : 'Venue 4',
          location: 'XX YY',
          ratings: 3
        }
      ],
        required: false,
      },
    },
    methods: {

  onInfinite() {
      setTimeout(() => {
        const temp = [{
          name : 'Venue 1',
          location: 'XX YY',
          ratings: 3
        },
        {
          name : 'Venue 2',
          location: 'XX YY',
          ratings: 3
        },
        {
          name : 'Venue 3',
          location: 'XX YY',
          ratings: 3
        },
        {
          name : 'Venue 4',
          location: 'XX YY',
          ratings: 3
        }
      ];
          // for (let i = this.rData.length + 1; i <= this.rData.length + 4; i++) {
          // 	temp.push(i);
          // }
          this.rData = this.rData.concat(temp);
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        }, 1000);
      },
    }
  }

</script>

<style scoped>

.item:nth-child(odd):after {
  content: '';
  border-right: 1px solid #ccc;
  height: 100%;
  right: 0;
  top: 0;
  position: absolute;
}


</style>
