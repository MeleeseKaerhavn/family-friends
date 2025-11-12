// components/Tag.jsx
const Tag = ({ label, color = "#ACD7FF", textColor = "#6B8B42" }) => {
  return (
    <p
      className="rounded-full px-2 py-1 text-nowrap text-sm font-normal"
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {label}
    </p>
  );
};

export default Tag;
