import Link from "next/link";

type CharacterCardProps = {
  name: string;
  link: string;
};

export default function CharacterCard({ name, link }: CharacterCardProps) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <small className="d-block fw-bold">{name}</small>
          <Link href={link} className="stretched-link"></Link>
        </div>
      </div>
    </div>
  );
}
