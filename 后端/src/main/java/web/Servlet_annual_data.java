package web;

import com.fasterxml.jackson.databind.ObjectMapper;
import entity.annual_data;
import service.House_Service;
import service.impl.House_Service_impl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "Servlet_annual_data", value = "/Servlet_annual_data")
public class Servlet_annual_data extends HttpServlet {
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("application/json;charset=UTF-8");
        House_Service houseService = new House_Service_impl();
        List<annual_data> data=houseService.get_annual_data();
        response.getWriter().write(objectMapper.writeValueAsString(data));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
