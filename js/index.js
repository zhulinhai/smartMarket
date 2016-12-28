/**
 * Created by zhulinhai on 16/12/28.
 */
var listData = [
    {id:'0',name:'首页',percent:0, hoverPercent:11, isSelected: true},
    {id:'1',name:'上新',percent:22.5, hoverPercent:33.5,isSelected: false},
    {id:'2',name:'海淘',percent:44.5, hoverPercent:55.5,isSelected: false},
    {id:'3',name:'搜索',percent:66.9, hoverPercent:77.9,isSelected: false},
    {id:'4',name:'个人中心',percent:89, hoverPercent:100,isSelected: false}
];

var MenuItem = React.createClass({
    handleClick: function(e) {
        var newData = this.props.data;
        newData.isSelected = true;
        this.props.changeItem(newData);
    },
    render: function () {
        var color = '#8C8C8C';
        var iconPercent = this.props.data.percent;
        if (this.props.data.isSelected) {
            color = '#CE4031';
            iconPercent = this.props.data.hoverPercent;
        }
        return (
           <div className="item" style={{color:color}} key={this.props.data.id} onClick={this.handleClick}>
               <div className="icon" style={{backgroundPositionX: iconPercent+ '%'}}></div>
               <p>{this.props.data.name}</p>
           </div>
        )
    }
});

var MenuList = React.createClass({
    getInitialState: function() {
        return {data:[]};
    },
    changeItem: function(data) {
        var newData = this.state.data;
        this.state.data.map(function(item, index){
            if (item.id == data.id) {
                newData[index] = data;
            } else {
                newData[index].isSelected = false;
            }
        });
        this.setState({data:newData});
    },
    componentWillMount: function() {
        this.setState({data:this.props.data});
    },
    render: function(){
        var menuNodes = this.state.data.map(function(node, index){
            return (
                <MenuItem key={index} data={node} changeItem={this.changeItem} />
            );
        }.bind(this));

        return (
            <div className="menuList">{menuNodes}</div>
        );
    }
});

ReactDOM.render(
    <MenuList data={listData} />,
    document.getElementById('footer')
);