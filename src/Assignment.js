import React from "react";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import $ from 'jquery';

class Assignmnent extends React.Component {
  state = {
    items: [
      {
        name: "Tajinder",
        email: "Singh@gmail.com",
      },
    ],
    name: "",
    email: "",
    activeIndex: null,
  };

  updateInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { items, name, email, activeIndex } = this.state;
    const newItem = { name, email };

    if (activeIndex == null) items.push(newItem);
    if (activeIndex != null) items[activeIndex] = newItem;
    $("#editmodal").modal("hide");
    this.setState({
      items: [...items],
      name: "",
      email: "",
      activeIndex: null,
    });
  };

  deleteRecord = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items: [...items] });
  };
  editRecord = (index) => {
    const { items } = this.state;

    const { name, email } = items[index];
    this.setState({ name, email, activeIndex: index });
    $("#editmodal").modal("show");
  };
  edituser = () => {
        
              $("#editmodal").modal("show");
              
          }

  render() {
    const { items, name, email } = this.state;

    return (
      <>
                    <button className="bg-info" onClick={this.edituser}> Add User </button>

        <div className="modal" id="editmodal">
            <div className="modal-dialog">
              <div className="modal-content">
              
                <div className="modal-header">
                  <h4 className="modal-title align-center">User : </h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                
                <div className="modal-body text-center">
                <form ref={(el) => this.myFormRef = el}>
                <input type="hidden" id="Username"ref="myID" />
                  
                  <div className="form-group">
                  Enter Name
                  <input type="text"
              value={name}
              name="name"
              onChange={this.updateInput} />
                  </div>
                  <div className="form-group">
                  Enter Email
                  <input
              type="text"
              value={email}
              name="email"
              onChange={this.updateInput}
            />
                  </div>

                  <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Update</button>
                </form>
                </div>
              
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>

          </div>
        
        <div>
          <table border="2" width="90%">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            {items.map((result, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{result.name}</td>
                    <td>{result.email}</td>
                    <td>
                      <button onClick={() => this.deleteRecord(index)}>
                        Delete
                      </button>
                      <button onClick={() => this.editRecord(index)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>

      </>
    );
  }
}
export default Assignmnent;
