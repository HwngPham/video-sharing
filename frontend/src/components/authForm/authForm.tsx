import { ChangeEvent, FormEvent, useState } from "react";
import { useStore } from "../../store";
import { Button } from "../button/button";
import { TextInput } from "../textInput/textInput";

const initState = {
  email: "",
  password: "",
};
export const AuthForm = () => {
  const [formData, setFormData] = useState(initState);
  const [formError, setFormError] = useState(initState);
  const { login } = useStore();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email)
      return setFormError({ ...formError, email: "Email is required" });
    if (!formData.password)
      return setFormError({ ...formError, password: "Password is required" });

    await login(formData.email, formData.password);
  };

  return (
    <form onSubmit={onSubmit} className="text-sm flex gap-2 flex-wrap">
      <div className="flex flex-col gap-1 md:flex-row">
        <TextInput
          name="email"
          placeholder="email"
          required
          value={formData.email}
          onChange={onChange}
        />
        <TextInput
          name="password"
          type="password"
          placeholder="password"
          required
          value={formData.password}
          onChange={onChange}
        />
      </div>
      <Button type="submit">Login / Register</Button>
    </form>
  );
};
