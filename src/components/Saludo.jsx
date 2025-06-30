const Saludo = ({msj}) => {
  return (
    <div className="animate__animated animate__tada animate__infinite">
      <h1 className="display-3 color-loop">Hello My Friend{msj}!</h1>
    </div>
  );
};

export default Saludo;