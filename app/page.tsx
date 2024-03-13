import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto gap-5 py-10">
      <section className="flex gap-5">
        <Image
          src="/images/childrentable.jpg"
          width={500}
          height={600}
          alt="childrentable"
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
        />
      </section>
      <section className="flex gap-5">
        <Image
          src="/images/childrentable.jpg"
          width={500}
          height={600}
          alt="childrentable"
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
