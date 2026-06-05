(function () {
  var threat = {
    "id": "T9",
    "name": "List Publisher Impersonation",
    "desc": "A malicious actor could create a [=O1|recognized entity credential=] that mimics a well-known [=E1|list publisher=] by using a similar or confusable issuer identifier or display name. A [=E4|verifier=] that does not independently validate the issuer identifier against a known root of trust during [=P3|Configure Verifier=] could be deceived into treating an attacker-controlled list as authoritative. This is distinct from unauthorized issuer spoofing (T1): rather than an unrecognized [=E2|issuer=] presenting fraudulent credentials, the attacker here fabricates the [=E1|list publisher=] identity itself \u2014 causing the [=E4|verifier=] to accept an entirely attacker-controlled recognition registry as a legitimate trust anchor.",
    "response": [
      {
        "id": "R9",
        "name": "Out-of-Band Validation of List Publisher Identifiers",
        "type": "Reduce",
        "desc": "[=E4|Verifiers=] MUST validate the issuer identifier of any [=O1|recognized entity credential=] against a pre-established set of trusted identifiers obtained through independent, out-of-band means before adding it to their configured trust anchors during [=P3|Configure Verifier=]. Display names, logos, and human-readable labels are not sufficient \u2014 the cryptographic identifier (e.g., DID or HTTPS URL) MUST be verified. Governance frameworks SHOULD publish canonical, authoritative identifiers for [=E1|list publishers=] through an independently-secured channel so that [=E4|verifiers=] have a reliable reference to check against."
      }
    ],
    "elements": ["O1", "E1", "E4", "P3", "P6"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Spoofing"
  };

  window.ThreatModel.register(threat);
})();
