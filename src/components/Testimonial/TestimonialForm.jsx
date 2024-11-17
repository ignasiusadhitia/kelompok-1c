import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useTestimonial from 'hooks/useTestimonial';

const TestimonialForm = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Ambil data dari navigasi
  const { addTestimonial, editTestimonial } = useTestimonial();

  // Cek apakah sedang dalam mode edit
  const editMode = location.state?.testimonial ? true : false;
  const initialData = location.state?.testimonial || {
    image: null,
    name: '',
    title: '',
    date: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState(null);

  // Perbarui state jika initialData berubah (contoh: user reload halaman edit)
  useEffect(() => {
    setFormData(initialData);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataObj = new FormData();
      formDataObj.append('image', formData.image);
      formDataObj.append('name', formData.name);
      formDataObj.append('title', formData.title);
      formDataObj.append('date', formData.date);
      formDataObj.append('message', formData.message);

      if (editMode) {
        // Mode edit, gunakan fungsi update
        await editTestimonial(formData.id, formDataObj);
      } else {
        // Mode create, gunakan fungsi add
        await addTestimonial(formDataObj);
      }

      navigate(-1); // Navigasi kembali setelah submit
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {editMode ? 'Edit Testimonial' : 'Add a Testimonial'}
        </h2>
        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Image
              </label>
              <input
                type="file"
                accept=".jpg, .png, .jpeg, .webp"
                name="image"
                id="image"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
              {editMode && formData.image && (
                <p className="text-sm text-gray-500 mt-2">
                  Current Image: {formData.image.name || 'Uploaded File'}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Customer Name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Customer Title"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                value={formData.message}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Customer Message"
                required
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mt-4 flex items-center justify-center px-5 py-2.5 text-sm font-medium text-red-600 border-2 border-red-600 mr-2 rounded-lg hover:bg-red-700 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center justify-center px-5 py-2.5 mt-4 text-sm font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TestimonialForm;
