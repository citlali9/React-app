import React from 'react';

const Page1 = ({ name, position, comment }) => {
  return (
    <div className="row">
      <div className="col-md-4 pageContent">
        <h3 className="sizeName"><strong>{ name}</strong></h3>
        <p className="names sizeName">{position}</p>
      </div>
      <div className="col-md-8 pageContent">
        <p >
          <strong>{comment}</strong>
        </p>
      </div>
    </div>
  );
}

export default Page1;
