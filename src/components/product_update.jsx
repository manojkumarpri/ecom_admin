import React, { Component } from 'react';
import axios from 'axios';
import './table.css'


class product_Update extends Component {
    constructor(props, ref) {
        super(props, ref);
        this.state = {
            
        listData:{},
        }
        this.check=this.check.bind(this);
      this.state.listData=  JSON.parse(localStorage.getItem("pro"));
      console.log(this.state.listData)
        
    }
   componentWillMount() {
      
       
    }
  
  async  check(){
        alert("haii"); 
        console.log(this.state.listData);
        await axios.put("http://13.58.92.162:3000/products/"+this.state.listData.Id1, this.state.listData).then(response => {
            console.log(response);
        }).catch(error => console.log(error)
        )
    }

    change2() {
        window.location.reload();
        this.props.history.push("/product");
    }
    render() {
        return (
            <div className=""><br/>
            <h2 className="card " style={{width: "auto",height:"10rem",alignItems: 'center'}}  >Product Update</h2>
                        <div className="container card ">&nbsp;
                            <br/>
                            <p for="providername" className="col-md-6 text-left"  >ProductName:</p>
                            <input type="text" id="providername" className="form-control" placeholder="enter provider_name " style={{ width: "60%" }} value={this.state.listData.name} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "name": event.target.value }) })} />
                            <br />
                            <p for="provider_address" className="col-md-6 text-left">Product_Image:</p>
                            <input type="text" id="provider_address" className="form-control" placeholder="enter imageURL" style={{ width: "60%" }}value={this.state.listData.img}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "img": event.target.value }) })} />
                            <br />
                            <p for="latitude" className="col-md-6 text-left">Product_prodCategory :</p>
                            <input type="text" id="latitude" className="form-control" placeholder="enter prodCategory " style={{ width: "60%" }}value={this.state.listData.prodCategory}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "prodCategory": event.target.value }) })} />
                            <br />
                            {/* <p for="longitude" className="col-md-6 text-left">Product_shopCategory:</p>
                            <input type="text" id="longitude" className="form-control" placeholder="enter shopCategory " style={{ width: "60%" }}value={this.state.listData.shopCategory}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "shopCategory": event.target.value }) })} /> */}
                            <p for="longitude" className="col-md-6 text-left">Product_shopCategory:</p>
                                <select value={this.state.listData.shopCategory} className="form-control" style={{width:"60%"}} onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "shopCategory": event.target.value }) })}>
                                    <option value=""></option>
                                    <option value="menswear">menswear</option>
                                    <option value="women's wear" >women's wear</option>
                                </select>
                            <br />
                            <p for="zoom" className="col-md-6 text-left">Product_rating:</p>
                            {/* <input type="text" id="zoom" className="form-control" placeholder="enter rating" style={{ width: "60%" }} value={this.state.listData.rating} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "rating": event.target.value }) })} /> */}
                            <select value={this.state.listData.rating} className="form-control" style={{width:"60%"}} onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "rating": event.target.value }) })}>
                                <option value="1">1</option>
                                <option value="2" >2</option>
                                <option value="3">3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                              
                                </select>
                            <br />
                            <p for="tax" className="col-md-6 text-left">Product_shortDesc:</p>
                            <input type="text" id="tax" className="form-control" placeholder="enter shortDesc " style={{ width: "60%" }}value={this.state.listData.shortDesc}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "shortDesc": event.target.value }) })} />
                            <br />
                            <p for="today_status" className="col-md-6 text-left">Product_longDesc:</p>
                            <input type="text" id="today_status" className="form-control" placeholder="enter longDesc " style={{ width: "60%" }}value={this.state.listData.longDesc}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "longDesc": event.target.value }) })} />
                            <br />
                            <p for="provider_mobile_number" className="col-md-6 text-left">Product_size:</p>
                            <input type="text" id="provider_mobile_number" className="form-control" placeholder="enter product_size " style={{ width: "60%" }}value={this.state.listData.size}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "size": event.target.value }) })} />
                            <br />
                            <p for="isActive" className="col-md-6 text-left">Product_price:</p>
                            <input type="text" id="isActive" className="form-control" placeholder="enter product_price " style={{ width: "60%" }}value={this.state.listData.price}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "price": event.target.value }) })} />
                            <br />
                            <p for="isActive" className="col-md-6 text-left">product_BrandName:</p>
                            <input type="text" id="isActive" className="form-control" placeholder="enter BrandName " style={{ width: "60%" }} value={this.state.listData.BrandName} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "BrandName": event.target.value }) })} />
                            <br />
                            <p for="isActive" className="col-md-6 text-left">GST-tax:</p>
                            <input type="text" id="isActive" className="form-control" placeholder="enter tax " style={{ width: "60%" }}value={this.state.listData.tax}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "tax": event.target.value }) })} />
                            <br />
                            <p for="isActive" className="col-md-6 text-left">ShopName:</p>
                            <input type="text" id="isActive" className="form-control" placeholder="enter shopName " style={{ width: "60%" }}value={this.state.listData.shopName}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "shopName": event.target.value }) })} />
                            <br />
                            <p for="isActive" className="col-md-6 text-left">Product_available:</p>
                            <input type="text" id="isActive" className="form-control" placeholder="enter available " style={{ width: "60%" }}value={this.state.listData.available}  required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "available": event.target.value }) })} />
                            <br />
                            </div>
                            <div><br/><br/><br/>
                            <button className="btn btn-danger" onClick={() => this.change2()}>Back</button>&nbsp;&nbsp;
                            <button className="btn btn-success" onClick={()=>this.check()} >update</button>
                           
                            </div>
                    
                    </div>
        )
    }
}
export default product_Update;