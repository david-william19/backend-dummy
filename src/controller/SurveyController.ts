import { v4 as uuidv4 } from "uuid";
import { QuestionDefault, Result, Survey, UserSurvey1, UserSurvey2 } from "../data/data.js";
import {
  compare_example_return_obj,
  dashboard_example_return_obj,
  survey_prompt,
} from "../data/object.js";

export class SurveyController {
  init() {}

  getUserSurveyByUUID(c: any) {
    
    const generateQuestionsWithUUID = () => {
    return UserSurvey1.map((item) => ({
      ...item,
      uuid: uuidv4(),
    }));
  };

   const generateQuestionsWithUUID2 = () => {
    return UserSurvey2.map((item) => ({
      ...item,
      uuid: uuidv4(),
    }));
  };

    const id = c.req.param("id");

    const Sections = [
      {
        id: "21dac039",
        title: "Section 1",
        questions: generateQuestionsWithUUID(),
      },
      {
        id: "40ad03ca",
        title: "Section 2",
        questions: generateQuestionsWithUUID2(),
      },
      // {
      //   id: "0394adaa",
      //   title: "Section 3",
      //   questions: generateQuestionsWithUUID(),
      // },
      // {
      //   id: "239adccc",
      //   title: "Section 4",
      //   questions: generateQuestionsWithUUID(),
      // },
    ];

    return c.json({
      data: {
        record: {
          items: Sections,
        },
      },
    });
  }

  getUserResult(c: any) {
    const resultWithUUID = Result.map((data) => {
      return {
        ...data,
        uuid: uuidv4(),
      };
    });
    return c.json({
      data: resultWithUUID,
    });
  }

  getDashboardByUserId(c: any) {
    return c.json({
      data: dashboard_example_return_obj,
    });
  }

  async getCompareByUserId(c: any) {
    const surveyId = c.req.param("surveyId");
    await compare_example_return_obj.extra.userscore.items.map((data) => {
      data.title = surveyId;
      data.overallscore = Math.floor(Math.random() * 100);
    });
    return c.json({
      data: compare_example_return_obj,
    });
  }

  async getPromptBySurveyId(c: any) {
    const surveyId = c.req.param("surveyId");

    const promptStatus = survey_prompt.find((d) => d.id == surveyId);

    return c.json({
      data: promptStatus,
    });
  }

  async getUserProfile(c: any) {
    const userProfileId = c.req.param("id");

    return c.json({
      data: QuestionDefault,
      user_id: userProfileId,
    });
  }

  async getSurveyPrompt(c: any) {
    const userProfileId = c.req.param("surveyId");

    const findSurveyStatus = Survey.extra.survey.find(
      (data) => data.id === userProfileId
    );

    return c.json({
      data: {
        extra: {
          usersurvey: {
            id: findSurveyStatus?.id,
            recordstate: findSurveyStatus?.recordstate,
          },
        },
      },
    });
  }

  async getSurveyList(c: any) {
    return c.json({
      data: {
        extra: {
          usersurvey: [
            {
              title: "survey 1",
              id: 11,
            },
            {
              title: "survey 2",
              id: 12,
            },
            {
              title: "survey 3",
              id: 13,
            },
          ],
        },
      },
    });
  }
}
