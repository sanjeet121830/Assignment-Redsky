import React from 'react'
import data from "./data.json"
function Question3() {
    return (
        <div>
            <h2>Read Data From Json</h2>
            {data.map((item) => (
          <div>
              <div style={{textAlign:"center"}}>{item.desc}<br/></div>
          </div>  
      ))}
        </div>
    )
}

export default Question3
