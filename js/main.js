$(document).ready(function(){
  window.localStorage.clear();
  $(window).ready(

    $("#Modal-6").modal('show')
  )
  $('.modal_intro').show()
  var A_count = 0;
  var B_count = 0;
  var C_count = 0;
  var D_count = 0;
  var lot_count = 0;
  var lot_array = new Array(4);
  var lot_open = ['a','b','c','d']
  // $(".content_2").hide();
  // $(".treasure_1").show(); 
  // $(".treasure_2").show(); 
  // $(".treasure_3").show(); 
  // $(".treasure_4").show(); 
  // $(".board_1").hide();
  // $(".board_2").hide();
  // $(".board_3").hide();
  // $(".board_4").hide();
  var Flage_1 = window.localStorage.getItem('A_flage');
      if(Flage_1==1){
        $(".treasure_1").removeClass('opacity'); 
        $(".board_1").addClass('opacity');
        // lot_count ++;
        // console.log(lot_count);
       }else{
         $(".treasure_1").addClass('opacity'); 
         $(".board_1").removeClass('opacity');
       }
  var Flage_2 = window.localStorage.getItem('B_flage');
      if(Flage_2==1){
        $(".treasure_2").removeClass('opacity'); 
        $(".board_2").addClass('opacity');
        // lot_count ++;
        // console.log(lot_count);
       }else{
         $(".treasure_2").addClass('opacity'); 
         $(".board_2").removeClass('opacity');
       }
  var Flage_3 = window.localStorage.getItem('C_flage');
      if(Flage_3==1){
        $(".treasure_3").removeClass('opacity'); 
        $(".board_3").addClass('opacity');
        // lot_count ++;
        // console.log(lot_count);
       }else{
         $(".treasure_3").addClass('opacity'); 
         $(".board_3").removeClass('opacity');
       }
  var Flage_4 = window.localStorage.getItem('D_flage');
      if(Flage_4==1){
        $(".treasure_4").removeClass('opacity'); 
        $(".board_4").addClass('opacity');
        // lot_count ++;
        // console.log(lot_count);
       }else{
         $(".treasure_4").addClass('opacity'); 
         $(".board_4").removeClass('opacity');
       }
  var Flage_lot = window.localStorage.getItem('lot_flage');
      if(Flage_lot==1){
        $(".lottery_box").show();
        $(".question_box").hide();
      }else{
        $(".lottery_box").hide();
        $(".question_box").show();
        
      }

  // $(".question_box").hide();
  // $(".treasure_3").hide();
  // $(".treasure_4").hide();
  // if(lot_count>=10){
  //   $(".lottery_box").show();
  // }
  // if(A_count==1){
  //   $(".lottery_box").show();
  // }else{
  //   $(".lottery_box").hide();
  // }



  $("#box1").click(function(){
    $("#testInput01").removeClass('border_color');
    $("#wrong_text01").hide();
    $(".submitBtn").click(function(){
      if($("#testInput01").val()=="1111"){
        $("#Modal-1").modal('hide');
        $(".board_1").addClass('opacity');
        $(".treasure_1").removeClass('opacity');
        A_count=1;   
        // lot_count++;
        // console.log(lot_count);
        lot_array[0]="a";
        open_lot_box();
        window.localStorage.setItem('A_flage',A_count);
      }
      else{
        $("#testInput01").addClass('border_color');
        $("#wrong_text01").show();
      }
    });
    $("#testInput01").click(function(){
        $("#wrong_text01").hide();
    });
  });


  
  $("#box2").click(function(){
    $("#testInput02").removeClass('border_color');
    $("#wrong_text02").hide();
    $(".submitBtn").click(function(){
      if($("#testInput02").val()=="2222"){
        $("#Modal-2").modal('hide');
        $(".board_2").addClass('opacity');
        $(".treasure_2").removeClass('opacity');
        B_count=1;
        // lot_count++;
        // console.log(lot_count);
        lot_array[1]="b";
        open_lot_box();
        window.localStorage.setItem('B_flage',B_count);
      }
      else{
        $("#testInput02").addClass('border_color');
        $("#wrong_text02").show();
      }
    });
    $("#testInput02").click(function(){
        $("#wrong_text02").hide();
    });
  });

  $("#box3").click(function(){
    $("#testInput03").removeClass('border_color');
    $("#wrong_text03").hide();
    $(".submitBtn").click(function(){
      if($("#testInput03").val()=="3333"){
        $("#Modal-3").modal('hide');
        $(".board_3").addClass('opacity');
        $(".treasure_3").removeClass('opacity');
        C_count=1; 
        // lot_count++;
        // console.log(lot_count);
        lot_array[2]="c";
        open_lot_box();
        window.localStorage.setItem('C_flage',C_count);
      }
      else{
        $("#testInput03").addClass('border_color');
        $("#wrong_text03").show();
      }
    });
    $("#testInput03").click(function(){
        $("#wrong_text03").hide();
    });

  });

  $("#box4").click(function(){
    $("#testInput04").removeClass('border_color');
    $("#wrong_text04").hide();
    $(".submitBtn").click(function(){
      if($("#testInput04").val()=="4444"){
        $("#Modal-4").modal('hide');
        $(".board_4").addClass('opacity');
        $(".treasure_4").removeClass('opacity');
        D_count=1;    
        // lot_count++;
        // console.log(lot_count);
        lot_array[3]="d";
        open_lot_box();
        window.localStorage.setItem('D_flage',D_count);
      }
      else{
        $("#testInput04").addClass('border_color');
        $("#wrong_text04").show();
      }
    });
    $("#testInput04").click(function(){
        $("#wrong_text04").hide();
    });
  });

  function open_lot_box()                 
  {
    console.log(lot_array);  
    if(lot_array.sort().toString() == lot_open.sort().toString()){
      console.log("相等");
      lot_count++;
      $(".lottery_box").show();
      window.localStorage.setItem('lot_flage',lot_count);
      $(".question_box").hide();
    }
    else{
      console.log("不相等");
    }
  }

    // if(A_count==1){
  //   $(".lottery_box").show();
  // }else{
  //   $(".lottery_box").hide();
  // }
  // $(".entry_btn").click(function(){
  //   var Flage_1 = window.localStorage.getItem('A_flage');
  //   var Flage_2 = window.localStorage.getItem('B_flage');
  //   var Flage_3 = window.localStorage.getItem('C_flage');
  //   var Flage_4 = window.localStorage.getItem('D_flage');
    

  //     if(Flage_1==1){
  //       $(".Aitem").show(); 
  //      }else{
  //        $(".Aitem").hide(); 
  //      }
  //      if(Flage_2==1){
  //       $(".Bitem").show(); 
  //      }else{
  //        $(".Bitem").hide(); 
  //      }
  //      if(Flage_3==1){
  //       $(".Citem").show(); 
  //      }else{
  //        $(".Citem").hide(); 
  //      }
  //      if(Flage_4==1){
  //       $(".Ditem").show(); 
  //      }else{
  //        $(".Ditem").hide(); 
  //      }
  //   $(".content_2").show();
  //   $(".content_1").hide();
  // });

  // $(".outer_btn").click(function(){
  //   $(".content_1").show();
  //   $(".content_2").hide();
  // });
});
