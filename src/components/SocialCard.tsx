import { Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";

const SocialCard = () => {
  return (
    <div className="social-card">
      <span>Redes</span>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a 
        href="https://wa.me/5511997529072" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
      <a 
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
        aria-label="YouTube"
      >
        <Youtube className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialCard;
