<%@page import="dbcp_member2.JoinVO"%>
<%@page import="dbcp_member2.JoinDAO"%>
<%@page import="com.mysql.fabric.xmlrpc.base.Member" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
    	request.setCharacterEncoding("utf-8");
    	
    	String userid=request.getParameter("userid");
    	String pwd=request.getParameter("password");
    	String name=request.getParameter("name");
    	String gen=request.getParameter("gender");
    	String email=request.getParameter("email");
    	
    	JoinDAO dao = new JoinDAO();
    	JoinVO vo = new JoinVO();
    	
    	vo.setUserid(userid);
    	vo.setPassword(pwd);
    	vo.setName(name);
    	vo.setGender(gen);
    	vo.setEmail(email);
    	
    	int abc=dao.Join_insert(vo);
    	
    	if(abc>0){
    		out.print("<script>");
    		out.print("alert('회원가입 성공데스네');");
    		out.print("location.href='loginForm.jsp';");
    		out.print("</script>");
    	}else{
    		out.print("<script>");
    		out.print("alert('회원가입 실패다요');");
    		out.print("location.href='joinForm.jsp';");
    		out.print("</script>");
    	}
    %>