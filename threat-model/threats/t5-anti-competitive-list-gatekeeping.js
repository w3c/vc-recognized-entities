(function () {
  var threat = {
    "id": "T5",
    "name": "Anti-Competitive List Gatekeeping",
    "desc": "A first-mover that establishes the initial recognized entity credential list for a market vertical \u2014 such as a national business register, an accreditation authority, or an industry consortium \u2014 can selectively deny registration to competitors or disfavored entities, creating a de facto monopoly or anti-competitive lock-in. Verifiers that rely exclusively on a single recognized entity credential list become entirely dependent on the list publisher\u2019s goodwill and business interests. Conversely, a list publisher can also be coerced by governments or other powerful actors into revoking the recognition of legitimate entities, effectively censoring them from the ecosystem.",
    "response": [
      {
        "id": "R5",
        "name": "List Pluralism via Multi-Trust-Anchor Configuration",
        "type": "Reduce",
        "desc": "The specification permits and encourages multiple overlapping and competing recognized entity credential registries. Verifiers SHOULD be configurable with multiple independent trust anchors, so that an entity recognized by any one list from within the configured set is accepted. This prevents any single list publisher from having veto power over ecosystem participation. Ecosystem designers SHOULD actively encourage multiple independent list publishers to publish recognized entity credentials for the same market vertical, reducing systemic dependency on any single authority."
      }
    ],
    "elements": ["E4", "F4", "O2"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Denial of Service"
  };

  window.ThreatModel.register(threat);
})();
