<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Voter Register Here</title>
<%@include file="all_component/allcss.jsp"%>


</head>
<body>
	<%@include file="all_component/navbar.jsp"%>
	<div class="continer-fluid ">
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<div class="card mt-4">
					<div class="card-header text-center text-black bg-custom">
						<i class="fa fa-user-plus fa-3x" aria-hidden="true"></i>
						<h4>Registration</h4>
					</div>



					<%
					String regMsg = (String) session.getAttribute("reg-sucess");
					if (regMsg != null) {
					%>
					<div class="alert alert-success" role="alert"><%=regMsg%>Login<a
							href="login.jsp">Click Here</a>
					</div>
					<%
					session.removeAttribute("reg-sucess");
					}
					%>

					<%
					String FailMsg = (String) session.getAttribute("reg-fail");
					if (FailMsg != null) {
					%>
					<div class="alert alert-danger" role="alert"><%=FailMsg%></div>
					<%
					

					session.removeAttribute("reg-fail");
					}
					%>


					<div class="card-body">
						<form action="UserServlet" method="post">
							<div class="form-group">
								<label for="enteryourname">Name</label> <input type="text"
									class="form-control" id="enteryourname" name="name">
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label> <input
									type="email" class="form-control" id="exampleInputEmail1"
									aria-describedby="emailHelp" name="email"> <small
									id="emailHelp" class="form-text text-muted">We'll never
									share your email with anyone else.</small>
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Password</label> <input
									type="password" class="form-control" id="exampleInputPassword1"
									name="password">
								<div class="form-group">
									<label for="enterDOB">DOB</label> <input type="date"
										class="form-control" id="enterDOB" name="DOB">
								</div>

								<div class="form-group">
									<label for="exampleInputAddress">Address</label> <input
										type="text" class="form-control" id="exampleInputAddress"
										name="Address">
								</div>



							</div>
							<div class="form-check">
								<input type="checkbox" class="form-check-input"
									id="exampleCheck1"> <label class="form-check-label"
									for="exampleCheck1">Check me out</label>
							</div>
							<button type="submit" class="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>

			</div>
		</div>
	</div>

	<%@include file="all_component/footer.jsp"%>
</body>
</html>