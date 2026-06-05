(function () {
  var threat = {
    "id": "T1",
    "name": "Unauthorized Issuer Spoofing",
    "desc": "An entity that has not been granted a <code>RecognizedEntityCredential</code> by a legitimate [=E1|list publisher=] attempts to present itself as a recognized issuer. The attacker fabricates, replays, or reuses a stolen [=O1|recognized entity credential=] to make their [=O2|verifiable credentials=] appear to originate from a legitimately recognized entity. Without strict cryptographic verification of the full [=O1|recognized entity credential=] chain \u2014 from the issuer\u2019s credential back to a trusted [=E1|list publisher=] \u2014 a [=E4|verifier=] may accept credentials from actors who were never actually recognized. This is particularly dangerous in high-stakes scenarios such as cross-border trade finance or product conformity assessment, where a fraudulent issuer could cause significant economic harm.",
    "response": [
      {
        "id": "R1",
        "name": "Cryptographic Verification of the Recognized Entity Credential Chain",
        "type": "Reduce",
        "desc": "[=E4|Verifiers=] cryptographically verify that every [=O1|recognized entity credential=] in a presented chain carries a valid proof, that the <code>credentialSubject.id</code> of the [=O1|recognized entity credential=] matches the <code>issuer.id</code> of the credential under evaluation, and that the outermost [=O1|recognized entity credential=] was issued by an entity within the [=E4|verifier=]\u2019s configured set of trust anchors. The specification requires conforming processors to produce errors when these checks fail, preventing unverified entities from appearing to be recognized."
      }
    ],
    "elements": ["F4", "F5", "O2", "O1"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Spoofing"
  };

  window.ThreatModel.register(threat);
})();
