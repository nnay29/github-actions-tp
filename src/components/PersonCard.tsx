interface PersonCardProps {
  name: string;
  imageUrl: string;
}

export default function PersonCard({ name, imageUrl }: PersonCardProps) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img src={imageUrl} alt="Profile Image" />
      </div>
      <div className="profile-details">
        <p>{name}</p>
      </div>
    </div>
  );
}