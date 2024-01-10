package web;

import entity.annual_data;
import entity.business_operations;
import service.House_Service;
import service.impl.House_Service_impl;

import java.util.List;

public class test {

    public static void main(String[] args) {
        House_Service house_service = new House_Service_impl();
        List<business_operations> data = house_service.get_business_operations();
        System.out.println(data);

    }
}
