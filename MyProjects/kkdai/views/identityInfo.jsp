<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<form action="/kakadai/common/identityInfo" method="post">
    ${returnJson}
    <table>
        <tr>
            <td>用戶标识</td>
            <td><input name="userId" type="text" value="${registerForm.userId}"/></td>
        </tr>
        <tr>
            <td>身份证号码</td>
            <td><input name="identityNo" type="text" value="${registerForm.identityNo}"/></td>
        </tr>
        <tr>
            <td>身份证地址</td>
            <td><input name="identityAddress" type="text"/></td>
        </tr>
        <tr>
            <td>身份证有效期</td>
            <td><input name="identityEffectiveDate" type="text"/></td>
        </tr>
        <tr>
            <td>手机号码</td>
            <td><input name="mobile" type="text"/></td>
        </tr>
        <tr>
            <td>收入</td>
            <td><input name="salary" type="text"/></td>
        </tr>
        <tr>
            <td>所在地</td>
            <td><input name="locality" type="text"/></td>
        </tr>
        <tr>
            <td>婚姻状况</td>
            <td><input name="marriage" type="text"/></td>
        </tr>
        <tr>
            <td>学历</td>
            <td><input name="education" type="text"/></td>
        </tr>
        <tr>
            <td>用户渠道类型</td>
            <td><input name="customerType" type="text" value="${registerForm.identityNo}"/></td>
        </tr>
        <tr>
            <td>身份证正面图片</td>
            <td><input name="identityFrontPicture" type="file"/></td>
        </tr>
        <tr>
            <td>身份证反面图片</td>
            <td><input name="identityBackPicture" type="file"/></td>
        </tr>
        <tr>
            <td>手持身份证图片</td>
            <td><input name="identityHandPicture" type="file"/></td>
        </tr>
        <tr>
            <td><input type="submit"></td>
        </tr>
    </table>
</form>
</body>
</html>
