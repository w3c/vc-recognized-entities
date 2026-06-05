(function () {
  var threat = {
    "id": "T18",
    "name": "Cryptographically Relevant Quantum Computer Breaks Cryptography",
    "desc": "The trust model for [=O1|recognized entity credentials=] and [=O2|dependent verifiable credentials=] depends on the cryptographic integrity of digital signatures. A sufficiently powerful cryptographically relevant quantum computer (CRQC) could break the elliptic-curve and RSA-based signature schemes commonly used today, allowing an attacker to forge signatures on credentials without possessing the private key. If such a capability becomes available before the ecosystem migrates to post-quantum cryptography, all previously issued credentials and recognition assertions become untrustworthy, and the entire chain of trust underpinning recognized entity infrastructure collapses.",
    "response": [
      {
        "id": "R18",
        "name": "Post-Quantum Cryptography Migration Planning",
        "type": "Reduce",
        "desc": "[=E1|List publishers=] and [=E2|issuers=] monitor the development of post-quantum cryptographic standards (e.g., NIST PQC finalists) and adopt algorithm agility in credential formats so that signature suites can be swapped without redesigning the entire system. Governance frameworks establish migration timelines for transitioning [=O1|recognized entity credentials=] to post-quantum signature schemes. [=E4|Verifiers=] are prepared to support hybrid signature verification (classical + post-quantum) during transition periods. All parties are aware that credentials issued today using classical cryptography might be vulnerable to retroactive forgery if harvested and attacked later."
      }
    ],
    "elements": ["O1", "O2", "E1", "E2", "E4", "P6"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
