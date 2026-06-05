(function () {
  var threat = {
    "id": "T11",
    "name": "External Resource Substitution",
    "desc": "A [=O1|recognized entity credential=] may reference external resources \u2014 such as <code>outputValidation</code> schema files or governance documents \u2014 via URL. If those URLs are not integrity-protected, an attacker can substitute malicious content through any of three mechanisms: (1) compromising the hosting server directly and altering the files in [=S1|publisher storage=]; (2) acquiring or hijacking the domain the URL resolves to (e.g., via domain expiry or sale), allowing the new controller to replace previously trusted content; or (3) poisoning the DNS cache used by the [=E4|verifier=] during [=F5|Retrieve List=], redirecting resolution to an attacker-controlled server without the domain changing hands. In all three cases, [=E4|verifiers=] running [=P6|Validate Credential(s)=] who fetch and apply the substituted resource may accept [=O2|dependent verifiable credentials=] that fall outside the intended schema, or reject valid ones, without any indication that the external resource has been tampered with.",
    "response": [
      {
        "id": "R11",
        "name": "Content Integrity Protection, DNSSEC, and TLS Verification",
        "type": "Reduce",
        "desc": "[=E1|List publishers=] MUST use content integrity protection (such as <code>digestMultibase</code>) for all externally-referenced resources in [=O1|recognized entity credentials=]. Because content integrity verification detects substitution regardless of whether the attack is a server compromise, domain takeover, or DNS hijack, it is the primary defense against all three mechanisms. [=E4|Verifiers=] MUST verify the integrity of any fetched resource against the declared digest before applying it during [=P6|Validate Credential(s)=], and MUST treat a digest mismatch as a hard failure. [=E4|Verifiers=] SHOULD use DNSSEC-validating resolvers and MUST verify TLS certificates against expected values when fetching external resources. Where possible, schema files SHOULD be embedded directly in the credential or hosted on infrastructure under the [=E1|list publisher=]\u2019s direct control within the [=C1|publisher system=]. Any [=O1|recognized entity credential=] that references external resources without integrity protection SHOULD be rejected by conforming [=E4|verifiers=]."
      }
    ],
    "elements": ["O1", "E1", "E4", "F5", "P6", "C1", "S1"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
