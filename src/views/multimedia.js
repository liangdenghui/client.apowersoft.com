import React, { Component } from 'react'
import {FormattedMessage} from 'react-intl';
export default class app extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div className="page">
        <FormattedMessage 
        　　id="intl.failed_install"
        　　defaultMessage={'en'}
        />
      </div>
    )
  }
}
