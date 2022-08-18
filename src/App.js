import "./App.scss"
import Field from "./components/Field";
import Form from "./components/Form";
import Submit from "./components/Submit";
import Textarea from "./components/Textarea";
import useForm from "./hooks/useForm";

const App = () => {
  
  const [data, loginForm, submit] = useForm({ email: "", password:"" })

  return (
    <Form submit={submit} formRef={loginForm}> 
      <Field type="text" name="fullname" value={data.nombre} label="Nombre"/>
      <Field type="email" name="mail" value={data.email} label="Correo electrónico"/>
      <Field type="number" name="age" value={data.pd} label="Edad"/>
      <Field type="range" name="ranking" value={data.password} label="Calificación"/>
      <Textarea name="obs" value={data.obs} label="Observaciones"/>
      <Submit value="Guardar" />
    </Form>
  );
}

export default App;