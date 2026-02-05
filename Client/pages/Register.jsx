import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async () => {
    await api.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <div className="p-6">
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password"
        onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={submit}>Register</button>
    </div>
  );
}
