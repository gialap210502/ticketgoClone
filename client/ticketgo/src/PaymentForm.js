import React, { Component } from "react";

class PaymentForm extends Component {
    componentDidMount() {
        this.initializePaymentForm();
    }

    initializePaymentForm() {
        // Đặt các giá trị tham số vào state hoặc props
        const domain = "https://sandbox.megapay.vn"; // Đổi thành domain của bạn
        const fileJS = "https://sandbox.megapay.vn/pg_was/js/payment/layer/paymentClient.js";
        const fileCSS = "https://sandbox.megapay.vn/pg_was/css/payment/layer/paymentClient.css10";

        // Thêm file JS và CSS vào phần head của trang
        const jsScript = document.createElement("script");
        jsScript.src = fileJS;
        document.head.appendChild(jsScript);

        const cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = fileCSS;
        document.head.appendChild(cssLink);

        // Gọi hàm openPayment để mở trang thanh toán của Megapay
        window.openPayment(1, domain);
    }

    render() {
        return (
            <form id="megapayForm" name="megapayForm" method="POST">
                {/* Thêm các trường input cần thiết vào đây */}
                <input type="hidden" name="invoiceNo" value="" />
                <input type="hidden" name="amount" value="" />
                <input type="hidden" name="currency" value="VND" />
                <input type="hidden" name="goodsNm" value="" />
                <input type="hidden" name="fee" value="" />

                {/* <!-- customer info --> */}
                <input type="hidden" name="buyerFirstNm" value="" />
                <input type="hidden" name="buyerLastNm" value="" />
                <input type="hidden" name="buyerPhone" value="" />
                <input type="hidden" name="buyerEmail" value="" />
                <input type="hidden" name="buyerAddr" value="hanoi" />
                <input type="hidden" name="buyerCity" value="hanoi" />
                <input type="hidden" name="buyerState" value="hanoi" />
                <input type="hidden" name="buyerPostCd" value="12950" />
                <input type="hidden" name="buyerCountry" value="" />
                <input type="hidden" name="receiverLastNm" value="" />
                <input type="hidden" name="receiverFirstNm" value="" />
                <input type="hidden" name="receiverPhone" value="" />
                <input type="hidden" name="receiverState" value="" />
                <input type="hidden" name="receiverPostCd" value="12950" />
                <input type="hidden" name="receiverCountry" value="" />
                {/* <!-- ----------------------------- Main Value ---------------------------- --> */}
                {/* <!-- Call Back URL --> */}
                <input type="hidden" name="callBackUrl" value="https://demo.megapay.vn/callback/transactionHandle" />
                {/* <!-- Notify URL --> */}
                <input type="hidden" name="notiUrl" value="https://demo.megapay.vn/ipn/transactionHandle" />
                {/* <!-- Merchant ID --> */}
                <input type="hidden" name="merId" value="" />
                {/* Encode Key  */}
                <input type="hidden" name="reqDomain" value="http://localhost:8080" />
                <input type="hidden" name="userId" value="0" />
                <input type="hidden" name="userLanguage" value="VN" />
                <input type="hidden" name="merchantToken" value="" />
                <input type="hidden" name="payToken" value="" />
                <input type="hidden" name="timeStamp" value="" />
                <input type="hidden" name="merTrxId" />
                <input type="hidden" name="windowType" value="" />
                <input type="hidden" name="windowColor" value="" />
                <input type="hidden" name="userFee" value="" />
                <input type="hidden" name="vaCondition" value="03" />
                <input type="hidden" name="payType" value="" />
                <input type="hidden" name="payOption" value="" />
                <input type="hidden" name="vaStartDt" value="20230816120429" />
                <input type="hidden" name="vaEndDt" value="20240216235959" />
                <input type="hidden" name="bankCode" value="" />
                <input type="hidden" name="description" value="" />
                <input type="text" name="description" value="Payment Description" />
            </form>
        );
    }
}

export default PaymentForm;
