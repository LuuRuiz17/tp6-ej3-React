const Saludo = ({msj}) => {
  return (
    <div className="animate__animated animate__tada animate__infinite w-75">
      <h1 className="display-4 color-loop text-center">Hello My Friend{msj}!</h1>
    </div>
  );
};

export default Saludo;