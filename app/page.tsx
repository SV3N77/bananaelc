import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto gap-5 py-10">
      <div className="text-center text-6xl font-bold text-viridian my-10">
        Welcome to Banana Early Learning Centre
      </div>
      <section className="flex gap-5">
        <Image
          src="/images/childrentable.jpg"
          width={500}
          height={600}
          alt="childrentable"
          className="rounded-md shadow-md"
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam
          praesentium iste illum hic delectus maxime at enim? Quo itaque
          laudantium vitae, temporibus esse fugiat explicabo corrupti aliquam
          officia unde.
        </div>
      </section>
      <section className="flex gap-5">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam
          praesentium iste illum hic delectus maxime at enim? Quo itaque
          laudantium vitae, temporibus esse fugiat explicabo corrupti aliquam
          officia unde.
        </div>
        <Image
          src="/images/childrentable.jpg"
          width={500}
          height={600}
          alt="childrentable"
          className="rounded-md shadow-md"
        />
      </section>
      <section className="flex gap-5">
        <Image
          src="/images/childrentable.jpg"
          width={500}
          height={600}
          alt="childrentable"
          className="rounded-md shadow-md"
        />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aperiam
          praesentium iste illum hic delectus maxime at enim? Quo itaque
          laudantium vitae, temporibus esse fugiat explicabo corrupti aliquam
          officia unde.
        </div>
      </section>
    </main>
  );
}
