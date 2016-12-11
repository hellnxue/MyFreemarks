<%--
  Created by IntelliJ IDEA.
  User: caoc
  Date: 2016/9/22
  Time: 16:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
${json}
<form action="/kakadai/order/redemptionBill" method="post">
    <form>
        <table>
            <tr>
                <td>用户id</td>
                <td><input name="userId" type="text" value="${userSession.userId}"/></td>
            </tr>
            <tr>
                <td>接入方账号</td>
                <td><input name="account" type="text" value="baifutianxia"/></td>
            </tr>
            <tr>
                <td>账单ID</td>
                <td><input name="bid" type="text" value=""/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>
