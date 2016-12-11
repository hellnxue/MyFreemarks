<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Index</title>
</head>
<body>
<form action="/kakadai/credit/getContractUrl" method="post">
    <form>
        <table>
         ${json}
            <tr>
                <td>用户id</td>
                <td><input name="userId" type="text" value=""/></td>
            </tr>
             <tr>
                <td>代还信用卡金额</td>
                <td><input name="applyAmount" type="text" value=""/></td>
            </tr>
             <tr>
                <td>还款期数</td>
                <td><input name="applyPeriods" type="text" value=""/></td>
            </tr>
             <tr>
                <td>MD5信用卡</td>
                <td><input name="md5CreditNo" type="text" value=""/></td>
            </tr>
             <tr>
                <td>行用卡卡行CODE</td>
                <td><input name="creditCardBankName" type="text" value=""/></td>
            </tr>
             <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>
</body>
</html>