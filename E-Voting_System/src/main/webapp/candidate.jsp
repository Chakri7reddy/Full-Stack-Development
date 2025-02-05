<%@page import="com.Db.DBconnect"%>
<%@page import="java.sql.Connection"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<style type="text/css">
.back-img {
	background: url("img/s3.jpg");
	width: 120%;
	height: 80vh;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>


<meta charset="ISO-8859-1">
<title>Candidate Page</title>
<%@include file="all_component/allcss.jsp"%>
</head>
<body>
	<%@ include file="all_component/navbar2.jsp"%>


	<div class="container-fluid back-img"></div>
	<div class="text-center">
		<h1 class="text-green">FOLLOW DEMOCRACY</h1>
		<h1 class="text-green">MAKE DEMOCRACY</h1>





	</div>

	<%@include file="all_component/footer.jsp"%>
</body>
</html>