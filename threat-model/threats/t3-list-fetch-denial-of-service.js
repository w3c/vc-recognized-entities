(function () {
  var threat = {
    "id": "T3",
    "name": "List Retrieval Denial of Service",
    "desc": "When [=E4|verifiers=] fetch [=O1|recognized entity credential=] resources directly from external URLs, two classes of denial-of-service condition can arise. At the network layer, a surge of simultaneous verification requests can overwhelm the [=C1|publisher system=] list host, turning the [=O1|recognized entity credential=] list into a single point of failure; alternatively, a slow-drip server can return a response byte-by-byte, causing [=E4|verifier=] processes to hang indefinitely and exhaust connection pools. At the data layer, a [=O1|recognized entity credential=] whose list of recognized entities grows to an impractical size \u2014 either through legitimate growth or adversarial inflation \u2014 can exhaust memory or CPU when the [=E4|verifier=] naively loads, parses, or searches the entire list during [=P6|Validate Credential(s)=]. High-throughput verification systems (such as customs authorities processing thousands of trade documents per hour) are especially vulnerable to both classes of attack.",
    "response": [
      {
        "id": "R3",
        "name": "Credential Stapling, Caching, Timeouts, and Size Limits",
        "type": "Reduce",
        "desc": "[=E3|Holders=] present [=O1|recognized entity credentials=] directly to [=E4|verifiers=] (\u201ccredential stapling\u201d) rather than requiring [=E4|verifiers=] to fetch them, distributing load away from the list host. When direct fetching is necessary, [=E4|verifier=] implementations enforce both connection and read timeouts and enforce maximum payload size limits on all list fetches. [=E4|Verifiers=] impose maximum list size thresholds and reject or skip lists that exceed configurable limits. Implementations use streaming or paginated access patterns rather than loading entire lists into memory. [=E4|Verifiers=] cache resolved [=O1|recognized entity credentials=] with appropriate TTLs aligned to the credential\u2019s <code>validUntil</code> period. [=E1|List publishers=] deploy content delivery network infrastructure, rate limiting, and paginated or indexed lookup mechanisms to allow [=E4|verifiers=] to check membership without retrieving full lists."
      }
    ],
    "elements": ["O1", "E1", "E3", "E4", "F5", "P6", "C1", "C4", "S1"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Denial of Service"
  };

  window.ThreatModel.register(threat);
})();
