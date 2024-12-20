import React from "react";

const courses = [
  {
    title: "Web Development",
    duration: "8 weeks",
    rating: 4.1,
    learners: "91,313 learners",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "#",
  },
  {
    title: "Programming with Python",
    duration: "6 weeks",
    rating: 4.1,
    learners: "73,600 learners",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "#",
  },
  {
    title: "Digital Marketing",
    duration: "8 weeks",
    rating: 4.1,
    learners: "56,913 learners",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "#",
  },
  {
    title: "Machine Learning",
    duration: "6 weeks",
    rating: 4.5,
    learners: "28,103 learners",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "#",
  },
];

function CoursesSection() {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Popular Certification Courses</h2>
        <p className="text-gray-600 mt-2">Fastest way to build your CV</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <p className="text-sm text-gray-500">{course.duration}</p>
                <h3 className="text-lg font-bold text-gray-800 mt-1">{course.title}</h3>
                <p className="text-sm text-gray-600 flex items-center mt-2">
                  <span className="text-yellow-500 mr-2">★</span> {course.rating} | {course.learners}
                </p>
                <a
                  href={course.link}
                  className="text-blue-500 text-sm font-medium hover:underline mt-2 inline-block"
                >
                  Know more &gt;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
