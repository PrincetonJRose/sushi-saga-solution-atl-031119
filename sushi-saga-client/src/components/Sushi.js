import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>props.eatSushi(props.sushiDetail)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.sushiDetail.eaten ?
              null
           :
            <img src={props.sushiDetail.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushiDetail.name} - ${props.sushiDetail.price}
      </h4>
    </div>
  )
}

export default Sushi