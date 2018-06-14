import React, { Component } from 'react';
import { connect } from "react-redux";
import {searchActions}  from '../_actions/searchActions';
class searchPage extends Component {

  constructor(props) {
  
    super(props);
    const { dispatch } = this.props;  
    this.state = {
      words:"",
      lang:"",
      limit:""
      
    };
    debugger;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  //actualiza los estados
   handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });

  }
  
  handleSubmit(e) {
    const {dispatch} = this.props;
    const {words, limit, lang } = this.state;
    const key = "HmJZxyJsaPbczJWwV1Ve2p2oyKkwkkKS";
    debugger;
   dispatch(searchActions.search({words, limit, lang}));
  }

  render() {
    const {search} = this.props;
    {debugger;}
    const {words, limit, lang } = this.state
    return (
      
      <div className="Search">
        <header className="header">
        <h1 className="title">Find-Your-gif</h1>
        </header>
        <div id="search-inputs"> 
            <input type ="text" id="search-input" name="words" onChange={this.handleChange} 
            value={words} placeholder="Busqueda"/>
            <input type ="number" id="search-input" name="limit" onChange={this.handleChange} 
            value={limit} placeholder="número de gifs"/>
            <input type ="text" id="search-input" name="lang" onChange={this.handleChange} 
            value={lang} placeholder="idioma ej. es"/>
          </div>
          <button id="search-button"  onClick={this.handleSubmit}> Buscar </button>
          <div id="gifs-grid">

          {search.gifs != undefined && (
            <div id="gifs">

              {search.gifs.data.map(gif => (

              <img id="gif" src={gif.images.fixed_height.url}/>

                ))}     
            </div>
           
          )}

          </div>
       
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { search } = state;
  return {
      search
  };
}

const connectedsearchPage = connect(mapStateToProps)(searchPage);
export { connectedsearchPage as searchPage }; 


