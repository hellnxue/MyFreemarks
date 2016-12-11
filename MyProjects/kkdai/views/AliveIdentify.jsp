<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/assist/aliveIdentify" method="post">
    <form>
        <table>
           <tr>
                <td>用户id</td>
                <td><input name="channelId" type="text" value=""/></td>
            </tr>
            <tr>
                <td>关系</td>
                <td><input name="cid" type="text" value=""/></td>
            </tr>
             <tr>
                <td>姓名</td>
                <td><input name="name" type="text" value=""/></td>
            </tr>
             <tr>
                <td>手机号</td>
                <td><input name="facePic" type="text" value=""/></td>
            </tr>
             <tr>
                <td>关系</td>
                <td><input name="transCode" type="text" value=""/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>