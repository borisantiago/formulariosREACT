import "./App.scss"
import Field from "./components/Field";
import Form from "./components/Form";
import Submit from "./components/Submit";
import useForm from "./hooks/useForm";

const App = () => {
  
  const [data, loginForm, submit] = useForm({ email: "", password:"" })

  return (
    <Form submit={submit} formRef={loginForm}> 
      <Field type="email" value={data.email} label="Correo electrónico"/>
      <Field type="password" value={data.password} label="Contraseña"/>
      <Submit value="Login" />
    </Form>
  );
}

export default App;