/**
 * Created by zhulinhai on 16/12/28.
 */
var listData = [
    {id:'0',name:'首页',percent:0},
    {id:'1',name:'上新',percent:20},
    {id:'2',name:'海淘',percent:40},
    {id:'3',name:'搜索',percent:60},
    {id:'4',name:'个人中心',percent:80}
];

var MenuItem = React.createClass({
    render: function () {
       return (
           <div className="item" key={this.props.data.id}>
               <div className="icon"></div>
               <p>{this.props.data.name}</p>
           </div>
       )
    }
});

var MenuList = React.createClass({
    getInitialState: function() {
        return {selectedIndex: 0};
    },
    handleClick: function(e) {
        console.log("hello");
    },
    componentDidMount: function() {
        console.log('footer加载完成了');
    },
    render: function(){
        var menuNodes = this.props.data.map(function(node, index){
            return (
                <MenuItem key={index} data={node} />
            );
        });

        return (
            <div className="menuList">{menuNodes}</div>
        );
    }
});

ReactDOM.render(
    <MenuList data={listData} />,
    document.getElementById('footer')
);