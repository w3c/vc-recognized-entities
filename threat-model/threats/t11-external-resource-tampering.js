(function () {
  var threat = {
    "id": "T11",
    "name": "External Resource Tampering",
    "desc": "The <code>outputValidation</code> property of a [=O1|recognized entity credential=] references external schema files via URL. If those URLs are not integrity-protected (e.g., using <code>digestMultibase</code>), an attacker who compromises the schema host can alter the validation rules without invalidating the [=O1|recognized entity credential=] itself. [=E4|Verifiers=] running [=P6|Validate Credential(s)=] who fetch and apply these tampered schemas may then accept [=O2|dependent verifiable credentials=] that no longer conform to the intended schema \u2014 and reject valid ones \u2014 without any indication that the validation rules have been changed.",
    "response": [
      {
        "id": "R11",
        "name": "Content Integrity Protection for All Externally-Referenced Resources",
        "type": "Reduce",
        "desc": "[=E1|List publishers=] MUST use content integrity protection (such as <code>digestMultibase</code>) for all externally-referenced resources in [=O1|recognized entity credentials=]. [=E4|Verifiers=] MUST verify the integrity of any fetched resource against the declared digest before applying it during [=P6|Validate Credential(s)=]. Where possible, schema files SHOULD be embedded directly in the credential or hosted on infrastructure under the [=E1|list publisher=]\u2019s direct control within the [=C1|publisher system=]. Any [=O1|recognized entity credential=] that references external resources without integrity protection SHOULD be rejected by conforming [=E4|verifiers=]."
      }
    ],
    "elements": ["O1", "E1", "E4", "F5", "P6", "C1", "S1"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Tampering"
  };

  window.ThreatModel.register(threat);
})();
