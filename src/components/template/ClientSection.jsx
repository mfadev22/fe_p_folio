const HeroSection = () => {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1
              className="font-semi text-base
             text-primary md:text-xl"
            >
              Hallo Semua ✋, saya
              <span className="lg:5xl mt-1 block text-4xl font-bold text-dark">
                Mohammad Fadhlul Adlim
              </span>
            </h1>
            <h2 className="mb-5 text-lg font-medium text-secondary">
              Web Developer & IT Support
            </h2>
            <p className="mb-10 font-medium leading-relaxed text-secondary lg:text-2xl">
              Belajar web Programing itu mudah dan menyenangkan bukan.
            </p>

            <a
              href=""
              className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-0">
              <img
                src="img/my_foto.png"
                alt="Mohammad Fadhlul Adlim"
                className="mx-auto max-w-full"
              />
              <span className="absolute -bottom-0 left-1/2 -z-10 -translate-x-1/2 md:scale-125">
                <svg
                  width="600"
                  height="600"
                  viewBox="0 5 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14B8A6"
                    d="M43.9,25.9C30.3,48.9,-25.6,48,-40,24.5C-54.4,1.1,-27.2,-44.9,0.8,-44.5C28.7,-44,57.5,2.9,43.9,25.9Z"
                    transform="translate(100 100) scale(1.2)"
                  />
                </svg>
              </span>