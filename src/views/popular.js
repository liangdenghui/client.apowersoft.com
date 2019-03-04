import React, { Component } from 'react'
import 'assets/css/popular.css'
import SearchBox from 'components/search'
import SoftList from 'components/softList';
export default class app extends Component {

  constructor(props) {
    super(props)
    this.state = {
        options:[
            { id: '1', label: '提升效率', value: '提升效率' },
            { id: '2', label: '投屏', value: '投屏' },
            { id: '3', label: '视频剪辑', value: '视频剪辑' },
            { id: '4', label: '录制音频&视频', value: '录制音频&视频' },
            { id: '5', label: '处理PDF文档', value: '处理PDF文档' },
            { id: '6', label: '数据恢复', value: '数据恢复' },
            { id: '7', label: '实现愿望', value: '实现愿望' },
            { id: '8', label: '更多', value: '更多' }
        ]
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="popular">
          <SearchBox options = {this.state.options} show></SearchBox>
          <SoftList></SoftList>
      </div>
    )
  }
}
