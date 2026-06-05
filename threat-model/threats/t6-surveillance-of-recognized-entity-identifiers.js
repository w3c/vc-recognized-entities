(function () {
  var threat = {
    "id": "T6",
    "name": "Surveillance of Recognized Entity Identifiers",
    "desc": "A [=O1|recognized entity credential=] publicly names [=E2|issuers=] with their identifiers, legal names, and other attributes. Aggregating these credentials across multiple lists enables systematic profiling and surveillance of recognized entities, including natural persons acting as [=E2|issuers=] or [=E4|verifiers=]. Because the credential is designed to be publicly retrievable via [=F5|Retrieve List=], any party that fetches it from [=S1|publisher storage=] gains access to the full membership of the list. This risk is amplified when multiple lists are aggregated \u2014 cross-referencing identifiers across lists can reveal entity relationships, activity patterns, and ecosystem memberships that no single list discloses on its own.",
    "response": [
      {
        "id": "R6",
        "name": "Minimize Personal Information in Recognized Entity Credentials",
        "type": "Reduce",
        "desc": "[=E1|List publishers=] minimize the personal information included in [=O1|recognized entity credentials=] for natural persons. Where feasible, pseudonymous or role-based identifiers are preferred over personally identifying information such as legal names and images. Governance frameworks establish policies on what attributes are permitted in a [=O1|recognized entity credential=] and require a documented justification for any personally identifying fields. [=E1|List publishers=] advise recognized entities that their inclusion in a publicly-accessible list is effectively a public disclosure of their participation in the ecosystem."
      }
    ],
    "elements": ["O1", "E1", "E2", "S1", "F5"],
    "tags": ["privacy"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Information Disclosure"
  };

  window.ThreatModel.register(threat);
})();
