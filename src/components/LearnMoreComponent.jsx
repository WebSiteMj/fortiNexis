function LearnMoreComponent({ onClose }) {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Lear more</h2>
        <button onClick={onClose}>Close</button> {/* This button calls the parent's function */}
      </div>
    </div>
  );
}

export default LearnMoreComponent;