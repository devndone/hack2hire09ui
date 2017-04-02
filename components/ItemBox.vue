<template>

<div class="recomm_items">
  <div class="rc_item_inner">
                           <div>
                               <span> Hotel name </span> : <span> Trident </span>
                           </div>
                           <div>
                             <span>  Venue  </span>    : <span> Trident </span>
                           </div>
                           <div>
                               <span>  Hotel name </span> : <span> Trident </span>
                           </div>

          <Star />

    </div>
</div>

</template>

<script>
import Star from './Star'
export default
{
  components: {
      Star
       }
}

</script>

<style scoped>
.recomm_container{
    text-align: center;

}
.rc_item_inner{
  //  padding: 10px;
    border: 1px solid lightgray;
    text-align: center;
    box-shadow: 0px 0px 2px lightgrey;

}
.recomm_items{

       padding: 10px;
            display: inline-block;
          width: 90%;


}
span{
    padding: 10px;
}
.rc_item_inner>div:first-child{
    background-color: grey;
    color: white;
    padding: 10px;
}


.rc_item_inner div{
    padding: 10px;
}
.rec_text_hold{
    padding: 10px;
    text-align: left;

}
.rec_text{
    padding: 10px;
    border-bottom: 2px solid navy;
    color: navy;
}

.add_button button{
    padding: 5px;
    border: 1px solid grey;
   // width: 100px;

}

@media only screen and (min-width:800px){
    .recomm_items{

          width: 30%;


    }
    .title_item{
        display: inline-block;

    }
}









.rate {
  border: 1px solid transparent;
  float: left;
  height: 46px;
  padding: 0 10px;
}

.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}

.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: blue;
}

.rate:not(:checked) > label:before { content: '★ '; }

.rate > input:checked ~ label { color: green; }

.rate:not(:checked) > label:hover, .rate:not(:checked) > label:hover ~ label { color: #deb217; }

.rate > input:checked + label:hover, .rate > input:checked + label:hover ~ label, .rate > input:checked ~ label:hover, .rate > input:checked ~ label:hover ~ label, .rate > label:hover ~ input:checked ~ label { color: #c59b08; }

</style>
