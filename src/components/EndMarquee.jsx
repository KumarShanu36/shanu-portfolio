import "./EndMarquee.css";

const items = [
  "YOUR VISION, MY ENGINEERING",
  "YOUR VISION, MY ENGINEERING",
  "YOUR VISION, MY ENGINEERING",
  "YOUR VISION, MY ENGINEERING",
];

export default function EndMarquee() {
  const repeated = [...items, ...items];

  return (
    <section className="end-marquee-section">
      <div className="end-marquee-track">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="end-marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
