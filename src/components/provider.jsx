import React, { Component } from 'react';
import axios from 'axios';
import './home.css'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
  

class Provider extends Component {
    constructor(props,ref) {
        super(props,ref);
        this.state = {
            lat1:0,
            lon1:0,
            address:'',
            listData: [],
            userdata1: {},
            userdata2:new Set(),
            selectdata:{},
            prodid: [],
            prodid1:[],
            available1: [],
            price1: [],
            prodId: [],
            listData1:[],
            link:'',
            provider: {
                prodId:[],
                price: [],
                available: [],
                provider_name: "",
                provider_address: "",
                lat: "",
                lon: "",
                zoom: "",
                tax: "",
                today_status: "",
                provider_mobile_number: "",
                isActive: "",
            }

        }
        this.add = this.add.bind(this);
        this.add1 = this.add1.bind(this);
        this.add2=this.add2.bind(this);
        this.check = this.check.bind(this);
        this.check2=this.check2.bind(this);
        this.avail=this.avail.bind(this)
        this.change=this.change.bind(this);
        this.change1=this.change1.bind(this);
        this.hhh= React.createRef();
        
       
    }
    
    async   componentWillMount() {
        var response = await axios.get("http://13.58.92.162:3000/products")
        // console.log(response1);  
        this.setState({ listData: await response.data });
        console.log(this.state.listData);
    console.log(this.state.selectdata)
        console.log(this.state.prodid);

        var response1 = await axios.get("http://13.58.92.162:3000/provider")   
        this.setState({listData1:await response1.data});
        console.log(this.state.listData1)
    }
    add1(e) {
        this.state.available1.push(e.target.value);
        this.setState({ available1: this.state.available1 });
        console.log(this.state.available1);
    }
    avail(e) {
        this.state.prodid1[0].available.push(e.target.value);
        this.setState({ prodid1: this.state.prodid1 });
        console.log(this.state.prodid1);
    }
    cancel(pid) {
        for (var i = 0; i < this.state.prodid.length; i++) {
            if (pid.Id1 === this.state.prodid[i].Id1) {
                this.state.prodid.splice(i, 1);
                console.log(this.state.prodid)
            }
        }
    }
    handleChange = address => {
        this.setState({ address });
      };
     
     handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng =>{ 
            this.setState({lat1:latLng.lat,lon1:latLng.lng});
            console.log('Success', latLng);
            console.log(this.state.lat1,this.state.lon1)
            this.join();
          }).catch(error => console.error('Error', error));
    
         
          
      };

      getmyposition=async()=>{
        var location = 0;
        var latitude = 0;
        var longitude = 0;
        
        if (window.navigator && window.navigator.geolocation) {
          location = window.navigator.geolocation
        
        if (location) {
         location.getCurrentPosition( (position) =>{
           console.info(position);
         this.setState({lat1:position.coords.latitude});
       this.setState({lon1:position.coords.longitude})
         // this.setState({lat1:position.coords.latitude,lon1:position.coords.longitude}) 
          // latitude = position.coords.latitude;
          //    longitude = position.coords.longitude;
         // return position.coords.latitude;
            //this.setState({lat1:latitude});
           this.join()
            return this.state.lat1,this.state.lon1
    
             
          })
          // await this.join();
           
          console.log(this.state.lon1)
          
        }
    
      }
     
     // console.log(this.state.provider)
     
      
       
     
    
      }


   async check2(){
       console.log(this.state.selectdata);
       console.log(this.state.prodid1);
       await axios.put("http://13.58.92.162:3000/provider/"+this.state.selectdata.provider_id, this.state.selectdata).then(response => {
            console.log(response);
        }).catch(error => console.log(error)
        ) 
   }
    async check() {
        console.log(this.state.prodid);
        console.log(this.state.available1);
        console.log(this.state.userdata1);
        for (var i = 0; i < this.state.prodid.length; i++) {
            this.state.prodId.push(this.state.prodid[i].prodId);
            this.state.price1.push(this.state.prodid[i].price);
        }
        this.state.provider.prodId = this.state.prodId;
        this.state.provider.price = this.state.price1;
        this.state.provider.available = this.state.available1;
        this.state.provider.provider_name = this.state.userdata1.provider_name;
        this.state.provider.provider_address = this.state.userdata1.provider_address;
        this.state.provider.lat = this.state.userdata1.lat;
        this.state.provider.lon = this.state.userdata1.lon;
        this.state.provider.zoom = this.state.userdata1.zoom;
        this.state.provider.tax = this.state.userdata1.tax;
        this.state.provider.today_status = this.state.userdata1.today_status;
        this.state.provider.provider_mobile_number = this.state.userdata1.provider_mobile_number;
        this.state.provider.isActive = this.state.userdata1.isActive;
        await this.setState({ provider: this.state.provider });
        console.log(this.state.provider);
        await axios.post("http://13.58.92.162:3000/provider", this.state.provider).then(response => {
            console.log(response);
        }).catch(error => console.log(error)
        )
    }
    add(e, pid) {
        console.log(e.target.checked);
        if (e.target.checked === true) {
            console.log(this.state.prodid)
            this.state.prodid.push(pid);
            console.log(this.state.prodid)
            this.setState({ prodid: this.state.prodid })
        }
        else {
            for (var i = 0; i < this.state.prodid.length; i++) {
                if (pid.Id1 === this.state.prodid[i].Id1) {
                    this.state.prodid.splice(i, 1);
                    console.log(this.state.prodid)
                    this.setState({prodid:this.state.prodid})
                }
            }
        }
    }
    add2(e, pid){
       console.log("haii")
        console.log(e.target.checked);
        console.log(e.target.id);

        if (e.target.checked === true) {
            // console.log(this.state.userdata2)
            // this.setState(({ userdata2 }) => ({
            //     userdata2: new Set(userdata2.add(pid))
            //   }));
            // console.log(this.state.userdata2)
           // this.setState({ prodid: this.state.prodid })
        //    var i=this.state.prodid1[0].prodId.length;
        //    var j=i-1;
            console.log(this.state.prodid1[0].prodId)
            console.log(pid.prodId)
               this.state.prodid1[0].prodId.push(pid.prodId);
               this.state.prodid1[0].price.push(pid.price);
           this.setState({prodid1:this.state.prodid1});
           console.log(this.state.prodid1)
        }
        else {
            
            //     this.setState(({ userdata2 }) => {
            //         const newChecked = new Set(userdata2);
            //         newChecked.delete(pid);
              
            //         return {
            //             userdata2: newChecked
            //         };
            //       });
            // console.log(this.state.userdata2)
            for (var i = 0; i < this.state.prodid1[0].prodId.length; i++) {
                if (pid.prodId === this.state.prodid1[0].prodId[i]) {
                    this.state.prodid1[0].prodId.splice(i, 1);
                    this.state.prodid1[0].price.splice(i,1);
                    console.log(this.state.prodid1)
                    this.setState({prodid1:this.state.prodid1})
                    console.log(this.state.prodid1)
                }
            }


        }
    }
    change(pid){
        this.state.selectdata=pid;
        this.setState({selectdata:this.state.selectdata});
        console.log(this.state.selectdata)
        
     
    }
    change1(){
       this.state.prodid1.push(this.state.selectdata);
       this.setState({prodid1:this.state.prodid1});
       console.log(this.state.prodid1)
    }

    render() {
        return (
            <div >
                <div className="container-fluid" >


                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist" style={{backgroundColor:"#b9b9b9"}}>
                            <a className="nav-item nav-link active" id="nav-provider-tab" data-toggle="tab" href="#nav-provider" role="tab" aria-controls="nav-home" aria-selected="false"><strong style={{fontSize:"18px",fontFamily:"Serif"}}>provider List</strong></a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" ref={this.hhh}><strong style={{fontSize:"18px",fontFamily:"Serif"}}>Update provider</strong></a>
                            <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false"><strong style={{fontSize:"18px",fontFamily:"Serif"}}>Create new provider</strong></a>
                        </div>
                    </nav>
                    <div className="tab-content container" id="nav-tabContent" ><br/>
                     <div  className="tab-pane container card "  id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">&nbsp;
                     <h2 className="man" style={{width: "auto",alignItems: 'center' ,backgroundColor:"rgb(148, 153, 153)"}} >Provider Create</h2>
                            <br /> 
                            <p  className="col-md-6 text-left">provider_name:</p>
                            <input type="text" id="providername" className="form-control" placeholder="enter provider_name " style={{ width: "60%" }} required autoFocus onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "provider_name": event.target.value }) })} />
                            <br />

                            <p htmlFor="provider_address" className="col-md-6 text-left">provider Adress:</p>
                            {/* <input type="text" id="provider_address" className="form-control" placeholder="enter provider_address " style={{ width: "60%" }} required autoFocus onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "provider_address": event.target.value }) })} /> */}
                            <PlacesAutocomplete
                                value={this.state.address}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div style={ {textAlign: "left"}}>
                                        <input className="form-control" placeholder="Search the place" style={{ width: "60%" }} required autoFocus
                                            {...getInputProps({
                                                placeholder: 'Search Places ...',
                                                className: 'location-search-input',
                                            })}
                                        />
                                        <div className="autocomplete-dropdown-container">
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                // inline style for demonstration purpose
                                                const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                            <br />
                            <p htmlFor="latitude" className="col-md-6 text-left">latitude :</p>
                            <input type="text" id="latitude" className="form-control" placeholder="enter latitude " style={{ width: "60%" }} required autoFocus value={this.state.lat1} />
                            <br />
                            <p htmlFor="longitude" className="col-md-6 text-left">longitude:</p>
                            <input type="text" id="longitude" className="form-control" placeholder="enter longitude " style={{ width: "60%" }} required autoFocus value={this.state.lon1}/>
                            <br />
                            <p htmlFor="zoom" className="col-md-6 text-left">zoom:</p>
                            <input type="text" id="zoom" className="form-control" placeholder="enter zoom " style={{ width: "60%" }} required autoFocus onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "zoom": event.target.value }) })} />
                            <br />
                            <p htmlFor="tax" className="col-md-6 text-left">tax:</p>
                            <input type="text" id="tax" className="form-control" placeholder="enter tax " style={{ width: "60%" }} required autoFocus onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "tax": event.target.value }) })} />
                            <br />
                            <p htmlFor="today_status" className="col-md-6 text-left">today_status:</p>
                            <input type="text" id="today_status" className="form-control" placeholder="enter today_status " style={{ width: "60%" }} required autoFocus onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "today_status": event.target.value }) })} />
                            <br />
                            <p htmlFor="provider_mobile_number" className="col-md-6 text-left">provider_mobile_number:</p>
                            <input type="text" id="provider_mobile_number" className="form-control" placeholder="enter provider_mobile_number " style={{ width: "60%" }} required autoFocus onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "provider_mobile_number": event.target.value }) })} />
                            <br />
                            <p htmlFor="isActive" className="col-md-6 text-left">isActive:</p>
                            <input type="text" id="isActive" className="form-control" placeholder="enter isActive " style={{ width: "60%" }} required autoFocus onChange={event => this.setState({ userdata1: Object.assign(this.state.userdata1, { "isActive": event.target.value }) })} />
                            <br />
                            
                            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

                            {/* <-- Modal --> */}
                            <div className="modal fade" id="myModal" role="dialog">
                                <div className="modal-dialog">
                                    {/*   
    <!-- Modal content--> */}
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times; </button>
                                            <h4 className="modal-title"> Select the product</h4>
                                        </div>
                                        <div className="modal-body">{this.state.listData.map(a =>
                                            <div>
                                                <br />

                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" id={a.Id1} onClick={(e) => this.add(e, a)} />
                                                    <label className="custom-control-label" htmlFor={a.Id1}>{a.name}</label>

                                                </div>
                                            </div>
                                        )}    </div>
                                        <div className="modal-footer"><br />
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>

                                </div>
                                </div>
                            <div>
                                <br />
                                {this.state.prodid.length != 0 ? (
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ProductId</th>
                                                <th>productname</th>
                                                <th>Enter u r available for the product</th>

                                            </tr>
                                        </thead>
                                        {this.state.prodid.map(c =>
                                            <tbody>
                                                <tr>
                                                    <td>{c.prodId}</td>
                                                    <td>{c.name}</td>
                                                    <td><input type="text" id="availability" className="form-control" placeholder="enter the availability " onBlur={(e) => { this.add1(e) }} /></td>

                                                </tr>


                                            </tbody>)}
                                    </table>) : []}
                                <button className="btn btn-outline-success" onClick={() => this.check()}>submit</button>
                            </div>
                        </div>

                         <div className="tab-pane fade container card" href="#nav-profile" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">&nbsp;
                         <h2 className="man" style={{width: "auto",alignItems: 'center',backgroundColor:"rgb(148, 153, 153)"}} >Provider Update</h2>
                             <br />
                            <p htmlFor="providername" className="col-md-6 text-left">provider_name:</p>
                            <input type="text" id="providername" className="form-control" placeholder="enter provider_name " style={{ width: "60%" }}  value={this.state.selectdata.provider_name}    required autoFocus onChange={event => this.setState({ selectdata: Object.assign(this.state.selectdata, { "provider_name": event.target.value }) })} />
                            <br />

                            <p htmlFor="provider_address" className="col-md-6 text-left">provider Adress:</p>
                            {/* <input type="text" id="provider_address" className="form-control" placeholder="enter provider_address " style={{ width: "60%" }} value={this.state.selectdata.provider_address}required autoFocus onChange={event => this.setState({ selectdata: Object.assign(this.state.selectdata, { "provider_address": event.target.value }) })} /> */}
                            <PlacesAutocomplete
                                value={this.state.address}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                                 >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div style={ {textAlign: "left"}}>
                                        <input className="form-control" placeholder="Search the place" style={{ width: "60%" }} required autoFocus
                                            {...getInputProps({
                                                placeholder: 'Search Places ...',
                                                className: 'location-search-input',
                                            })}
                                        />
                                        <div className="autocomplete-dropdown-container">
                                            {loading && <div>Loading...</div>}
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                    ? 'suggestion-item--active'
                                                    : 'suggestion-item';
                                                // inline style for demonstration purpose
                                                const style = suggestion.active
                                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                return (
                                                    <div
                                                        {...getSuggestionItemProps(suggestion, {
                                                            className,
                                                            style,
                                                        })}
                                                    >
                                                        <span>{suggestion.description}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </PlacesAutocomplete>
                            <br />
                            <p htmlFor="latitude" className="col-md-6 text-left">latitude :</p>
                            <input type="text" id="latitude" className="form-control" placeholder="enter latitude " style={{ width: "60%" }} required autoFocus value={this.state.lat1} />
                            <br />
                            <p htmlFor="longitude" className="col-md-6 text-left">longitude:</p>
                            <input type="text" id="longitude" className="form-control" placeholder="enter longitude " style={{ width: "60%" }} required autoFocus value={this.state.lon1}/>
                            <br />
                            <p htmlFor="zoom" className="col-md-6 text-left">zoom:</p>
                            <input type="text" id="zoom" className="form-control" placeholder="enter zoom " style={{ width: "60%" }} value={this.state.selectdata.zoom}required autoFocus onChange={event => this.setState({ selectdata: Object.assign(this.state.selectdata, { "zoom": event.target.value }) })} />
                            <br />
                            <p htmlFor="tax" className="col-md-6 text-left">tax:</p>
                            <input type="text" id="tax" className="form-control" placeholder="enter tax " style={{ width: "60%" }}value={this.state.selectdata.tax} required autoFocus onChange={event => this.setState({ selectdata: Object.assign(this.state.selectdata, { "tax": event.target.value }) })} />
                            <br />
                            <p htmlFor="today_status" className="col-md-6 text-left">today_status:</p>
                            <input type="text" id="today_status" className="form-control" placeholder="enter today_status " style={{ width: "60%" }}value={this.state.selectdata.today_status}  required autoFocus onChange={event => this.setState({ selectdata: Object.assign(this.state.selectdata, { "today_status": event.target.value }) })} />
                            <br />
                            <p htmlFor="provider_mobile_number" className="col-md-6 text-left">provider_mobile_number:</p>
                            <input type="text" id="provider_mobile_number" className="form-control" placeholder="enter provider_mobile_number " style={{ width: "60%" }} value={this.state.selectdata.provider_mobile_number} required autoFocus onChange={event => this.setState({ userdata2: Object.assign(this.state.selectdata, { "provider_mobile_number": event.target.value }) })} />
                            <br />
                            <p htmlFor="isActive" className="col-md-6 text-left">isActive:</p>
                            <input type="text" id="isActive" className="form-control" placeholder="enter isActive " style={{ width: "60%" }} value={this.state.selectdata.isActive} required autoFocus onChange={event => this.setState({ selectdata: Object.assign(this.state.selectdata, { "isActive": event.target.value }) })} />
                            <br />
                            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal1">Open Modal</button>

                            {/* <-- Modal --> */}
                            <div className="modal fade" id="myModal1" role="dialog">
                                <div className="modal-dialog">
                                    
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times; </button>
                                            <h4 className="modal-title"> Select the product</h4>
                                        </div>
                                        <div className="modal-body">{this.state.listData.map(a =>
                                            <div>
                                                <br />

                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" className="custom-control-input" id={"t"+a._id} onClick={(e) => this.add2(e, a)} />
                                                    <label className="custom-control-label" htmlFor={"t"+a._id}>name:{a.name},prodId:{a.prodId}</label>

                                                </div>
                                            </div>
                                        )}    </div>
                                        <div className="modal-footer"><br />
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>

                                </div>
                                </div>
                            <div>
                                <br />
                                {this.state.prodid1.length != 0 ? (
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ProductId</th>
                                                <th>price</th>
                                                <th>Enter u r available for the product</th>

                                            </tr>
                                        </thead>
                                    
                                        {this.state.prodid1[0].prodId.map((b,index)=>
                                            <tbody>
                                                <tr>
                                                    <td>{this.state.prodid1[0].prodId[index]}</td>
                                                    <td>{this.state.prodid1[0].price[index]}</td>
                                                    <td><input type="text" id="availability" className="form-control" placeholder="enter the availability "value={this.state.prodid1[0].available[index]} onBlur={(e) => { this.avail(e) }} /></td>

                                                </tr>


                                            </tbody>)}
                                    </table>) : []}
                                <button className="btn btn-outline-success" onClick={() => this.check2()}>submit</button>
                            </div>
                      

                         </div>
                    <div className="tab-pane fade show active container-fluid " id="nav-provider" role="tabpanel" aria-labelledby="nav-contact-tab">&nbsp;
                    <h2 className=" card man" style={{width: "auto",alignItems: 'center' ,backgroundColor:"rgb(148, 153, 153)"}} >Provider List </h2>
                    <table className=" table table-responsive" style={{backgroundColor:"white"}}>
                                <thead>
                                    <tr className="men">
                                        <th>Provider_id</th>
                                        <th>Provider_name</th>
                                        <th>Provider&nbsp;mobile&nbsp;number</th>
                                        <th>Provider_address</th>
                                        <th>Latitude</th>
                                        <th>Longitude</th>
                                        
                                        <th>Price</th>
                                        <th>ProdId</th>
                                        <th>Available</th>
                                        <th>Today_status</th>
                                        <th>Tax</th>
                                        <th>Zoom</th>
                                        <th>Select&nbsp;for&nbsp;edit</th>
                                    </tr>
                                 </thead>
                                {this.state.listData1.map(a =>

                                    <tbody className="">
                                        <tr>
                                            <td>{a.provider_id}</td>
                                            <td>{a.provider_name}</td>
                                            <td>{a.provider_mobile_number}</td>
                                            <td>{a.provider_address}</td>
                                            <td>{a.lat}</td>
                                            <td>{a.lon}</td>
                                            <td>   {/* {a.price} */} 
                                            <select>
                                            <option value="0">{a.price[0]}</option>
                                            <option value="1">{a.price[1]}</option>
                                            <option value="2">{a.price[2]}</option>
                                            </select></td>
                                            <td>{/* {a.prodId} */}
                                            <select>
                                            <option value="0">{a.prodId[0]}</option>
                                            <option value="1">{a.prodId[1]}</option>
                                            <option value="2">{a.prodId[2]}</option>
                                            </select></td>
                                            <td>
                                            <select>
                                            <option value="0">{a.available[0]}</option>
                                            <option value="1">{a.available[1]}</option>
                                            <option value="2">{a.available[2]}</option>
                                            </select>
                                            </td>
                                            <td>{a.today_status}</td>
                                            <td>{a.tax}</td>
                                            <td>{a.zoom}</td>
                                            {/* <td> <button id="#nav-profile-tab" className="btn btn-outline-danger btn-sm" onClick={()=>this.change(a)}  >updateAccount</button>         
                                            </td> */}
                                             <td><div className="radio">
                                                <label><input type="radio" name="optradio" onClick={() => this.change(a)} /><strong style={{ fontSize: "15px", fontFamily: "cursive" }}>update</strong></label>
                                            </div></td>


                                        </tr>

                                    </tbody>)}
                            </table><button className="btn btn-outline-success" onClick={() => this.change1()}>submit</button>
                        </div>

                    </div>
    
                </div>







            </div>
            
            
        )
    }
}
export default Provider;