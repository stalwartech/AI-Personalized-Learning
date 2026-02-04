export default function CertificateCard({ cert }) {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-semibold">{cert.track}</h3>
      <p>ID: {cert.certificateId}</p>
      <p>{new Date(cert.issuedAt).toDateString()}</p>
    </div>
  );
}
