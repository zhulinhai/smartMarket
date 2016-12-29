/**
 * Created by zhulinhai on 16/12/29.
 */
var typeList = [{id:'101',name:'首页'},
    {id:'102',name:'服饰箱包'},
    {id:'103',name:'食品饮料'},
    {id:'104',name:'家居生活'},
    {id:'105',name:'母婴玩具'},
    {id:'106',name:'数码电器'},
    {id:'107',name:'家纺家具'},
    {id:'108',name:'水果生鲜'},
    {id:'109',name:'美妆护肤'}];

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
            centeredSlides: true,
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
    getInitialState: function() {
        return {

        }
    },
    componentDidMount: function() {

    },
    render: function() {
        return (
            <div id="content">
            </div>
        );
    }
});

var Page1 = React.createClass({
    render: function(){
        return(
            <div>
                <Header data={typeList} />
                <Content />
            </div>
        );
    }
});

ReactDOM.render(
    <Page1 />,
    document.getElementById('page-1')
);