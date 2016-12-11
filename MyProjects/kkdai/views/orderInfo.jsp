<%--
  Created by IntelliJ IDEA.
  User: caoc
  Date: 2016/9/21
  Time: 17:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
${json}
<form action="/kakadai/order/orderInfo" method="post">
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
                <td>页尺寸</td>
                <td><input name="pageSize" type="text" value="100"/></td>
            </tr>

            <tr>
                <td>页索引</td>
                <td><input name="pageIndex" type="text" value="1"/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>
