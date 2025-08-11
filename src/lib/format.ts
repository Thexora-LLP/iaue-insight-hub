export function formatCurrency(amount: number, currency: string = 'NGN') {
  try {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency, currencyDisplay: 'symbol', minimumFractionDigits: 0 }).format(amount)
  } catch {
    // Fallback: handle unknown currency codes gracefully
    const symbol = currency === 'NGN' ? '₦' : currency === 'USD' ? '$' : ''
    return `${symbol}${amount.toLocaleString('en-NG')}`.trim()
  }
}
