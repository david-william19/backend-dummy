/* GET /userprofile/dashboard?id='USERPROFILE_ID' */

export let dashboard_example_return_obj = {
  record: {
    id: "",
    organisationname: "",
    organisationtype: "",
    industrysector: "",
    numberofemployees: "",
    // ...etc
  },
  extra: {
    score: {
      overallscore: {
        score: 50,
        scoreclassification_name: "Growth Spurt Stage",
        scoreclassification_description: "",
      },
      survey1: {
        score: 50,
        scoreclassification_name: "",
        scoreclassification_description: "",
      },
      survey2: {
        score: 60,
        scoreclassification_name: "",
        scoreclassification_description: "",
      },
      survey3: {
        score: 40,
        scoreclassification_name: "",
        scoreclassification_description: "",
      },
    },
    waystoimprove: [
      {
        id: "",
        shorttext: "",
      },
      {
        id: "",
        shorttext: "",
      },
      {
        id: "",
        shorttext: "",
      },
    ],
  },
};

/* GET /userprofile/compare */

export let params = {
  id: "id of userprofile",
  survey: "",
  comparisonvariable:
    "NULL / UUID of a comparisonvariable as returned in lists", // default to sector
  limit: 5, // default to 5
};

export let compare_example_return_obj = {
  record: {
    id: "",
    organisationname: "",
    organisationtype: "",
    industrysector: "",
    numberofemployees: "",
    // ...etc
  },
  extra: {
    userscore: {
      // depends on the passed in survey in params, default to overall!
      survey: "null / id of survey",
      items: [
        {
          id: "123",
          title: "survey 1",
          datescored: new Date(2025, 2, 23).getTime(), // March is month 2 (zero-indexed)
          overallscore: Math.floor(Math.random() * 100),
        },
        {
          id: "342",
          title: "survey 1",
          datescored: new Date(2024, 8, 8).getTime(), // September
          overallscore: Math.floor(Math.random() * 100),
        },
        {
          id: "345",
          title: "survey 1",
          datescored: new Date(2024, 7, 9).getTime(), // August
          overallscore: Math.floor(Math.random() * 100),
        },
        {
          id: "564",
          title: "survey 1",
          datescored: new Date(2024, 1, 10).getTime(), // February
          overallscore: Math.floor(Math.random() * 100),
        },
        {
          id: "924",
          title: "survey 1",
          datescored: new Date(2023, 11, 18).getTime(), // December
          overallscore: Math.floor(Math.random() * 100),
        },
      ],
    },
    demographicscore: {
      // depends on the comparisonvariable passed! default to sector
      comparisonvariable: "uuid of either area / sector / business",
      items: [
        {
          id: "",
          datescored:  new Date(2025, 2, 23).getTime(),
          averagescore: Math.floor(Math.random() * 100),
        },
        {
          id: "",
          datescored:  new Date(2025, 3, 18).getTime(),
          averagescore: Math.floor(Math.random() * 100),
        },
        {
          id: "",
          datescored:  new Date(2025, 4, 18).getTime(),
          averagescore: Math.floor(Math.random() * 100),
        },
        {
          id: "",
          datescored:  new Date(2025, 7, 24).getTime(),
          averagescore: Math.floor(Math.random() * 100),
        },
        {
          id: "",
          datescored:  new Date(2025, 12, 10).getTime(),
          averagescore: Math.floor(Math.random() * 100),
        },
      ],
    },
  },
  lists: {
    comparisonvariable: [
      {
        id: "1",
        name: "Business Size", // use this to display in frontend
      },
      {
        id: "2",
        name: "Sector",
      },
      {
        id: "3",
        name: "Area",
      },
    ],
  },
};

export let survey_prompt = [
  {
    id: "survey-1",
    status: "PROGRESS",
  },
  {
    id: "survey-2",
    status: "NOT_STARTED",
  },
  {
    id: "survey-3",
    status: "FINISHED",
  },
];
