function getQuery() {
    let href = window.location.href//获取url
    href = decodeURI(href);//使用 decodeURI() 对一个编码后的 URI 进行解码：
    //或者使用decodeURIComponent(href)
    let query = href.substring(href.indexOf('?') + 1);//获取？后面的参数部分
    let param = query.split("&");//将参数部分-用&分割，转换成数组
    let obj = {}
    for (var i = 0; i < param.length; i++) {
        let per = param[i].split("=");//将数组中的每一项-用=分割，转换成数组
        obj[per[0]] = per[1]//以键值对的形式储存
    }
    return obj;
}
var querys = getQuery();
var arr=new Array();
console.log("querys", querys.region)//获得的参数
var settings = {
    "url": "http://localhost:8080/Servlet_regional_house",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json;charset=UTF-8"
    },
    
  };
  
  $.ajax(settings).done(function (response) {
    arr = response
    const data1 = arr.map(item => ({
        name: item.city.slice(0, 2),
        year : item.year,
        price: item.price,
        area : item.area,
        revenue : item.revenue,
      }));
    // 要替换的键名
// 要修改的键名、旧值和新值

var barColors = [
  '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
  '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
  '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
  '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
  '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
  '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
  '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
];
var keyToModify = 'name';
var oldValue = '黑龙';
var newValue = '黑龙江';

// 使用 map 修改特定键的值
var newArrayWithModifiedValue = data1.map(item => {
  // 判断是否需要修改键的值
  if (item[keyToModify] === oldValue) {
    // 创建新对象，修改键的值
    return { ...item, [keyToModify]: newValue };
  } else {
    // 不需要修改的情况下返回原始对象
    return item;
  }
});

var keyToModify = 'name';
var oldValue = '内蒙';
var newValue = '内蒙古';

// 使用 map 修改特定键的值
 newArrayWithModifiedValue1 = newArrayWithModifiedValue.map(item => {
  // 判断是否需要修改键的值
  if (item[keyToModify] === oldValue) {
    // 创建新对象，修改键的值
    return { ...item, [keyToModify]: newValue };
  } else {
    // 不需要修改的情况下返回原始对象
    return item;
  }
});
console.log(newArrayWithModifiedValue1);
var arra = newArrayWithModifiedValue1.filter(item => item.name == querys.region);
console.log(arra)
// 初始化图表容器
var chartContainer = document.getElementById('tiao');
var myChart = echarts.init(chartContainer);

var price = new Array();
var area = new Array();
var revenue = new Array();
var year1 = new Array();
for(var i =0;i<arra.length;i++){
              price.push(arra[i].price)
        }
for(var i =0;i<arra.length;i++){
              area.push(arra[i].area)
        }

for(var i =0;i<arra.length;i++){
              revenue.push(arra[i].revenue)
        }
for(var i =0;i<arra.length;i++){
              year1.push(arra[i].year)
            }
    console.log(revenue)
    price = price.reverse();
    area = area.reverse();
    revenue = revenue.reverse();
    year1 = year1.reverse();
// 初始数据
var option1 = {
  title: {
    text: querys.region+'近十年房地产情况',
    textStyle:{
      color: 'white'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  },
  legend: {
    data: ['商品房平均销售价格(元/平方米)','商品房销售面积(万平方米)','商品房销售额(亿元)'],
    textStyle:{
      color: 'white'
  },
  },
  xAxis: {
  type: 'category',
  data:year1,
  axisLine:{
    lineStyle:{
        color:'white',
        width:2
    }
},
},
yAxis: {
  type: 'value',
  axisLine:{
    lineStyle:{
        color:'white',
        width:2
    }
},
},
  series: [{
    name: '商品房平均销售价格(元/平方米)',
    type: 'line',
    id: 'echarts-package-size',
    data: price,
    animationDurationUpdate: 1000,
    universalTransition: {
      enabled : 'true',
      divideShape : 'split',
    },
    markPoint:{
      
      symbolSize : [30,30],
      data: [
              { type: 'min', name: '最小值'},
              { type: 'max', name: '最大值'}],
              label: {
                  position: 'start', // 文字位置
                  formatter: '{b}:{c}',
                  color: 'white'  // 文字颜色
                }
    },
    markLine:{
  data: [{ type: 'average', name: '平均值' }],
  label: {
      position: 'middle', // 文字位置
      formatter: '{b}:{c}',
      color: 'white'  // 文字颜色
    }},
    
  },
  {
    name :'商品房销售面积(万平方米)',
    type: 'line',
    id: 'echarts-package-size1',
    data: area,
    animationDurationUpdate: 1000,
    universalTransition: {
      enabled : 'true',
      divideShape : 'split',
    },
    markPoint:{
      
      symbolSize : [30,30],
      data: [
              { type: 'min', name: '最小值'},
              { type: 'max', name: '最大值'}],
              label: {
                  position: 'start', // 文字位置
                  formatter: '{b}:{c}',
                  color: 'white'  // 文字颜色
                }
    },
    markLine:{
  data: [{ type: 'average', name: '平均值' }],
  label: {
      position: 'middle', // 文字位置
      formatter: '{b}:{c}',
      color: 'white'  // 文字颜色
    }},
},
{ 
    name :'商品房销售额(亿元)',
    type: 'line',
    id: 'echarts-package-size2',
    data: revenue,
    animationDurationUpdate: 1000,
    universalTransition: {
      enabled : 'true',
      divideShape : 'split',
      
    },
    markPoint:{
      
      symbolSize : [30,30],
      data: [
              { type: 'min', name: '最小值'},
              { type: 'max', name: '最大值'}],
              label: {
                  position: 'start', // 文字位置
                  formatter: '{b}:{c}',
                  color: 'white'  // 文字颜色
                }
    },
    markLine:{
  data: [{ type: 'average', name: '平均值' }],
  label: {
      position: 'middle', // 文字位置
      formatter: '{b}:{c}',
      color: 'white'  // 文字颜色
    }},
},
]
};

var option2 = {
  title: {
    text: querys.region+'近十年房地产情况',
    textStyle:{
      color: 'white'
  },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  xAxis: {
  type: 'category',
  data: year1
},
yAxis: {
  type: 'value'
},
  series: [{
    type: 'bar',
    id: 'echarts-package-size',
    data: price,
    animationDurationUpdate: 1000,
    universalTransition: {
      enabled : 'true',
      divideShape : 'split',
    },
    animationType : 'scale',
    animationEasing :'elasticOut',
    label: {
      show: true,
      color : 'orange',
      position: 'top',
      valueAnimation: true,
      fontSize: 12
    },
  },
  {
    type: 'bar',
    id: 'echarts-package-size1',
    data: area,
    animationDurationUpdate: 1000,
    universalTransition: {
      enabled : 'true',
      divideShape : 'split',
      
    },
    animationType : 'scale',
    animationEasing :'elasticOut',
    label: {
      show: true,
      color : 'orange',
      position: 'top',
      valueAnimation: true,
      fontSize: 12
    },
  },
  {
    type: 'bar',
    id: 'echarts-package-size2',
    data: revenue,
    animationDurationUpdate: 1000,
    universalTransition: {
      enabled : 'true',
      divideShape : 'split',
      
    },
    animationType : 'scale',
    animationEasing :'elasticOut',
    label: {
      show: true,
      color : 'orange',
      position: 'top',
      valueAnimation: true,
      fontSize: 12
    },
  },

]
};
let currentOption = option1;
  myChart.setOption(currentOption);
  setInterval(function () {
    currentOption =
      currentOption === option1 ? option2 : option1;
    myChart.setOption(currentOption);
  }, 5000);   
  });