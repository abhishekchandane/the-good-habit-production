import "./ProductReels.css";

const videos = [
  {
    id: 1,
    video: "/videos/video1.mp4",
    title: "Chocolate Protein Wafer",
    price: 509,
    oldPrice: 600,
    discount: "15% Off",
    views: "5.2K Views",
  },
  {
    id: 2,
    video: "/videos/video2.mp4",
    title: "Strawberry Crème Protein",
    price: 509,
    oldPrice: 600,
    discount: "15% Off",
    views: "3.4K Views",
  },
  {
    id: 3,
    video: "/videos/video3.mp4",
    title: "Protein Wafers - Variety ",
    price: 509,
    oldPrice: 600,
    discount: "15% Off",
    views: "4.1K Views",
  },
  {
    id: 4,
    video: "/videos/video4.mp4",
    title: "Protein Chips - Variety Pack",
    price: 500,
    oldPrice: null,
    discount: null,
    views: "3.7K Views",
  },
    {
    id: 5,
    video: "/videos/video2.mp4",
    title: "Protein Chips - Variety  ",
    price: 500,
    oldPrice: null,
    discount: null,
    views: "3.7K Views",
  },
];

export default function ProductReels() {
  return (
    <section className="product-reels" id="product-reels">
      <h2 className="product-reels-heading">WATCH GOOD HABITS TAKE OVER</h2>

      <div className="product-reels-list">
        {videos.map((item) => (
          <div key={item.id} className="product-reel-card">
            <div className="reel-image">
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
              />
              <span className="reel-views">{item.views}</span>
            </div>

            <div className="reel-details">
              <h3 className="reel-title">{item.title}</h3>
              <div className="reel-price">
                {item.oldPrice && (
                  <span className="reel-old-price">INR {item.oldPrice}</span>
                )}
                <span className="reel-new-price">INR {item.price}</span>
              </div>
              {item.discount && <p className="reel-discount">{item.discount}</p>}
              <button className="reel-buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
