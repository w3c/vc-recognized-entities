(function () {
  var threat = {
    "id": "T15",
    "name": "JSON Schema Attack",
    "desc": "The <code>outputValidation</code> property of a [=O1|recognized entity credential=] references JSON schema files used during [=P6|Validate Credential(s)=]. A maliciously crafted schema \u2014 introduced by a compromised [=E1|list publisher=], an attacker who has tampered with a schema hosted at an unprotected URL (see T11), or via a crafted [=O1|recognized entity credential=] \u2014 may contain pathological regular expressions or deeply nested structures that cause catastrophic backtracking or excessive memory consumption in the [=E4|verifier=]\u2019s JSON schema processor. This constitutes a denial-of-service attack against the [=C4|verifier system=] itself. Even without malicious intent, poorly-written schemas can cause the same effect.",
    "response": [
      {
        "id": "R15",
        "name": "Schema Complexity Limits and Safe Regex Validation",
        "type": "Reduce",
        "desc": "[=E4|Verifier=] implementations enforce time and memory limits on all JSON schema validation operations performed during [=P6|Validate Credential(s)=]. Implementations use schema validation libraries that protect against regex denial-of-service (ReDoS) by using linear-time regex engines or by bounding pattern complexity. [=E1|List publishers=] avoid complex or unbounded regular expressions in <code>outputValidation</code> schemas. Governance frameworks require schema review as part of the [=P1|Create List=] process to catch pathological patterns before publication."
      }
    ],
    "elements": ["O1", "E1", "E4", "P1", "P6", "C4"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Denial of Service"
  };

  window.ThreatModel.register(threat);
})();
