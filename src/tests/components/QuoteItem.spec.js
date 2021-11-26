import { screen,render } from '@testing-library/vue'
import QuoteItem from '../../components/QuoteItem.vue'

const quote = {
  text: 'Here is a quote',
  author: 'Author Brown'
}

test('displays text', async () => {
  render(QuoteItem, { props: { quote } } )
  expect(screen.queryByText(quote.text)).toBeTruthy()
  expect(screen.queryByText(quote.author)).toBeTruthy()
})