export default function ContentWrapper({ children }) {
    return (
      <div className="max-w-5xl mx-auto my-8 p-8 bg-white dark:bg-gray-800 rounded shadow-lg">
        {children}
      </div>
    );
  }
  