import "./styles.css";
const Paper = ({ children, style, className }) => {
  return (
    <div className={`paper ${className}`} style={style}>
      {children}
    </div>
  );
};
export default Paper;
