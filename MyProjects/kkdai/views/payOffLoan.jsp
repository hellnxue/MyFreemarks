<%--
  Created by IntelliJ IDEA.
  User: caoc
  Date: 2016/9/22
  Time: 18:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
${json}
<form action="/kakadai/order/payOffLoan" method="post">
    <form>
        <table>
            <tr>
                <td>用户标识</td>
                <td><input name="userId" type="text" value="1111000261"/></td>
            </tr>

            <tr>
                <td>接入方账号</td>
                <td><input name="account" type="text" value="baifutianxia"/></td>
            </tr>

            <tr>
                <td>订单编号</td>
                <td><input name="bid" type="text" value="1299259"/></td>
            </tr>

            <tr>
                <td>验证码</td>
                <td><input name="verifyCode" type="text"/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>
