(function () {
  var threat = {
    "id": "T2",
    "name": "Recognized Entity Credential Tampering",
    "desc": "When a [=E3|holder=] presents a bundle containing both their own [=O2|verifiable credential=] and a [=O1|recognized entity credential=], a malicious intermediary could swap or modify the [=O1|recognized entity credential=], substituting one that makes an unrecognized issuer appear legitimate. For example, a transport layer intermediary could replace a valid [=O1|recognized entity credential=] bound to Issuer A with one bound to Issuer B, effectively laundering an unrecognized issuer\u2019s credentials through a legitimate recognition chain. Without integrity protection on the binding between the [=O2|verifiable credential=] and its associated [=O1|recognized entity credential=], such substitution is undetectable.",
    "response": [
      {
        "id": "R2",
        "name": "Cryptographic Binding Between Credential and Recognition",
        "type": "Reduce",
        "desc": "[=O1|Recognized entity credentials=] MUST be cryptographically signed by the [=E1|list publisher=] using a verifiable proof. [=E4|Verifiers=] MUST confirm that the <code>credentialSubject.id</code> of the [=O1|recognized entity credential=] exactly matches the <code>issuer.id</code> (or <code>issuer</code> value) in the presented [=O2|verifiable credential=]. Any mismatch MUST cause the verification to fail. Because each [=O1|recognized entity credential=] is independently signed, tampering with the binding is detectable through standard proof verification."
      }
    ],
    "elements": ["F4", "O2", "O1"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
