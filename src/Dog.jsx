function Dog(value){

  let[name,setName]=useState("hello");
  return(
    <h1>The Big Dog {value.name}</h1>
  )
}

export default Dog;