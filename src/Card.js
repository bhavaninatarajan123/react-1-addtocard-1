
import {Component} from "react"
class Card extends Component{
    render(){
        const {data}=this.props
        const listData=data.map((e,i)=>{
            return(
            
                <div className="col" key={i}>
                                        <div className="card">
                                         <h3 className="heading"> {e.product}</h3>
                                         {/* <img {e.image}/> */}
                                        <h4> {e.price}</h4>
                                         <h5> {e.offer}</h5>
                                        <h6> {e.delivery}</h6>
                                        <p> <i  id="star"className="fa fa-star" aria-hidden="true"></i> {e.rating}</p>
                                        <p> {e.offer}</p>
                                        </div> 
                </div>
               
        
                
        )
        })
       
    
    return (
     <div>
        <div className="condainer">
                        <div className="row">
                            
                                 {listData} 
                                
                        </div>         
        </div> 
    </div>             
    )
    }
}
 
 export default Card ;

 