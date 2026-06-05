(function () {
  var threat = {
    "id": "T3",
    "name": "List Fetch Denial of Service",
    "desc": "When [=E4|verifiers=] are configured to fetch [=O1|recognized entity credential=] resources directly from external URLs rather than relying on [=E3|holder=]-provided credentials, two related denial-of-service conditions can arise. First, a surge of simultaneous verification requests can overwhelm the list host, turning the [=O1|recognized entity credential=] list into a single point of failure for the entire ecosystem. Second, a malicious or compromised server hosting a [=O1|recognized entity credential=] can respond very slowly, returning a large payload byte-by-byte, causing [=E4|verifier=] processes to hang indefinitely while waiting for the response. This can exhaust connection pools or computing resources in high-throughput verification systems such as customs authorities processing thousands of trade documents per hour.",
    "response": [
      {
        "id": "R3",
        "name": "Credential Stapling, Caching, and Timeouts",
        "type": "Reduce",
        "desc": "[=E3|Holders=] SHOULD present [=O1|recognized entity credentials=] directly to [=E4|verifiers=] (\u201ccredential stapling\u201d) rather than requiring [=E4|verifiers=] to fetch them from a list. This distributes the load across all [=E3|holders=] rather than concentrating it on the list host. When direct fetching is necessary, [=E4|verifier=] implementations MUST enforce both connection and read timeouts on all list fetches and MUST enforce maximum payload size limits. [=E4|Verifiers=] SHOULD cache resolved [=O1|recognized entity credentials=] with appropriate TTLs aligned to the credential\u2019s <code>validUntil</code> period. [=E1|List publishers=] SHOULD deploy content delivery network infrastructure and rate limiting."
      }
    ],
    "elements": ["F5", "C1", "S1"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Denial of Service"
  };

  window.ThreatModel.register(threat);
})();
