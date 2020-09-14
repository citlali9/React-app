import React from "react";
import { useEffect } from 'react';
import { fetchData } from '../redux';
import { connect } from 'react-redux';
import bellotero from '../img/bellotero.png';
import Head from './head';
import Loading from './loading';
import Error  from './error';
import './home.css';

const NavBar = ({ data = data.data, fetchData }) => {

  useEffect(() => {
    fetchData()
   }, []);

   return data.loading ? (
    <Loading/>
   ) : data.error ? (
    <Error error={ data.error }/> 
   ) : (
      <nav class="navbar navbar-expand-lg navbar-light home">
      <a className="nav-header avbar-brand" href="#"><img src={bellotero} className="img-fluid"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse margin-nav" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            {
              data.data.map( header => 
              <Head text={header.text} route={header.route}/>
              )
            }
          </ul>
        </div>
      </nav>
    );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  };
}

export default 
connect(
  mapStateToProps, 
  mapDispatchToProps)
(NavBar);