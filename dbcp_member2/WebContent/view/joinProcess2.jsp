<%@page import="dbcp_member2.JoinVO"%>
<%@page import="dbcp_member2.JoinDAO"%>
<%@page import="com.mysql.fabric.xmlrpc.base.Member" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
    	request.setCharacterEncoding("utf-8");
    	
    	String userid=request.getParameter("userid");
    	
    	JoinDAO dao = new JoinDAO();
	boolean flag=dao.checkId(userid);
    	
    	if(flag){
    		out.print("false");
    	}else{
    		out.print("true");
    	}
    %>