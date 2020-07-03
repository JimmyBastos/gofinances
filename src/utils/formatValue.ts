/**
 * Format a number as currency (BRL)
 * @example
 *    console.log(formatValue('1127.9')) // => 'R$ 1.127,90'
 */
const formatValue = (value: number | string): string => (
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(Number(value))
)

export default formatValue
