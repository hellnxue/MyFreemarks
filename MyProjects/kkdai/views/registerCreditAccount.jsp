<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/common/registerCreditAccount" method="post">
    <form>
        <table>
         ${json}
            <tr>
                <td>用户标识</td>
                <td><input name="userId" type="text" value="210102198403034410"/></td>
            </tr>

            <tr>
                <td>用户真实姓名</td>
                <td><input name="userName" type="text" value="1111000261"/></td>
            </tr>

            <tr>
                <td>身份证号码</td>
                <td><input name="identityNo" type="text" value="800000"/></td>
            </tr>

            <tr>
                <td>图片验证码（需提供网络地址）</td>
                <td><input name="verifyCode" type="text" value="U3B09Ob9S6R08B1UAPfB97sBA"/></td>
            </tr>
            <tr>
                <td>验证码token</td>
                <td><input name="vcodeToken" type="text" value="U3B09Ob9S6R08B1UAPfB97sBA"/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>