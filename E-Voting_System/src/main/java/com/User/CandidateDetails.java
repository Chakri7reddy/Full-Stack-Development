package com.User;

public class CandidateDetails {
	private String name;
	private String email;

	private int age;
	private String dateOfBirth;
	private String address;
	private String fathername;
	private String qualification;
	private String partyName;
	private String experience;
	
	public CandidateDetails() {
		super();
	}

	public CandidateDetails(String name, String email, int age, String dateOfBirth, String address,
			String fathername, String qualification, String partyName, String experience ) {
		super();
		this.name = name;
		this.email = email;

		this.age = age;
		this.dateOfBirth = dateOfBirth;
		this.address = address;
		this.fathername = fathername;
		this.qualification = qualification;
		this.partyName = partyName;
		this.experience = experience;
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

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getFathername() {
		return fathername;
	}

	public void setFathername(String fathername) {
		this.fathername = fathername;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getPartyName() {
		return partyName;
	}

	public void setPartyName(String partyName) {
		this.partyName = partyName;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	
	

}
