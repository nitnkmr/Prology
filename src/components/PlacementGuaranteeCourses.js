import React from "react";

const placementCourses = [
  {
    title: "Full Stack Development Course",
    duration: "6 months course",
    perks: "Get placed with ₹3-10 LPA salary",
    opportunities: "1.08 Lac+ opportunities",
    badge: "New",
    guarantee: "course with guaranteed job",
    rating: 4.5,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "#",
  },
  {
    title: "Data Science Course",
    duration: "6 months course",
    perks: "Get confirmed ₹40,000 total stipend",
    opportunities: "45,500+ opportunities",
    badge: null,
    guarantee: "course with guaranteed internship",
    rating: 4.5,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "#",
  },
  {
    title: "Human Resource Management Course",
    duration: "3 months course",
    perks: "Get placed with ₹3-10 LPA salary",
    opportunities: "2.91 Lac+ opportunities",
    badge: null,
    guarantee: "course with guaranteed job",
    rating: 4.3,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "#",
  },
  {
    title: "Digital Marketing Course",
    duration: "5 months course",
    perks: "Get placed with ₹3-10 LPA salary",
    opportunities: "6.25 Lac+ opportunities",
    badge: null,
    guarantee: "course with guaranteed job",
    rating: 4.4,
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    link: "#",
  },
];

function PlacementGuaranteeCourses() {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Placement Guarantee Courses</h2>
        <p className="text-gray-600 mt-2">
          ✔ Guaranteed placement &nbsp; ✔ Get 100% refund if not hired &nbsp; ✔ Become job ready
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {placementCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 relative"
            >
              {course.badge && (
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  {course.badge}
                </span>
              )}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <p className="text-xs text-yellow-600 font-semibold">{course.guarantee}</p>
                <h3 className="text-lg font-bold text-gray-800 mt-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{course.duration}</p>
                <p className="text-sm text-gray-500">{course.perks}</p>
                <p className="text-sm text-gray-500">{course.opportunities}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-yellow-500 font-medium">★ {course.rating}</span>
                  <a
                    href={course.link}
                    className="text-blue-500 text-sm font-medium hover:underline"
                  >
                    Know more &gt;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlacementGuaranteeCourses;
