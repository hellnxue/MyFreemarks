<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/assist/getAirtel" method="post">
    <form>
        <table>
         ${json}
           <tr>
                <td>用户id</td>
                <td><input name="userId" type="text" value=""/></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input name="passWord" type="text" value=""/></td>
            </tr>
             <tr>
                <td>手机号码</td>
                <td><input name="telephone" type="text" value=""/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>