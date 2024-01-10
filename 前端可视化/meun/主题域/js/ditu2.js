var ditu2_arr1=new Array();
var ditu2_arr1=new Array();
var ditu2_arr2=new Array();
year = ["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"]
var settings = {
    "url": "http://localhost:8080/Servlet_regional_house",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json;charset=UTF-8"
    },
    
  };
  
  $.ajax(settings).done(function (response) {
    
    ditu2_arr = response.filter(item => item.year ==='2013');
    var ditu2_myChart = echarts.init(document.getElementById('china_map2'));
    const ditu2_data1 = ditu2_arr.map(item => ({
        name: item.city.slice(0, 2),
        value: item.revenue,
      }));
      // 要替换的键名
// 要修改的键名、旧值和新值
var keyToModify = 'name';
var oldValue = '黑龙';
var newValue = '黑龙江';

// 使用 map 修改特定键的值
var ditu2_newArrayWithModifiedValue = ditu2_data1.map(item => {
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
ditu2_newArrayWithModifiedValue1 = ditu2_newArrayWithModifiedValue.map(item => {
  // 判断是否需要修改键的值
  if (item[keyToModify] === oldValue) {
    // 创建新对象，修改键的值
    return { ...item, [keyToModify]: newValue };
  } else {
    // 不需要修改的情况下返回原始对象
    return item;
  }
});

var ditu2_mapoption = {
    title: {
        text: '各省份商品房销售收入',
        textStyle: {
            color: 'white',
            fontStyle: 'oblique',
            fontSize: 30,

        },
        left: 'center',
        top: '40px'

    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: { // 左侧小导航图标
        show: true,
        x: 'left',
        y: 'top',
        textStyle: {
            fontSize: 20,
            color: 'white',
        },
        splitList: [{
            start: 0,
            end: 2000
        },
        {
            start: 2001,
            end: 4000
        },
        {
            start: 4001,
            end: 6000
        },
        {
            start: 6001,
            end: 8000
        },
        {
            start: 8001,
            
        },
        
    ],
        color: ['#ff0000', '#FF9912', '#F0F06F','#00CC00','#0E94EB',]
    },
    series: [{
        name: '商品房销售额(亿元)',
        id: 'ditu2_population',
        type: 'map',
        mapType: 'china',
        roam: false, // 禁用拖动和缩放
        itemStyle: { // 图形样式
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { // 鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: { // 图形上的文本标签
            normal: {
                show: true, //省份名称
                fontSize: 12,
            },
            emphasis: {
                show: true,
                fontSize: 20,
            }
        },
        data: ditu2_newArrayWithModifiedValue1, /**/
        animationDurationUpdate: 1000,
        universalTransition: true,
        
    }],
    graphic: {
            elements: [
              {
                type: 'text',
            right: 100,
            bottom: 60,
            style: {
              text: '2013年',
              font: 'bolder 80px monospace',
              fill: 'white'
            },
            z: 100
              }]
            },
};
ditu2_myChart.setOption(ditu2_mapoption);
ditu2_myChart.on('click',function(params){
    var selectedRegion = params.name;
    
    window.location.href = 'route1.html'+'?region=' + selectedRegion;
})
c = 1 
function run() {
    if(c ==9){
    c=0
}
ditu2_arr = response.filter(item => item.year === year[c]);

    const ditu2_data1 = ditu2_arr.map(item => ({
        name: item.city.slice(0, 2),
        value: item.revenue,
      }));
      // 要替换的键名
// 要修改的键名、旧值和新值
var keyToModify = 'name';
var oldValue = '黑龙';
var newValue = '黑龙江';

// 使用 map 修改特定键的值
var ditu2_newArrayWithModifiedValue = ditu2_data1.map(item => {
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
ditu2_newArrayWithModifiedValue1 = ditu2_newArrayWithModifiedValue.map(item => {
  // 判断是否需要修改键的值
  if (item[keyToModify] === oldValue) {
    // 创建新对象，修改键的值
    return { ...item, [keyToModify]: newValue };
  } else {
    // 不需要修改的情况下返回原始对象
    return item;
  }
});



ditu2_myChart.setOption({
      series: [
        {
          data: ditu2_newArrayWithModifiedValue1,

        }
      ],
      graphic: {
        elements: [
          {
            type: 'text',
            right: 70,
            bottom: 150,
            style: {
              text: year[c]+'年',
              font: 'bolder 80px monospace',
              fill: 'white'
            },
            z: 100
          }]
        }
    });c = c+1;
  }
  setTimeout(function () {
    run();
  }, 0);
  setInterval(function () {
    run();
  }, 3000);


  });