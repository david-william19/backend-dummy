export const UserSurvey1 = [
  {
    id: 1,
    ishiddenbydefault: false,
    uuid: 'cmds3',
    label: "General Public Awareness",
    question: "How familiar is the public with the environmental benefits of recycling in your region?",
    answer: {
      a: "Very familiar; it's part of everyday life",
      b: "Somewhat familiar; basic understanding exists",
      c: "Not very familiar; limited awareness",
      d: "Completely unfamiliar"
    },
    questionoption_events: [
      {
        questionoption: 'a',
        targetquestion: 2
      },
      {
        questionoption: 'b',
        targetquestion: 3
      },
    ],
  },
  {
    id: 2,
    ishiddenbydefault: true,
    uuid: 'vfj3d',
    label: "Test 1",
    question: "How often do local schools incorporate sustainability topics into their curriculum?",
    answer: {
      a: "Very frequently; it's a key focus",
      b: "Occasionally mentioned",
      c: "Rarely included",
      d: "Never discussed"
    },
    questionoption_events: null,
  },
  {
    id: 3,
    ishiddenbydefault: true,
    uuid: 'pawd3',
    label: "Test 2",
    question: "Are there any incentives provided for households to reduce single-use plastics?",
    answer: {
      a: "Yes, widely adopted programs exist",
      b: "Some local initiatives exist",
      c: "Limited incentives available",
      d: "No incentives at all"
    },
    questionoption_events: null,
  },
  {
    id: 4,
    ishiddenbydefault: false,
    uuid: 'lplw3',
    label: "Test 3",
    question: "How actively are local businesses involved in promoting a circular economy?",
    answer: {
      a: "Highly active with visible initiatives",
      b: "Moderately involved in community projects",
      c: "Minimally engaged",
      d: "Not involved at all"
    },
    questionoption_events: [
      {
        questionoption: 'c',
        targetquestion: 5
      },
    ]
  },
  {
    id: 5,
    ishiddenbydefault: true,
    uuid: 'adwa2',
    label: "Test 4",
    question: "What is the general attitude of the public toward buying second-hand or refurbished products?",
    answer: {
      a: "Very positive; commonly practiced",
      b: "Acceptable in some cases",
      c: "Generally hesitant",
      d: "Not accepted at all"
    },
    questionoption_events: null
  },
  {
    id: 6,
    ishiddenbydefault: false,
    uuid: 'qwe12',
    label: "Test 1",
    question: "How accessible are recycling facilities in your area?",
    answer: {
      a: "Easily accessible for everyone",
      b: "Some areas are covered",
      c: "Only available in urban areas",
      d: "Not available"
    },
    questionoption_events: null
  },
];

export const UserSurvey2 = [
  {
    id: 7,
    ishiddenbydefault: false,
    uuid: 'cmds3',
    label: "General Public Awareness",
    question: "How familiar is the public with the environmental benefits of recycling in your region?",
    answer: {
      a: "Very familiar; it's part of everyday life",
      b: "Somewhat familiar; basic understanding exists",
      c: "Not very familiar; limited awareness",
      d: "Completely unfamiliar"
    },
    questionoption_events: [
      {
        questionoption: 'a',
        targetquestion: 8
      },
      {
        questionoption: 'b',
        targetquestion: 9
      },
    ],
  },
  {
    id: 8,
    ishiddenbydefault: true,
    uuid: 'vfj3d',
    label: "Test 1",
    question: "How often do local schools incorporate sustainability topics into their curriculum?",
    answer: {
      a: "Very frequently; it's a key focus",
      b: "Occasionally mentioned",
      c: "Rarely included",
      d: "Never discussed"
    },
    questionoption_events: null,
  },
  {
    id: 9,
    ishiddenbydefault: true,
    uuid: 'pawd3',
    label: "Test 2",
    question: "Are there any incentives provided for households to reduce single-use plastics?",
    answer: {
      a: "Yes, widely adopted programs exist",
      b: "Some local initiatives exist",
      c: "Limited incentives available",
      d: "No incentives at all"
    },
    questionoption_events: null,
  },
  {
    id: 10,
    ishiddenbydefault: false,
    uuid: 'lplw3',
    label: "Test 3",
    question: "How actively are local businesses involved in promoting a circular economy?",
    answer: {
      a: "Highly active with visible initiatives",
      b: "Moderately involved in community projects",
      c: "Minimally engaged",
      d: "Not involved at all"
    },
    questionoption_events: [
      {
        questionoption: 'c',
        targetquestion: 11
      },
    ]
  },
  {
    id: 11,
    ishiddenbydefault: true,
    uuid: 'adwa2',
    label: "Test 4",
    question: "What is the general attitude of the public toward buying second-hand or refurbished products?",
    answer: {
      a: "Very positive; commonly practiced",
      b: "Acceptable in some cases",
      c: "Generally hesitant",
      d: "Not accepted at all"
    },
    questionoption_events: null
  },
  {
    id: 12,
    ishiddenbydefault: false,
    uuid: 'qwe12',
    label: "Test 1",
    question: "How accessible are recycling facilities in your area?",
    answer: {
      a: "Easily accessible for everyone",
      b: "Some areas are covered",
      c: "Only available in urban areas",
      d: "Not available"
    },
    questionoption_events: null
  },
];

