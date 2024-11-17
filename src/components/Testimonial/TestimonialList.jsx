import React, { useEffect } from 'react';
import TestimonialItem from './TestimonialItem'; 
import useTestimonialsApi from 'hooks/useTestimonial'; 

const TestimonialList = () => {
  const { testimonials, loading, error, loadTestimonials } =
    useTestimonialsApi();

  useEffect(() => {
    loadTestimonials();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-4 py-3" scope="col">
            Date
          </th>
          <th className="px-4 py-3" scope="col">
            Name
          </th>
          <th className="px-4 py-3" scope="col">
            Message
          </th>
          <th className="px-4 py-3 text-center" scope="col">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))
        ) : (
          <tr>
            <td className="px-4 py-3 text-center" colSpan="4">
              No testimonials found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TestimonialList;
