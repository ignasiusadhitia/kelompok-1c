import { useState, useEffect } from 'react';
import {
  fetchTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getTestimonialInfo,
} from 'api/services/testimonialService';

const useTestimonialsApi = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fungsi untuk mengambil semua testimonial
  const loadTestimonials = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTestimonials();
      setTestimonials(data); // Data sudah berupa array setelah perbaikan
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setError(err.message || 'Failed to load testimonials');
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk membuat testimonial baru
  const addTestimonial = async (testimonial) => {
    setLoading(true);
    setError(null);
    try {
      const newTestimonial = await createTestimonial(testimonial);
      setTestimonials((prev) => [...prev, newTestimonial]);
    } catch (err) {
      console.error('Error creating testimonial:', err);
      setError(err.message || 'Failed to create testimonial');
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk memperbarui testimonial berdasarkan ID
  const editTestimonial = async (id, testimonial) => {
    setLoading(true);
    setError(null);
    try {
      const updatedTestimonial = await updateTestimonial(id, testimonial);
      setTestimonials((prev) =>
        prev.map((item) => (item.id === id ? updatedTestimonial : item))
      );
    } catch (err) {
      console.error('Error updating testimonial:', err);
      setError(err.message || 'Failed to update testimonial');
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk menghapus testimonial berdasarkan ID
  const removeTestimonial = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteTestimonial(id); // Hapus data di server
      setTestimonials((prev) => prev.filter((item) => item.id !== id)); // Perbarui state lokal
    } catch (err) {
      setError(err.message || 'Failed to delete testimonial');
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk mendapatkan detail testimonial berdasarkan ID
  const getTestimonialDetails = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTestimonialInfo(id);
      return data || null; // Return data or null if no data found
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message || 'Failed to get testimonial details');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Muat data saat hook dipakai
  useEffect(() => {
    loadTestimonials();
  }, []);

  return {
    testimonials,
    loading,
    error,
    loadTestimonials,
    addTestimonial,
    editTestimonial,
    removeTestimonial,
    getTestimonialDetails,
  };
};

export default useTestimonialsApi;
