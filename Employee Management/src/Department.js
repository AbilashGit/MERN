import React,{Component} from 'react';
import { variables } from './Variables';

export class Department extends Component{
    constructor(props){
        super(props);
        this.state={
            departments:[]
        }
    }
    refreshList(){
        console.log(variables.API_URL+'department');
        fetch(variables.API_URL+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({departments:data,departmentsWithoutFilter:data});
        });
        console.log(this.state);
    }

    componentDidMount(){
        this.refreshList();
    }
    render(){
        const {
            departments
        } = this.state;
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Department ID
                            </th>
                            <th>
                                Department Name
                            </th>
                        </tr>
                    </thead>
                    {departments.map(dep=>
                        <tr key={dep.DepartmentId}>
                            <td>{dep.DepartmentId}</td>
                            <td>{dep.DepartmentName}</td>
                        </tr>
                        )}
                </table>
            </div>
        )
    }
}

