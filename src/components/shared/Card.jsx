function Card({children, reverse}) {
  // return (
  //   <div className={`card ${reverse && 'reverse'}`}>
  //     {children}
  //   </div>
  // )

  return (
  <div className="card" style={{
    backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#ffffff',
    textColor: reverse ? '#ffffff': '#000000'
  }}>
  </div> 
  )
}

export default Card
