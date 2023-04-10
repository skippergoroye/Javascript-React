import React from 'react'

// const PropsExample = (props) => {
//   return (
//     <div>
//       <h2>{props.heading}</h2>
//     </div>
//   )
// }


const PropsExample = ({ heading }) => {
  return (
    <div>
      <h2>{heading}</h2>
    </div>
  )
}

export default PropsExample