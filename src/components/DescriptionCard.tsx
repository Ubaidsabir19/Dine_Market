import React from 'react'

function DescriptionCard(props:{title:string , description:string }) {
    return (
        <div>
        <h3 className = 'font-bold mt-4 text-lg'>{props.title}</h3>
        <h3 className = 'text-md'>{props.description}</h3>
        </div>
    )
  }
  
  export default DescriptionCard