import React, { useEffect }  from 'react';
import { connect } from 'react-redux';
import { fetchBody } from '../redux';
import Title from './title';
import Loading from './loading';
import Error  from './error';
import Component from './Pagination/component';

const Home = ({ body, fetchBody }) => {
  
  useEffect(() => {
    fetchBody();
   }, []);

  return body.loading ? (
    <Loading/>
  ) : body.error ? (
    <Error error={ body.error }/> 
  ) : (
    <div className="container cont-marg">
      <div class="row testimon">
          <div class="title-style">  
            <Title title={body.body.title}/>
          </div>
          <div class="col-md-10 home">
            { body.body &&
              body.body.reviews &&
              <Component data={body.body.reviews} itemsPerPage={1} />
            }
          </div>
      </div>
    </div>
  );
}

const mapProps = state => {
  return {
    body: state.body
  };
}

const mapDispatch= dispatch => {
  return {
    fetchBody: () => dispatch(fetchBody())
  };
}

export default 
connect(
  mapProps, 
  mapDispatch)
(Home);