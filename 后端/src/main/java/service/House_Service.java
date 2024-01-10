package service;

import entity.*;

import java.util.List;

public interface House_Service {
    List<annual_data> get_annual_data();
    List<assets_liabilities> get_assets_liabilities();
    List<business_operations> get_business_operations();
    List<house_complete_rate> get_house_complete_rate();
    List<regional_house> get_regional_house();
}
