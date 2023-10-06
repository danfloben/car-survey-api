import { test } from '@japa/runner'

test.group('Surveys list', () => {
  test('get a paginated list of surveys', async ({ client }) => {
 
    const response = await client.get('api/surveys').bearerToken("Mg.XdpZKrN2hj59hAsEFGN2ay_5LW_O_r9C-YgJcue8JpOt5mMvM3FIpGQSYbUY")

    console.log(response.body())
  })
})
