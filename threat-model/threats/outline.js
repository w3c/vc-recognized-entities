(
  function () {
    var threatCategories = [{
      name: "Target Threats",
      id: "threat-model-target-threats",
      threats: ["T1", "T2"]
    },
    {
      name: "Implementation Threats",
      id: "threat-model-implementation-threats",
      threats: ["T3", "T4", "T8", "T9", "T10", "T11", "T12", "T13"]
    },
    {
      name: "External Threats",
      id: "threat-model-external-threats",
      threats: ["T6", "T7"]
    },
    {
      name: "Dependency Threats",
      id: "threat-model-dependency-threats",
      threats: ["T5"]
    }
    ];

    window.ThreatModel.registerCategories(threatCategories);

    window.ThreatModel.registerElements({
      "E1": "E1: List Publisher",
      "E2": "E2: Issuer",
      "E3": "E3: Holder",
      "E4": "E4: Verifier",
      "P1": "P1: Create List",
      "P2": "P2: Publish List",
      "P3": "P3: Configure Verifier",
      "P4": "P4: Credential Issuance",
      "P5": "P5: Credential Presentation",
      "P6": "P6: Validate Credential(s)",
      "P7": "P7: Update List",
      "F1": "F1: Identify Entity",
      "F2": "F2: Issue Recognized Entity Credential",
      "F3": "F3: Issue Credential(s)",
      "F4": "F4: Present Credential(s)",
      "F5": "F5: Retrieve List",
      "S1": "S1: Publisher Storage",
      "S2": "S2: Holder Storage",
      "O1": "O1: Recognized Entity Credential",
      "O2": "O2: Dependent Verifiable Credential",
      "C1": "C1: Publisher System",
      "C2": "C2: Issuer System",
      "C3": "C3: Holder System",
      "C4": "C4: Verifier System"
    });

  })();
