import React from "react";
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      prod:[]
    }
  }
  async componentDidMount(){
    const res=await fetch("https://dummyjson.com/products")
    console.log(res);
    
    const products=await res.json()
    console.log(products.products);
    this.setState({prod:[...products.products]})
    
  }
  render(){
    console.log(this.state.prod);
    
    return <>
      <div className="main">
        <div className="cards">
        {this.state.prod.map((data)=>{return <div className="card">
          <div className="image">
            <img src={data.thumbnail} alt="" />
          </div>
          <div className="content">
            <p className="category">{data.category}</p>
            <h3>{data.title}</h3>
            <p className="price">${data.price}</p>
          </div>
          
        </div>})}
        </div>
      </div>
    </>
  }
}

export default App