(function () {
  var threat = {
    "id": "T8",
    "name": "Unvetted Recognized Entity Credential Propagation",
    "desc": "A [=E3|holder=] who receives a [=O1|recognized entity credential=] may share it with others without independently verifying its integrity or provenance. A malicious or negligent actor could craft a [=O1|recognized entity credential=] that lists fraudulent or compromised entities as recognized [=E2|issuers=], then propagate it through peer-to-peer channels outside the [=F5|Retrieve List=] flow. [=E4|Verifiers=] who accept the credential without running [=P6|Validate Credential(s)=] against an independently-established trust anchor may unknowingly accept [=O2|dependent verifiable credentials=] from untrustworthy sources. The decentralized nature of the specification amplifies this risk: a single unvetted credential shared widely can rapidly corrupt the trust assumptions of many parties across an ecosystem.",
    "response": [
      {
        "id": "R8",
        "name": "Independent Cryptographic Verification Before Acting on Any Recognized Entity Credential",
        "type": "Reduce",
        "desc": "[=E4|Verifiers=] MUST independently verify the cryptographic integrity and provenance of any [=O1|recognized entity credential=] before acting on it, regardless of the channel through which it was received. The [=E1|list publisher=] identified as the issuer of the [=O1|recognized entity credential=] MUST be validated against a trust anchor established through independent, out-of-band means \u2014 not through the credential itself. [=E4|Verifiers=] MUST NOT treat peer acceptance of a credential as evidence of its validity. [=E4|Verifiers=] SHOULD also confirm that the credential has not expired and has not been revoked before relying upon it."
      }
    ],
    "elements": ["O1", "E1", "E2", "E3", "E4", "F4", "P6"],
    "tags": ["security"],
    "taxonomyName": "STRIDE",
    "taxonomyClass": "Spoofing"
  };

  window.ThreatModel.register(threat);
})();
