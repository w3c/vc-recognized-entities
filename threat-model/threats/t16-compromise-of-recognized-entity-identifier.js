(function () {
  var threat = {
    "id": "T16",
    "name": "Compromise of Recognized Entity Identifier",
    "desc": "A [=E2|issuer=] recognized in a [=O1|recognized entity credential=] is identified by a cryptographic identifier (such as a DID or a public key). If an attacker compromises the private key material associated with that identifier — through phishing, insider threat, infrastructure breach, or cryptographic weakness — the attacker can impersonate the legitimate [=E2|issuer=] during [=P4|Credential Issuance=]. [=E4|Verifiers=] performing [=P6|Validate Credential(s)=] will see a valid cryptographic signature from a recognized identifier, and will have no basis to distinguish legitimate from fraudulent issuance. This is distinct from T1 (spoofing a non-recognized issuer) because the compromised identifier is genuinely enrolled in the registry.",
    "response": [
      {
        "id": "R16",
        "name": "Key Rotation, Revocation Notification, and Hardware Security",
        "type": "Reduce",
        "desc": "[=E2|Issuers=] SHOULD protect signing keys with hardware security modules or equivalent tamper-resistant key storage. [=E1|List publishers=] SHOULD support rapid key rotation and revocation notification workflows so that a compromised identifier can be removed from recognition without waiting for scheduled [=P7|Update List=] cycles. Governance frameworks SHOULD require [=E2|issuers=] to report suspected key compromise promptly and SHOULD define incident response procedures. [=E4|Verifiers=] SHOULD subscribe to revocation feeds or check revocation status in near-real-time for high-value validation scenarios."
      }
    ],
    "elements": ["O1", "E1", "E2", "E4", "P4", "P6", "P7"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Spoofing"
  };

  window.ThreatModel.register(threat);
})();
