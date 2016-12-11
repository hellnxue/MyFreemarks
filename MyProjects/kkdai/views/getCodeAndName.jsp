<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/getCodeAndName" method="post">
    <form>
        <table>
         ${json}
            <tr>
                <td>类型</td>
                <td><input name="codeType" type="text" value=""/></td>
            </tr>

            <tr>
                <td>类型Id</td>
                <td><input name="codeTypeId" type="text" value="11"/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>