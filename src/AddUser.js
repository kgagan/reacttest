    import React from 'react';
    import Swal from 'sweetalert2';
    import { Redirect } from 'react-router';
    //bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    //axios for api request
    import axios from 'axios';
    class AddUser extends React.Component {
      constructor(props)
        {
          super(props);
          this.state={
            name: '',
            
          }
          this.addFormData = this.addFormData.bind(this);
        }
      //Form Submission
      addFormData(evt)
      {
        
        evt.preventDefault();
        let formData = new FormData();
        formData.append('name', this.state.name)
        
    
        axios.post('https://restcountries.eu/rest/v2/name/India', formData
        ).then(res=>
        {
                Swal.fire({
                title: 'Reactjs',
                text: res.data.data,
                type: 'success',
                
                });
                this.myFormRef.reset();
      
       }).catch(function (res) {
        console.log(res)
       });
       
       //this.props.history.push('');
    }
     
      render() {
       
        return (
        
          <div className="maincontainer">
            
            <h1 className="mr-5 ml-5 mt-5">Add country</h1>
            <div className="containers mb-5 mt-5 text-left">
            
            <form ref={(el) => this.myFormRef = el } id="create-course-form">
        <div className="form-group">
        <input type="email" className="form-control" 
          name="email" value={this.state.email} 
          aria-describedby="emailHelp" placeholder="Enter country" 
          onChange={e => this.setState({ email: e.target.value })} />
        
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={this.addFormData}>Submit</button>
      </form>
           
                
          </div>
         
          </div>
          
    )
    };
    }
    export default AddUser;