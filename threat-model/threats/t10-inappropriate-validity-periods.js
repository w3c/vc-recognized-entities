(function () {
  var threat = {
    "id": "T10",
    "name": "Stale Recognition Acceptance",
    "desc": "A revoked or compromised [=E2|issuer=] may continue to pass [=P6|Validate Credential(s)=] through two related failure modes. First, a [=O1|recognized entity credential=] with an excessively long <code>validUntil</code> period remains valid long after the [=E2|issuer=]\u2019s recognition has been withdrawn; a [=E3|holder=] who cached the credential before revocation may continue to present it successfully. Second, even when [=E1|list publishers=] set appropriate validity periods and publish timely updates via [=P7|Update List=], a [=E4|verifier=] that caches aggressively or operates offline may continue using stale list data well beyond an acceptable freshness window, accepting credentials from issuers whose recognition has since changed. Both failure modes share the same impact \u2014 a credential that should fail validation passes \u2014 but require complementary mitigations at the publisher and verifier levels respectively.",
    "response": [
      {
        "id": "R10",
        "name": "Risk-Proportionate Validity Periods, Revocation, and Cache Freshness Controls",
        "type": "Reduce",
        "desc": "[=E1|List publishers=] select validity periods appropriate to the risk profile and operational capacity of the ecosystem. High-risk or large ecosystems prefer short validity periods (24\u201348 hours); smaller, lower-risk ecosystems might use longer periods provided robust revocation mechanisms are also deployed. [=E1|List publishers=] provide revocation status endpoints that allow point-in-time queries rather than requiring full list re-fetches. [=E4|Verifier=] implementations check the <code>validUntil</code> field during [=P6|Validate Credential(s)=] and do not accept expired credentials. [=E4|Verifiers=] respect cache-control directives from [=E1|list publishers=] and enforce maximum cache TTLs appropriate to the ecosystem risk profile, performing fresh retrieval or live revocation checks when cached data exceeds the configured staleness threshold. Governance frameworks specify acceptable cache freshness windows for compliant [=E4|verifier=] implementations."
      }
    ],
    "elements": ["O1", "E1", "E2", "E3", "E4", "P1", "P6", "P7", "F5"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
