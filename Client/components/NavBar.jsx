import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="p-4 bg-black text-white flex gap-4">
      {token && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/certificates">Certificates</Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
      {!token && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
