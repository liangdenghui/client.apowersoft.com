import React,{ Component } from 'react'
import { Link } from 'react-router-dom';
import 'assets/css/leftSideBar.scss';
export class LeftSideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleList:[
                {name: 'popular',router:''},
                {name: 'crossManage',router:'crossManage'},
                {name: 'digitalDocument',router:'digitalDocument'},
                {name: 'multimedia',router:'multimedia'}
            ],
            _active:0
            
        }
        this.active = 0
         // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        // console.log(this.state.titleList)
        
    }
    handleClick(index) {
        this.setState({
            _active:index
        });
    }
    renderList(){
        return(
            <ul className="menu">
                {this.state.titleList.map((value,index) =>
                    <li className={`${index === this.state._active?'active' : null } ${value.name}`}  key={value.name.toString()} onClick={e=>this.handleClick(index,e)}>
                    <Link to={"/" + value.router}><i></i>{value.name}</Link>
                    </li>
                )}
            </ul>
        )
    }
    render(){
        return (
            <div className="nav">
                <div className="logo">Apowersoft Unlimited</div>
                {this.renderList()}
            </div>
        )
    }
    
}