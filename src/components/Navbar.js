import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
        <Link href="/">Home</Link>{" | "}
        <Link href="/about">About</Link>{" | "}
        <Link href="/research">Research</Link>{" | "}
        <Link href="/publications">Publications</Link>{" | "}
        <Link href="/people">Students</Link>{" | "}
        <Link href="/events">Teaching</Link>{" | "}
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
