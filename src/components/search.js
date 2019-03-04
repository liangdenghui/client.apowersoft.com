import React, {Component }from 'react';
import styles from 'assets/css/search.scss'
class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state={
            isShow:false,
            showValue:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    callback=(id)=>{
        console.log('onblur')
    }
    handleClick() {
        let isShow = this.refs.menulist.props.isShow;
        this.setState({
            isShow: isShow ? false : true
        })
    }
    handleMouseLeave() {
        this.setState({
            isShow: false
        })
    }
    handleOptionClick(id){
        let selectedItem = this.props.options.filter(item=>{return item.id===id})[0];
        this.setState({
            showValue:selectedItem.label,
            isShow:false
        })
    }
    handleInputChange(e){
        let inputValue = e.target.value;
        this.setState({
            showValue:inputValue
        })
    }
    
    render() {
        return (
            <div className='search' onMouseLeave={this.handleMouseLeave}>
                <div className='searchBox' onClick={this.handleClick} >
                    <SearchInput showValue={this.state.showValue} handleInputChange={this.handleInputChange} callback = {this.callback}/>
                    <span className={styles.searchIcon}></span>
                </div>
                <DropdownMenu ref="menulist" 
                    options={this.props.options} 
                    showMenu={false} 
                    searchLabel={this.state.showValue}
                    isShow={this.state.isShow} 
                    handleOptionClick={this.handleOptionClick}/>
            </div>
        )
    }
}

class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    hideList =()=>{
        this.props.callback();
    }
    render() {
        return (
            <input type="text" value={this.props.showValue}  onChange={this.props.handleInputChange} onBlur = {this.hideList} className='searchInput' placeholder="I hope the software will help me."/>
        )
    }
}

class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu:props.isShow
        };
        
    }
    componentWillReceiveProps(props){
        this.setState({
            showMenu:props.isShow
        })
    }
    render(){
        return(
             <MenuList options={this.props.options} searchLabel={this.props.searchLabel} showMenu={this.state.showMenu} optionClick={this.props.handleOptionClick}/>
        )
    }
        
}

function MenuList(props){
    let searchLabel = props.searchLabel.toLowerCase();
    let options = props.options.filter((option)=>{return option.label.toLowerCase().indexOf(searchLabel)!==-1});
    
    const menuItem = options.map((item)=>
        <li className='menuItem' key={item.id} onClick={props.optionClick.bind(item,item.id)}>{item.label}</li>
    );
    return (
    <ul className={props.showMenu ? 'menuList' : 'hiddenMenuList'}>{menuItem}</ul>
    )
}


export default SearchBox;