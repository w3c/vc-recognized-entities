(function () {
  var threat = {
    "id": "T7",
    "name": "Harms by Association",
    "desc": "A [=O1|recognized entity credential=] reveals the membership structure of the ecosystem it governs. Even in ecosystems intended to remain private, the credential may escape controlled distribution \u2014 for example, when a member of a private group publishes it externally, or when it is cached by intermediaries after being retrieved via [=F5|Retrieve List=]. This exposes which entities participate in the ecosystem, which may be commercially sensitive, create competitive risks, or expose individuals and organizations to targeting, discrimination, or reputational harm. Unlike selective disclosure mechanisms, containment relies entirely on the honesty of all recipients \u2014 a single disclosure breaks the boundary for the entire list.",
    "response": [
      {
        "id": "R7",
        "name": "Scoping and Distribution Controls for Sensitive Ecosystems",
        "type": "Accept",
        "desc": "The specification cannot prevent a [=E3|holder=] or [=E4|verifier=] from disclosing a received [=O1|recognized entity credential=] to third parties. [=E1|List publishers=] treat the act of publishing a [=O1|recognized entity credential=] as equivalent to a public disclosure of the membership list. For highly sensitive ecosystems, [=E1|list publishers=] consider issuing individual [=O1|recognized entity credentials=] to each entity rather than a single list-style credential, limiting the blast radius of any single disclosure. Governance frameworks explicitly advise ecosystem participants that membership in a recognized entity list might become publicly known and that sensitive ecosystems might be better served by alternative trust mechanisms."
      }
    ],
    "elements": ["O1", "E1", "E3", "S1", "F5"],
    "tags": ["privacy"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Information Disclosure"
  };

  window.ThreatModel.register(threat);
})();
