package service.impl;

import dao.House_Dao;
import dao.impl.House_Dao_impl;
import entity.*;
import service.House_Service;

import java.util.List;

public class House_Service_impl implements House_Service {
    House_Dao house_dao = new House_Dao_impl();
    @Override
    public List<annual_data> get_annual_data() {
        return house_dao.get_annual_data();
    }

    @Override
    public List<assets_liabilities> get_assets_liabilities() {
        return house_dao.get_assets_liabilities();
    }

    @Override
    public List<business_operations> get_business_operations() {
        return house_dao.get_business_operations();
    }

    @Override
    public List<house_complete_rate> get_house_complete_rate() {
        return house_dao.get_house_complete_rate();
    }

    @Override
    public List<regional_house> get_regional_house() {
        return house_dao.get_regional_house();
    }
}
