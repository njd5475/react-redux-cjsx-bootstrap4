React = require 'react'
moment = require 'moment'

class MonthView extends React.Component
  render: ->
    m = moment('2016/05/20').format('MMMM DD, YYYY')

    <div className="row">
      <div className="col-xs-11 col-xs-offset-1">
        <span>built on</span>
        <h2>{m}</h2>
      </div>
    </div>

module.exports = MonthView
