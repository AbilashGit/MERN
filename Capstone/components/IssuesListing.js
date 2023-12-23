import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {setIssues} from "../actions/Productactions";
import IssuesApi  from "../data/IssuesApi";
import IssuesComponent from './IssuesComponent';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const IssuesListing =() =>{
    const issues = useSelector((state) => state.allIssues.issues)
    const dispatch = useDispatch();

    const fetchIssues = async () => {
        const response=await IssuesApi.getAllIssues();
    dispatch(setIssues(response.data));
    };
// eslint-disable-next-line
    useEffect(()=>{
      fetchIssues();
    },[]);
    return(
        <div>
      <IssuesComponent key=""/>
   
     </div>
    )
}

export default IssuesListing;