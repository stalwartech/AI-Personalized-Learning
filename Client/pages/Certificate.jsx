import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Certificates() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    api.get("/dashboard").then(res => {
      setCerts(res.data.certificates || []);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Your Certificates</h1>
      {certs.map(cert => (
        <div key={cert.certificateId} className="border p-4 mt-2">
          <p>{cert.track}</p>
          <p>{cert.certificateId}</p>
        </div>
      ))}
    </div>
  );
}
