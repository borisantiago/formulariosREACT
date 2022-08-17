
import { useForm } from "react-hook-form";
import "./App.scss"

const App = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = data => {
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="ed-grid">
      <form className="ed-container l-30" onSubmit={handleSubmit(submit)}>

        <div className="ed-item form__item">
          <label htmlFor="email">
            Correo electrónico
            <input 
              { ...register( "email", { required: "El correo es obligatorio"} ) }
              type="email" 
              name="email" 
              id="email" 
              defaultValue=""
            />
            { 
              errors?.email && 
              <span className="color red-500"> { errors?.email?.message } </span>
             }
          </label>
        </div>
        <div className="ed-item form__item">
          <label htmlFor="password">
            Contraseña
            <input 
              { ...register( "password", { 
                required: "La contraseña es obligatoria",
                minLength: 4,
                maxLength: 10,
              }) }
              type="password" 
              name="password" 
              id="password"
              defaultValue=""
            />
            { 
              errors?.password && 
              <span className="color red-500"> { errors?.password?.message } </span>
             }
          </label>
        </div>
        <div className="ed-item form__item">
          <input type="submit" value="Ingresar" className="button full"/>
        </div>

      </form>

    </div>
  );
}

export default App;
