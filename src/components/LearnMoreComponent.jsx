function LearnMoreComponent({ onClose }) {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <h2>Lear more</h2>
        <p>Do you know what FinTech is—how it’s transforming the world in just a few years, and even a few days? It’s the force that’s turning slow, complicated financial processes into fast, simple, user-friendly experiences. Payments, savings, investments, security—everything is becoming smarter, quicker, and built around you.

And this is exactly where FortiNExis steps in.

We take the power of FinTech and shape it into solutions that work for you:
• Faster access to your money
• Smarter automation so you skip the hassle
• Stronger security to protect every transaction
• Clear insights that help you make better decisions
• A seamless experience across all your devices

In short, FinTech is changing the world—and FortiNExis makes sure it changes your financial life for the better.</p>
        <button onClick={onClose}>Close</button> {/* This button calls the parent's function */}
      </div>
    </div>
  );
}

export default LearnMoreComponent;