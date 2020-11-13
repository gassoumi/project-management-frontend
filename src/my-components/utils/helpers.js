export function getDisplayString(value, max = 30, addExtraSpace = false) {
  if (typeof value !== 'string') {
    return undefined;
  }

  if (value.length <= max && !addExtraSpace) {
    return value;
  }

  if (value.length < max) {
    // console.log(value.length);
    // console.log(max);
    return value + " " + Array(max - value.length).fill('\xa0').join('');
    // return value;
  }
  // value.length > max
  if (value.charAt(max + 1) === " ") {
    return value.substring(0, max + 1) + " ...";
  }

  const index = value.substring(0, max).lastIndexOf(" ");
  if (index > -1) {
    return value.substring(0, index) + " ...";
  }
  return value.substring(0, max) + "...";
}
