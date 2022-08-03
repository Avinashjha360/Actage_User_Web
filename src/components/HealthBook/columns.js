import React  from 'react';
import { Link } from "react-router-dom";
const HealthBookColumns = [
    {
        Header:"Test Name",
        accessor:'testName'
    },
    {
        Header:"Date",
        accessor:'testDate',
        Cell: row => (
          <> {row.row.original.testDate.split("T")[0]}</>
        )
    },
    {
        Header:"Time",
        accessor:'testTime',
        Cell: row => (
            <>{row.row.original.testDate.split("T")[1].split(".")[0]}</>
        )
    },
    {
        Header: "Reading",
        accessor:'testResult'
    },
    {
        Header:"Unit",
        accessor:'measurementUnit'
    },
    {
        Header: "View",
        accessor:'image',   
        Cell: row => (
            <div>
            <Link to={row.row.original.testName} state={{ from: row.row.original.medicalTestId }} ><img className="img-responsive" src="./images/Eye.png" alt="eye-logo"/></Link>
            </div>
        )
    }
]
const ViewMorecolumns = [
 
    {
        Header:"Date",
        accessor:'testDate',
        Cell: row => (
            <>{row.row.original.testDate.split("T")[0]}</>
        )
    },
    {
        Header:"Time",
        accessor:'testTime',
        Cell: row => (
         <> {row.row.original.testDate.split("T")[1].split(".")[0]}</>
        )
    },
    {
        Header: "Reading",
        accessor:'testResult'
    },
    {
        Header:"Unit",
        accessor:'measurementUnit'
    },
]
export { HealthBookColumns, ViewMorecolumns} 