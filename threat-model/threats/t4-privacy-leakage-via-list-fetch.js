(function () {
  var threat = {
    "id": "T4",
    "name": "Privacy Leakage via List Fetch",
    "desc": "When a [=E4|verifier=] fetches a [=O1|recognized entity credential=] over the network to confirm an [=E2|issuer=]\u2019s status, the party serving that fetch learns that a verification event involving that specific [=E2|issuer=] is occurring. The fetch is correlated with the [=E4|verifier=]\u2019s IP address and timestamp. In high-volume ecosystems with many [=E2|issuers=] each referenced by a unique URL, the serving party can build detailed surveillance logs mapping which [=E4|verifiers=] are checking which [=E2|issuers=] at what times \u2014 revealing commercial relationships, transaction volumes, and business activity patterns that neither the [=E2|issuer=] nor the [=E4|verifier=] intended to disclose. Who learns this depends on where the [=O1|recognized entity credential=] is retrieved from. Fetching from a [=E1|list publisher=]\u2019s server exposes the verification event to the [=E1|list publisher=]. Fetching from a whois service endpoint declared in an [=E2|issuer=]\u2019s controlled identifier document exposes it to the [=E2|issuer=] itself, which learns of each verification of its own credentials and cannot be mitigated by retrieving a larger list, because such an endpoint serves a single [=E2|issuer=] by construction.",
    "response": [
      {
        "id": "R4",
        "name": "Credential Stapling and Bulk List Retrieval",
        "type": "Reduce",
        "desc": "Deployments choose a delivery mechanism according to how much it discloses. Delivery by the [=E3|holder=] discloses the least. [=E3|Holders=] present the [=O1|recognized entity credential=] directly alongside their [=O2|verifiable credential=] (\u201ccredential stapling\u201d), so no third party is contacted at verification time and no party other than the [=E4|verifier=] learns that the verification occurred. Retrieval from a [=E1|list publisher=] discloses more, and [=E4|verifiers=] that retrieve the full [=O1|recognized entity credential=] rather than contacting a per-issuer endpoint ensure that any single fetch reveals only that the [=E4|verifier=] is interested in some entity in that list, not which specific [=E2|issuer=] is being verified. Retrieval from a whois service endpoint discloses the most, because the endpoint serves a single [=E2|issuer=] and that [=E2|issuer=] therefore learns of every verification of its own credentials. When a [=E4|verifier=] cannot avoid fetching, it reduces the exposure by caching retrieved [=O1|recognized entity credentials=] for their validity period rather than fetching them per transaction, and by issuing the request through Oblivious HTTP [[?RFC9458]], which separates the request from the [=E4|verifier=]\u2019s IP address so that the serving party learns which [=O1|recognized entity credential=] was requested but not who requested it. Implementers consider using privacy-preserving techniques such as anonymous credentials or blind fetch proxies for particularly sensitive ecosystems."
      }
    ],
    "elements": ["F5", "C1"],
    "tags": ["privacy"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Information Disclosure"
  };

  window.ThreatModel.register(threat);
})();
