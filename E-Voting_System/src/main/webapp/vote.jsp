<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
	<%@include file="all_component/allcss.jsp"%>
	<body>
	<form action="index.jsp" >
<%
String id = request.getParameter("userId");
String driverName = "com.mysql.cj.jdbc.Driver";
String connectionUrl = "jdbc:mysql://localhost:3306/";
String dbName = "e-voting_system";
String userId = "root";
String password = "root";

try {
Class.forName(driverName);
} catch (ClassNotFoundException e) {
e.printStackTrace();
}

Connection connection = null;
Statement statement = null;
ResultSet resultSet = null;
%>
<h1 align="center"><font><strong>                                                 </strong></font></h1>


<br><br>
<table align="center" cellpadding="25" cellspacing="15" border="15">
<tr>

</tr>
<tr bgcolor="#A5BAA">
<th><b>NAME</b></th>
<th><b>PARTY_NAME</b></th>
<th><b>EXPERIENCE</b></th>
<th><b>VOTE</b></th>

</tr>
<%
try{ 
connection = DriverManager.getConnection(connectionUrl+dbName, userId, password);
statement=connection.createStatement();
String sql ="SELECT * FROM candidatedata";

resultSet = statement.executeQuery(sql);
while(resultSet.next()){
%>
<tr bgcolor="#DEB887">

<td><b><%=resultSet.getString("Name") %></b></td>
<td><%=resultSet.getString("Party_Name") %></td>
<td><%=resultSet.getString("Experience") %></td>
<td><input type="radio" name="vote" value="<%%>"></td>
                    


</tr>

<% 
}

} catch (Exception e) {
e.printStackTrace();
}
%>
</table>
<br>
 <div align="center">
           <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
</body>                            