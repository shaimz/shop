import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import {addQuantity,subtractQuantity,deleteItem, clearItems} from './actions/cartActions';
import 'react-icons/fa';
import '../css/Cart.css';
import { FaMinus, FaPlusCircle, FaTrash } from 'react-icons/fa';

class Cart extends Component{
    handleAddQuantity = (id) =>{
        this.props.addQuantity(id);
    }
    handleSubQuantity=(id)=>{
        this.props.subtractQuantity(id);
    }
    handleDeleteItem = (id) => {
        this.props.deleteItem(id);
    }
    handleClearItems = () => {
        this.props.clearItems();
    }

    render(){
        const formatNumber = () => {
            return this.props.total;
        }
        const formatCount = () => {
            let count = 0;

            this.props.items.map(item=>{
                count += item.quantity;
            })

            return count;
        }

        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item=>{
                return(
                    <div className="row no-gutters py-2" key={item.id}>
                        <div className="col-sm-2 p-2">
                        <img
                            alt={item.title}
                            style={{margin: "0 auto", maxHeight: "50px"}}
                            src={item.img} className="img-fluid d-block"/>
                        </div>
                        <div className="col-sm-4 p-2">
                            <h5 className="mb-1">{item.title}</h5>
                            <p className="mb-1 text-secondary">Price: ${item.price} </p>
                        </div>
                        <div className="col-sm-2 p-2 text-center ">
                            <p className="mb-0">Qty: {item.quantity}</p>
                        </div>
                        <div className="col-sm-4 p-2 text-right">
                            <button
                                onClick={() => this.handleAddQuantity(item.id)}
                                className="btn btn-primary btn-sm mr-2 mb-1">
                            <FaPlusCircle width={"20px"}/>
                            </button>

                        {
                            item.quantity > 1 &&
                            <button
                                onClick={() => this.handleSubQuantity(item.id)}
                                className="btn btn-danger btn-sm mb-1">
                                <FaMinus width={"20px"}/>
                            </button>
                        }

                        {
                            item.quantity === 1 &&
                            <button
                                onClick={() => this.handleDeleteItem(item.id)}
                                className="btn btn-danger btn-sm mb-1">
                                <FaTrash width={"20px"}/>
                            </button>
                        }

                    </div>
                </div>
                )
            })
        ):
        (
            ''
        )
        return(
            <div className="container">
            <div className="cart">
            <h5 align="center">CART</h5>
            <p align="center">This is the cart page!</p>
            <div className="row no-gutters justify-content-center">
                <div className="col-sm-9 p-3">
                    <div className="card card-body border-0">
                        {addedItems}
                    </div>
                </div>
                {
                    <div className="col-sm-3 p-3">
                        <div className="card card-body">
                            <p className="mb-1">Total Items</p>
                            <h4 className=" mb-3 txt-right">{formatCount()}</h4>
                            <p className="mb-1">Total Payment</p>
                            <h3 className="m-0 txt-right">${formatNumber()}</h3>
                            <hr className="my-4"/>
                            <div className="text-center">
                                <button type="button" className="btn btn-primary mb-2">CHECKOUT</button>
                                <button type="button" className="btn btn-outline btn-sm" onClick={() => this.handleClearItems()}>CLEAR</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))},
        deleteItem: (id) => {dispatch(deleteItem(id))},
        clearItems: () => {dispatch(clearItems())}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
