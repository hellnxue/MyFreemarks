<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/common/verifyCreditQuestion" method="post">
    <form>
        <table>
            <tr>
                <td>用户标识</td>
                <td><input name="userId" type="text" value=""/></td>
            </tr>

            <tr>
                <td>答案串（问题编号1:答案编号,问题编号2:答案编号2...）</td>
                <td><input name="content" type="text" value=""/></td>
            </tr>

            <tr>
                <td>问题内容</td>
                <td><input name="answer" type="text" value=""/></td>
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