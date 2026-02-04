import { useEffect, useState } from "react";
import api from "../api/axios";
import CertificateCard from "../components/CertificateCard";
import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/dashboard").then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {data.name}</h1>

      <ProgressBar rate={data.progress.completionRate} />

      <h2 className="mt-4 font-semibold">Certificates</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.certificates.map(cert => (
          <CertificateCard key={cert.certificateId} cert={cert} />
        ))}
      </div>
    </div>
  );
}
