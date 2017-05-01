<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/common/getPhoto" method="post">
    <form>
        <table>
         ${json}
            <tr>
                <td>身份证正面</td>
                <td><input name="identityFrontPicture" type="text" value="210102198403034410"/></td>
            </tr>

            <tr>
                <td>身份证反面</td>
                <td><input name="identityBackPicture" type="text" value="1111000261"/></td>
            </tr>

            <tr>
                <td>手持身份证</td>
                <td><input name="identityHandPicture" type="text" value="800000"/></td>
            </tr>

            <tr>
                <td>用户ID</td>
                <td><input name="userId" type="text" value="U3B09Ob9S6R08B1UAPfB97sBB"/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>