/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
import axios from 'axios';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [],
            listData1: [],
            k: Date,
            m: 0,
            listData2: [],
            status: {},
            check: false,
        }
        this.get = this.get.bind(this);
        this.today1 = this.today1.bind(this);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        console.log(dd, mm, yyyy)
        console.log(today)
        //  this.setState({k:   today});
        this.state.k = today;
        console.log(this.state.k)
    }
    async componentWillMount() {
        await axios.get("http://13.58.92.162:3000/orders").then(response => {
            this.setState({ listData: response.data });
            console.log(this.state.listData);



        })
        await axios.get("http://13.58.92.162:3000/count").then(response => {
            this.setState({ status: response.data });
            console.log(this.state.status);
        })
        this.get();
    }
    get() {
        for (var i = 0; i < this.state.listData.length; i++) {
            var l = new Date(this.state.listData[i].createdAt);

            console.log(l)
            this.state.listData[i].createdAt = l;
            console.log(this.state.listData[i].createdAt);
        }
    }
    today1() {
         if(this.state.listData.length!=0){
        console.log(this.state.k);
        this.setState({ check: true })
        // console.log(this.state.listData[0].createdAt)
        if (this.state.m === 0) {
            for (var i = 0; i < this.state.listData.length; i++) {
                // console.log(typeof(this.state.listData[0].createdAt));
                // console.log(typeof(this.state.k));
                
                if (((this.state.listData[i].createdAt).getDate() === (this.state.k).getDate()) && (this.state.listData[i].createdAt).getMonth() === (this.state.k).getMonth()) 
                {
                    console.log("haii")

                    this.state.listData1.push(this.state.listData[i])
                    console.log(this.state.listData1)
                    this.setState({ m: this.state.m + 1 });
                }
               
                
            }
        }
        this.setState({ listData1: this.state.listData1 });
     }
    }

    async  cancel(pid) {
        //this.state.listData2.pop();
        console.log(this.state.listData2)
        for (var i = 0; i < this.state.listData2.length; i++) {
            if (this.state.listData2[i].order_id === pid.order_id) {
                this.state.listData2.splice(i, 1);
                console.log(this.state.listData2)
            }
        }
    }
    change(pid) {
        console.log(pid);
        this.state.listData2.push(pid);
        //   this.setState({listData2:this.state.listData2})
        // console.log(this.state.listData2);
        this.setState({ listData2: this.state.listData2 });
        console.log(this.state.listData2)
    }
    async change1() {
        console.log("haii")
        console.log(this.state.listData2);
         for(var i=0;i<this.state.listData2.length;i++){

                 console.log("oiii")  
                 this.state.listData2[i].order_status="dispatched";
                    console.log(this.state.listData2);
                   await axios.put("http://13.58.92.162:3000/orders/" + this.state.listData2[i].order_id, this.state.listData2[i]).then(response => {
           console.log(response);
     }).catch(error => console.log(error)
         ) 

         axios.get('http://api.msg91.com/api/sendhttp.php?country=91&sender=MSGIND&route=4&mobiles='+this.state.listData2[i].customer_mobile_number+'&authkey=243177AyunGcNGL5bc6ed47&message='+this.state.listData2[i].brand_name+' Your order has dispatched and delivered within 24 hours  && Total amount is '+this.state.listData2[i].total,{ headers: { 'crossDomain': true, }});

            }

    }
    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" style={{ width: "85px", height: "350px" }} src="https://www.columbiasportswear.co.in/media/stores/INDIA_DELHI_SELECT%20CITYWALK%20MALL_1_1.jpg" alt="first slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" style={{ width: "85px", height: "350px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyo4YiOl-AUXEPI3_gC1Sp8J6TysfsTX-YMDNMNDGY6Qu8l94TdA" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" style={{ width: "85px", height: "350px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8yUIgFOyr_1oo0DeOuIPyOj-hZ59wtO0MVD_6ITUP0UPO8sA" alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div className="container"  >
                    <br />  <div className="container" style={{textAlign:"center"}}>
                                    <button className="btn btn-primary" onClick={() => this.today1()} >Todays Orders</button>
                            </div>
                    {this.state.check === true ? (
                        <div className="container"><strong style={{ fontFamily: "Georgia", fontSize: "28px" }}>Today's Orders</strong>
                            <br /><br />
                            <table className=" table-responsive ">
                                <thead>
                                    <tr className="man" >
                                    <th>cust_id</th>&nbsp;
                                    <th>brandname</th>&nbsp;
                                    <th>customer_mobile number</th>&nbsp;
                                    <th>invoice number</th>&nbsp;
                                    <th>payment option</th>&nbsp;
                                    <th>provider_mobile number</th>&nbsp;
                                    <th>product id</th>&nbsp;
                                    <th>total</th>&nbsp;
                                    <th>quantity</th>&nbsp;
                                    <th>product name</th>&nbsp;
                                    <th>delivery address</th>&nbsp;
                                    <th>Dispatch</th>&nbsp;
                                    <th>Cancel</th>
                                    </tr>
                                </thead>
                                {this.state.listData1.map(a =>

                                    <tbody >
                                        <tr>
                                            <td>{a.cust_id}</td>&nbsp;
                                            <td>{a.brand_name}</td>&nbsp;
                                            <td>{a.customer_mobile_number}</td>&nbsp;
                                            <td>{a.invoice_number}</td>&nbsp;
                                            <td>{a.payment_option}</td>&nbsp;
                                            <td>{a.provider_mobile_number}</td>&nbsp;
                                            <td>{a.product_id}</td>&nbsp;
                                            <td>{a.total}</td>&nbsp;
                                            <td>{a.quantity}</td>&nbsp;
                                            <td>{a.product_name}</td>&nbsp;
                                            <td>{a.delivery_address}</td>&nbsp;
                                            <td> <button className="btn btn-outline-danger btn-sm" onClick={() => this.change(a)}>proceed</button>
                                                </td>&nbsp;
                                            <td><button className="btn btn-outline-secondary btn-sm" onClick={() => this.cancel(a)}>cancel</button></td>

                                      </tr>

                                    </tbody>
                                )}
                            </table>
                            <br />
                            <div style={{textAlign:"center"}} >
                            <button className="btn btn-primary" onClick={() => this.change1()} >dispatch</button>
                            </div>
                        </div>
                    ) : []}
                </div>


                <br />
                <br />
                <div className="">
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    {/* <div className="card border-primary mb-3" style={{ backgroundColor: "#00000",width:"20rem" }}>
                        <h2 style={{alignItems:"center"}}>Users &nbsp;<span className="badge badge-primary">{this.state.status.totalUsers}</span></h2> 
                        <hr/>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-row">
                                    <h6 className="col-sm-6">Total Users:</h6>
                                    <span className="col-sm-6">{this.state.status.totalUsers}</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-row">
                                    <h6 className="col-sm-6">Today Active Users:</h6>
                                    <span className="col-sm-6">{this.state.status.todayActiveUsers} </span>
                                </div>
                            </div>
                        </div>

                    </div> */}
                    <div class="card border-primary  bg-white text-dark mb-3" style={{ width: "400px" }}>
                        <h4 class="card-header" style={{textAlign:"center"}}>Users &nbsp;<span className="badge badge-danger">{this.state.status.totalUsers}</span></h4>
                        <div class="card-body form-row">
                            <h5 class="card-title">Total Users:</h5>
                            <p class="card-text"><span className="col-sm-6">{this.state.status.totalUsers}</span></p>

                        </div>
                        <div class="card-body form-row">
                            <h5 class="card-title">Today Active Users:</h5>
                            <p class="card-text"><span className="col-sm-6">{this.state.status.totalUsers}</span></p>

                        </div>
                    </div>
                    <div className="col-sm-2">
                    </div>


                    <div class="card border-primary bg-white text-dark mb-3" style={{ width: "380px" }}>
                        <h4 class="card-header" style={{textAlign:"center"}}>Providers&nbsp;<span className="badge badge-danger">{this.state.status.totalProviders}</span></h4>
                        <div class="card-body form-row">
                            <h5 class="card-title">Total Providers:</h5>
                            <p class="card-text"><span className="col-sm-6">{this.state.status.totalProviders}</span></p>

                        </div>
                        <div class="card-body form-row">
                            <h5 class="card-title">Today Supplied Providers:</h5>
                            <p class="card-text"> <span className="col-sm-6">{this.state.status.todayActiveProviders}</span></p>

                        </div>
                    </div>
                    {/* <div className="card border-primary mb-3" style={{ backgroundColor: "#0000",width:"21rem"  }}>
                        <h2>Providers&nbsp;<span className="badge badge-primary">{this.state.status.totalProviders}</span></h2>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-row">
                                    <h6 className="col-sm-6">Total Providers:</h6>
                                    <span className="col-sm-6">{this.state.status.totalProviders}</span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-row">
                                    <h6 className="col-sm-6">Today Supplied Providers:</h6>
                                    <span className="col-sm-6">{this.state.status.todayActiveProviders}</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-sm-2">
                    </div>
                    <div className="card border-primary bg-white text-dark mb-3 " style={{ width: "63rem" }}>
                        <h2 class="card-header" style={{textAlign:"center"}}>Orders &nbsp;<span className="badge badge-danger ">{this.state.status.totalOrderDelivered}</span></h2>

                        <div className="card-body form-row ">
                            <div className="col-sm-6">
                                <h4 class="card-header" style={{textAlign:"center"}}>Today Orders</h4>

                                <div className="col-sm-6">
                                    <div className="col-sm-12">
                                        <div className="card-body form-row">
                                            <h6 className="card-title">Delivered</h6>
                                            <p class="card-text"> <span className="col-sm-6">&nbsp;&nbsp;{this.state.status.todayorderDelivered}</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="col-sm-12">
                                        <div className="card-body form-row">
                                            <h6 className="card-title">Dispatched</h6>
                                            <p class="card-text">  <span className="col-sm-6">&nbsp;{this.state.status.todayOrderDispatched}</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="col-sm-12">
                                        <div className="card-body form-row">
                                            <h6 className="card-title">Cancelled</h6>
                                            <p class="card-text"><span className="col-sm-6">&nbsp;&nbsp;{this.state.status.todayOrderCancelled}</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-6">
                                <h4 class="card-header" style={{textAlign:"center"}}>Total Orders</h4>
                                <div className="col-sm-6" >
                                        <div className="card-body form-row">
                                            <h6 className="card-title">Total Delivered</h6>
                                            <p class="card-text"> <span className="col-sm-6">&nbsp;&nbsp;{this.state.status.totalOrderDelivered}</span></p>
                                        </div>
                                    
                                </div>

                                <div className="col-sm-6">
                                        <div className="card-body form-row">
                                            <h6 className="card-title">Total Dispatched</h6>
                                            <p class="card-text"><span>&nbsp;&nbsp;{this.state.status.totalOrderDispatched}</span></p>
                                        </div>
                
                                </div>

                                <div className="col-sm-6">
                                   
                                        <div className="card-body form-row">
                                            <h6 className="card-title">Total Cancelled</h6>
                                            <p class="card-text"><span className="col-sm-6">&nbsp;&nbsp;{this.state.status.totalOrderCancelled}</span></p>
                                        </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-1">
                    </div>
                </div>
            </div>
            </div>
        )
    }


}
export default Home;