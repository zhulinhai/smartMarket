/**
 * Created by zhulinhai on 16/12/29.
 */

var typeList = [
    {id:'101',name:'首页'},
    {id:'102',name:'服饰箱包'},
    {id:'103',name:'食品饮料'},
    {id:'104',name:'家居生活'},
    {id:'105',name:'母婴玩具'},
    {id:'106',name:'数码电器'},
    {id:'107',name:'家纺家具'},
    {id:'108',name:'水果生鲜'},
    {id:'109',name:'美妆护肤'}];

var itemList = [
    {id:'1001',name:'显示秒杀',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/spike.png@750w_1l_50Q.webp'},
    {id:'1002',name:'超级大牌',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/super_spike.png@750w_1l_50Q.webp'},
    {id:'1003',name:'品质水果',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/subject_502.png@750w_1l_50Q.webp'},
    {id:'1004',name:'爱逛街',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/subject_902.png@750w_1l_50Q.webp'},
    {id:'1005',name:'电器城',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/subject_973.png@750w_1l_50Q.webp'},
    {id:'1006',name:'9块9特卖',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/special99.png@750w_1l_50Q.webp'},
    {id:'1007',name:'家居优品',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/furniture.png@750w_1l_50Q.webp'},
    {id:'1008',name:'美食汇',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/food.png@750w_1l_50Q.webp'},
    {id:'1009',name:'抽奖',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/lottery.png@750w_1l_50Q.webp'},
    {id:'1010',name:'免费试用',image:'http://pinduoduoimg.yangkeduo.com/entrance/v2/3x/free_trial.png@750w_1l_50Q.webp'}
];

var SwiperItem = React.createClass({
    render: function() {
        var style = this.props.isChecked?{
            borderBottom: '0.1rem solid #CE4031'
        }:{};
        return (
            <div className="swiper-slide" ><a style={style}>{this.props.data.name}</a></div>
        );
    }
});

var Header = React.createClass({
    getInitialState: function(){
        return {swiper:null, checkedIndex: 0}
    },
    componentDidMount: function() {
        this.state.swiper = new Swiper('.swiper-container', {
            threshold : 20,
            loop: false,
            slidesPerView: 5,
            slidesPerGroup: 1,
            slideToClickedSlide:true,
            followFinger: false,
            onTap: function(swiper) {
                this.setState({checkedIndex:swiper.clickedIndex});
            }.bind(this)
        });

    },
    render: function(){
        var itemNodes = this.props.data.map(function(item, index){
            return ( <SwiperItem key={item.id} isChecked={this.state.checkedIndex===index} data={item} />);
        }.bind(this));

        return (
            <div id="header">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {itemNodes}
                    </div>
                </div>
            </div>
        );
    }
});

var Content = React.createClass({
    componentDidMount: function() {

    },
    render: function() {
        var nodeList = this.props.data.map(function(item, index) {
            return (
                <div >
                    <p>{item.name}</p>
                </div>
            )
        });

        return (
            <div id="content" >
                {nodeList}
            </div>
        );
    }
});

var Page1 = React.createClass({
    getInitialState: function() {
        return {
            contentList: null
        }
    },
    componentWillMount: function() {
        var scaleRate = 20 * $(window).width()/320;
        var contentHeight = $(window).height() - 4.2 * scaleRate -2;
        $('#content').height(contentHeight).css({'marginTop': (scaleRate * 2 + 1) +'px'});
        this.state.contentList = itemList;
    },
    render: function(){
        return(
            <div>
                <Header data={typeList} />
                <Content data={this.state.contentList} />
            </div>
        );
    }
});

ReactDOM.render(
    <Page1 />,
    document.getElementById('page-1')
);