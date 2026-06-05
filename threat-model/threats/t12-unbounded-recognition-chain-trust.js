(function () {
  var threat = {
    "id": "T12",
    "name": "Unbounded Recognition Chain Trust",
    "desc": "The <code>recognizedIn</code> property allows [=O1|recognized entity credentials=] to chain to other registries \u2014 such as ETSI Trust Service Lists, X.509 certificate authority lists, or other [=O1|recognized entity credentials=]. A compromised or malicious entry in a lower-level registry could be transitively trusted if [=E4|verifiers=] do not enforce depth limits or independently validate each link during [=P6|Validate Credential(s)=]. Unbounded transitive trust chains amplify the blast radius of any single compromised registry: an attacker who compromises a registry at any depth gains the ability to assert recognition claims that propagate upward through the entire chain to [=E4|verifiers=] that have configured only a top-level trust anchor.",
    "response": [
      {
        "id": "R12",
        "name": "Chain Depth Limits and Per-Link Validation",
        "type": "Reduce",
        "desc": "[=E4|Verifiers=] MUST enforce a maximum depth limit when traversing recognition chains via <code>recognizedIn</code>. Each link in the chain MUST be independently validated for cryptographic integrity and issuer trust during [=P6|Validate Credential(s)=] \u2014 transitive trust from a higher-level registry does not substitute for independent validation of each link. Ecosystem governance frameworks SHOULD specify maximum permitted chain depths and enumerate the specific registry types that may appear at each level. [=E4|Verifiers=] SHOULD reject chains that exceed the configured depth or that include registry types not explicitly permitted by their governance configuration."
      }
    ],
    "elements": ["O1", "E1", "E4", "F5", "P6"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Elevation of Privilege"
  };

  window.ThreatModel.register(threat);
})();
