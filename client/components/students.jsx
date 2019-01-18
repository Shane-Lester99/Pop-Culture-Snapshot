import React from 'react';
import ReactDom from 'react-dom';

class Students extends React.Component {
    constructor(props) {
        super(props);
       
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var url = '/api/students';
         fetch(url).then(function(response) {
            response.text().then(function(text) {
            alert(text);
         }).catch(err => alert(err));
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> Students Button </button>

            </div>
        );
    }
}

module.exports = Students;
