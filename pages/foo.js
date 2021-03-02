import Link from "next/link";

export default function Foo() {
  return (
    <div>
      <h1>foo</h1>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  );
}
