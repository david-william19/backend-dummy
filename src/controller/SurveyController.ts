import { v4 as uuidv4 } from "uuid";
import { QuestionDefault, Result, Survey } from "../data/data.js";
import {
  compare_example_return_obj,
  dashboard_example_return_obj,
  survey_prompt,
} from "../data/object.js";

export class SurveyController {
  init() {}

  getUserSurveyByUUID(c: any) {
    const surveyWithUUID = Survey.map((item) => ({
      ...item,
      uuid: uuidv4(),
    }));

    const id = c.req.param("id");

    const Sections = [
      {
        uuid: "21dac039",
        title: "Section 1",
        questions: surveyWithUUID,
      },
      {
        uuid: "40ad03ca",
        title: "Section 2",
        questions: surveyWithUUID,
      },
      {
        uuid: "0394adaa",
        title: "Section 3",
        questions: surveyWithUUID,
      },
      {
        uuid: "239adccc",
        title: "Section 4",
        questions: surveyWithUUID,
      },
    ];

    const findSection = Sections.find((data) => data.uuid === id);

    return c.json({
      data: findSection,
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

    const promptStatus = survey_prompt.find((d) => d.id === surveyId);

    return c.json({
      data: promptStatus,
    });
  }

  async getUserProfile(c: any) {
    const userProfileId = c.req.param('id')

    return c.json({
      data: QuestionDefault,
      user_id: userProfileId,
    })
  }
}
