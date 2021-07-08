import React, { Component } from 'react'

import data from './index.data'

import { RenderData } from '@ysyp/ui'

import './index.scss'

export default class Index extends Component {
  render () {
    return (
      <>
      {data.map(v => <RenderData data={v} />)}
      </>
    )
  }
}
