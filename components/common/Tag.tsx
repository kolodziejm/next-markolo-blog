function Tag({ children }) {
  return (
    <li className="p-2 bg-purple-100 text-purple-600 text-xs uppercase rounded-md">
      {children}
    </li>
  );
}

export default Tag;