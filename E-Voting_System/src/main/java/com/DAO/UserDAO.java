package com.DAO;




import java.sql.*;

import com.User.UserDetails;

public class UserDAO {
	private Connection conn;

	public UserDAO(Connection conn) {
		super();
		this.conn = conn;
	}

	public boolean addUser(UserDetails us) {
		boolean f = false;
		try {
			String query = ("INSERT INTO `e-voting_system`.`user`(`Name`, `DOB`, `Address`, `Email`, `Password`) VALUES ('" +
		               us.getName() + "', '" + us.getDOB() + "', '" + us.getAddress() + "', '" +
		               us.getEmail() + "', '" + us.getPassword() + "')");

		Statement statement = conn.createStatement();
		int i = statement.executeUpdate(query);
		if (i == 1) {
			f = true;
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return f;
	}

	

	public boolean loginUser(UserDetails us) {
		boolean f = false;
		try {
			String query = ("select * from user where name='" + us.getName() + "' and email='" +
		               us.getEmail() + "' and password='" + us.getPassword() + "'");

		Statement statement = conn.createStatement();
		ResultSet rs = statement.executeQuery(query);
		if (rs.next()) {
			f = true;
		}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return f;

	}

}