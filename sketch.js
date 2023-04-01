var s = 1 //先設定s為1，之後迴圈會從1~5

function setup() {
  createCanvas(windowWidth, windowHeight); //設定畫布和視窗大小相同
}

function myyyy() { //將圖畫整理為一個函數
  
  //打打文字
  textSize(20+mouseX/20)
  fill("#8B94E6")
  text("教育科技學系410738099",-270,250)

  //要連線的座標點
  let points = [[2,2],[3,3],[2,3],[4,4],[3,5],[2,4],[3,6],[6,5],[8,6],[9,6],[7,4],[8,4],[8,3],[9.54,3.34],[9,2],[7,1],[6,-6],[3,-6],[4,-3],[-3,-3],[-4,-6],[-7,-6],[-6,1],[-7,5],[-6,7],[-4,7],[-5,5],[-4,2],[2,2]];

  // 將座標點擴大 20 倍 s為之後迴圈擴大的變數
   for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20*(1+s/10);
    }
  }

  //基本設定
  scale(1, -1);
  strokeWeight(10); //線條粗細

  // 定義漸層顏色
  let c1 = color("#F5BEBE");
  let c2 = color("#595F72");

  //從第一點跟第二點連成一線 然後 從第二點跟第三點連成一線 以此類推到最後一個
  for (let t = 0; t < points.length-1; t++) {
    let colorLine = lerpColor(c1, c2, t / points.length);
    stroke(colorLine);
    line(points[t][0], points[t][1], points[t+1][0], points[t+1][1]);
  }

  //最後一點與第一點連成一線
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
}


function draw() {
  background(255);



  for(var m=0;m<5;m++){ //呼叫五次函數繪圖
   for(s = 1;s<6;s++){ //讓s由1~5跑一次
     push()
       translate(mouseX,mouseY) //跟著滑鼠座標移動
       scale(0.5+mouseX/1500)
       myyyy() //呼叫函數
     pop()
   }
  }
}
