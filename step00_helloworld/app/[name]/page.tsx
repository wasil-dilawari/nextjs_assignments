export default function GiveName({ params }: { params: { name: string } }) {
  return <div>My name is {params.name}.</div>;
}
