import React from 'react';
import Title from './title';

const Page2 = ({title, description}) => {
  return (
    <div className="col-md-9">
      <Title className="title-style" title={title.substring(0,14)}/>
      <Title className="title-style" title={title.substring(15,title.lenth)}/>
      <p className="spanDescription">
        {description}
      </p>
    </div>
  );
}

export default Page2;
