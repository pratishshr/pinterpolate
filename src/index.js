/**
 * Build supplied string by interpolating properties after delimiter ':' with the given parameters.
 *
 * @example
 * interpolate(':name is here.', {name: 'Barbara'})
 * => 'Barbaba is here.'
 *
 * @example
 * interpolate('/:id', {id: 'user1'},{company:'Google'})
 * => '/user1?company=Google'
 *
 * @param {string} str
 * @param {object} params
 * @param {object} queries
 *
 * @returns string
 */
export default function interpolate(str, params, queries = {}) {
  let formattedString = str;
  params = params || {};

  // interpolates string, :name to Barbaba
  for (const [key, value] of Object.entries(params)) {
    const val = value || '';
    formattedString = formattedString.replace(
      new RegExp(':' + key + '\\b', 'gi'),
      val.toString()
    );
  }

  queries = queries || {};

  // adds queries to interpolated string
  if (Object.values(queries).filter((a) => a).length) {
    formattedString += '?';

    Object.entries(queries).forEach(([name, value]) => {
      if (name && value) {
        formattedString += `${name}=${value}&`;
      }
    });

    formattedString = formattedString.slice(0, formattedString.length - 1);
  }

  return formattedString;
}
