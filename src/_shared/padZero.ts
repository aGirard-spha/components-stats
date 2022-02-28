/**
 * @param {string} [str=''] - Une chaîne de caractères.
 * @param {number} [len=2] - Le nombre de 0 à mettre.
 * @returns {string} La chaîne de caratères avec des 0 en plus pour atteindre la longueur voulue.
 */
const padZero = (str: string = '', len: number = 2): string => {
  const trueLen = len || 2
  const zeros = new Array(trueLen).join('0')
  return (zeros + str).slice(-trueLen)
}

export default padZero
