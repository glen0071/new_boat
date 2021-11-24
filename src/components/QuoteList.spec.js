import {screen,render} from '@testing-library/vue'
import QuoteList from './QuoteList.vue'

test('increments value on click', async () => {
  render(QuoteList)
  expect(screen.queryByText('Quotes')).toBeTruthy()
})