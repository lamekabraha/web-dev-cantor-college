import styles from './Business.module.css'
import Card from '../../Components/Card/Card.jsx';

const Home =() =>{
    return(
        <>
            <h2>Business</h2>
            <section>
                <h3>Parner with Cantor College: Unlock Expertise, Innovation and Growth</h3>
                <p>At Cantor College, we believe in the power of collaboration between education and industry. Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.</p>
                <img src="./shuBusinessPartnership.jpg" alt="Cantor College Business Partners" />
            </section>

            <h2>Our Services</h2>
            <span className={styles.cardContainer}>
                <Card
                    title="Custom Training and Development Programs"
                    description="Our computing labs are equipped with the latest hardware and software, providing you with the tools you need to develop your skills in programming, cybersecurity, data science, and more. The labs are accessible 24/7, ensuring you can work on your projects at any time that suits you."
                    imageSrc=" ./shuTraining.jpg"
                    imageAlt="Students in a computer lab receiving training"
                />
                <Card 
                    title="Research & Development Partership"
                    description="Leverage the talent and creativity of our students and faculty by partnering with Cantor College on research and development projects. Whether you’re looking to explore new technologies, innovate your product line, or solve complex technical challenges, our R&D team is ready to collaborate with you."
                    imageSrc="shuResearch.jpg"
                    imageAlt="Students researching new technologies"
                />
                <Card 
                    title="Design & Technology Consultancy"
                    description="Our experienced professionals and top-tier students can provide consultancy services to help you with a variety of projects, from web development and software engineering to product design and user experience optimization. We offer fresh perspectives and innovative approaches tailored to your business."
                    imageSrc="./shuConsultation.jpg"
                    alt="A business consultant supporting a student in their project"
                />
                <Card

                    title="Internships & Graduate Recruitement"
                    description="Gain access to a pool of highly skilled and motivated students ready to contribute to your business. Our internship and recruitment services can connect you with top talent in computing, design, and technology, providing you with candidates who are equipped with the latest industry knowledge and practical experience."
                    imageSrc="shuInternship.jpg"
                    imageAlt="Students recieving recruitement support"
                />
                <Card 
                    title="Event Hosting & Sponsorship"
                    description="Cantor College hosts a range of events throughout the year, including hackathons, design challenges, and technology expos. We offer businesses the opportunity to sponsor events or collaborate in their organization, giving you direct access to the brightest minds in the field and the chance to showcase your brand to our community."
                    imageSrc="./shuEvent.jpeg"
                    imageAlt="Business event hosted at Cantor College"
                />
            </span>
           <h2>Why Partner with Cantor College?</h2>
           <span className={styles.cardContainer}>
                <Card 
                title="Cutting-Edge Expertise"
                description="Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design."
                imageSrc=""
                imageAlt=""
                />
                <Card 
                title="Innovation at the Core"
                description="We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions."
                imageSrc=""
                imageAlt=""
                />
                <Card 
                title="Tailored Solutions"
                description="We understand that every business is unique. Our services are customized to meet your specific objectives and challenges."
                imageSrc=""
                imageAlt=""
                />
                <Card 
                title="Future-Ready Talent"
                description="Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills."
                imageSrc=""
                imageAlt=""
                />
           </span>
        </>
    )
}

export default Home;