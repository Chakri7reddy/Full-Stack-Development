package com.Servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.DAO.UserDAO;
import com.Db.DBconnect;
import com.User.UserDetails;

@SuppressWarnings("serial")
@WebServlet("/UserServlet")

public class UserServlet extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse resopnse)
			throws ServletException, IOException {
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String DOB = request.getParameter("DOB");
		String address = request.getParameter("Address");

		UserDetails us = new UserDetails();
		us.setName(name);
		us.setEmail(email);
		us.setPassword(password);
		us.setDOB(DOB);
		us.setAddress(address);

		UserDAO dao = new UserDAO(DBconnect.getConn());
		boolean f = dao.addUser(us);

		if (f) {
			HttpSession session = request.getSession();
			session.setAttribute("reg-sucess", "Register Sucessfully :)");
			resopnse.sendRedirect("Register.jsp");
		} else {
			HttpSession session = request.getSession();
			session.setAttribute("reg-fail", "Register not Sucessful  :(");
			resopnse.sendRedirect("Register.jsp");

		}

	}

}
