import styles from './Staff.module.css';
import Card from '../../Components/Card/Card.jsx';

const Staff =() =>{
    return(
        <>
            <h2>Information for Staff</h2>
            <section>
                <h3>News</h3>
                <p>Cantor College recently hosted the Software Engineering student of the year awards. Shortlisted candidates from around the country attended the one day event.
                </p>
                <img src="./shuAwards.jpg" alt="Cantor College Awards Ceremony" />
            </section>

            <span className={styles.cardComponent}>
                <Card 
                    title="Academy Registry"
                    description="For academic regulations, assessment, awards, student records and course validation."
                    imageSrc="./shuStudents.jpeg"
                    imageAlt="Students walking on campus"
                />
                <Card 
                    title="Catering Services"
                    description="Contact the Catering Services regaring on and off-site catering."
                    imageSrc="./shuCatering.jpg"
                    imageAlt="Cantor College chef preparing food for an event"
                />
                <Card 
                    title="Financial Services"
                    description="The financial team based on the 2nd Floor are responsible for all areas of student finance as well as College budgeting."
                    imageSrc="./shuFinance.jpg"
                    imageAlt="Financial Services Team"
                />
                <Card 
                    title="Information Systems Services (ISS)"
                    description="The ISS team delivers the College’s computing facilities including all hardware and software. 
They also run the staff helpdesk."
                    imageSrc="./shuHelp.jpg"
                    imageAlt="Hallam Help Team"
                />
                <Card
                    title="Marketing Services"
                    description="The Marketing Team will help promote events and new courses. They will help with press 
release preparation."
                    imageSrc="./shuMarketing.png"
                    imageAlt="Event hosted by the Marketing Team"
                />
                <Card 
                    title="Personnel Services"
                    description="All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd Floor."
                    imageSrc="./shuPersonnelServices.jpg"
                    imageAlt="Staff protesting fair wage"
                />
                <span className={styles.facilitiesCard}>
                    <Card 
                    title="Facilities"
                    description="The facilities are reponsibile for the general care and maintenance of the College. All 
                    enquireies via the main helpdesk."
                    imageSrc="./shuFacilityHelpDesk.jpg"
                    imageAlt="Facility Help Desk"
                />
                </span>
            </span>

        </>
    )
}

export default Staff;