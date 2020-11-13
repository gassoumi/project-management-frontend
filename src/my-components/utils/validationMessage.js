export const required = "Ce champ est obligatoire";
export const maxLength = "La longueur maximale est de";
export const minLength = "La longueur minimale est de";
export const date = "Choisir une valide date";

export function getMaxLengthMessage(max) {
  const maxLength = "La longueur maximale est de";
  return `${maxLength} ${max}`;
}

export function getMinLengthMessage(min) {
  const minLength = "La longueur minimale est de";
  return `${minLength} ${min}`;
}

export function getRequiredMessage(field) {
  return field ? `${field} est obligatoire` : "Ce champ est obligatoire";
}

export function getDateMessage() {
  return "Choisir une valide date";
}
