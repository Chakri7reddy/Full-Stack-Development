package com.User;

public class UserDetails {
	private String name;
	private String email;
	private String password;
	private String DOB;
	private String address;

	public UserDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDOB() {
		return DOB;
	}

	public void setDOB(String dOB) {
		DOB = dOB;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	public UserDetails(String name, String email, String password, String DOB, String address) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.DOB = DOB;
		this.address = address;
	}



		}
	
