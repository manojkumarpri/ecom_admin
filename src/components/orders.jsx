import axios from 'axios';
import React, { Component } from 'react';
import './orders.css';
import './home.css';
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    }
  }
  componentWillMount() {
    axios.get("http://13.58.92.162:3000/orders").then(response => {
      this.setState({ listData: response.data });
      console.log(this.state.listData);

    })

  }
  
  render() {
    // var styles = StyleSheet.create({

    //   headline: {
    //     textAlign: 'center', // <-- the magic
    //     fontWeight: 'bold',
    //     fontSize: 18,
    //     marginTop: 0,
    //     width: 200,
    //     backgroundColor: 'yellow',
    //   }
    // })
    return (
      <div><br/>
      <div >
        <h1 className="card man " style={{width: "auto",alignItems: 'center',backgroundColor:"rgb(148, 153, 153)	"}} >Orders</h1>&nbsp;

      <div className="card ">
        <table className="table table-responsive" style={{backgroundColor:"white	"}}>
          <thead>
            <tr className="man text-white">
              <th>Cust_id</th>
              <th>Brandname</th>
              <th>Customer&nbsp;mobile&nbsp;number</th>
              <th>Invoice&nbsp;number</th>
              <th>Paymentoption</th>             
              <th>Provider&nbsp;mobile&nbsp;number</th>
              <th>Product&nbsp;id</th>
              <th>Total</th>
              <th>Quantity</th>
              <th>Product name</th>
              <th>Delivery address</th>
            </tr>
          </thead>
          {this.state.listData.map(a =>

            <tbody className="">
              <tr>
                <td>{a.cust_id}</td>
                <td>{a.brand_name}</td>
                <td>{a.customer_mobile_number}</td>
                <td>{a.invoice_number}</td>
                <td>{a.payment_option}</td>
                <td>{a.provider_mobile_number}</td>
                <td>{a.product_id}</td>
                <td>{a.total}</td>
                <td>{a.quantity}</td>
                <td>{a.product_name}</td>
                <td>{a.delivery_address}</td>
              </tr>
            </tbody>)}
        </table>
      </div>
     </div> </div>
    )
  }


}
export default Orders;