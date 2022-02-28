import padZero from './padZero'

/**
 *
 * @param {string} hex - La valeur hexadécimal de la couleur.
 * @param {boolean} bw - Si l'inversion de couleur ne produit que du noir ou du blanc.
 * @returns {string} Le couleur inversée avec prise en compte du paramètre noir/blanc
 */
const invertColor = (hex: string, bw: boolean): string => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF'
  }
  // invert color components
  const r2 = (255 - r).toString(16)
  const g2 = (255 - g).toString(16)
  const b2 = (255 - b).toString(16)
  // pad each with zeros and return
  return '#' + padZero(r2) + padZero(g2) + padZero(b2)
}

export default invertColor
