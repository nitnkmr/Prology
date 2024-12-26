import React from "react";

function DetailsPage() {
  // Example course details (replace with dynamic data if needed)
  const course = {
    title: "Web Development",
    image: "https://via.placeholder.com/600", // Replace with actual image URL
    description:
      "Learn the fundamentals of modern web development, including HTML, CSS, JavaScript, and responsive design. This course is perfect for beginners who want to build professional websites.",
    duration: "8 weeks",
    rating: 4.5,
    learners: "91,313 learners",
    level: "Intermediate",
    certificate: true,
    price: "Free",
    reviews: [
      { name: "John Doe", comment: "Amazing course! Highly recommended.", rating: 5 },
      { name: "Jane Smith", comment: "Very informative and easy to follow.", rating: 4 },
    ],
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Course Header */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800">{course.title}</h1>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <div className="flex items-center mt-4">
              <p className="text-sm text-gray-500">
                Duration: <span className="font-medium text-gray-700">{course.duration}</span>
              </p>
              <p className="text-sm text-gray-500 mx-4">
                Rating:{" "}
                <span className="text-yellow-500 font-medium">
                  ★ {course.rating}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Level: <span className="font-medium text-gray-700">{course.level}</span>
              </p>
            </div>
            <div className="flex items-center mt-4">
              <p className="text-sm text-gray-500">
                Learners: <span className="font-medium text-gray-700">{course.learners}</span>
              </p>
              <p className="text-sm text-gray-500 mx-4">
                Certificate:{" "}
                <span className="font-medium text-green-600">
                  {course.certificate ? "Yes" : "No"}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Price: <span className="font-medium text-gray-700">{course.price}</span>
              </p>
            </div>
            <a
              href="#"
              className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white shadow-md rounded-lg mt-8 p-6">
          <h2 className="text-xl font-bold text-gray-800">Student Reviews</h2>
          <div className="mt-4">
            {course.reviews.map((review, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0"
              >
                <p className="text-gray-700 font-medium">{review.name}</p>
                <p className="text-sm text-yellow-500">Rating: {"★".repeat(review.rating)}</p>
                <p className="text-gray-600 mt-1">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;