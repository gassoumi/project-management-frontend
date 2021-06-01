export const required = "This field is required" /*"Ce champ est obligatoire";*/
export const maxLength = "The maximum length is" /* "La longueur maximale est de";*/
export const minLength = "The minimum length is" /* "La longueur minimale est de";*/
export const date = "Choose a valid date" /* "Choisir une valide date";*/

export function getMaxLengthMessage(max) {
  return `${maxLength} ${max}`;
}

export function getMinLengthMessage(min) {
  return `${minLength} ${min}`;
}

export function getRequiredMessage(field) {
  return field ? `${field} is required` : required;
}

export function getDateMessage() {
  return date;
}
