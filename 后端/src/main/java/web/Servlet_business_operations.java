package web;

import com.fasterxml.jackson.databind.ObjectMapper;
import entity.business_operations;
import service.House_Service;
import service.impl.House_Service_impl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "Servlet_business_operations", value = "/Servlet_business_operations")
public class Servlet_business_operations extends HttpServlet {
    protected ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("application/json;charset=UTF-8");
        House_Service house_service = new House_Service_impl();
        List<business_operations> data = house_service.get_business_operations();
        response.getWriter().write(objectMapper.writeValueAsString(data));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
