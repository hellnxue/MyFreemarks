<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/common/phoneDynCode" method="post">
    <form>
        <table>
         ${json}
            <tr>
                <td>验证类型"1":注册 "2":忘记密码 "3":代还订单 "4":清贷订单"5":注册征信账号"6":重置手机服务密码</td>
                <td><input name="verifyKind" type="text" value=""/></td>
            </tr>

            <tr>
                <td>手机号</td>
                <td><input name="mobileNo" type="text" value=""/></td>
            </tr>

            <tr>
                <td>验证码token（在"5":注册征信账号时必填）</td>
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