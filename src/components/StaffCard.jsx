
const StaffCard = ({firstName, lastName, position, DOB, imgUrl}) => { 

  const styles = {
    style: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      padding: "10px",
    },
    border: {
      border: "1px solid black",
      margin: "40px",
      justifyContent: "center",
      width: "300px",
      height: "500px"
      
    },

    top: {
      width: "300px",
      height: "140px",
      backgroundColor: "blue",
     
    },

    content: {
      margin: "20px",
      justifyContent: "center",
      
    },

    center: {
      alignContent: "center",
      alignItems: "center",
      paddingLeft: "60px"
    }
   
  }
 
  return (
    <div>
      
      <div style={styles.border}>
      <div style={styles.top}><h1 className="logo">GMC</h1></div>
     <div style={styles.content}>
    <div style={styles.center}> <img src={imgUrl} alt={`${firstName} ${lastName}`} style={styles.style} /></div>
      <h5>First Name: {firstName}</h5>
      <h5> Last Name: {lastName}</h5>
      <h5>Position: {position}</h5>
      <h5>DOB: {DOB}</h5>
     </div>
      </div>
      

    </div>
  )
}

export default StaffCard