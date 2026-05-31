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
      threats: ["T3", "T4"]
    },
    {
      name: "Dependency Threats",
      id: "threat-model-dependency-threats",
      threats: ["T5"]
    }
    ];

    window.ThreatModel.registerCategories(threatCategories);

  })();
