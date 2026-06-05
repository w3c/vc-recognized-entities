(function () {
  var threat = {
    "id": "T22",
    "name": "DNS-Based List Injection",
    "desc": "Recognized entity list retrieval during [=F5|Retrieve List=] typically involves resolving a domain name to locate the [=C1|publisher system=] hosting the list. If an attacker can poison the DNS cache used by a [=E4|verifier=] or intercept DNS queries (e.g., via a rogue resolver, BGP hijack, or DNS spoofing), the [=E4|verifier=] may be directed to a malicious server that serves a fraudulent recognized entity list. The [=E4|verifier=] would then validate credentials against attacker-controlled recognition data during [=P6|Validate Credential(s)=], potentially accepting credentials from unrecognized issuers or rejecting credentials from legitimate ones.",
    "response": [
      {
        "id": "R22",
        "name": "DNSSEC, TLS Pinning, and Integrity Verification",
        "type": "Reduce",
        "desc": "[=E4|Verifier=] implementations SHOULD use DNSSEC-validating resolvers when fetching recognized entity lists during [=F5|Retrieve List=] to protect against DNS cache poisoning. Connections to [=E1|list publisher=] endpoints MUST use TLS, and implementations SHOULD verify the server certificate against expected values. Where possible, [=E1|list publishers=] SHOULD sign their lists so that [=E4|verifiers=] can verify authenticity independently of transport-layer integrity. [=E4|Verifiers=] SHOULD treat unexpected certificate changes or DNS resolution failures as indicators of potential attack and SHOULD fail closed rather than falling back to an unauthenticated source."
      }
    ],
    "elements": ["O1", "E1", "E4", "F5", "P6", "C1"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Spoofing"
  };

  window.ThreatModel.register(threat);
})();
