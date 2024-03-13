import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="text-viridian">
      <div className="bg-cover bg-center h-128 bg-[url('/images/childcare_banner.jpg')] flex flex-col gap-5">
        <div className="text-center text-5xl font-bold text-viridian mt-5">
          Banana Early Learning Centre
        </div>
        <nav className="container mx-auto flex flex-col items-center justify-center gap-8 text-lg md:flex-row">
          <Image
            src="/images/Banana.jpg"
            width={100}
            height={200}
            alt="Bananaelc Logo"
          />
          <Link href="/">Home</Link>
          <Dropdown dropMenu={["About", "Gallery"]} />
          <Link href="/">Enrolment</Link>
          <Dropdown
            dropMenu={[
              "Curriculum",
              "Caterpillar Room",
              "Butterfly Room",
              "School Readiness",
            ]}
          />
          <Link href="/">Before & After School Care</Link>
          <Link href="/">FAQs</Link>
          <Link href="/">Contact</Link>
        </nav>
        <div className="text-center text-6xl font-bold text-viridian mt-10">
          Welcome to Banana Early Learning Centre
        </div>
      </div>
    </header>
  );
}
export default Header;

//Internal components

type dropdownProps = {
  dropMenu: string[];
};

function Dropdown({ dropMenu }: dropdownProps) {
  return (
    <div id="bouton" className="relative group/bouton">
      <button className="py-3 relative min-w-36">
        <Link href={`/${dropMenu[0]}`}>{dropMenu[0]}</Link>
      </button>
      <div className="absolute opacity-0 min-w-36 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all">
        {dropMenu.slice(1).map((menu) => (
          <div key={menu} className="relative flex justify-center">
            <div className="flex items-center gap-3">
              <div className="mb-0 block flex-col">
                <Link href={`/${menu}`}>{menu}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
