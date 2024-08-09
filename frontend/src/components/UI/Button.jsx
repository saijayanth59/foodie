export default function Button({ isText, className, children, ...props }) {
  const cssClass = isText ? "text-button" : "button";
  className += " " + cssClass;
  return (
    <>
      <button className={className} {...props}>
        {children}
      </button>
    </>
  );
}
