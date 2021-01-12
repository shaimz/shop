/*import React, {Component} from 'react';
import {connect} from 'react-redux';


class PopUpCart extends Component{
    render(){
        let addedItems = this.props.items.length ? 
        (
            this.props.items.map(item=>{
                return(
                    <li className="d-flex" key={item.id}>
                    <img src={item.img} alt={item.title}/>
                    <div>
                    <p>{item.title}</p>
                    <span>Remove</span>
                    </div>
                    <span className="quantityPopUp">{item.quantity}</span>
                    </li>
                )
            })
        ):
        (
            <p>Nothings</p>
        )
        return(
            <div>
            <ul className="popUpCart" id="popUpCart">
            {addedItems}
            </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        items:state.addedItems,
    }
}


export default connect(mapStateToProps)(PopUpCart);*/