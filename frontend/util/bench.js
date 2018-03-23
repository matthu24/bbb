export const fetchAllBenches = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/benches',

  })
}
