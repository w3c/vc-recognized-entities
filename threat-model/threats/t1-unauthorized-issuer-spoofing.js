(function () {
  var threat = {
    "id": "T1",
    "name": "Unauthorized Issuer Spoofing",
    "desc": "An entity that has not been granted a <code>RecognizedEntityCredential</code> by a legitimate list publisher attempts to present itself as a recognized issuer. The attacker fabricates, replays, or reuses a stolen recognized entity credential to make their verifiable credentials appear to originate from a legitimately recognized entity. Without strict cryptographic verification of the full recognized entity credential chain \u2014 from the issuer\u2019s credential back to a trusted list publisher \u2014 a verifier may accept credentials from actors who were never actually recognized. This is particularly dangerous in high-stakes scenarios such as cross-border trade finance or product conformity assessment, where a fraudulent issuer could cause significant economic harm.",
    "response": [
      {
        "id": "R1",
        "name": "Cryptographic Verification of the Recognized Entity Credential Chain",
        "type": "Reduce",
        "desc": "Verifiers MUST cryptographically verify that every recognized entity credential in a presented chain carries a valid proof, that the <code>credentialSubject.id</code> of the recognized entity credential matches the <code>issuer.id</code> of the credential under evaluation, and that the outermost recognized entity credential was issued by an entity within the verifier\u2019s configured set of trust anchors. The specification requires conforming processors to produce errors when these checks fail, preventing unverified entities from appearing to be recognized."
      }
    ],
    "elements": ["F4", "F5", "O2", "O1"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Spoofing"
  };

  window.ThreatModel.register(threat);
})();
