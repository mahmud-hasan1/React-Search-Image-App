import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  state = {
    picValue: ""
  };
  

  onSubmit(e){    
    e.preventDefault();
    this.props.onSubmit(this.state.picValue)
  };

  onInputChange = e => {
    this.setState({
      picValue : e.target.value
    })
  };


  render() {       
    return (
      <div className="search-picture">
        <form onSubmit={this.onSubmit.bind(this)} className="search-picture_form" action="">
          <input
            onChange={this.onInputChange}
            type="text"
            className="input"
            value={this.state.picValue}
            placeholder="Images Search...."
          />
          <button type="submit" className="search-button">
            search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
