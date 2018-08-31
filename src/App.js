import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import scraper from './scraper';

class App extends Component {
  render() {
    return (
      <div class="container">

        <div class="jumbotron" style="background-color: #20315A ; color: white;">
          <h1 class="text-center">
            <strong>
              <i class="fa fa-newspaper-o"></i> New York Times Search</strong>
          </h1>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <strong>
                  <i class="fa fa-list-alt"></i> Search Parameters</strong>
              </div>
              <div class="card-body">

                <form role="form">

                  <input class="form-group">
                    <label for="search">Search Term:</label>
                    <input type="text" class="form-control" id="search-term">
                    </input>
                  </input>

                  <div class="form-group">
                    <label for="pwd">Number of Records to Retrieve:</label>
                    <select id="article-count" class="custom-select" aria-labelledby="dropdownMenuButton">
                      <option selected value="1">1</option>
                      <option value="5" selected>5</option>
                      <option value="10">10</option>
                    </select>
                  </div>

                  <input class="form-group">
                    <label for="start-year">Start Year (Optional):</label>
                    <input type="text" class="form-control" id="start-year">
                    </input>
                  </input>

                  <input class="form-group">
                    <label for="end-year">End Year (Optional):</label>
                    <input type="text" class="form-control" id="end-year">
                    </input>
                  </input>

                  <button type="submit" class="btn btn-default" id="run-search">
                    <i class="fa fa-search"></i> Search</button>
                  <button class="btn btn-default" id="clear-all">
                    <i class="fa fa-trash"></i> Clear Results</button>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <strong>
                    <i class="fa fa-table"></i> Top Articles</strong>
                </div>
                <div class="card-body" id="article-section">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <h5 class="text-center">
                  <small>Made with lots and lots of
              <i class="fa fa-heart"></i>
                  </small>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
