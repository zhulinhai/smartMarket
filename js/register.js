/**
 * Created by zhulh on 2017/1/4.
 */
var Register = React.createClass({
    loadPhoneCodeFromServer: function() {
        $.ajax(function(){

        });
    },
    render: function(){
        return(
            <div>
                <div className="contentFrame">
                    <div className="inputFrame"><input className="phoneNum" placeholder="手机号码" /></div>
                    <div className="line"></div>
                    <div className="inputFrame"><input className="phoneCode" placeholder="验证码" /><button id="btnSend">发送验证码</button></div>
                </div>
                <p>我已阅读并同意<a href="">智能商城协议</a></p>
                <div className="btnFrame">
                    <button id="btnLogin">登录</button>
                    <button id="btnBack">返回</button>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Register />,
    document.getElementById('register')
);