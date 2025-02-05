<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title> Voter Login Here</title>
<%@include file="all_component/allcss.jsp"%>
</head>
<body>
	<%@include file="all_component/navbar.jsp"%>
	
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<div class="card mt-4">
					<div class="card-header text-center text-black bg-custom">
						<i class="fa fa-user-circle-o fa-3x" aria-hidden="true"></i>
						<h4>Login Page</h4>
					</div>

<%
						String invalidMsg=(String)session.getAttribute("login-failed");
                        if(invalidMsg != null){
						%>
					<div class="alert alert-danger" role="alert"><%= invalidMsg%></div>
						
						<%
						session.removeAttribute("login-failed");
                        }
						%>

					<div class="card-body">
						<form action="login" method="post">

							<div class="form-group">
								<label for="inputVoterId">Voter_Name</label> <input type="text"
									class="form-control" id="inputVoter Name"
									 name="name">


							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label> <input
									type="email" class="form-control" id="exampleInputEmail1"
									aria-describedby="emailHelp"  name="email">
								<small id="emailHelp" class="form-text text-muted">We'll
									never share your email with anyone else.</small>
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Password</label> <input
									type="password" class="form-control" id="exampleInputPassword1"
									name="password">
							</div>

							<button type="submit" class="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>

			</div>
		</div>
	

	<%@include file="all_component/footer.jsp"%>
</body>
</html>