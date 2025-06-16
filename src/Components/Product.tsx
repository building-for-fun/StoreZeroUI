type ProductProps = {
  name: string;
  description: string;
  price: number;
  categoryId: number;
  imageUrl: string;
};

export default function Product({
  name,
  description,
  price,
  imageUrl,
}: ProductProps) {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt={name} style={styles.img} />
      </div>
      <h1 style={styles.name}>{name}</h1>
      <div id="des" style={styles.description}>
        {description}
      </div>
      {/* <p>Category: {categoryId}</p> */}
      <p style={styles.price}>
        <h3>Price: ₹{price}</h3>
      </p>
    </div>
  );
}
const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: "160px",
    height: "340px",
    padding: "6px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "sans-serif",
  },

  imageContainer: {
    width: "100%",
    height: "120px",
    marginBottom: "8px",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain" as const,
    borderRadius: "4px",
  },

  name: {
    fontSize: "14px",
    fontWeight: "bold",
    margin: "6px 0 4px 0",
    textAlign: "center",
  },

  description: {
    fontSize: "12px",
    color: "#555",
    textAlign: "center",
    marginBottom: "6px",
    lineHeight: "1.3",
  },

  price: {
    color: "red",
    fontSize: "14px",
    fontWeight: 500,
  },
};
