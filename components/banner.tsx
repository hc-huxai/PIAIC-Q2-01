const Banner = () => {
  return (
    <header
      className="w-full py-20 px-24 text-center flex item-center flex-col space-y-4"
      style={styles.bannerContainer}
    >
      <h1 className="text-white text-[3.25rem]">
        Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
        Karachi, Lahore, Islamabad, and Peshawar
      </h1>
      <h2 className="text-gray-300">
        Getting Ready for the Next Generation and Future of the Internet - Join
        a 13 Trillion Dollar Industry with 5 Billion Users
      </h2>
    </header>
  );
};

export default Banner;

const styles = {
  bannerContainer: {
    backgroundColor: "#159957",
    backgroundImage: "linear-gradient(120deg, #155799, #159957)",
  },
};
