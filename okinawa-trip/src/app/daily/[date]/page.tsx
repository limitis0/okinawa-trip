export default function Page({ params }: { params: { date: string } }) {
  return <p>Daily Page: {params.date}</p>;
}
