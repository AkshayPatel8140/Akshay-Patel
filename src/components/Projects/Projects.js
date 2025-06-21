import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Images from "../../data/Images";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Images.aaa}
              isBlog={false}
              title="AI Academic Advisor"
              description="The AI Academic Advisor is an AI-powered recommendation system that provides personalized academic and career guidance to students by analyzing their academic history, preferences, and engagement patterns. It features a hybrid recommendation engine that integrates content-based, collaborative, and knowledge-based filtering to generate adaptive course and career suggestions. Backend services, built with Flask, manage session handling, recommendation logic, and sentiment analysis using transformer-based NLP models, while LSTM models predict student engagement levels. Data is stored in PostgreSQL and MongoDB, optimized for performance through indexing and sharding. A responsive React frontend delivers an intuitive user experience, complete with a real-time chatbot that assists users in navigating course plans and academic decisions. The system achieved significant improvements in response time and recommendation accuracy and is designed for scalability and seamless integration with broader educational platforms."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
              appLikes={[]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Images.reactNative}
              isBlog={false}
              title="SEEKRZ"
              description="The Seekers App is a versatile platform for buying, selling, and trading items such as clothing, accessories, and footwear. My role began with establishing the project's foundation and initial functionality. I led the deployment on both the App Store and Google Play Store, ensuring wide accessibility. To enhance performance, I implemented memory caching and asynchronous data loading, which increased user engagement by 20%. Additionally, I introduced a photo capture feature with local storage and S3 bucket integration, improving app speed by 30%. I also configured Google Analytics to track user behavior and performance metrics, resulting in a 15% increase in the average order rate. The app's standout feature is its in-app chat, which facilitates communication and negotiations between users, providing a seamless and interactive user experience."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
              appLikes={[
                {
                  name: 'iOS App', 
                  type: 'ios',
                  link: 'https://apps.apple.com/us/app/seekrz-buy-sell-streetwear/id1496295519'
                },
                {
                  name: 'Android App',
                  type: 'android',
                  link: 'https://play.google.com/store/apps/details?id=com.swappitinc.swappit&pcampaignid=web_share'
                },
                {
                  name: 'Store iOS App',
                  type: 'ios',
                  link: 'https://apps.apple.com/us/app/seekrz-stores/id1625261820'
                }]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Images.scaleEvv}
              isBlog={false}
              title="SCALE-EVV"
              description="The Scale EVV mobile app streamlines the caregiving process by enabling caregivers to submit paperless timesheets, communicate with their agency, and access client care plans and information directly from the app. Key features include electronic timesheet submission, allowing both clients and caregivers to sign timesheets digitally, and instant timesheet delivery to the agency portal. Caregivers can view care plans and schedules, and contact their agency via call or message within the app. The cloud-based Scale EVV Software empowers agencies to operate efficiently from anywhere, helping them to scale their operations and serve more clients effectively, ultimately ensuring the highest quality of care."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
              appLikes={[
                {
                  name: 'iOS App',
                  type: 'ios',
                  link: 'https://apps.apple.com/in/app/scale-evv/id1530152802'
                },
                {
                  name: 'Android App',
                  type: 'android',
                  link: 'https://play.google.com/store/apps/details?id=indagale.scaleevv.app&pcampaignid=web_share'
                }]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Images.reactNative}
              isBlog={false}
              title="SAURASHTRA NI RASDHARA"
              description="The application I've been involved with is similar to YouTube but focuses on showcasing the talent of singers from Gujarat, India. This platform exclusively highlights the musical prowess and performances of local singers within the Gujarat region, offering a diverse array of musical content including performances, compositions, and covers from famous local artists. It aims to provide a stage to promote and celebrate the rich musical heritage and talent in this area. Users can interact with videos by following creators and expressing appreciation through likes. Beyond video content, the app also serves literature enthusiasts by offering a wide array of free books, which users can read within the application. Additionally, it provides information about upcoming events, including locations and directions, to help users seamlessly plan their attendance. My involvement in this project includes creating an interactive space where users can engage with video content, follow creators, appreciate content, and access a diverse and accessible library of literature."
              appLikes={[{
                name: 'Android App',
                type: 'android',
                link: 'https://play.google.com/store/apps/details?id=com.rasdhara&pcampaignid=web_share'
              }]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Images.heirList}
              isBlog={false}
              title="HEIRLIST"
              description="The application I've been working on serves as a platform for gathering information about deceased individuals. It allows family members to register and provide specific details to receive a detailed report. My involvement began with establishing the project's structure and laying the groundwork for its functionality. I focused on crafting a sophisticated user interface to ensure an optimal user experience. Additionally, I implemented the In-App Purchase feature, offering users access to additional services or features within the app. I engineered a module for seamless online and offline mode switching, boosting speed by 25%, and utilized secure deep linking with Firebase to manage user access. Furthermore, I developed custom animations and UI components, improving app smoothness by 60% and reducing app size by 10%."
              appLikes={[
                {
                  name: 'iOS App',
                  type: 'ios',
                  link: 'https://apps.apple.com/in/app/heirlist/id1517622593'
                },
                {
                  name: 'Android App',
                  type: 'android',
                  link: 'https://play.google.com/store/apps/details?id=com.chiefinnovation.heirlist&pcampaignid=web_share'
                }]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Images.reactNative}
              isBlog={false}
              title="CHALLENGER"
              description="The application focuses on helping sports enthusiasts find match opponents and issue challenges seamlessly. Users can locate opponents, book a pitch or venue directly within the platform, and get confirmations through an admin for a smooth transition to the match. In my solo role, I enhanced the user experience by implementing a countdown timer for matches, creating anticipation and excitement. I developed and integrated the chat module using API functionalities, enabling efficient communication for discussing match details, strategies, and logistics. To broaden accessibility, I added support for multiple languages, including English and Arabic, tailoring the app’s interface to the user's language preference. This enhancement ensures a personalized experience for all users. Additionally, I designed a live countdown feature for real-time timer tracking, improving player experience and gameplay efficiency. Streamlined player communication boosted engagement by 30%, minimizing the need for external apps."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Images.reactNative}
              isBlog={false}
              title="JAIMACA - TOURS AND TRAVELS"
              description="This application is tailored to facilitate taxi services throughout Jamaica, offering both locals and tourists a convenient way to book, track, and utilize taxis across different locations. Key features include GPS-enabled location services, fare estimates, secure payment options, multi-language support, and a user-friendly interface. The app aims to improve transportation accessibility and reliability for individuals navigating Jamaica's cities and towns, enhancing overall travel convenience."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Images.reactNative}
              isBlog={false}
              title="SQL"
              description="This app focuses on efficient management of database files, specifically .db or .sql formats. Users can import these files for seamless data editing and make modifications, exporting changes in various formats for compatibility and accessibility. A key feature allows creation of localized asynchronous storage databases within the app, structuring data with proper relationships for effective organization. Overall, it serves as a versatile tool for handling database files, enabling import, edit, and export across formats, alongside structured local storage databases to streamline data management. Additionally, I developed multi-format data export and report generation capabilities using DB files for advanced data analysis."
              appLikes={[{
                name: 'Android App',
                type: 'android',
                link: 'https://play.google.com/store/apps/details?id=com.moontechnolabs.SqliteEditor&pcampaignid=web_share'
              }]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Images.i_Detect}
              isBlog={false}
              title="i-DETECT (Python, Raspberry-PI, MySQL)"
              description="I developed a real-time luggage tracking system using Raspberry Pi and Django, significantly enhancing user experience and travel security. By implementing a fingerprint authentication system with Raspberry Pi, I boosted bag security by 70%. Additionally, I architected and built a user-friendly Django-based website that supports real-time tracking across various platforms, emphasizing accessibility and usability for users."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
