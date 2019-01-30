import React, { Component } from 'react';
import axios from 'axios';
import './home.css';


class product extends Component {
    constructor(props, ref) {
        super(props, ref);
        this.state = {
            listData: [],
            
            selectdata: {},
           

            }

        
       
        this.change = this.change.bind(this);
        this.change1 = this.change1.bind(this);
        
    }
    async   componentWillMount() {
        var response = await axios.get("http://13.58.92.162:3000/products")
        // console.log(response1);  
        this.setState({ listData: await response.data });
        console.log(this.state.listData);
           
    }
    change(pid){
        this.state.selectdata=pid;
        localStorage.setItem("pro",JSON.stringify(this.state.selectdata));
    }
    change1(){
        window.location.reload();
        this.props.history.push('/product_update');
    }
    change2(){
        window.location.reload();
        this.props.history.push('/product_Create');
    }

    render() {
        return (

            <div className="container-fluid "><br/>
             <h2 className="card man" style={{width: "auto",height:"8rem",alignItems: 'center'}} >Product List</h2>&nbsp;
                        <div class=" tabs container-fluid card" id="nav-provider" role="tabpanel" aria-labelledby="nav-home-tab">&nbsp;
                           
                            <table  className="table table-responsive">
                                <thead>
                                    <tr className="men">
                                        <th>Product_id</th>&nbsp;
                                        <th>Product_name</th>&nbsp;
                                        <th>ShopCategory</th>&nbsp;
                                        <th>ProdCategory</th>&nbsp;
                                        <th>ShopName</th>&nbsp;
                                        <th>Rating</th>
                                        <th>Price</th>
                                        <th>ProdId</th>
                                        <th>Available</th>&nbsp;
                                        <th>Tax</th>&nbsp;
                                        <th>BrandName</th>
                                        <th>Select&nbsp;for&nbsp;Edit</th>
                                    </tr>
                                </thead>
                                {this.state.listData.map(a =>

                                    <tbody className="">
                                        <tr>
                                            <td>{a.Id1}</td>&nbsp;
                                            <td>{a.name}</td>&nbsp;
                                            <td>{a.shopCategory}</td>&nbsp;
                                            <td>{a.prodCategory}</td>&nbsp;
                                            <td>{a.shopName}</td>
                                            <td>{a.address}</td>
                                            <td>{a.rating}</td>
                                            <td>{a.price}</td>
                                            <td>{a.prodId}</td>                               
                                            <td>{a.available}</td>&nbsp;
                                            <td>{a.tax}</td>&nbsp;
                                            <td>{a.BrandName}</td>
                                            {/* <td> <button id="#nav-profile-tab" className="btn btn-outline-danger btn-sm" onClick={()=>this.change(a)}  >updateAccount</button>         
        </td> */}
                                            <td><div class="radio">
                                                <label><input type="radio" name="optradio" onClick={() => this.change(a)} /><strong style={{ fontSize: "15px", fontFamily: "cursive" }}><span>Update</span></strong></label>
                                            </div></td>


                                        </tr>

                                    </tbody>)}
                            </table>
                            </div>
                            <br/>
                            <div style={{textAlign:"center"}}>
                            <button className="btn btn-success" onClick={() => this.change1()}>submit</button>&nbsp;&nbsp;
                            <button className="btn btn-success" onClick={() => this.change2()}>Create Product</button>
                             </div>

                    </div>

        )
    }
}
export default product;