import { User } from 'lucide-react';

function App() {
  // Sample data - replace with your actual information
  const studentInfo = {
    regNumber: "4543-FOC/BSCS/F22",
    name: "Obaid Ullah Safi",
    imageUrl: "https://avatars.githubusercontent.com/u/134671014?v=4",
    computingCourses: [
      { code: "CS213", title: "Design and Analysis of Algorithms", grade: "A" },
      { code: "CS224", title: "Operating System ", grade: "B" },
      { code: "SE241", title: "Advance Computer Programming", grade: "B+" },
      { code: "CS411", title: "Numerical Computing", grade: "A" },
      { code: "CS374", title: "Computer Networks", grade: "A" },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-indigo-600 p-6 text-white text-center">
          <h1 className="text-3xl font-bold">Student Profile</h1>
        </div>
        
        {/* Profile Section */}
        <div className="md:flex">
          <div className="md:w-1/3 p-6 flex flex-col items-center justify-center bg-indigo-50">
            {studentInfo.imageUrl ? (
              <img 
                src={studentInfo.imageUrl} 
                alt={studentInfo.name} 
                className="w-48 h-48 object-cover rounded-full border-4 border-indigo-200 shadow-lg"
              />
            ) : (
              <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center border-4 border-indigo-200">
                <User size={64} className="text-gray-400" />
              </div>
            )}
            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold text-gray-800">{studentInfo.name}</h2>
              <p className="text-indigo-600 font-medium mt-1">{studentInfo.regNumber}</p>
            </div>
          </div>
          
          {/* Grades Section */}
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Computing Course Grades</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {studentInfo.computingCourses.map((course, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {course.code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${course.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                            course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                            course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {course.grade}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Student Profile Page
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;