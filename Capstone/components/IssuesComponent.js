import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { deleteIssue } from "../actions/Productactions";
import IssuesApi from "../data/IssuesApi";


const IssuesComponent= () => {
const issues = useSelector((state) => state.allIssues.issues)
const dispatch = useDispatch();

/*const verifydelete=(id)=>{
 dispatch(deleteIssue(id));
}*/
console.log("Issues");
console.log(issues);

const deleteissue=(id)=>{
  console.log("inside Id value",id);
 dispatch(deleteIssue(id));
}

const renderlist=issues.map((issue) => {
    const {title,isd,severity,Status,cdate,rdate,count,id}=issue;
    return(
        <div key={id}>
          <Card style={{ width: '18rem' },{backgroundColor:"rgb(203, 231, 241)"}}>
      <Card.Title as="h5"><b>{title}</b></Card.Title>
      <Card.Body>
        <Card.Title>Issue ID: {id}</Card.Title>
        <Card.Text>
        <br></br>
    Issue Description:{isd}<br></br>
    Severity :{severity} <br></br>
     Status :{Status}   <br></br>
     Created Date :{cdate}<br></br>
     Resolved Date :{rdate}<br></br><br></br>
     <button onClick={deleteissue(id)}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       </Card.Text>
      </Card.Body>
    </Card>
     <br></br>
     
     </div>
    );
});


return(
    <div>
        {renderlist}
    </div>
)
}

export default IssuesComponent;