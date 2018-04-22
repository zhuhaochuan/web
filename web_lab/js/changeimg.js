
  var curIndex=0;
  //时间间隔(单位毫秒)，每秒钟显示一张，数组共有5张图片放在Photos文件夹下。
  var timeInterval=1000;
  var arr=new Array();
  arr[0]="img/chenying.jpg";
  arr[1]="img/nju1.jpg";
  arr[2]="img/chenying.jpg";
  arr[3]="img/nju1.jpg";
  arr[4]="img/chenying.jpg";
  setInterval(changeImg,timeInterval);
  function changeImg()
  {
      var obj=document.getElementById("obj");
      if (curIndex==arr.length-1) 
      {
          curIndex=0;
      }
      else
      {
          curIndex+=1;
      }
      obj.src=arr[curIndex];
  }
