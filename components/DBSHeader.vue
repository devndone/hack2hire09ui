<template>
  <div class="title_bar_hold">
                <div class="title_item">
                    <div>
                                    <div  >
                                        Username
                                    </div>


                                    <div  class="titl_ans">
                                      <input type="text" placeholder="Enter name" />
                                    </div>


                    </div>
                </div>
                  <div class="title_item">
                    <div >
                        Recommendation

                    </div>
                    <div   class="titl_ans">
                        <select class="rec_items">
                            <option>Restaurant</option>
                            <option>Food</option>
                            <option>Theator</option>
                            <option>Park</option>
                        </select>

                    </div>

                  </div>
                <div class="title_item">
                     <div class="add_button">

                        <button class="btn-default"><b>+</b>&nbsp;&nbsp;&nbsp;&nbsp;Add Visit  </button>
                        </div>
                </div>

                </div>

  </template>

    <style scoped>

    .title_bar_hold{

    background-color: whitesmoke;
    border: 1px solid lightgray;
    box-shadow: 0px 0px 2px 0px lightgrey;
}
.title_item{
   display: inline-block;
  //  width: 40%;
    text-align: center;
    padding: 10px;



}
.title_item:last-child{
    text-align: right;

}
.title_item div{
    display: inline-block;
    padding-left: 20px;
    padding-right: 20px;

}
.titl_ans{
    font-weight: bold;
}
.titl_ans option{
    padding: 5px;
      padding-left: 20px;
    padding-right: 20px;
    text-align: center;


}
select,option{
  padding: 10px;
}
div{
  font-family: segoe ui;
}
button{
  border: 1px solid lightgrey;
  padding: 10px;
}
input{
  padding: 10px;
  border: 1px solid lightgrey;
}
    </style>
