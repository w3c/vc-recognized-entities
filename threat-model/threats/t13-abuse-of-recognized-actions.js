(function () {
  var threat = {
    "id": "T13",
    "name": "Abuse of Recognized Actions",
    "desc": "The <code>action</code> property in a [=O1|recognized entity credential=] is a free-form string (e.g., <code>issue</code>, <code>verify</code>). Without strict ecosystem-level governance of allowable action values, a [=E2|issuer=] may present credentials claiming broad or undefined actions that [=E4|verifiers=] interpret more permissively than the [=E1|list publisher=] intended during [=P6|Validate Credential(s)=]. This can grant recognized entities capabilities beyond what was authorized \u2014 for example, a credential authorizing <code>issue</code> for one credential type being interpreted as authorizing issuance of any credential type. Overly permissive interpretation could enable credential forgery, regulatory non-compliance, or fraud.",
    "response": [
      {
        "id": "R13",
        "name": "Controlled Action Vocabulary and Strict Interpretation",
        "type": "Reduce",
        "desc": "Ecosystem governance frameworks define and publish a controlled vocabulary of permitted <code>action</code> values and their precise semantics. [=E1|List publishers=] use only values from the governed vocabulary when issuing [=O1|recognized entity credentials=]. [=E4|Verifiers=] accept only <code>action</code> values they explicitly recognize and have been configured to trust during [=P3|Configure Verifier=]. [=E4|Verifiers=] treat unknown, overly broad, or undefined action values as grounds for rejection during [=P6|Validate Credential(s)=] rather than falling back to permissive defaults."
      }
    ],
    "elements": ["O1", "E1", "E2", "E4", "P3", "P6"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Elevation of Privilege"
  };

  window.ThreatModel.register(threat);
})();
