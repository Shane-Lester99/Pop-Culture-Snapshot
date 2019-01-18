import React from 'react';
import ReactDom from 'react-dom';
//const  { axios } = require('../../server/index.js');
//const axios = require('axios');
//import axios from 'axios';
/*
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
*/
class Campuses extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
       
    }

    handleClick() {
        var url = '/api/campuses';
         fetch(url).then(function(response) {
            response.text().then(function(text) {
            alert(text);
         }).catch(err => alert(err));
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}> Campuses Button </button>
               
            </div>
        );
    }
}

module.exports = Campuses;
