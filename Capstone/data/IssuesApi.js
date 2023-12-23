import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default class IssuesApi {
	static getAllIssues= () => {
		return axios.get(" http://localhost:3001/issues")
        .catch((err)=>{
         console.log("Err  : ",err);
        });
	}

	static deleteIssues(id) {
		return axios.delete(" http://localhost:3001/issues/"+id)
				.then(res => res.data);
	}

	static saveIssues(issue) {
		issue.id = uuidv4();
		return axios.post(" http://localhost:3001/issues", issue)
				.then(res => res.data);
	}
}
