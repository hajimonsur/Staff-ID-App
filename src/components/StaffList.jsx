import StaffCard from "./StaffCard";

const StaffList = () => {
  const teamMembers = [
    {
      firstName: "John",
      lastName: "Doe",
      position: "Frontend Developer",
      DOB: "1990-01-15",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-h-iRMeHV3qSL0mtO0XOKudffP8BWG-OZRQIwVseXkBRRr1ShHY7syBQL-4kFMUB04QM&usqp=CAU",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      position: "Backend Developer",
      DOB: "1988-03-22",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s",
    },
    {
      firstName: "Robert",
      lastName: "Johnson",
      position: "UI/UX Designer",
      DOB: "1995-06-10",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCy4sgDT0TlDhrsYt1Ag-OxX5HDVEoSlbUpsAffqN5d30E--0cU98iwuWna14NdE4AZ8o&usqp=CAU",
    },
    {
      firstName: "Emily",
      lastName: "Davis",
      position: "Project Manager",
      DOB: "1992-11-05",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z3Hapf_hfCOHjhKeTp8XDWzMMhzjG8pVjQ&s",
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      position: "DevOps Engineer",
      DOB: "1985-04-18",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5feh6-WBnJMJzunv-DXyYf3BUFU5Yexv08g&s",
    },
    {
      firstName: "Sarah",
      lastName: "Wilson",
      position: "Data Scientist",
      DOB: "1993-09-25",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2UeYInIC6RU8TD69VPK0FnOFf_FFe9xWiGiHD2XDTlTegN1EKcLJm6osrk1rDtKoyYx8&usqp=CAU",
    },
    {
      firstName: "David",
      lastName: "Martinez",
      position: "Cloud Engineer",
      DOB: "1987-02-13",
      profilePicture:
        "https://img.freepik.com/free-photo/handsome-sensitive-red-head-man-smiling_23-2149509820.jpg",
    },
    {
      firstName: "Jessica",
      lastName: "Garcia",
      position: "QA Engineer",
      DOB: "1996-07-30",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQk21cVT4E8J4sVWQfTEIFfk79pYl9oD2sA&s",
    },
    {
      firstName: "James",
      lastName: "Lee",
      position: "Full Stack Developer",
      DOB: "1994-12-12",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXHNYPDIj2y3liIr6SD2iqUMsCOXJwWVuqrz3ymt-vZwclsrOifw5MvRBy6nvT9L_fBrQ&usqp=CAU",
    },
    {
      firstName: "Sophia",
      lastName: "Anderson",
      position: "Product Owner",
      DOB: "1989-08-07",
      profilePicture:
        "https://img.freepik.com/free-photo/close-up-smiley-woman-outdoors_23-2149002410.jpg",
    },
  ];

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      marginLeft: "100px",
    },
  };

  return (
    <div style={styles.grid}>
      

      {teamMembers.map((member) => (
        <StaffCard
          firstName={member.firstName}
          lastName={member.lastName}
          imgUrl={member.profilePicture}
          position={member.position}
          DOB={member.DOB}
        />
      ))}
    </div>
  );
};

export default StaffList;
