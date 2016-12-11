<%--
  Created by IntelliJ IDEA.
  User: caoc
  Date: 2016/9/21
  Time: 13:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<form action="/kakadai/common/vertifyCode" method="post">
    <table>
        ${json}
        <tr>
            <td>业务类型（1、征信登录 2、查询码提交 3、身份信息 4、注册征信账号 5、银联认证 6、提前清贷申请）</td>
            <td><input name="vcodeKind" type="text"/></td>
        </tr>
        <tr>
            <td><input type="submit"></td>
        </tr>
    </table>
</form>
</body>
</html>
