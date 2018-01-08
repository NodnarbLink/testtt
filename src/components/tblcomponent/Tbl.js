import '../../assets/css/jquery.dataTables.css'
import React, { Component } from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class INStbl extends Component {
  componentDidMount() {
    console.log(this.el)
    this.$el = $(this.el)
    this.$el.DataTable(
      {
            data: this.props.data,
            columns: [
                { title: "Name" },
                { title: "Elo" },
                { title: "Wins" },
                { title: "Losses" },
                { title: "Kills" },
                { title: "Deaths" },
                { title: "Objectives" }
            ]
      }
    )
}
  componentWillUnmount() {
    this.$el.DataTable.destroy(true)
  }
  render(){
    return(
      <div className="container">
        <table className="display" width="100%" ref = {el => this.el = el }>
        </table>
      </div>
    );
  }
}

export default INStbl;
