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
@WebServlet("/login")

public class loginServlet extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String password = request.getParameter("password");

		if (name != null && !name.isEmpty() && email != null && !email.isEmpty() && password != null && !password.isEmpty()) {
			UserDetails userDetails = new UserDetails();
			userDetails.setName(name);
			userDetails.setEmail(email);
			userDetails.setPassword(password);
			UserDAO dao = new UserDAO(DBconnect.getConn());
			boolean isLoginSuccessful = dao.loginUser(userDetails);

			if (isLoginSuccessful) {
				response.sendRedirect("home.jsp");
			} else {
				HttpSession session = request.getSession();
				session.setAttribute("login-failed", "Invalid Data Entered  :(");
				response.sendRedirect("login.jsp");
			}
		} else {
			HttpSession session = request.getSession();
			session.setAttribute("login-failed", "Please provide all the required information.");
			response.sendRedirect("login.jsp");
		}
	}
}
