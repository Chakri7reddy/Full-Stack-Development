package com.Servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.DAO.CandidateDAO;
import com.Db.DBconnect;
import com.User.CandidateDetails;

@SuppressWarnings("serial")
@WebServlet("/CandidateServlet")
@MultipartConfig

public class CandidateServlet extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		int age = Integer.parseInt(request.getParameter("age"));
		String dateOfBirth = request.getParameter("DOB");
		String address = request.getParameter("Address");
		String fathername = request.getParameter("fathername");
		String qualification = request.getParameter("qualification");
		String partyName = request.getParameter("partyname");
		String experience = request.getParameter("experience");

		CandidateDetails us = new CandidateDetails(name, email, age, dateOfBirth, address, fathername, qualification,
				partyName, experience);

		CandidateDAO dao = new CandidateDAO(DBconnect.getConn());
		boolean y = dao.addCandidate(us);

		if (y) {

			HttpSession session = request.getSession();
			session.setAttribute("reg-sucess", "Register Sucessfully :)");
			response.sendRedirect("CandidateRegister.jsp");
		} else {
			HttpSession session = request.getSession();
			session.setAttribute("reg-fail", "Register not Sucessful  :(");
			response.sendRedirect("CandidateRegister.jsp");

		}

	}
}