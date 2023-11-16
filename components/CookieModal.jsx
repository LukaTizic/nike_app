const CookieModal = ({ modalOff }) => {
  return (
    <div
      className='relative z-50 '
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

      <div className='fixed inset-0 z-10 w-screen overflow-y-auto '>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 text-slate-gray '>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-3xl shadow-gray-800 transition-all sm:my-8 sm:w-full sm:max-w-lg '>
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start '>
                <div className='  mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                  <svg
                    className='h-7 w-7 text-red-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                    />
                  </svg>
                </div>
                <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                  <h3
                    className='text-base font-semibold leading-6 text-gray-900'
                    id='modal-title'
                  >
                    Terms of Service
                  </h3>
                  <div className='mt-2 flex flex-col justify-start items-align  pr-5  '>
                    <p className='text-base text-gray-500 leading-relaxed border-y border-red-500 mb-5 mt-5 py-5 '>
                      With less than a month to go before the European Union
                      enacts new consumer privacy laws for its citizens,
                      companies around the world are updating their terms of
                      service agreements to comply.
                    </p>
                    <p className=' text-base text-gray-500 leading-relaxed pb-5 border-b border-red-500 mb-5  '>
                      The European Union's General Data Protection Regulation
                      (G.D.P.R.) goes into effect on{" "}
                      <span className='font-bold'>1st of January 2024</span> and
                      is meant to ensure a common set of data rights in the
                      European Union. It requires organizations to notify users
                      as soon as possible of high-risk data breaches that could
                      personally affect them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-200 px-4 py-3 justify-between sm:flex  sm:px-6 '>
              <p className='pt-2 text-sm text-gray-500 flex max-sm:justify-center max-sm:pb-5'>
                For more information please contact{" "}
                <a
                  className=' underline hover:text-red-500 pl-1'
                  href='https://github.com/LukaTizic'
                  target='_blank'
                >
                  support!
                </a>
              </p>
              <button
                onClick={modalOff}
                type='button'
                className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm  sm:ml-3 sm:w-auto max-sm:text-red hover:text-black '
              >
                I understand
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
