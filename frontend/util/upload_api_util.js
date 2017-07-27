export const uploadPhoto = formData => {
  console.log(formData);
  return $.ajax({
    method: 'POST',
    url: '/api/images',
    processData: false,
    contentType: false,
    data: formData
  });
};
