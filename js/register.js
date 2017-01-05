/**
 * Created by zhulh on 2017/1/4.
 */
var Register = React.createClass({
    /*获取验证码*/
    loadPhoneCodeFromServer: function() {
        var url = host + '/audiences/6';
        $.ajax({
            type: "get",
            url: url,
            success: function(msg){
                if (msg.success) {
                    $('#moodsCount').html(msg.data.audiences);
                }
            },
            error:function(error){
                console.log(error.responseJSON);
                alert(error.responseJSON.message);
            }
        });
    },
    /*登录*/
    loginIn: function() {
        console.log('login in');
    },
    /*返回*/
    back: function() {
        document.getElementById('register').style.display = 'none';
    },
    render: function(){
        return(
            <div>
                <div className="contentFrame">
                    <div className="inputFrame"><input className="phoneNum" placeholder="手机号码" /></div>
                    <div className="line"></div>
                    <div className="inputFrame"><input className="phoneCode" placeholder="验证码" /><button id="btnSend" onClick={this.loadPhoneCodeFromServer}>发送验证码</button></div>
                </div>
                <p>我已阅读并同意<a href="">智能商城协议</a></p>
                <div className="btnFrame">
                    <button id="btnLogin" onClick={this.loginIn}>登录</button>
                    <button id="btnBack" onClick={this.back}>返回</button>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Register />,
    document.getElementById('register')
);