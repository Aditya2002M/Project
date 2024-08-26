import React from "react";
import { motion } from "framer-motion";


const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "This service is fantastic! It has greatly improved my productivity.",
    avatar: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=0HU1oQGXlO4nrrMKKzAK4Jmu6XDLvXhTGjKScvrNIZw=",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "A game-changer for our team. We highly recommend it!",
    avatar: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=",
  },
  {
    id: 3,
    name: "Sam Wilson",
    text: "Amazing experience, great support, and easy to use.",
    avatar: "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?s=2048x2048&w=is&k=20&c=yif473DFhN451o-tNC1tASFFoP5QTOYcqS26dhEbv6U=",
  },
];

const Testimonials = () => {
  return (
    <div style={styles.container}>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 50,scale:0.9 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{scale:1.1}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          style={styles.testimonialCard}
        ><div className="flex justify-center items-center"><img src={testimonial.avatar} alt={testimonial.name} style={styles.avatar} /></div>
          
          <h3 style={styles.name}>{testimonial.name}</h3>
          <p style={styles.text}>{testimonial.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: "30px",
    padding: "40px",
  },
  testimonialCard: {
    backgroundColor: "#d4d4d4",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  avatar: {
    width: "115px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  name: {
    margin: "10px 0",
    fontSize: "2.2em",
    fontWeight:"700",
    color: "#333",
  },
  text: {
    fontSize: "1.2em",
    color: "#666",
  },
};

export default Testimonials;
