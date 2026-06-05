(function () {
  var threat = {
    "id": "T4",
    "name": "Privacy Leakage via List Fetch",
    "desc": "When a [=E4|verifier=] fetches a [=O1|recognized entity credential=] directly from the [=E1|list publisher=]\u2019s server (the list host) to confirm an [=E2|issuer=]\u2019s status, the [=E1|list publisher=] learns that a verification event involving that specific [=E2|issuer=] is occurring. This fetch is correlated with the [=E4|verifier=]\u2019s IP address and timestamp. In high-volume ecosystems with many [=E2|issuers=] each referenced by a unique URL, the [=E1|list publisher=] can build detailed surveillance logs mapping which [=E4|verifiers=] are checking which [=E2|issuers=] at what times \u2014 revealing commercial relationships, transaction volumes, and business activity patterns that neither the [=E2|issuer=] nor the [=E4|verifier=] intended to disclose.",
    "response": [
      {
        "id": "R4",
        "name": "Credential Stapling and Bulk List Retrieval",
        "type": "Reduce",
        "desc": "[=E3|Holders=] present the [=O1|recognized entity credential=] directly alongside their [=O2|verifiable credential=] (\u201ccredential stapling\u201d), eliminating the need for the [=E4|verifier=] to contact the list host at verification time. When direct fetching cannot be avoided, [=E4|verifiers=] retrieve the full [=O1|recognized entity credential=] rather than contacting a per-issuer endpoint, so that any single fetch reveals only that the [=E4|verifier=] is interested in some entity in that list, not which specific [=E2|issuer=] is being verified. Implementers consider using privacy-preserving techniques such as anonymous credentials or blind fetch proxies for particularly sensitive ecosystems."
      }
    ],
    "elements": ["F5", "C1"],
    "tags": ["privacy"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Information Disclosure"
  };

  window.ThreatModel.register(threat);
})();
