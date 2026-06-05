(function () {
  var threat = {
    "id": "T2",
    "name": "Recognized Entity Credential Tampering",
    "desc": "When a holder presents a bundle containing both their own verifiable credential and a recognized entity credential, a malicious intermediary could swap or modify the recognized entity credential, substituting one that makes an unrecognized issuer appear legitimate. For example, a transport layer intermediary could replace a valid recognized entity credential bound to Issuer A with one bound to Issuer B, effectively laundering an unrecognized issuer\u2019s credentials through a legitimate recognition chain. Without integrity protection on the binding between the verifiable credential and its associated recognized entity credential, such substitution is undetectable.",
    "response": [
      {
        "id": "R2",
        "name": "Cryptographic Binding Between Credential and Recognition",
        "type": "Reduce",
        "desc": "Recognized entity credentials MUST be cryptographically signed by the list publisher using a verifiable proof. Verifiers MUST confirm that the <code>credentialSubject.id</code> of the recognized entity credential exactly matches the <code>issuer.id</code> (or <code>issuer</code> value) in the presented verifiable credential. Any mismatch MUST cause the verification to fail. Because each recognized entity credential is independently signed, tampering with the binding is detectable through standard proof verification."
      }
    ],
    "elements": ["F2", "O1", "O2"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
