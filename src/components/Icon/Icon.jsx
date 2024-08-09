import sprite from "../../assets/icons/sprite.svg";

const Icon = ({ className, width, height, id }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#icon-${id}`} />
    </svg>
  );
};

export default Icon;
