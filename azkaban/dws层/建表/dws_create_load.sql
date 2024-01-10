create table dws.dws_api_business_operations_i_d as  select * from dwd.dwd_api_business_operations_i_d;


create table dws.dws_api_assets_liabilities_i_d as select * from dwd.dwd_api_assets_liabilities_i_d;

create table dws.dws_api_house_complete_rate_i_d as
select 
t3.city as city,
t3.year as year,
t4.number as constructed,
t4.number as completed,
t4.number/t3.number as rate
from
(select city,year,number
from
(select city,map('2022',a2022,'2021',a2021,'2020',a2020,'2019',a2019,'2018',a2018,'2017',a2017,'2016',a2016,'2015',a2015,'2014',a2014,'2013',a2013) as value from dwd.dwd_api_completed_area_of_major_cities_i_d) t2
lateral view explode(value) temp_view2 as year,number) as t3
join
(select city,year,number
from
(select city,map('2022',a2022,'2021',a2021,'2020',a2020,'2019',a2019,'2018',a2018,'2017',a2017,'2016',a2016,'2015',a2015,'2014',a2014,'2013',a2013) as value from dwd.dwd_api_constructed_area_of_major_cities_i_d) t2
lateral view explode(value) temp_view2 as year,number) as t4
on t3.city = t4.city and 
t3.year = t4.year;


create table dws.dws_api_regional_house_i_d as
select
t4.city as city
,t4.year as year
,t4.number as price
, t5.number as area
,t6.number as revenue
from
((select city,year,number
from
(select city,map('2022',a2022,'2021',a2021,'2020',a2020,'2019',a2019,'2018',a2018,'2017',a2017,'2016',a2016,'2015',a2015,'2014',a2014,'2013',a2013) as value from dwd.dwd_api_regional_housing_prices_i_d) t1
lateral view explode(value) temp_view2 as year,number) as t4)
join
((select city,year,number
from
(select city,map('2022',a2022,'2021',a2021,'2020',a2020,'2019',a2019,'2018',a2018,'2017',a2017,'2016',a2016,'2015',a2015,'2014',a2014,'2013',a2013) as value from dwd.dwd_api_regional_housing_sales_area_i_d) t2
lateral view explode(value) temp_view2 as year,number) as t5)
on t4.city = t5.city and t4.year = t5.year
join
((select city,year,number
from
(select city,map('2022',a2022,'2021',a2021,'2020',a2020,'2019',a2019,'2018',a2018,'2017',a2017,'2016',a2016,'2015',a2015,'2014',a2014,'2013',a2013) as value from dwd.dwd_api_regional_housing_sales_revenue_i_d) t3
lateral view explode(value) temp_view2 as year,number) as t6)
on t4.city = t6.city and t4.year = t5.year;


create table dws.dws_api_annual_data_i_d as
select * from dwd.dwd_api_annual_average_price_i_d
union
select * from dwd.dwd_api_annual_total_sales_area_i_d
union
select * from dwd.dwd_api_annual_total_sales_revenue_i_d;