import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div>This page is not found.</div>
      <Link href="/">Return to home</Link>
    </div>
  );
};

export default NotFound;