export const Survey = 
  {
    extra: {
      survey: [
        {
          id: '123',
          title: 'Survey 1',
          recordstate: 'NOT_STARTED'
        },

        {
          id: '456',
          title: 'Survey 2',
          recordstate: 'PROGRESS'
        },

        {
          id: '789',
          title: 'Survey 3',
          recordstate: 'FINISHED'
        },
      ]
    }
  }



export const Result = [
    {
        id: 1,
        survey: 'Survey 1',
        score: 99,
        score_label: 'Distinction',
        date_completed: new Date(),
    },
    {
        id: 2,
        survey: 'Survey 2',
        score: 99,
        score_label: 'Distinction',
        date_completed: new Date(),
    },
    {
        id: 3,
        survey: 'Survey 4',
        score: 99,
        score_label: 'Distinction',
        date_completed: new Date(),
    },
    {
        id: 4,
        survey: 'Survey 5',
        score: 99,
        score_label: 'Distinction',
        date_completed: new Date(),
    },
    {
        id: 5,
        survey: 'Survey 6',
        score: 99,
        score_label: 'Distinction',
        date_completed: new Date(),
    },
    {
        id: 6,
        survey: 'Survey 7',
        score: 99,
        score_label: 'Distinction',
        date_completed: new Date(),
    },
]

export const QuestionDefault = {
  name: "Danny Doe",
  email: "danny.doe20@mail.com",
  role: "Designer",
  experience: null,
  organisationType: null,
  specificOrganisationType: null,
  sector: null,
  specificSector: null,
  employees: null,
  // tab organisation name
  organisationName: null,
  organisationCountry: null,
  organisationState: null,
  organisationCouncil: null,
  annualRevenue: null,
  // tab circular economy
  yearsInOperation: null,
  motivations: null,
  currentStage: null,
  // primary motivation
  is_drivers_reducecosts: false,
  is_drivers_increaseefficiency: false,
  is_customerdemandsustainable: false,
  is_regulationcompliance: false,
  is_brandreputation: false,
  is_newrevenues: false,
  is_investorfunding: false,
  is_innovationmarkets: false,
  is_organisationalvalues: false,
  is_environmentsustainability: false,
  is_economicgrowth: false,
  is_jobcreation: false,
  is_resourceefficiency: false,
  is_minimisewaste: false,
  is_researchconservation: false,
  is_socialimpact: false,
  is_communityengagement: false,
  is_educationaloutreach: false,
  is_supplychainresilience: false,
  // drivers for using circular
  is_assesscurrentpractices: false,
  is_identifyareasforimprovement: false,
  is_developstrategy: false,
  is_benchmarkindustrypeers: false,
  is_measureprogress: false,
  is_accesssupport: false,
  is_stakeholderrequirements: false,
  // -----------------------------------------
  awareness: null,
  previousInitiative: null,
  memberships: null,
  comments: null,
};
