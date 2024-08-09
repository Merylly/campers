import css from "./HomeInfo.module.css";

const HomeInfo = () => {
  return (
    <div className={css.info}>
      <h1 className={css.title}>Welcome to Campers</h1>
      <p className={css.text}>
        Discover the perfect vehicle to elevate your camping adventures. Our
        service specializes in helping you find the ideal car tailored for
        camping, whether you are seeking a rugged off-roader, a spacious van, or
        a compact SUV with just the right features. With our expert
        recommendations and extensive selection, you will be equipped to explore
        the great outdoors in comfort and style.
      </p>
      <p className={css.text}>
        Start your journey with us today and experience camping like never
        before!
      </p>
    </div>
  );
};

export default HomeInfo;
