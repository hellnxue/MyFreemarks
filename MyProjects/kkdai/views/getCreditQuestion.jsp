<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/common/getCreditQuestion" method="post">
    <form>
        <table>
         ${json}
            <tr>
                <td>用户标识</td>
                <td><input name="userId" type="text" value=""/></td>
            </tr>

            <tr>
                <td>征信账号</td>
                <td><input name="creditAccount" type="text" value=""/></td>
            </tr>

            <tr>
                <td>征信密码</td>
                <td><input name="creditPwd" type="text" value=""/></td>
            </tr>

            <tr>
                <td>图片验证码（需提供一个公网地址）</td>
                <td><input name="verifyCode" type="text" value=""/></td>
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