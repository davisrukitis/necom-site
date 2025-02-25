export default function EventCard({ title, img }) {
  return (
    <div className="event-card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}