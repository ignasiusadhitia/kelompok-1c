import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import useAddData from 'hooks/useAddData';
import useUpdateData from 'hooks/useUpdateData';

const AboutUsForm = ({ isEdit, data }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: '',
    title: isEdit ? data.title : '',
    desc: isEdit ? data.desc : '',
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  // use custom hooks for add data
  const { addData, loading: addLoading } = useAddData('/api/about-us');

  //use custom hooks for edit data
  const { updateData, loading: updateLoading } = useUpdateData(`/api/about-us`);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEdit && !formData.image) {
      alert('Please upload an image.');
      return;
    }

    const data = new FormData();
    data.append('image', formData.image);
    data.append('title', formData.title);
    data.append('date', formData.date);
    data.append('desc', formData.desc);

    if (isEdit) {
      updateData(data, () => {
        navigate('/dashboard/about-us');
      });
    } else {
      addData(data, () => {
        navigate('/dashboard/about-us');
      });
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {isEdit ? 'Edit' : 'Add'} a About Us section
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Hero Image
              </label>
              <input
                accept=".jpg, .png, .jpeg, .webp"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="image"
                name="image"
                type="file"
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="name"
              >
                Title
              </label>
              <input
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="title"
                name="title"
                placeholder="Type product name"
                type="text"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="desc"
              >
                Description
              </label>
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="desc"
                name="desc"
                placeholder="Your desc here"
                rows="8"
                value={formData.desc}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="mt-4 flex items-center justify-center px-5 py-2.5 mt-4 text-sm font-medium text-red-600 border-2 border-red-600 mr-2 rounded-lg hover:bg-red-700 hover:text-white"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              className={`flex items-center justify-center px-5 py-2.5 mt-4 text-sm font-medium text-white rounded-lg ${
                addLoading || updateLoading
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={addLoading || updateLoading}
              type="submit"
            >
              {addLoading || updateLoading ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Loading...
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AboutUsForm;
