<%--
  Created by IntelliJ IDEA.
  User: caoc
  Date: 2016/9/22
  Time: 11:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
${json}
<form action="/kakadai/order/submitOrder" method="post">
    <form>
        <table>

            <tr>
                <td>身份证号码</td>
                <td><input name="userId" type="text" value="${userSession.userId}"/></td>
            </tr>

            <tr>
                <td>身份证号码</td>
                <td><input name="identityNo" type="text" value="${userSession.idCard}"/></td>
            </tr>

            <tr>
                <td>代还信用卡卡号</td>
                <td><input name="creditCardNo" type="text" value="622166******8743"/></td>
                credit
            </tr>

            <tr>
                <td>信用卡卡号</td>
                <td><input name="md5CreditNo" type="text" value="c334d71362edda980b6883072d8750d4"/></td>
                credit
            </tr>


            <tr>
                <td>代还金额</td>
                <td><input name="loanAmt" type="text" value="1000"/></td>
            </tr>

            <tr>
                <td>开卡行银行代号（如：zhaohang）</td>
                <td><input name="bankKey" type="text" value="${userSession.cardBank}"/></td>
            </tr>
            <tr>
                <td>还款期限</td>
                <td><input name="repaymentPeriod" type="text" value="12"/></td>
            </tr>
            <tr>
                <td>预约放款日（年-月-日）</td>
                <td><input name="makeLoanDay" type="text" value="2016-10-22"/></td>
            </tr>
            <tr>
                <td>还款借记卡</td>
                <td><input name="depositsCardNo" type="text" value="${userSession.cardNo}"/></td>
            </tr>
            <tr>
                <td>md5还款借记卡</td>
                <td><input name="md5CardNo" type="text" value="${userSession.md5CardNo}"/></td>
            </tr>
            <tr>
                <td>用戶签字图片64位编码</td>
                <td><input name="userSignature" type="text" value="33fafafafafafafaf"/></td>
            </tr>
            <tr>
                <td><input type="submit"></td>
            </tr>
        </table>
    </form>
</form>

</body>
</html>
