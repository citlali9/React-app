import React from 'react';
import { IoIosArrowRoundForward, IoIosArrowRoundBack} from 'react-icons/io';
import Page1 from '../page1';
import usePagination from './pagination';
import '../home.css';

const Component = ({ data, itemsPerPage, startFrom }) => {
  const { slicedData, prevPage, nextPage } = usePagination(
    { itemsPerPage, data, startFrom });

  return (
    <>
      { slicedData.map(rev => 
        <Page1 name={rev.name} position={rev.position} comment={rev.comment}/>
      )}
      <div className="position">
        <nav className="navbar-expand-lg position ">
        <ul className="navbar-nav ml-auto">
        <li>
          <a href="/#"  onClick={prevPage}>
            <IoIosArrowRoundBack className="arrow-link"/>
          </a>
        </li>
          <li>
            <a href="/#"  onClick={nextPage}>
              <IoIosArrowRoundForward className="arrow-link"/>
            </a>
          </li>    
        </ul>
        </nav>
      </div>
    </>
  );
}

export default Component;
