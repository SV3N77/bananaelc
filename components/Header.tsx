import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-viridian">
      <div className="bg-cover bg-center h-96 bg-[url('/images/childcare_banner.jpg')] flex flex-col gap-4">
        <div className="text-center text-5xl font-bold ">
          Banana Early Learning Centre
        </div>
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
        <div className="text-center text-6xl font-bold">
          Welcome to Banana Early Learning Centre
        </div>
      </div>
    </header>
  );
}
export default Header;
