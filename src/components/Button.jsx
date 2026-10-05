

const Button = ({title, color, func}) => {
  // console.log(props);
  
    const shout=(name)=>{
        alert(`I was clicked by ${name}`)
    }

    let name = "sade"
  return (
   <button  className={`btn  ${color}` }onClick={func}>Click {title}</button>
  )
}

export default Button 