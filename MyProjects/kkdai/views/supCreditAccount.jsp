<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/common/supCreditAccount" method="post">
    <form>
        <table>
         ${json}
            <tr>
                <td>用户标识</td>
                <td><input name="userId" type="text" value=""/></td>
            </tr>

            <tr>
                <td>登录名</td>
                <td><input name="loginName" type="text" value=""/></td>
            </tr>

            <tr>
                <td>密码</td>
                <td><input name="password" type="text" value=""/></td>
            </tr>

            <tr>
                <td>邮箱</td>
                <td><input name="email" type="text" value=""/></td>
            </tr>
            <tr>
                <td>手机号</td>
                <td><input name="mobileNo" type="text" value=""/></td>
            </tr>
            <tr>
                <td>动态短信验证码</td>
                <td><input name="dynamicCode" type="text" value=""/></td>
            </tr>
            <tr>
                <td>验证码token</td>
                <td><input name="vcodeToken" type="text" value=""/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>