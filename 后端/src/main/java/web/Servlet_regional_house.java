package web;

import com.fasterxml.jackson.databind.ObjectMapper;
import entity.regional_house;
import service.House_Service;
import service.impl.House_Service_impl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "Servlet_regional_house", value = "/Servlet_regional_house")
public class Servlet_regional_house extends HttpServlet {
    protected ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("application/json;charset=UTF-8");
        House_Service house_service = new House_Service_impl();
        List<regional_house> data = house_service.get_regional_house();
        response.getWriter().write(objectMapper.writeValueAsString(data));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
