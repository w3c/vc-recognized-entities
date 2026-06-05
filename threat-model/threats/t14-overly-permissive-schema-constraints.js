(function () {
  var threat = {
    "id": "T14",
    "name": "Overly Permissive Schema Constraints",
    "desc": "A [=E1|list publisher=] who creates a [=O1|recognized entity credential=] may specify <code>outputValidation</code> schema rules that are too broad, incomplete, or lax, inadvertently permitting recognized [=E2|issuers=] to issue a wider class of [=O2|dependent verifiable credentials=] than was intended. An [=E2|issuer=] \u2014 acting legitimately within the stated schema constraints \u2014 could issue credential types that the [=E1|list publisher=] did not authorize, or the missing constraints could be exploited by a malicious [=E2|issuer=] to produce credentials that technically pass [=P6|Validate Credential(s)=] despite falling outside the intended recognition scope.",
    "response": [
      {
        "id": "R14",
        "name": "Precise and Complete Schema Validation Rules",
        "type": "Reduce",
        "desc": "[=E1|List publishers=] SHOULD define <code>outputValidation</code> schema rules that are as precise and restrictive as the intended recognition scope requires. Schemas SHOULD enumerate permitted credential types explicitly rather than relying on broad or permissive patterns. Governance frameworks SHOULD review and audit schema constraints as part of the [=P1|Create List=] and [=P7|Update List=] processes. [=E4|Verifiers=] SHOULD treat credentials that fail schema validation as invalid and SHOULD NOT relax validation rules to accept credentials that would otherwise be rejected."
      }
    ],
    "elements": ["O1", "E1", "E2", "E4", "P1", "P6"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Elevation of Privilege"
  };

  window.ThreatModel.register(threat);
})();
