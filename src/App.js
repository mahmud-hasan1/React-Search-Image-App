import React, { Component } from "react";
import unsplash from "./api/unsplash";

import ImageList from "./components/ImageList/ImageList";
import Navigation from "./components/Navigation/Navigation";
import SearchBar from "./components/SearchBar/SearchBar";


import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";


class App extends Component {
  state = {
    images: [],
    startLoading: false,
    error: undefined,
    isAuthenticated: false
  };

  onSearchSubmit = async (picValue) => {
    this.setState({error: undefined, startLoading: true})
    //! Success.............
    try {
      const response = await unsplash.get("/search/photos", {
        params: { query: picValue }
      });      
      this.setState({ images: response.data.results, startLoading: false });

    } catch (ex) {
      //! Failed such as newtwork or server problems
      this.setState({ error: { message: ex.toString() }, startLoading: false });
    }
  };

  handleLogout = () => {
    this.setState({
      isAuthenticated: false
    });
  };
  handleLogin = () => {
    this.setState({
      isAuthenticated: true
    });
  };

  errorHandler=()=>{
    this.setState({error: undefined})
  }

  render() {
    return (
      <div>
        <header className="main_header">
          <Navigation
            onLogout={this.handleLogout}
            onLogin={this.handleLogin}
            isAuthenticated={this.state.isAuthenticated}
          />
        </header>
        <div className="h51" />

        <h1 className="title app_title">React Search Image App</h1>

        <SearchBar onSubmit={this.onSearchSubmit} />

        { this.state.startLoading && <Loader/>}
        { this.state.error && (
          <ErrorMessage 
            error={this.state.error}
            onErrorHandler={this.errorHandler}
          />
        )}

        <ImageList 
          startLoading={this.state.startLoading}
          images={this.state.images}
         />

      </div>
    );
  }
}

export default App;
