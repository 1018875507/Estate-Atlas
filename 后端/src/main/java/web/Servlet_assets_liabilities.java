package web;

import com.fasterxml.jackson.databind.ObjectMapper;
import entity.assets_liabilities;
import service.House_Service;
import service.impl.House_Service_impl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "Servlet_assets_liabilities", value = "/Servlet_assets_liabilities")
public class Servlet_assets_liabilities extends HttpServlet {
    protected ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("application/json;charset=UTF-8");
        House_Service house_service = new House_Service_impl();
        List<assets_liabilities> data = house_service.get_assets_liabilities();
        response.getWriter().write(objectMapper.writeValueAsString(data));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
