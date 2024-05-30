function Body() {
  return (
    <>
      <div id="body-wrapper" className="body-wrapper">
        <div id="body_box" className="body_box">
          <div className="w-full h-auto mb-5">
            <img src="spa.jpg" className="h-[80vh] w-full" />
          </div>

          <div
            id="body_text_box"
            className="body_text_box bg-pink-700 text-white text-center p-8 px-40 text-justified"
          >
            <h2 className="text-2xl my-2">Think Health. Think Massage.</h2>
            <p className="my-2">
              Body treatments may include sauna, whirlpool, jet bath, steam
              room, massage, mud bath, salt scrub, seaweed body wraps, clay or
              herbal body masks, reflexology and waxing. Day spas also usually
              offer nail services, such as manicures, pedicures and paraffin
              treatments.{" "}
            </p>

            <div className="w-full flex gap-10 justify-center mt-5 mb-5">
              <button className=" px-4 py-1 text-white font-bold border border-white hover:bg-white hover:text-pink-700 ">
                Book Appointment
              </button>
              <button className=" px-4 py-1 text-white font-bold border border-white hover:bg-white hover:text-pink-700 ">
                Check Services
              </button>
            </div>
          </div>

          <div className="mt-5 mx-24 px-24 my-5">
            <h3 className="text-xl text-center text-pink-700 font-semibold">
              Are You Looking for Professional and trained Massage Therepist We
              are the Best in the City
            </h3>

            <p className="my-3">
              Massage therapy is used to help manage a health condition or
              enhance wellness. It involves manipulating the soft tissues of the
              body. Massage has been practiced in most cultures, both Eastern
              and Western, throughout human history, and was one of the earliest
              tools that people used to try to relieve pain.
            </p>

            <p className="my-3">
              People of all ages are turning to massage therapy for relief from
              the stress of daily life, injuries and chronic and acute
              conditions, as well as to help maintain health and wellness. It is
              one of the oldest healing arts, dating back 3,000 years, according
              to Chinese records.
            </p>
          </div>
          <hr className="h-[1rem] border-top border-pink-700" />

          {/* body ka last section */}

          <div className="mx-20 px-10 flex flex-col gap-2 items-center mb-10">
            <h3 className="text-lg text-pink-700 my-3">
              Family Wellness Massage Therepy
            </h3>

            <p className="">1234 Temporary Street, Temporary City,</p>
            <p>Temporary State, 12345, INDIA.</p>
            <p>+91-8630486678</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
