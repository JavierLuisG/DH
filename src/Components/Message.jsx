const message = ({ user, verify }) => {

  let color = "";
  let bgColor = "";
  if (verify == 2) {
    bgColor = "rgba(84, 141, 58, 0.500)"
    color ="1px solid green";
  } else {
    bgColor = "rgba(141, 75, 58, 0.500)"
    color = "1px solid red";
  }

  const styles = {
    textAlign: "center",
    margin: "15px 0",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: bgColor,
    border: color
  };

  return (
    <>
      {verify == 2 ? (
        <div style={styles}>
          <h4>Gracias {user.name}!</h4>
          <p>Te contactaremos cuanto antes vía email</p>
        </div>
      ) : (
        <div style={styles}>
          Por favor! verifique su información nuevamente
        </div>
      )}
    </>
  );
};

export default message;
