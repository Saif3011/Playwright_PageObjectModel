import {LoginPage} from '../pages/loginPage'
const{test,expect}= require('@playwright/test')



test('login with valid credentials',async({page})=>{

const Login = new LoginPage(page)
await Login.gotoLoginPage()
await Login.login('saiko','TopSecretPassword')


// await page.goto('https://the-internet.herokuapp.com/login')
// await page.locator('#username').fill('saiko')
// await page.locator('#password').fill('TopSecretPassword')
// await page.locator("//i[@class='fa fa-2x fa-sign-in']").click()

})