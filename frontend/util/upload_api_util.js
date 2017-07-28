export const uploadPhoto = formData => {
  return $.ajax({
    method: 'POST',
    url: '/api/images',
    processData: false,
    contentType: false,
    data: formData
  });
};
