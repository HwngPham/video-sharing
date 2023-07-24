import { ChangeEvent, FormEvent, useState } from "react";
import { useStore } from "../../store";
import { Button } from "../button/button";

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
    <form onSubmit={onSubmit} className="text-sm flex gap-1">
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-1 px-4 block w-full appearance-none leading-normal"
        name="email"
        placeholder="email"
        required
        value={formData.email}
        onChange={onChange}
      />
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-sm py-1 px-4 block w-full appearance-none leading-normal"
        name="password"
        type="password"
        placeholder="password"
        required
        value={formData.password}
        onChange={onChange}
      />
      <Button type="submit">Login / Register</Button>
    </form>
  );
};
