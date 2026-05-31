(function () {
  var threat = {
    "id": "T4",
    "name": "Privacy Leakage via Registry Fetch",
    "desc": "When a verifier fetches a recognized entity credential directly from the list publisher\u2019s server to confirm an issuer\u2019s status, the list publisher learns that a verification event involving that specific issuer is occurring. This fetch is correlated with the verifier\u2019s IP address and timestamp. In high-volume ecosystems with many issuers each referenced by a unique URL, the list publisher can build detailed surveillance logs mapping which verifiers are checking which issuers at what times \u2014 revealing commercial relationships, transaction volumes, and business activity patterns that neither the issuer nor the verifier intended to disclose.",
    "response": [
      {
        "id": "R4",
        "name": "Credential Stapling and Bulk Registry Retrieval",
        "type": "Reduce",
        "desc": "Holders SHOULD present the recognized entity credential directly alongside their verifiable credential (\u201ccredential stapling\u201d), eliminating the need for the verifier to contact the registry at verification time. When direct fetching cannot be avoided, verifiers SHOULD retrieve the full recognized entity credential rather than a per-issuer endpoint, so that any single fetch reveals only that the verifier is interested in some entity in that registry, not which specific issuer is being verified. Implementers SHOULD consider using privacy-preserving techniques such as anonymous credentials or blind fetch proxies for particularly sensitive ecosystems."
      }
    ],
    "elements": ["F3", "C2"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Information Disclosure"
  };

  window.ThreatModel.register(threat);
})();
