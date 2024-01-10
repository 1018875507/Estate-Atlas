create external table ods.ods_api_regional_housing_sales_area_i_d(
city string,
a2022 double,
a2021 double,
a2020 double,
a2019 double,
a2018 double,
a2017 double,
a2016 double,
a2015 double,
a2014 double,
a2013 double)
row format delimited
fields terminated by ','
Stored as textfile
Location '/house/data/ods/regional_housing_sales_area';