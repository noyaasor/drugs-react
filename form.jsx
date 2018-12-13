import React, { Component } from 'react';
import $ from 'jquery';

export default class Form extends Component {
    
constructor(){
    super();
this.state={
name:"",
quantity:"",
price:""
}
this.handleChangeName=this.handleChangeName.bind(this)
}

handleChangeName(e){
    if(e.currentTarget.value)
this.setState({name:e.currentTarget.value})
else
console.log("error");

}


    

    render() {

      return (
        <div >
        <form>
            <span>name:</span>
            <input onChange={this.handleChangeName} id="name" type="text"/>
            <br/>
            <span>quantity:</span>
            <input id="quantity" type="text"/>
            <br/>

            <span>price:</span>
            <input id="price" type="text"/>
            <br/>

            <button type="button" onClick={
               
                ()=>{
                    this.props.handleAddToCart(this.state)}
                }
                >Add Card</button>

        </form>
        </div>
      );
    }
  }
  
