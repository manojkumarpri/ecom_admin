import React, { Component } from 'react';
import axios from 'axios';
import Tabsn from './tabsn';
//import './table.css'
import './home.css'


class product_Create extends Component {
    constructor(props, ref) {
        super(props, ref);
        this.state = {

            listData: {},
            color:[],
        }
        this.check = this.check.bind(this);

    }
    componentWillMount() {


    }
    colors(a){
        if(a!=""){
        this.state.color.push(a);
        console.log(this.state.color);
        }
    }

    async  check() {
        alert("haii");
        console.log(this.state.listData);
        this.state.listData.color=this.state.color;
        console.log(this.state.listData)
        await axios.post("http://13.58.92.162:3000/products", this.state.listData).then(response => {
            console.log(response);
        }).catch(error => console.log(error)
        )
        console.log(this.state.listData);
        
    }
    change2() {
        window.location.reload();
        this.props.history.push("/product");
    }

    render() {
        return (
            <div>
                <h2 className=" card man" style={{width: "auto", height:"10rem",alignItems: 'center'}} >Product Create</h2>
                <div className="container card " >
                    <br />
                    <p for="providername" className="col-md-6 text-left">ProductName:</p>
                    <input type="text" id="providername" className="form-control" placeholder="Enter provider_name " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "name": event.target.value }) })} />
                    <br />

                    <p for="product_image" className="col-md-6 text-left">Product_Image:</p>
                    <input type="text" id="product_image" className="form-control" placeholder="Enter imageURL" style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "img": event.target.value }) })} />
                    <br />
                    <p for="product_image1" className="col-md-6 text-left">Product_Sub_Image1:</p>
                    <input type="text" id="product_image1" className="form-control" placeholder="Enter imageURL" style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "img1": event.target.value }) })} />
                    <br />
                    <p for="product_image2" className="col-md-6 text-left">Product_Sub_Image2:</p>
                    <input type="text" id="product_image2" className="form-control" placeholder="Enter imageURL" style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "img2": event.target.value }) })} />
                    <br />
                    <p for="product_image3" className="col-md-6 text-left">Product_Sub_Image3:</p>
                    <input type="text" id="product_image3" className="form-control" placeholder="Enter imageURL" style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "img3": event.target.value }) })} />
                    <br />
                    <p for="latitude" className="col-md-6 text-left">Product_prodCategory :</p>
                    <input type="text" id="latitude" className="form-control" placeholder="Enter prodCategory " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "prodCategory": event.target.value }) })} />
                    <br />
                    <p for="longitude" className="col-md-6 text-left">Product_shopCategory:</p>
                    {/* <input type="text" id="longitude" className="form-control" placeholder="Enter shopCategory " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "shopCategory": event.target.value }) })} /> */}
                            <select className="form-control" style={{width:"60%"}} onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "shopCategory": event.target.value }) })}>
                                <option value="menswear">menswear</option>
                                <option value="women's wear" >women's wear</option>
                                </select>
                    <br />
                    <p for="zoom" className="col-md-6 text-left">Product_rating:</p>
                    {/* <input type="text" id="zoom" className="form-control" placeholder="Enter rating" style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "rating": event.target.value }) })} /> */}
                    <select className="form-control" style={{width:"60%"}} onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "rating": event.target.value }) })}>
                                <option value="1">1</option>
                                <option value="2" >2</option>
                                <option value="3">3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                              
                                </select>
                    <br />
                    <p for="tax" className="col-md-6 text-left">Product_shortDesc:</p>
                    <input type="text" id="tax" className="form-control" placeholder="Enter shortDesc " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "shortDesc": event.target.value }) })} />
                    <br />
                    <p for="today_status" className="col-md-6 text-left">Product_longDesc:</p>
                    <input type="text" id="today_status" className="form-control" placeholder="Enter longDesc " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "longDesc": event.target.value }) })} />
                    <br />
                    <p for="provider_mobile_number" className="col-md-6 text-left">Product_size:</p>
                    <input type="text" id="provider_mobile_number" className="form-control" placeholder="Enter product_size " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "size": event.target.value }) })} />
                    <br />
                    <p for="product_color" className="col-md-6 text-left">Product_color1:</p>
                    <input type="text" id="product_color" className="form-control" placeholder="Enter product_color " style={{ width: "60%" }} required autofocus onMouseOut={event => this.colors(event.target.value) } />
                    <br />
                    <p for="product_color1" className="col-md-6 text-left">Product_color2:</p>
                    <input type="text" id="product_color1" className="form-control" placeholder="Enter product_color " style={{ width: "60%" }} required autofocus onMouseOut={event => this.colors(event.target.value) } />
                    <br />
                    <p for="product_color2" className="col-md-6 text-left">Product_color3:</p>
                    <input type="text" id="product_color2" className="form-control" placeholder="Enter product_color " style={{ width: "60%" }} required autofocus onMouseOut={event => this.colors(event.target.value) } />
                    <br />
                    <p for="product_color3" className="col-md-6 text-left">Product_color4:</p>
                    <input type="text" id="product_color3" className="form-control" placeholder="Enter product_color " style={{ width: "60%" }} required autofocus onMouseOut={event => this.colors(event.target.value) } />
                    <br />
                    <p for="isActive" className="col-md-6 text-left">Product_price:</p>
                    <input type="text" id="isActive" className="form-control" placeholder="Enter product_price " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "price": event.target.value }) })} />
                    <br />
                    <p for="isActive" className="col-md-6 text-left">Product_BrandName:</p>
                    <input type="text" id="isActive" className="form-control" placeholder="Enter BrandName " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "BrandName": event.target.value }) })} />
                    <br />
                    <p for="isActive" className="col-md-6 text-left">GST-tax:</p>
                    <input type="text" id="isActive" className="form-control" placeholder="Enter tax " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "tax": event.target.value }) })} />
                    <br />
                    <p for="isActive" className="col-md-6 text-left">ShopName:</p>
                    <input type="text" id="isActive" className="form-control" placeholder="Enter shopName " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "shopName": event.target.value }) })} />
                    <br />
                    <p for="isActive" className="col-md-6 text-left">Product_available:</p>
                    <input type="text" id="isActive" className="form-control" placeholder="Enter available " style={{ width: "60%" }} required autofocus onChange={event => this.setState({ listData: Object.assign(this.state.listData, { "available": event.target.value }) })} />
                    <br />
                    </div><br/><br/><br/>
                <div>
                    <button className="btn btn-danger" onClick={() => this.change2()}>Back</button>&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={() => this.check()} >create</button>
                </div><br/>
                <br/><br/><br/>
            </div>
                   

                            )
                        }
                    }
export default product_Create;