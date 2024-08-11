import sprite from "../../assets/icons/sprite.svg";

const Icon = ({ className, width, height, id, onClick }) => {
  return (
    <svg className={className} width={width} height={height} onClick={onClick}>
      <use href={`${sprite}#icon-${id}`} />
    </svg>
  );
};

export default Icon;
