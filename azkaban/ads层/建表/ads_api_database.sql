create table ads.ads_api_annual_data_i_d as
select business,year,number
from
(select business,map('2022',a2022,'2021',a2021,'2020',a2020,'2019',a2019,'2018',a2018,'2017',a2017,'2016',a2016,'2015',a2015,'2014',a2014,'2013',a2013) as value from dws.dws_api_annual_data_i_d) t2
lateral view explode(value) temp_view2 as year,number;


create table ads.ads_api_assets_liabilities_i_d as
select business,year,number
from
(select business,map('2022',a2022,'2021',a2021,'2020',a2020,'2019',a2019,'2018',a2018,'2017',a2017,'2016',a2016,'2015',a2015,'2014',a2014,'2013',a2013) as value from dws.dws_api_assets_liabilities_i_d) t2
lateral view explode(value) temp_view2 as year,number;

create table ads.ads_api_business_operations_i_d as
select business,year,number
from
(select business,map('2022',a2022,'2021',a2021,'2020',a2020,'2019',a2019,'2018',a2018,'2017',a2017,'2016',a2016,'2015',a2015,'2014',a2014,'2013',a2013) as value from dws.dws_api_business_operations_i_d) t2
lateral view explode(value) temp_view2 as year,number;

create table ads.ads_house_complete_rate_i_d as 
select * from dws.dws_api_house_complete_rate_i_d;

create table ads.ads_regional_house_i_d as 
select * from dws.dws_api_regional_house_i_d;