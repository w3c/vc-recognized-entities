(function () {
  var threat = {
    "id": "T10",
    "name": "Inappropriate Validity Periods",
    "desc": "A [=O1|recognized entity credential=] with an excessively long <code>validUntil</code> period may remain in circulation long after a recognized [=E2|issuer=] has been suspended, revoked, or compromised. A [=E3|holder=] who has cached the credential may continue to [=F4|present=] it \u2014 and have it accepted by [=E4|verifiers=] running [=P6|Validate Credential(s)=] \u2014 beyond the point where the [=E2|issuer=]\u2019s recognition is still valid. Conversely, overly short validity periods create operational burden for [=E1|list publishers=] who must frequently re-sign and re-publish via [=P7|Update List=], and for [=E3|holders=] who must regularly obtain fresh credentials. The appropriate balance depends on list size, ecosystem risk profile, and operational capacity.",
    "response": [
      {
        "id": "R10",
        "name": "Risk-Proportionate Validity Periods Paired with Revocation",
        "type": "Reduce",
        "desc": "[=E1|List publishers=] SHOULD select validity periods appropriate to the risk profile and operational capacity of the ecosystem. High-risk or large ecosystems should prefer short validity periods (24\u201348 hours) to limit the window during which a stale or compromised [=O1|recognized entity credential=] can be used. Smaller, lower-risk ecosystems may use longer periods (weeks to months) provided robust revocation mechanisms are also deployed. [=E4|Verifiers=] MUST check the <code>validUntil</code> field during [=P6|Validate Credential(s)=] and MUST NOT accept expired credentials. Revocation mechanisms such as status lists SHOULD be used in conjunction with validity periods to allow timely removal of compromised [=E2|issuers=] without waiting for credential expiry."
      }
    ],
    "elements": ["O1", "E1", "E2", "E3", "E4", "P1", "P7", "P6"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
