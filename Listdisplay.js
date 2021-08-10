import React from "react";
import { BrowserRouter as Router, Route ,Link } from "react-router-dom";
 import $ from 'jquery';
 import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container ,Row ,Col,Table,Button,Form,Modal} from "react-bootstrap";
class Listdisplay extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
		items: [],
		name: '',
		des: '',
		price:'',
		showHide : false,
		search:null,
		activeIndex: null,
		sortType: 'albums',
		data:'',
	};

    this.handleChange = this.handleChange.bind(this);
	this.handleChange1 = this.handleChange1.bind(this);
	this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
	 //this.setSortType = this.setSortType.bind(this);
	
  }
   
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  handleChange1(event) {
    this.setState({des: event.target.value});
  }
  handleChange2(event) {
    this.setState({price: event.target.value});
  }

  handleSubmit(event) {
	  {/*alert('A name was submitted: ' + this.state.name);
	alert('A name was submitted: ' + this.state.des);
  alert('A name was submitted: ' + this.state.price);*/}
    event.preventDefault();
	{/*this.setState({
    name:this.state.name,
	des:this.state.des,
	price:this.state.price,
	})*/}
	console.log(this.state.name);
	console.log(this.state.des);
	console.log(this.state.price);
    const name = this.state.name;
	const des =this.state.des;
	const price =this.state.price;
	//const { name,des,price  } = this.state;
	const newItem = { name, des , price };
	console.log(newItem);
	const  items = this.state.items;
	 //items.push(newItem);
	//console.log(items);
	const activeIndex =this.state.activeIndex;
	if (activeIndex == null) items.push(newItem);
	if (activeIndex != null) items[activeIndex] = newItem;
	this.setState({
      items: [...items],
      name: "",
      des: "",
      price:"",
	  activeIndex: null,
	  showHide: !this.state.showHide,
	  
    });
  }
  deleteRecord = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items: [...items] });
  };
  handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }
	searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  
  editRecord = (index) => {
    const items = this.state.items;
      console.log(items);
	  
    const { name, des ,price } = items[index];
	console.log(name);
    this.setState({
     showHide: !this.state.showHide,		
	name: name,
    des :  des,
    price :  price, 
	activeIndex: index });
    
  };
  
  sortByPriceAsc=()=>{

          let sortedProductsAsc;
          sortedProductsAsc= this.state.items.sort((a,b)=>{
             return parseInt(a.price)  - parseInt(b.price);
          })

          this.setState({
              items:sortedProductsAsc
          })
      }


      sortByPriceDesc=()=>{

          let sortedProductsDsc;
          sortedProductsDsc= this.state.items.sort((a,b)=>{
             return parseInt(b.price)  - parseInt(a.price);
          })

          this.setState({
              items:sortedProductsDsc
          })
      }
	   setSortType(event) {
    this.setState({sortType: event.target.value});
  }

    componentDidMount() {
    const sortArray = type => {
      const types = {
        albums: 'albums',
        members: 'members',
        formed: 'formed_in',
      };
	  const  items = this.state.items;
	  const  setData = this.state.setData;
	
	  const  setSortType = this.state.setSortType;
      const sortProperty = types[type];
      const sorted = [...items].sort((a, b) => b[sortProperty] - a[sortProperty]);
	  
	this.setState({
		Data:sorted } );
    };
   const  sortType = this.state.sortType;
    sortArray(sortType);
  };
	
  render() {
    return (
      <Router>
        <div>
		<div style={{  }}>
			<select onChange={(e) => this.setState.sortType}>
        <option value="albums">Albums</option>
        <option value="members">Members</option>
        <option value="formed">Formed in</option>
			</select>
		
		
		 <button onClick={this.sortByPriceAsc}>
            Aflopend
            </button>
            <button onClick={this.sortByPriceDesc}>
            Oplopend
            </button>
      
		   <Container >
			  <Row>
				<Col  xs={2}>
				  <Form > 
				      <Row className="mt-4">
					  <Col >
					  <Form.Group className="" controlId="formBasicEmail">
						
						
						<Form.Control type="text" onChange={(e)=>this.searchSpace(e)} placeholder="filter" />
						
					  </Form.Group>
					  </Col >
					  
					  
					  </Row>
                 </Form>
			  </Col>
				<Col xs={6} >
				 <Form > 
				      <Row className="mt-4">
					  <Col sm="6">
					  <Form.Group className="" controlId="formBasicEmail">
						
						
						<Form.Control type="text" onChange={(e)=>this.searchSpace(e)} placeholder="search movie" />
						
					  </Form.Group>
					  </Col >
					  <Col sm="6">
					  <Button  variant="secondary" type="submit" >
						search
					  </Button>
					  </Col >
					  
					  </Row>
                 </Form>
			  </Col >
				<Col >
				  <Button className="mt-4 float-right"variant="secondary" onClick={() => this.handleModalShowHide()}>
                    Add movie
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Add movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
					  <Row>
          <Col sm={6}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="productName">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Movie Name"/>
              </Form.Group>
              <Form.Group controlId="sku">
                <Form.Label>movie description</Form.Label>
                <Form.Control
                  type="text"
                  name="sku"
                  value={this.state.des}
                  onChange={this.handleChange1}
                  placeholder="movie description" />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange2}
                  placeholder="Price" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="hidden" name="id" value={this.state.id} />
                <Button variant="success" type="submit">Save</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
					</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
			  </Col>
			  </Row>
			  </Container>
			  <Container  >
			  <Row>
		      <Table variant="dark" border="2" width="90%">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>des</th>
				<th>price</th>
                <th>Actions</th>
              </tr>
            </thead>
            {this.state.items.filter((result)=>{
      if(this.state.search == null)
          return result
      else if(result.name.toLowerCase().includes(this.state.search.toLowerCase()) ||        result.des.toLowerCase().includes(this.state.search.toLowerCase())          ){
          return result
      }
    }).map((result,index) => {
              return (
                <tbody>
                  <tr>
                    <td>{index}</td>
                    <td>{result.name}</td>
                    <td>{result.des}</td>
					<td>{result.price}</td>
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
          </Table>
			  </Row>
			  </Container>
			</div>
						   
		   
		   
			  
        </div>
      </Router>
    )
  }
}

export default Listdisplay;
