import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const App = () => {
  const [product, setproduct] = useState([])
  
  const getdata =async()=>{
    const req = await fetch("http://localhost:5000/api")
    const data = await req.json()

    setproduct(data)
    
  

  }

  useEffect(()=>{
    getdata()
  },[])
  
  console.log(product);


  return (
    <>
 <Row xs={1} md={4} className="g-4">
  {product.map((curval, idx) => (
    <Col>
      <Card  style={{ width: '18rem' }} className="bg-dark" text='light'   >
        <Card.Img variant="top" src={curval.image} style= {{widht : "15rem", height : "20rem"}}/>
        <Card.Body>
          <Card.Title>{curval.title}</Card.Title>
          {/* <Card.Text style= {{widht : "15rem", height : "15rem"}}>
            {curval.desc}
          </Card.Text> */}
          <Card.Text style={{fontSize : "0.8rem"}}>
          ⭐⭐
          ⭐⭐
          ⭐
          </Card.Text>
          <Card.Text   >
            ${curval.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
 
    </>
  )
}

export default App