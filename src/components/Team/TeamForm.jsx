import React from 'react';

import PropTypes from 'prop-types';

const TeamForm = ({
  formData,
  onChange,
  onFileChange,
  onSubmit,
  isEdit,
  error,
  previewImage,
}) => {
  return (
    <form className="p-6 bg-white dark:bg-gray-800" onSubmit={onSubmit}>
      <h2 className="text-2xl font-bold mb-4">
        {isEdit ? 'Edit Team Member' : 'Add Team Member'}
      </h2>

      {formData.imageUrl && isEdit && !previewImage && (
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current Profile Image:
          </p>
          <img
            alt="Profile"
            className="w-32 h-32 object-cover rounded-md border dark:border-gray-600"
            src={formData.imageUrl}
          />
        </div>
      )}

      {previewImage && (
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            New Profile Image Preview:
          </p>
          <img
            alt="Preview"
            className="w-32 h-32 object-cover rounded-md border dark:border-gray-600"
            src={previewImage}
          />
        </div>
      )}

      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 dark:text-white"
          htmlFor="name"
        >
          Name
        </label>
        <input
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 dark:text-white"
          htmlFor="title"
        >
          Title
        </label>
        <input
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={onChange}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 dark:text-white"
          htmlFor="image"
        >
          Profile Image
        </label>
        <input
          accept="image/*"
          className="mt-1 block w-full text-gray-900 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          id="image"
          name="image"
          type="file"
          onChange={onFileChange}
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        type="submit"
      >
        {isEdit ? 'Save Changes' : 'Add'}
      </button>
    </form>
  );
};

TeamForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onFileChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  error: PropTypes.string,
  previewImage: PropTypes.string,
};

export default TeamForm;
