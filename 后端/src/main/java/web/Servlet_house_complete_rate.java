package web;

import com.fasterxml.jackson.databind.ObjectMapper;
import entity.house_complete_rate;
import service.House_Service;
import service.impl.House_Service_impl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "Servlet_house_complete_rate", value = "/Servlet_house_complete_rate")
public class Servlet_house_complete_rate extends HttpServlet {
    protected ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("application/json;charset=UTF-8");
        House_Service house_service = new House_Service_impl();
        List<house_complete_rate> data = house_service.get_house_complete_rate();
        response.getWriter().write(objectMapper.writeValueAsString(data));
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
