import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Kishanganj Engineering College</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Computer Science at Kishanganj
              Engineering College, Bihar. Coursework includes Data Structures,
              Algorithms, Database Management, Computer Networks, and OOPs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern - Network Traffic Analysis</h4>
                <h5>National Institute of Technology Patna</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on Network Traffic Analysis and Packet Inspection using
              Wireshark under Dr. Dinesh Dash. Analyzed live traffic (TCP, UDP,
              HTTP, DNS, ICMP) to identify abnormal patterns and security threats.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance & Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building full stack applications using MERN Stack, Next.js, and
              React Native. Selected for Smart India Hackathon 2025. Solved 260+
              DSA problems on LeetCode and 170+ on GeeksforGeeks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
