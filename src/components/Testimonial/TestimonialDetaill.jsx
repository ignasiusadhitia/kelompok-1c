import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTestimonial from 'hooks/useTestimonial'; // Adjust the import path as necessary

const TestimonialDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get ID from URL params
  const { getTestimonialDetails, loading, error } = useTestimonial(); // Use the hook
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getTestimonialDetails(id); // Fetch testimonial details by ID
        if (data) {
          setTestimonial(data); // Set testimonial data if found
        } else {
          setTestimonial(null); // If no data, set null
        }
      } catch (err) {
        console.error('Failed to fetch testimonial details:', err);
        setTestimonial(null); // Handle error by setting testimonial to null
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>Error: {error}</div>; // Show error message if there is one

  // Ensure testimonial is not null or undefined before rendering
  if (!testimonial) {
    return <div>No testimonial found.</div>;
  }

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <button
            className="border-2 border-rose-500 text-rose-500 hover:text-white hover:bg-rose-500 p-2 rounded-lg font-bold"
            onClick={() => navigate(-1)} // Go back to previous page
          >
            Back
          </button>
          <div className="my-8 xl:mb-16 xl:mt-12 flex justify-center">
            <img
              className="w-96 dark:hidden"
              src={testimonial.imageUrl} // Use imageUrl from the data
              alt={testimonial.name} // Use name as alt text
            />
          </div>
          <div className="mx-auto max-w-2xl space-y-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.name}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.title}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {testimonial.date}
            </p>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {testimonial.message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialDetail;
