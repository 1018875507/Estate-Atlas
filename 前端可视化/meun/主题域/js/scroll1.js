var scroll_arr1=new Array();
var scroll_arr2=new Array();
var settings = {
    "url": "http://localhost:8080/Servlet_house_complete_rate",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json;charset=UTF-8"
    },
    
  };
  
  $.ajax(settings).done(function (response) {
    
    scroll_year = ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"]  
    for(var j=0;j<=scroll_year.length;j++){
        scroll_arr1 = response.filter(item => item.year ===scroll_year[j]);
    for(var i =0; i < scroll_arr1.length; i++) {
        scroll_arr2.push(scroll_arr1[i].city);
        scroll_arr2.push(scroll_arr1[i].year);
        scroll_arr2.push(scroll_arr1[i].constructed);
        scroll_arr2.push(scroll_arr1[i].completed);
        scroll_arr2.push(scroll_arr1[i].rate.toFixed(2));
      }}
    console.log(scroll_arr2)
      // 获取滚动容器
const scrollContainer = document.getElementById('scroll-container');
// 创建<ul>元素

// 使用循环遍历数据，并创建相应的<li>元素
for (var i = 0; i < scroll_arr2.length; i=i+5) {
    var ulElement = document.createElement('ul');
    for(var j = i;j< i+5;j++){
      
    var liElement = document.createElement('li');
    if(j == i){
        liElement.style.color = 'red';
      }
      if(j == i+1){
        liElement.style.color = 'orange';
      }
      if(j == i+2){
        liElement.style.color = 'white';
      }
      if(j == i+3){
        liElement.style.color = 'yellow';
      }
      if(j == i+4){
        liElement.style.color = 'green';
      }
    liElement.textContent = scroll_arr2[j];
    liElement.className = 'list-item';
    ulElement.appendChild(liElement);
    // 将<ul>添加到目标元素下
    scrollContainer.appendChild(ulElement);	
    }
    }
// 设置滚动速度和间隔
const scrollSpeed = 1; // 调整滚动速度
const scrollInterval = 60; // 调整滚动间隔
// 启动自动滚动
const scrollIntervalId = setInterval(function() {
// 更新滚动位置
scrollContainer.scrollTop += scrollSpeed;
console.log(scrollContainer.scrollTop)  
  // 如果滚动到底部，重新开始滚动
  if (scrollContainer.scrollTop >= (scrollContainer.scrollHeight - scrollContainer.clientHeight-1)) {
    scrollContainer.scrollTop = 0;
  }
}, scrollInterval);

// 停止自动滚动的示例（可选）
// setTimeout(function() {
//   clearInterval(scrollIntervalId);
// }, 5000); // 5秒后停止自动滚动
  });
  




