<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/common/contacts" method="post">
    <table>
        <tr>
            <td>联系人1</td>
            <td><input name="userId" type="text"/></td>
        </tr>
        <tr>
            <td>联系人姓名1</td>
            <td><input name="realName" type="text"/></td>
        </tr>

        <tr>
            <td>手机号1</td>
            <td><input name="identityNo" type="text"/>
            </td>
        </tr>

        <tr>
            <td>联系人2</td>
            <td><input name="userId" type="text"/></td>
        </tr>
        <tr>
            <td>联系人姓名2</td>
            <td><input name="realName" type="text"/></td>
        </tr>

        <tr>
            <td>手机号2</td>
            <td><input name="identityNo" type="text"/>
            </td>
        </tr>
        <tr>
            <td><input type="submit"></td>
        </tr>
    </table>

</form>
</body>
</html>