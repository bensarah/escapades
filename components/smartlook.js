import React, { Component } from 'react'
import smartlookClient from 'smartlook-client'

class Smartlook extends Component {
  handleTag () {
    smartlookClient.tag('tagName', 'tagValue')
  }
  handleDisable () {
    smartlookClient.disable()
  }
  render () {
    return null
  }
  componentDidMount () {
    smartlookClient.init('09530f27a8e0b8bebdf57c13f7c27b74edb02ae4')
  }
}

export default Smartlook
