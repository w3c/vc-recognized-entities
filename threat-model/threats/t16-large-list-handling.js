(function () {
  var threat = {
    "id": "T16",
    "name": "Improper Handling of Large Recognized Entity Lists",
    "desc": "A [=E1|list publisher=] may publish a [=O1|recognized entity credential=] whose embedded or referenced list of recognized entities grows to an impractical size, either through legitimate growth or through adversarial inflation. During [=P6|Validate Credential(s)=], a [=E4|verifier=] that naively loads, parses, or searches the entire list on each validation request may exhaust available memory, exceed timeout budgets, or degrade to denial-of-service conditions. This risk is distinct from T15 (schema attacks) because it is a structural data-size problem rather than a pathological computation pattern.",
    "response": [
      {
        "id": "R16",
        "name": "Paginated Retrieval and Size Limits",
        "type": "Reduce",
        "desc": "[=E4|Verifier=] implementations MUST impose maximum size limits on recognized entity lists loaded during [=P6|Validate Credential(s)=] and SHOULD reject or skip lists that exceed configurable thresholds. Implementations SHOULD use streaming or paginated access patterns rather than loading entire lists into memory. [=E1|List publishers=] SHOULD paginate large lists and provide indexed or hashed lookup mechanisms to allow [=E4|verifiers=] to check membership without retrieving the full list. Governance frameworks SHOULD set expectations on maximum list sizes appropriate to the ecosystem."
      }
    ],
    "elements": ["O1", "E1", "E4", "P6", "C4"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Denial of Service"
  };

  window.ThreatModel.register(threat);
})();
