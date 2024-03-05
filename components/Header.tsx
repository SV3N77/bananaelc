import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-viridian  p-10">
      <nav className="container mx-auto flex flex-col items-center justify-center gap-4 text-lg md:flex-row">
        <Image
          src="/images/Banana.jpg"
          width={100}
          height={200}
          alt="Bananaelc Logo"
        />
        <a>Home</a>
        <a>About</a>
        <a>Enrolment</a>
        <a>Curriculum</a>
        <a>Befor & After School Care</a>
        <a>FAQ</a>
        <a>Contact</a>
      </nav>
    </header>
  );
}
export default Header;
