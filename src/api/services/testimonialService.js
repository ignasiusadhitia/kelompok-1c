import instance from 'api/axiosConfig'; // Menggunakan instance axios yang sudah dikonfigurasi

// Fungsi untuk mengambil semua testimonial
export const fetchTestimonials = async () => {
  try {
    const response = await instance.get(`/api/testimonials`);
    // Akses array di dalam properti `data`
    if (!response.data || !Array.isArray(response.data.data)) {
      throw new Error(
        'Invalid API response format: Expected data.data to be an array.'
      );
    }
    return response.data.data; // Return hanya array di dalam `data`
  } catch (err) {
    console.error('Error in fetchTestimonials:', err);
    throw err;
  }
};

export const createTestimonial = async (testimonial) => {
  try {
    const response = await instance.post('/api/testimonials', testimonial, {
      headers: {
        'Content-Type': 'multipart/form-data', // Optional, axios akan otomatis mengatur boundary
      },
    });
    return response.data;
  } catch (err) {
    console.error('Error in createTestimonial:', err);
    throw err;
  }
};

export const updateTestimonial = async (id, testimonial) => {
  try {
    const response = await instance.put(`/api/testimonials/${id}`, testimonial);
    return response.data;
  } catch (err) {
    console.error('Error in updateTestimonial:', err);
    throw err;
  }
};

export const deleteTestimonial = async (id) => {
  try {
    const response = await instance.delete(`/api/testimonials/${id}`);
    return response.data;
  } catch (err) {
    console.error('Error in deleteTestimonial:', err);
    throw err;
  }
};

export const getTestimonialInfo = async (id) => {
  try {
    const response = await instance.get(`/api/testimonials/${id}`);
    return response.data; // Return the data if successful
  } catch (err) {
    console.error('Error in getTestimonialInfo:', err);
    throw err; // Rethrow error to be handled by calling function
  }
};
