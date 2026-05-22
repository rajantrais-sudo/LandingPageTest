const SectionHeading = ({
  badge,
  title,
  description,
  center = true,
}) => {
  return (
    <div
      className={`max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
  
      <p className="uppercase tracking-[3px] text-[11px] font-bold text-[#3D5AFE]">
        {badge}
      </p>

      <h2 className="text-[#001A57] text-3xl md:text-5xl font-bold leading-tight mt-4">
        {title}
      </h2>

      <p className="text-gray-500 text-lg leading-8 mt-5">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;