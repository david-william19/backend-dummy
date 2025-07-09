import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { SurveyController } from './controller/SurveyController.js'

const app = new Hono()

app.use('/api/*', cors())
const surveyController = new SurveyController()

// survey
app.get('/api/survey', surveyController.getSurveyList)
app.get('/api/survey/:id', surveyController.getUserSurveyByUUID)

app.get('/api/survey/:surveystatus', surveyController.getSurveyPrompt)

app.get('/api/result', surveyController.getUserResult)

// user profile
app.get('/api/userprofile/dashboard', surveyController.getDashboardByUserId)

app.get('/api/userprofile/compare', surveyController.getCompareByUserId)

app.get('/api/userprofile/prompt/:surveyId', surveyController.getPromptBySurveyId)

app.get('/api/userprofile', surveyController.getUserProfile)


serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
