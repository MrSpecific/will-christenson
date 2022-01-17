export default function ArrowIcon({ className }) {
  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon svg-icon--chevron ${className}`}
    >
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
      <path d="m12.707 8.707-1.414-1.414L6.586 12l4.707 4.707 1.414-1.414L10.414 13H15v3h2v-5h-6.586l2.293-2.293z" />
    </svg>
  );
}
