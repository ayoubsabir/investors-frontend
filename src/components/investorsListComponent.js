import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

import {Link} from 'react-router-dom';


function detailFormatter(cell,row){
  return(
    <span>
       <Link to={`/project/${row.slug}`}>View</Link>
    </span>
  )

}

export default function InvestorsListComponent(props){
  const { project }= props;
  const columns = [
 {
  dataField: 'fullname',
  text: 'Created By'
}, {
  dataField: 'summary',
  text: 'Project',
},{
  dataField: 'field',
  text:'field',
},{
  dataField:'slug',
  text:'details',
  formatter: detailFormatter,
}
     ];
    return(
      <center><div>
          <h1>Projects list</h1>

          <BootstrapTable
          keyField='slug'
          data={ project }
          columns={ columns }
          />

          < br />
          <Link to='/createProject'>Create a project</Link>
          <br />
          <Link to='/dashboard'>back</Link>
      </div></center>
    );
}
