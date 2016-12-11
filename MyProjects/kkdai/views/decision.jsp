<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="credit_02" method="post">
    <form>
        <table>
         ${json}
            <tr>
                <td>用户标识</td>
                <td><input name="userId" type="text" value=""/></td>
            </tr>

            <tr>
                <td>账号</td>
                <td><input name="username" type="text" value=""/></td>
            </tr>

            <tr>
                <td>密码</td>
                <td><input name="password" type="text" value=""/></td>
            </tr>

            <tr>
                <td>查询码</td>
                <td><input name="queryCode" type="text" value=""/></td>
            </tr>
            <tr>
                <td>身份证号码</td>
                <td><input name="identityNo" type="text" value=""/></td>
            </tr>
            <tr>
                <td>验证码</td>
                <td><input name="vercode" type="text" value=""/></td>
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