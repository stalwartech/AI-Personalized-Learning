const Certificate = require("../models/Certificate");
const generateCertificateId = require("../utils/generateCertificateId");

exports.issueCertificateIfEligible = async (
  userId,
  track,
  completionRate
) => {
  if (completionRate < 100) return null;

  const existing = await Certificate.findOne({ user: userId, track });
  if (existing) return existing;

  const certificate = await Certificate.create({
    user: userId,
    track,
    certificateId: generateCertificateId()
  });

  return certificate;
};
