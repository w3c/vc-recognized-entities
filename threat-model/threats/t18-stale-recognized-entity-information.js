(function () {
  var threat = {
    "id": "T18",
    "name": "Stale Recognized Entity Information",
    "desc": "A [=E4|verifier=] that caches a [=O1|recognized entity credential=] or the list it references may continue to trust an [=E2|issuer=] whose recognition has since been revoked, suspended, or modified by the [=E1|list publisher=]. Unlike T10, which concerns the validity period baked into the credential itself, this threat addresses the gap between a published update (via [=P7|Update List=]) and when the [=E4|verifier=] actually refreshes its local copy. Stale data may persist due to aggressive caching, network partitions, or offline operation, allowing revoked issuers to continue passing [=P6|Validate Credential(s)=] checks.",
    "response": [
      {
        "id": "R18",
        "name": "Cache Freshness Controls and Revocation Checks",
        "type": "Reduce",
        "desc": "[=E4|Verifier=] implementations MUST respect cache-control directives provided by [=E1|list publishers=] and SHOULD enforce maximum cache TTLs appropriate to the risk profile of the ecosystem. Implementations SHOULD perform fresh retrieval of recognized entity status — or check a live revocation endpoint — when the cached data is older than the configured maximum staleness threshold. [=E1|List publishers=] SHOULD provide revocation status endpoints that allow point-in-time queries rather than requiring full list re-fetches. Governance frameworks SHOULD specify acceptable cache freshness windows for compliant [=E4|verifier=] implementations."
      }
    ],
    "elements": ["O1", "E1", "E2", "E4", "P6", "P7", "F5"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
