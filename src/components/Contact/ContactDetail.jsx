import React from 'react';

const ContactDetail = ({ onClose }) => {
  console.log('Prop onClose diterima: ', onClose);
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 w-full h-screen flex items-center justify-center bg-gray-900 bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-2xl md:h-auto mx-auto z-60">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800 z-70">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-2.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6.293 4.293a1 1 0 011.414 0L10 7.586l2.293-2.293a1 1 0 111.414 1.414L11.414 9l2.293 2.293a1 1 0 11-1.414 1.414L10 10.414l-2.293 2.293a1 1 0 11-1.414-1.414L8.586 9 6.293 6.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 pt-0 text-center">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Contact Details
            </h3>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Name
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                namee
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Email
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                asdasdasd@email.com
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Phone Number
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                2313123123123123
              </dd>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Message
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem nemo unde dicta hic delectus, eligendi
                voluptatum! Consequuntur nam iste sit aliquid magni voluptatem
                facere earum! Excepturi sequi rerum dolores id?
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
