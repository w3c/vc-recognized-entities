(function () {
  var threat = {
    "id": "T17",
    "name": "Verifier Trust Anchor Misconfiguration",
    "desc": "During [=P3|Configure Verifier=], a [=E4|verifier=] operator may accidentally or incorrectly configure the system to reference the wrong [=O1|recognized entity credential=] as its trust anchor — for example, pointing to a test registry instead of a production registry, or to a registry managed by a different governance authority than intended. As a result, during [=P6|Validate Credential(s)=], the [=E4|verifier=] will accept credentials from issuers recognized by the wrong registry, potentially granting trust to entities that have not been vetted by the intended governance framework. This is an accidental misconfiguration risk rather than an active attack.",
    "response": [
      {
        "id": "R17",
        "name": "Trust Anchor Verification and Configuration Audits",
        "type": "Reduce",
        "desc": "[=E4|Verifier=] implementations SHOULD display the resolved identity of the configured trust anchor (e.g., the subject DID or name from the [=O1|recognized entity credential=]) prominently during setup so that operators can confirm they have the correct registry. Deployment tooling SHOULD require explicit operator confirmation when configuring trust anchors in production environments. Governance frameworks SHOULD provide well-known, stable identifiers for their authoritative registries and SHOULD distinguish test and production registries clearly. Operators SHOULD perform periodic audits of [=C4|verifier system=] trust anchor configuration as part of routine security reviews."
      }
    ],
    "elements": ["O1", "E1", "E4", "P3", "P6", "C4"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Elevation of Privilege"
  };

  window.ThreatModel.register(threat);
})();
