package dao.impl;

import dao.House_Dao;
import entity.*;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanListHandler;
import utils.JdbcUtil;

import java.sql.SQLException;
import java.util.List;

public class House_Dao_impl implements House_Dao {
    private QueryRunner runner = new QueryRunner(JdbcUtil.getDataSource());
    @Override
    public List<annual_data> get_annual_data() {
        String sql = "select * from annual_data";
        try {
            return runner.query(sql,new BeanListHandler<>(annual_data.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<assets_liabilities> get_assets_liabilities() {
        String sql = "select * from assets_liabilities";
        try {
            return runner.query(sql,new BeanListHandler<>(assets_liabilities.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<business_operations> get_business_operations() {
        String sql = "select * from business_operations";
        try {
            return runner.query(sql,new BeanListHandler<>(business_operations.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<house_complete_rate> get_house_complete_rate() {
        String sql = "select * from house_complete_rate";
        try {
            return runner.query(sql,new BeanListHandler<>(house_complete_rate.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<regional_house> get_regional_house() {
        String sql = "select * from regional_house";
        try {
            return runner.query(sql,new BeanListHandler<>(regional_house.class));
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
