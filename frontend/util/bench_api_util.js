export const fetchBenches = (filters) => {
  return $.ajax({
    method: 'GET',
    url: '/api/benches',
    data: filters
  })
}

export const createBench = bench => {
  return $.ajax({
    method: 'POST',
    url: '/api/benches',
    data: bench
  })
}

export const fetchBench = benchId => {
  return $.ajax({
    method: 'GET',
    url: `/api/benches/${benchId}`
  })
}

export const createReview = (data) => {
  return $.ajax({
    method: 'POST',
    url: `/api/reviews`,
    data
  });
};
