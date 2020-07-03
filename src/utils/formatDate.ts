/**
 * Format a number as currency (BRL)
 * @example
 *    console.log(formatDate(new Date(2020-07-03T02:50:54.969Z))) // => '03/07/2020'
 */
const formatDate = (date: Date): string => (
  new Intl.DateTimeFormat('pt-BR').format(date)
)

export default formatDate
