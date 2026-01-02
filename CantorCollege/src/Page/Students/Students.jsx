import styles from './Students.module.css';
import Card from '../../Components/Card/Card.jsx';

const Students =() =>{
    return(
        <>
            <h2>Students</h2>
            <section>
                <h3>Explore Cantor College: World-Class Facilities for Your Success</h3>
                <span>
                    <p>At Cantor College, we are committed to providing our students with the best possible environment to learn, create, and innovate. Our state-of-the-art facilities are designed to support your academic journey and help you thrive in your chosen field. Whether you’re studying computing, design, or technology, our campus offers everything you need to excel.</p>
                    <button>Find Your Course</button>
                </span>
                <img src="./graffitiWall.jpeg" alt="Graffiti Art Wall" width="100%" height="auto" />
            </section>

            <h2>Our Facilities</h2>
            <span className={styles.cardComponent}>
                <Card 
                    title="Advanced Computing Labs" 
                    description="Our computing labs are equipped with the latest hardware and software, providing you with the tools you need to develop your skills in programming, cybersecurity, data science, and more. The labs are accessible 24/7, ensuring you can work on your projects at any time that suits you." 
                    imageSrc="./advancedComputerLab.jpg" 
                    imageAlt="Advanced Computing Labs"
                />

                <Card
                    title="Design Studio"
                    description="Our design studios offer a creative space for students in graphic design, digital media, and product design. Each studio is equipped with high-end graphic tablets, professional-grade software, and large-format printers, allowing you to bring your ideas to life. The studios also feature collaborative spaces where you can work with peers and faculty on group projects."
                    imageSrc="./gallery1.jpg" imageAlt="Design Studio"
                />

                <Card 
                    title='Innovation & Makerspace'
                    description="Cantor College’s Innovation and Makerspace is a hub for creativity and invention. This facility is equipped with 3D printers, laser cutters, CNC machines, and other advanced prototyping tools. Whether you're working on a design project or developing a new tech product, this space provides the resources to turn your concepts into reality."
                    imageSrc="./beehiveWorks.jpeg"
                    alt="Beehive Works Collaborative Space"
                />

                <Card
                    title="Technology Sandbox"
                    description="The Technology Sandbox is an experimental space where students can explore the latest in VR, AR, and AI technologies. With access to cutting-edge devices and software, you’ll be able to experiment with emerging technologies and push the boundaries of what’s possible in your field."
                    imageSrc="./vrTesting.jpg"
                    alt="Students testing VR equipment"
                />

                <Card
                    title="Collaborative Learning Spaces"
                    description="Our campus features numerous collaborative learning spaces designed to foster teamwork and creative problem-solving. These spaces are equipped with smartboards, video conferencing tools, and flexible seating arrangements, making them ideal for group work, study sessions, or brainstorming meetings."
                    imageSrc="./collaborativeWork.jpg"
                    alt="Students collaborating in a learning space"
                />

                <Card
                    title="Student Hub"
                    description="The Student Hub is the social heart of our campus, providing a place for relaxation and connection. Here, you’ll find a café, lounge areas, and recreational facilities, making it the perfect spot to unwind between classes, meet with friends, or join student-led activities and clubs."
                    imageSrc="./studentUnion.jpg"
                    alt="Student Union Building"
                />

                <Card
                    title="Career & Development Center"
                    description="Our Career and Development Centre is dedicated to helping you plan your future. Offering career counseling, resume workshops, and job placement services, this Centre provides the support you need to transition from student to professional. The Centre also hosts regular employer networking events and industry talks to help you build connections in your field."
                    imageSrc="./careerWork.jpg"
                    alt="Career Development Workshop"
                />

                <Card
                    title="Fitness and Wellness Centre"
                    description="We believe in nurturing both the mind and body. Our Fitness and Wellness Centre offers a fully equipped gym, exercise studios, and a range of fitness classes to help you stay healthy and active. The Centre also includes wellness services such as yoga, meditation, and counseling to support your overall well-being."
                    imageSrc="./shuGym.png"
                    alt="Cantor College Gym"
                />

                <Card
                    title="On-Campus Housing"
                    description="For those who choose to live on campus, Cantor College offers modern, comfortable housing options. Our residence halls provide a supportive community environment, with amenities like high-speed internet, study lounges, and common areas where you can relax and socialize."
                    imageSrc="./studentAccom.png"
                    alt="Student conversing in their accommodation"
                />
            </span>

            <section>
                <h3>Experience Cantor College</h3>
                <p>Cantor College’s facilities are designed to enhance your learning experience and support your academic and personal growth. We invite you to explore our campus, discover our resources, and make the most of everything we have to offer.</p>
                <img src="./cantorCollege.jpg" alt="Front of Cantor College" width="100%" height="auto"/>
            </section>
        </>
    )
}

export default Students;
