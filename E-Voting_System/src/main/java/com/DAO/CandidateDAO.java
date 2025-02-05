package com.DAO;

import java.sql.Connection;
import java.sql.Statement;

import com.User.CandidateDetails;

public class CandidateDAO {
    private Connection Conn;
    
    public CandidateDAO(Connection Conn) {
    	super();
    	this.Conn=Conn;
    	
    }
    public boolean addCandidate(CandidateDetails us)
    {
    	boolean f=false;
    	
    	try {
    		String query = "INSERT INTO `e-voting_system`.`candidatedata` ( `Name`, `Email`,  `Age`, `DOB`, `Address`, `Fathername`, `Qualification`, `Party_Name`, `Experience`) VALUES ('"
    				+ us.getName() + "','" + us.getEmail() + "', " + us.getAge() + ", '" + us.getDateOfBirth() + "', '" + us.getAddress() + "',  '"
    				+ us.getFathername() + "','"+us.getQualification()+"','" + us.getPartyName() + "', '" + us.getExperience() + "')";
        
    		Statement statement = Conn.createStatement();
    		int i = statement.executeUpdate(query);
    		if (i == 1) {
    			f = true;
    		}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
    	return f;
    }
}
