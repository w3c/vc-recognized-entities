(function () {
  var threat = {
    "id": "T17",
    "name": "Changed Domain Controller",
    "desc": "A [=O1|recognized entity credential=] may reference external resources — such as [=O2|dependent verifiable credential=] schemas, revocation status endpoints, or governance documents — using URLs whose underlying domains are later acquired or hijacked by a third party. If a domain changes hands (through expiry, sale, or takeover), the new controller can replace previously trusted content with malicious substitutes. During [=P6|Validate Credential(s)=], a [=E4|verifier=] that fetches live content from such a URL may be silently redirected to attacker-controlled data, potentially causing incorrect validation outcomes.",
    "response": [
      {
        "id": "R17",
        "name": "Content Integrity Verification for External References",
        "type": "Reduce",
        "desc": "[=E1|List publishers=] SHOULD include cryptographic content hashes (e.g., subresource integrity digests) alongside any external URLs referenced in [=O1|recognized entity credentials=], so that [=E4|verifiers=] can detect content substitution regardless of domain ownership changes. [=E4|Verifiers=] SHOULD verify content integrity before using any externally fetched resource during [=P6|Validate Credential(s)=]. Governance frameworks SHOULD audit external URLs referenced in credentials and alert when domain registration status changes."
      }
    ],
    "elements": ["O1", "E1", "E4", "F5", "P6"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
