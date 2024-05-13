import Image from "next/image";
import Link from "next/link";

type CharacterCardProps = {
  name: string;
  image: string;
  link: string;
};

export default function CharacterCard({
  name,
  image,
  link,
}: CharacterCardProps) {
  return (
    <div className="col">
      <div className="character-card card h-100">
        <Image
          src={image || "/images/placeholder.png"}
          className="card-img-top img-fluid"
          alt={name}
          width={300}
          height={300}
        />
        <div className="card-body">
          <hr className="mt-0" />
          <small className="d-block fw-bold">{name}</small>
          <Link href={link} className="stretched-link"></Link>
        </div>
      </div>
    </div>
  );
}
