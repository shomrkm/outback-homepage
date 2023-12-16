export function formatToCurrency(price: number) {
  return new Intl.NumberFormat(
    'ja-JP',
    { style: 'currency', currency: 'JPY' }
    ).format(price)
}
