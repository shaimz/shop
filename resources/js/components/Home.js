import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from './actions/cartActions';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class Home extends Component{
    handleClick = (id) => {
        this.props.addToCart(id);
    }
    countClick = () =>{
        let popUpSpan = document.querySelector('.popUpSpan');
        let quantity = 0;
        $('#popUp').fadeIn(500);

        this.props.countItems.map(item=>{
            quantity += parseInt(item.quantity);
        });
        popUpSpan.innerHTML = quantity;
    }

    handleDetails = (id) => {
        let modal = $('#modal');

        let item = this.props.items.find(e => e.id === id);

        modal.find('.product_title').text(item.title);
    }

    popUpCart =() =>{
        let cart = $('#popUpCart');
        cart.toggleClass('popUpCart');
    }

    componentDidUpdate(){
        let popUpSpan = document.querySelector('.popUpSpan');
        let quantity = 0;
        $('#popUp').fadeIn(500);

        this.props.countItems.map(item=>{
            quantity += parseInt(item.quantity);
        });
        popUpSpan.innerHTML = quantity;
    }

render(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    let itemList = this.props.items.map(item=>{
        return(
            <div key={item.id}>
                <div className="card p-4 m-2" key={item.id}>
                <div className="card-image card-img-top img-responsive">
                    <img src={item.img} alt={item.title}/>
                </div>
                <div className="card-title">
                <p>{item.title}</p>
                </div>
                <p className="text-secondary">{item.desc}</p>
                <p className="card-price">{item.price}$</p>
                <div className="card-info ml-auto">
                <span data-toggle="modal" data-target="#modal" id="modal_details" to="/" onClick={() => {this.handleDetails(item.id)}} className="btn">DETAILS</span>
                <span to='/' onClick={()=>{this.handleClick(item.id);this.countClick();}} className="btn btn-dark btnHandler">ADD TO CART</span>
                </div>
                </div>
            </div>
        )
    })
    return(
        <div className="container">
        <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}' id="slider">
            <div className="bg1"></div>
            <div className="bg2"></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className="text-center mt-4">
        <h1>STORE</h1>
        <p className="text-secondary">This is the store page</p>
        </div>
        <div className="searchBox">

        </div>
        <div className="row row-cards">
            {itemList}
        </div>
        <div id="popUp">
            <Link to="/Cart"><img onClick={()=>{this.popUpCart()}} src="https://codyhouse.co/demo/add-to-cart-interaction/assets/img/cd-icons-cart-close.svg" alt='cart'/></Link>
        <div className="popUpSpan"></div>
        </div>

            <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h1 className="product_title">Product Name</h1>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        items: state.items,
        countItems: state.addedItems
    }
}



const mapDispatchToProps = (dispatch) => {
    return{
        addToCart:(id)=>{dispatch(addToCart(id))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
